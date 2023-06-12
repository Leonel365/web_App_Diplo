<template>
  <div>
    <component :is="nombreComponente"></component>
  </div>
</template>

<script>
import test1 from '/src/paginas/tests/test1/test1.vue';

export default {
  data() {
    return {
      nombreComponente: 'test1',
    };
  },
  components: {
    test1,
  },
};
</script>


