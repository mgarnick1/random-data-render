export default {
  created() {
    this.$store.dispatch("getPeople");
  },
  computed: {
    people() {
      return this.$store.state.people || {
        people: []
      };
    }
  }
};
