<template>
    <div id="app">
        <Intro></Intro>
        <Emergency></Emergency>
        <Benefits></Benefits>
        <Performances></Performances>
        <About></About>
        <How></How>
        <Meeting></Meeting>
        <Contact></Contact>
        <transition-group class="toastrs" name="slide" @beforeLeave="beforeLeave">
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
import Contact from '~/components/Contact';

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
        Contact,
    },
    data () {
        return {
            toastrs: [],
        };
    },
    methods: {
        beforeLeave (el) {
            const margin = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--space-small'));
            el.style.top = `${el.offsetTop - margin}px`;
        },
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
