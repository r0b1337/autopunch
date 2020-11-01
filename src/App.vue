<template>
  <div id="app">
    <Intro></Intro>
    <Emergency></Emergency>
    <Benefits></Benefits>
    <Performances></Performances>>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue';
import Emergency from '@/components/Emergency.vue';
import Benefits from '@/components/Benefits.vue';
import Performances from '@/components/Performances';

export default {
    name: 'App',
    components: {
        Intro,
        Emergency,
        Benefits,
        Performances,
    },
};
</script>

<style lang="scss">
    @import 'variables.scss';
    @import 'global.scss';
</style>
