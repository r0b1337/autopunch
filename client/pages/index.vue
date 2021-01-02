<template>
    <div id="app">
        <transition class="header" name="slide-top">
            <Header v-if="fixed" key="fixed" fixed/>
            <Header v-else key="absolute"/>
        </transition>

        <Intro ref="intro"/>
        <Emergency/>
        <Benefits/>
        <Performances/>
        <About/>
        <How/>
        <Meeting/>
        <Contact/>
        <Comments/>

        <Footer/>
        <CallMe/>

        <transition-group class="toastrs" name="slide-right" @beforeLeave="beforeLeave">
            <Toastr
                v-for="toastr in toastrs"
                :key="toastr.id"
                :promise="toastr.promise"
                :text="toastr.text"
            />
        </transition-group>
    </div>
</template>

<script>
import _ from 'lodash';
import Header from '~/components/Header';
import Intro from '~/components/Intro.vue';
import Emergency from '~/components/Emergency.vue';
import Benefits from '~/components/Benefits.vue';
import Performances from '~/components/Performances';
import About from '~/components/About';
import How from '~/components/How';
import Meeting from '~/components/Meeting';
import Toastr from '~/components/Toastr';
import Contact from '~/components/Contact';
import Comments from '~/components/Comments';
import Footer from '~/components/Footer';
import CallMe from '~/components/CallMe';

export default {
    name: 'App',
    components: {
        Header,
        Intro,
        Emergency,
        Benefits,
        Performances,
        About,
        How,
        Meeting,
        Toastr,
        Contact,
        Comments,
        Footer,
        CallMe,
    },
    data () {
        return {
            toastrs: [],
            fixed: false,
        };
    },
    mounted () {
        if (!process.browser) return;

        window.onscroll = _.debounce(this.handleScroll, 5);

        this.handleScroll();

        this.$root.scrollTo = function (hash) {
            const $ = window.$;
            const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));

            $('html, body').animate({ scrollTop: $(hash).offset().top - headerHeight });

            window.location.hash = hash;

            this.$emit('click');
        };
    },
    methods: {
        beforeLeave (el) {
            const margin = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--space-small'));
            el.style.top = `${el.offsetTop - margin}px`;
        },
        handleScroll () {
            const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
            this.fixed = window.pageYOffset > this.$refs.intro.$el.offsetHeight - headerHeight;
        },
    },
};
</script>

<style lang="scss">
    @import '~/assets/style/variables.scss';
    @import '~/assets/style/global.scss';
</style>

<style lang="scss" scoped>
    .header {
        &.slide-top-enter-active, &.slide-top-leave-active { transition: transform 250ms ease-in-out; }
        &.slide-top-enter, &.slide-top-leave-to { transform: translateY(-100%); }
    }

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

        .slide-right-enter, .slide-right-leave-to {
            transform: translateX(150%);
        }

        .slide-right-leave-active {
           position: absolute;
        }
    }
</style>
