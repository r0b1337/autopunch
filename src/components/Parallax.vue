<template>
    <parallax sectionClass="parallax" direction="down">
        <img :src="require(`@/assets/${image}`)" alt="">
    </parallax>
</template>

<script>
import Parallax from 'vue-parallaxy';

export default {
  name: 'punch-parallax',
  components: {
    Parallax,
  },
  props: {
    image: String,
  },
};
</script>

<style scoped lang="scss">
    .parallax {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100% !important;
        z-index: -1;
        .is-parallax { height: 100% !important; }
    }
</style>
