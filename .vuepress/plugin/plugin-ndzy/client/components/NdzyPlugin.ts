import { defineComponent, h, onMounted, Transition } from 'vue';

// import '../styles/vars.css';
// import '../styles/back-to-top.css';

export const NdzyPlugin = defineComponent({
  name: 'NdzyPlugin',

  setup() {
    onMounted(() => {});

    const el = h('div', { class: 'ndzy-plugin' });

    return () =>
      h(
        Transition,
        {
          name: 'ndzy-plugin',
        },
        () => el,
      );
  },
});

export default NdzyPlugin;
