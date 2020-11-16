<template>
    <div id="app">
        <Intro></Intro>
        <Emergency></Emergency>
        <Benefits></Benefits>
        <Performances></Performances>
        <About></About>
        <How></How>
        <Meeting></Meeting>
        <transition-group class="toastrs" name="slide">
            <Toastr
                v-for="toastr in toastrs"
                :key="toastr.id"
                :promise="toastr.promise"
                :text="toastr.text"
            ></Toastr>
        </transition-group>
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
import Toastr from '~/components/Toastr';

export default {
    name: 'App',
    components: {
        Intro,
        Emergency,
        Benefits,
        Performances,
        About,
        How,
        Meeting,
        Toastr,
    },
    data () {
        return {
            toastrs: [],
        };
    },
};
</script>

<style lang="scss">
    @import '~/assets/style/variables.scss';
    @import '~/assets/style/global.scss';

    .toastrs {
        position: fixed;
        width: 40%;
        height: 100%;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        justify-content: flex-end;
        transition: all 250ms ease-in-out;

        .slide-enter, .slide-leave-to {
            transform: translateX(150%);
        }

        .slide-leave-active {
           position: absolute;
        }
    }
</style>
