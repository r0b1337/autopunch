<template>
    <div id="app">
        <Intro></Intro>
        <Emergency></Emergency>
        <Benefits></Benefits>
        <Performances></Performances>
        <About></About>
        <How></How>
        <Meeting></Meeting>
    </div>
</template>

<script>
import Intro from '~/components/Intro.vue';
import Emergency from '~/components/Emergency.vue';
import Benefits from '~/components/Benefits.vue';
import Performances from '~/components/Performances';
import About from '~/components/About';
import How from '~/components/How';
import Meeting from '~/components/Meeting';

export default {
    components: {
        Intro,
        Emergency,
        Benefits,
        Performances,
        About,
        How,
        Meeting,
    },
};
</script>

<style lang="scss">
    @import '~/assets/style/variables.scss';
    @import '~/assets/style/global.scss';
</style>
