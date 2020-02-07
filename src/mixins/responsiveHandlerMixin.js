export default {
  computed: {
    mobileScreen() {
      if (this.$q.screen.lt.md) {
        return true;
      } else {
        return false;
      }
    }
  }
};
