<template>
  <div class="hello">
    <div>
      <h2>People</h2>
      <div v-for="(p,idx) in people.people" :key="idx">
        <h3>{{p.last_name}}</h3>
        <p>{{p.job_title}}</p>
        <p>{{p.gender}}</p>
        <p>{{p.ssn}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import getPeopleMixin from "../people/people-mixin";
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",
  mixins: [getPeopleMixin],
  methods: {
    ...mapActions(["getPeople"])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
