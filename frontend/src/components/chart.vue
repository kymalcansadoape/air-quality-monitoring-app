<script setup>
  import chartNav from "./chartNav.vue";

</script>

<template>
  <chartNav class="w-full max-w-[700px]"/>
  <div class="bg-white p-4 max-w-[700px] rounded" id ="wrapper">
    <canvas id="thisChart"  class="w-full max-w-[700px]" @msg="dataTransfer"></canvas>
  </div>

</template>

