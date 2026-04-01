import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

// 스크롤 애니메이션 디렉티브
app.directive('animate', {
  mounted(el, binding) {
    const animation = binding.value || 'fade-up'
    el.classList.add('v-animate', `v-animate--${animation}`)
    el.style.transitionDelay = binding.arg ? `${binding.arg}ms` : '0ms'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('v-animate--visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
  }
})

app.use(router).mount('#app')
