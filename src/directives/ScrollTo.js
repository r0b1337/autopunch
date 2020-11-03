export default {
    bind: (el, binding) => {
        const $ = window.$;

        el.addEventListener('click', e => {
            const to = $(`.${binding.value}`);
            $('html, body').animate({ scrollTop: to.offset().top });
         })
    },
};