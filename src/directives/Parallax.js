export default {
    bind: (el, binding) => {
        el.style.backgroundImage = `url(${require(`@/${binding.value}`)})`;
        el.style.backgroundSize = '110%';
        el.style.backgroundPosition = 'center 0';

        const position = e => {
            e.preventDefault();
            el.style.backgroundPosition = `center ${window.pageYOffset * 0.75}px`;
        };
        window.addEventListener('scroll', position);
    },
};
