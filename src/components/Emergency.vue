<template>
    <div class="emergency">
        <punch-parallax image="ferrari-wheel.jpg"></punch-parallax>
        <span class="title">UNE URGENCE ?</span>
        <span class="subtitle">
            Contactez nous pour toutes demandes nécessitant une intervention immédiate
        </span>
        <Button class="button" text="06 61 36 05 10"></Button>
    </div>
</template>

<script>
import Parallax from './Parallax.vue';
import Button from './Button.vue';

export default {
  name: 'Emergency',
  components: {
    'punch-parallax': Parallax,
    Button,
  },
};
</script>

<style scoped lang="scss">
    .emergency {
        height: auto;
        overflow: hidden;
        position: relative;
        padding: var(--space-large);

        .title, .subtitle {
            margin-bottom: var(--space-large);
        }

        .button {
            margin-bottom: var(--space-large);
        }
    }

</style>
