export default {
    bind: (el, binding) => {
        const $ = window.$;

        el = $(el);
        el.css({
            'background-image': `url(${require(`@/${binding.value}`)})`,
            'background-size': 'auto',
            'background-position': 'center 0',
            'background-attachment': 'fixed',
        });

        const position = () => el.css('background-position', `center ${window.pageYOffset * -0.2}px`);
        window.addEventListener('scroll', position);
    },
};
