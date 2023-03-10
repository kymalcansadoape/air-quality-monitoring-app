<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="preloader"></div>
  <header>
      <nav class=" text-slate-200 w-full px-[2em] py-[1em] ">
        <div class="w-full max-w-[1300px] flex justify-between mx-auto">
            <div><span class="font-bold">Air Quality Monitoring</span></div>
            <div><span class="text-[0.9rem]">Group 3</span></div>
        </div>
    </nav>
  </header>

  <RouterView/>
</template>

