// include libraries
#include <MQ135.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <ESP8266WiFi.h>
#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include "Adafruit_BME680.h"

// Define variables
#define MQ135PIN A0                                                       // PIN A0 from the NodeMCU ESP8266
#define BME_SCK 13
#define BME_MISO 12
#define BME_MOSI 11
#define BME_CS 10
#define SEALEVELPRESSURE_HPA (1013.25)                                    // Max Value for Pressure
MQ135 airQual = MQ135(MQ135PIN);
const char* ssid = "Test";                                                // wifi name
const char* password = "12345678";                                        // wifi password
const char* serverAddress = "http://192.168.43.239:8000/api/sensor";      // API
const int wifi_Blinker = LED_BUILTIN;                                     // will be used as indicator for connecting wifi
Adafruit_BME680 bme;                                                      // for init of BME680 library

void setup() {

  // Checking for bme680 if connected properly
  if (!bme.begin()) {
    Serial.println("Could not find a valid BME680 sensor, check wiring!");
    while (1);
  }
  bme.setTemperatureOversampling(BME680_OS_8X);
  bme.setHumidityOversampling(BME680_OS_2X);
  bme.setPressureOversampling(BME680_OS_4X);
  bme.setIIRFilterSize(BME680_FILTER_SIZE_3);
  bme.setGasHeater(320, 150); 
  pinMode(wifi_Blinker,OUTPUT);
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.println("------------------Establishing Connection------------------");
  Serial.println("Connecting to WiFi");

  // While connecting to the wifi, the builtin led will blink .5s
  while (WiFi.status() != WL_CONNECTED) {
    digitalWrite(wifi_Blinker,1);
    delay(500);
    digitalWrite(wifi_Blinker,0);
    Serial.print(".");
    delay(500);
  }

  // Successfully Connected to the Wireless Fidelity
  Serial.println("Connected to a Wifi!");
  Serial.println("------------------Connected------------------");
  

}
void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient httpPost;                // Calling the class and creating a new name
    WiFiClient client;                  // Calling the class and creating a new name

    //reading the bme680's data
    if (!bme.performReading()) {
      Serial.println("Failed to perform reading :(");
      return;
    }

    // ~formula
    // Depends on the environment, need calibration
    int MQ135Read= analogRead(MQ135PIN);                    // Reading the data from the sensor
    float sensorResistance = airQual.getResistance();
    float air_quality = (sensorResistance/76.63) * 100;
    float rs = ((1023.0/MQ135Read)-1)*10000.0;
    float lpg_ppm = calculateLPG(rs);                       // Calling the calculateLPG method

    httpPost.begin(client,serverAddress);                   // calling the begin method from HTTPClient Class
    httpPost.addHeader("Content-Type", "application/json"); // calling the addHeader method from HTTPClient Class
    httpPost.addHeader("Accept", "application/json");       // calling the addHeader method from HTTPClient Class
    httpPost.addHeader("Connection", "keep-alive");         // calling the addHeader method from HTTPClient Class

    // The payload variable who holds the data to be sent to the database as JSON format
    String payload = "{\"carbonDioxideData\":%d,\"humidityData\":%d,\"pressureData\":%d,\"temperatureData\":%d,\"lpgData\":%d,\"airQualityData\":%d}";
    
    int carbonDioxideData = bme.readGas() / 1000.0;       // Carbon Dioxide
    int humidityData = bme.humidity;                      // Humidity
    int pressureData = bme.pressure / 100.0;              // Pressure
    int temperatureData = bme.temperature;                // Temperature
    int lpgData = lpg_ppm;                                // LPG
    int airQualityData = air_quality;                     // Overall Air Quality in Percentage
    char buffer[64];                                      // size of the array 

    // sprintf for string print format to to combine text and variables into a string
    // formats and stores a series of characters and values in the array buffer
    sprintf(buffer,payload.c_str(),carbonDioxideData,humidityData,pressureData,temperatureData,lpgData,airQualityData);
    payload = buffer;
    int httpPostResponse = httpPost.POST(payload);        // This will return HTTP Status Code

    // Compare to zero to output any status code
    if (httpPostResponse > 0) {
      String POSTresponse = httpPost.getString();             // Get the response that the backend threw
      Serial.println("Status: " + httpPostResponse);          // Status Code here
      Serial.println("POST_Response: " + POSTresponse);       // This will display the message from the backend if the data successfully inserted to the database
    } else {
      Serial.println("POST_Response: " + POSTresponse); 
    }     
    httpPost.end();                                           // Closing the proccess and loop back with the delay of 4 seconds
  }
  Serial.println("------------------Closing the Connection------------------");
  delay(4000);

  //LOOP
}

// Formula for Calculating the LPG 
// Depends on the environment, need calibration
float calculateLPG(float rs){
  float lpg_ppm = pow(10,((log10(rs/10000.0)-1.65)/-2.35));
  if (lpg_ppm < 10) {
    return 0;
  } else {
    return lpg_ppm;
  }
  
}
