import Vue from 'vue';

const directive = {
    bind: (el, binding) => {
        const $ = window.$;

        el = $(el);
        el.css({
            'background-image': `url(${require(`~/${binding.value}`)})`,
            'background-size': 'auto',
            'background-position': 'center 0',
            'background-attachment': 'fixed',
        });

        const position = () => el.css('background-position', `center ${(window.pageYOffset - el.offset().top) * -0.2}px`);
        window.addEventListener('scroll', position);
    },
};

Vue.directive('fade-in', directive);

export default directive;
