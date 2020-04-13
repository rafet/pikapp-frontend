<template>
  <div id="app">
    <SplashScreen :class="{ 'splash-fade': !splash }" v-if="!splashGone" />
    <router-view />
  </div>
</template>

<script>
import SplashScreen from './components/SplashScreen';
export default {
  data() {
    return {
      splash: true,
      splashGone: false
    };
  },
  components: { SplashScreen },
  created() {
    setTimeout(() => {
      this.splash = false;
      setTimeout(() => {
        this.splashGone = true;
      }, 1000);
    }, 2000);
  }
};
</script>
<style>
.splash-fade {
  opacity: 0;
  transition: opacity 1s;
}
</style>
