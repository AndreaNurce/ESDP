<template>
  <div class="wrapper">
    <i v-if="!editor" @click="editor = true" class="fas fa-plus"></i>
    <div
      v-if="editor"
      @click.self="(editor = false), clearConstructor()"
      class="editor"
    >
      <div class="form-wrapper">
        <div class="form">
          <input type="text" placeholder="Job Name" v-model="name" />
          <div>
            Role :
            <select v-model="role">
              <option value="Senior Frontend Developer">
                Senior Frontend Developer
              </option>
              <option value="Junior Frontend Developer">
                Junior Frontend Developer
              </option>
              <option value="Fullstack  Developer">Fullstack Developer</option>
              <option value="Fullstack  Engineer">Fullstack Engineer</option>
              <option value="Junior Backend Developer">
                Junior Backend Developer
              </option>
              <option value="Frontend Dev">Frontend Dev</option>
            </select>

            Job Type :
            <select v-model="jobType">
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </select>

            Location :
            <select v-model="location">
              <option value="Usa Only">Usa Only</option>
              <option value="Uk only">Uk only</option>
              <option value="Wroldwide">Wroldwide</option>
            </select>
          </div>

          <div>
            Skills :
            <input
              type="checkbox"
              id="JavaScript"
              value="JavaScript"
              v-model="skills"
            />
            <label for="JavaScript"> JavaScript </label>
            <input type="checkbox" id="HTML" value="HTML" v-model="skills" />
            <label for="HTML"> HTML </label>
            <input type="checkbox" id="Sass" value="Sass" v-model="skills" />
            <label for="Sass"> Sass </label>
            <input type="checkbox" id="Node" value="Node" v-model="skills" />
            <label for="Node"> Node </label>
            <input type="checkbox" id="React" value="React" v-model="skills" />
            <label for="React"> React </label>
            <input type="checkbox" id="Vue" value="Vue" v-model="skills" />
            <label for="Vue"> Vue </label>
            <br><br>
          Options : 
            <select v-model="options">
              <option value="Featured">Featured</option>
              <option value="">None</option>
            </select>
          </div>
          <button @click.prevent="saveJob()">Save Job</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "newJob",
  data() {
    return {
      editor: false,
      state: this.$store.state,
      name: "",
      options: '',
      role: "",
      jobType: "",
      location: "",
      skills: [],
    };
  },
  methods: {
    saveJob() {
      this.state.jobs.push({
        name: this.name,
        options: this.options,
        role: this.role,
        jobType: this.jobType,
        location: this.location,
        skills: this.skills,
      });
      this.clearConstructor();
      this.$store.commit("filterJobs", this.str);
    },
    clearConstructor() {
      this.name = "";
      this.name2 = "";
      this.role = "";
      this.jobType = "";
      this.location = "";
      this.skills = [];
      this.type = "";
    },
  },
};
</script>

<style scoped>
.fas {
  color: white;
  font-size: 18px;
  padding: 16px;
  border-radius: 50px;
  background-color: blue;
  position: absolute;
  right: 25px;
  bottom: 25px;
  cursor: pointer;
}
.editor {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.185);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-wrapper {
  width: 80%;
  height: 80vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 50%;
}
.form > div {
  margin: 30px 0;
}
input[type="text"] {
  width: 100%;
  text-align: center;
  font-size: 16px;
  border-top: none;
  border-left: none;
  border-right: none;
}
button{
  margin-left : 50%;
  transform:translateX(-50%);
  margin-top: 80px;
  cursor: pointer;
  background-color: blue;
border-style : none;
color:white;
padding : 16px 12px;
}
</style>