import Vue from 'vue';

const directive = {
    bind: (el, binding) => {
        const $ = window.$;

        el.addEventListener('click', _ => {
            const to = $(binding.value);
            $('html, body').animate({ scrollTop: to.offset().top });
        });
    },
};

Vue.directive('scroll-to', directive);

export default directive;
