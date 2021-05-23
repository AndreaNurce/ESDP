<template>
  <input type="text" placeholder="Find a job" @keyup="filter()" v-model="str" />
</template>

<script >
export default {
  name: "Search",
  data() {
    return {
      state: this.$store.state,
      str: "",
    };
  },
  methods: {
    filter() {
      this.$store.commit("filterJobs", this.str);
    },
  },
};
</script>

<style scoped >
input {
  width: 100%;
  text-align: center;
  padding: 16px 12px;
  margin: 40px 0;
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>