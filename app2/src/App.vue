<template>
  <div id="app">
    <div class="wrapper">
      <div class="content-wrapper">
        <searchBar />
        <jobs />
      </div>
    </div>
    <newJob />
  </div>
</template>

<script>
import searchBar from "@/components/searchBar.vue";
import newJob from "@/components/newJob.vue";
import jobs from "@/components/jobs.vue";
export default {
  components: {
    searchBar,
    newJob,
    jobs,
  },
};
</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}

.content-wrapper {
  width: 60%;
  height: 100vh;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
