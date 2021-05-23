<template>
  <div>
    <div class="wrapper">
      <div class="container" v-for="item in items" :key="item.itemId">
        <i class="fas fa-info-circle"></i>
        <p class="middle">
          {{ item.name }}
        </p>
        <div class="bottom">
          <p>
            {{ item.name }}
          </p>
          <p>L {{ item.price }}.00</p>
        </div>
      </div>
    </div>
    <button @click.prevent="getMore()">Load More</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: Array,
    };
  },
  methods: {
    getMore() {
      this.$store.commit("generateMore");
      this.items = this.$store.getters["getAddedArtificals"];
    },
  },
  created() {
    this.getMore();
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container {
  position: relative;
  background-color: #07beb8;
  width: 150px;
  height: 150px;
  margin: 20px;
  border-radius: 7px;
  overflow: hidden;
}
.container > .fas {
  flex-direction: row-reverse;
}
.fas {
  color: white;
  display: flex;
  flex-direction: row-reverse;
  padding: 10px;
  height: 10%;
  cursor: pointer;
}
.middle {
  display: flex;
  height: 40%;
  justify-content: center;
  align-items: center;
}

.bottom {
  background-color: #35395c;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 12px 16px;
  border-style: none;
  cursor: pointer;
  background-color: #98dfea;
  border-radius: 7px;
}
</style>