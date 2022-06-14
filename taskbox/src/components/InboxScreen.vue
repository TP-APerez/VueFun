<template>
  <PureInboxScreen :error="error" />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import PureInboxScreen from './PureInboxScreen.vue';

export default {
  name: 'InboxScreen',
  components: {
    PureInboxScreen,
  },
  setup() {
    // Creates the store instance
    const store = useStore();

    // Retrieves the error state from the store
    const error = computed(() => store.state.error);

    return {
      error,
    };
  },
};
</script>