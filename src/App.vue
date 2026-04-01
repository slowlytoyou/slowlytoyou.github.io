<template>
  <PCLayout v-if="isPC" />
  <MobileLayout v-else />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PCLayout from './layouts/PCLayout.vue'
import MobileLayout from './layouts/MobileLayout.vue'

const MOBILE_BREAKPOINT = 768
const isPC = ref(window.innerWidth > MOBILE_BREAKPOINT)

function onResize() {
  isPC.value = window.innerWidth > MOBILE_BREAKPOINT
}

onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))
</script>
