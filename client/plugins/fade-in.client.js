import Vue from 'vue';

const directive = {
    inserted: el => {
        const $ = window.$;

        const observe = elem => new Promise(resolve => {
            const observer = new IntersectionObserver(elements => {
                if (elements[0].isIntersecting) return resolve();
            }, { threshold: [0] });

            observer.observe(elem);
        });

        setTimeout(() => {
            el.children.forEach(async child => {
                child.style.opacity = 0;
                await observe(child);
                $(child).addClass('fade-in');
            });
        }, 0);
    },
};

Vue.use('fade-in', directive);

export default directive;
