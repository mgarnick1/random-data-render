<template>
  <div class="hello">
    <div>
      <h2>People</h2>
      <div v-for="(people,idx) in people" :key="idx">
        <h3>{{people.last_name}}</h3>
        <p>{{people.job_title}}</p>
        <p>{{people.gender}}</p>
        <p>{{people.ssn}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import getPeopleMixin from '../people/people-mixin';
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  mixins: [getPeopleMixin],
  methods: {
    ...mapActions(['getPeople']),
  },
}
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
