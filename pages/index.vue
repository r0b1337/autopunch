<template>
    <div id="app">
        <Intro></Intro>
        <Emergency></Emergency>
        <Benefits></Benefits>
        <Performances></Performances>
        <About></About>
    </div>
</template>

<script>
import Intro from '~/components/Intro.vue';
import Emergency from '~/components/Emergency.vue';
import Benefits from '~/components/Benefits.vue';
import Performances from '~/components/Performances';
import About from '~/components/About';

export default {
    components: {
        Intro,
        Emergency,
        Benefits,
        Performances,
        About,
    },
};
</script>

<style lang="scss">
    @import '~/assets/style/variables.scss';
    @import '~/assets/style/global.scss';
</style>
