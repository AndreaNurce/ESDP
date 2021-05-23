<template>
  <div class="jobs-container">
    <div
      class="container"
      :class="{ featured: job.options == 'Featured' }"
      v-for="(job, index) in state.filteredJobs"
      :key="index"
    >
      <div class="left-side">
        <div class="image"></div>
        <div class="info">
          <div class="info-wrapper">
            <p>{{ job.name }}</p>
            <p :class="{ ftr: job.options == 'Featured' }" >{{ job.options }}</p>
          </div>
          <h3>{{ job.role }}</h3>

          <div class="info-wrapper">
            <p>{{ job.jobType }}</p>
            <p>{{ job.location }}</p>
          </div>
        </div>
      </div>

      <div class="skills">
          <p v-for="(skill , index2) in job.skills" :key="index2" >{{skill}}</p>
      </div>
    </div>

   <div class="message" v-if="state.jobs.length == 0" >
       No Job on the list
   </div>

    <div class="message" v-if="state.jobs.length != 0 && !state.filteredJobs.length" >
       No Search Result
   </div>
  </div>
</template>

<script>
export default {
  name: "jobs",
  data() {
    return {
      state: this.$store.state,
    };
  },
};
</script>

<style scoped>
.message{
    display: flex;
    justify-content: center;
    align-items: center;
    height : 500px;
    font-size: 50px;
    font-weight: bold;
}

.ftr{
    padding : 0 5px;
    border-radius : 20px;
    background-color : rgb(177, 0, 0);
    color :white !important;
}
.container {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin :20px 0px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.featured {
  border-left: 4px solid black;
}
.left-side {
  display: flex;
  align-items: center;
  width : 50%;
}

.skills {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width : 50%;
  margin :  0 20px;
}
.skills > p {
    margin : 0 5px;
    color:gray;
font-size:12px;

    padding : 0 5px;
    border-radius : 20px;
    background-color : rgb(168, 168, 168);
    color :white !important;

}
.info-wrapper {
  display: flex;
}
.info-wrapper > p {
  margin-right: 16px;
    color:gray;
font-size:12px;


}

.image {
  margin: 20px;
  background-color: rgb(71, 71, 71);
  height: 40px;
  width: 40px;
  border-radius: 50px;
}
</style>