<template>
  <div id="app">
    <Intro></Intro>
    <Emergency></Emergency>
  </div>
</template>

<script>
import Intro from './components/Intro.vue';
import Emergency from './components/Emergency.vue';

export default {
  name: 'App',
  components: {
    Intro,
    Emergency,
  },
};
</script>

<style lang="scss">
  @import 'variables.scss';
  @import 'global.scss';
</style>
