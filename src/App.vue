<template>
  <div id="app">
    <Intro></Intro>
    <Emergency></Emergency>
    <Benefits></Benefits>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue';
import Emergency from '@/components/Emergency.vue';
import Benefits from '@/components/Benefits.vue';

export default {
    name: 'App',
    components: {
        Intro,
        Emergency,
        Benefits,
    },
};
</script>

<style lang="scss">
  @import '/assets/style/variables.scss';
  @import '/assets/style/global.scss';
</style>
