export default {
    bind: el => {
        const $ = window.$;

        const observe = elem => new Promise(resolve => {
            const observer = new IntersectionObserver(elements => {
                if(elements[0].isIntersecting) return resolve();
            }, { threshold: [1] });

            observer.observe(elem);
        });

        setTimeout(() => {
            el.childNodes.forEach(async child => {
                child.style.opacity = 0;
                await observe(child);
                $(child).addClass('fade-in');
            });
        }, 0);
    },
};
