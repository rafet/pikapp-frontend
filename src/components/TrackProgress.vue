<template>
  <div style="display:flex;align-items:center">
    <div
      v-for="(_, index) in randomProgress"
      :key="index"
      class="bar"
      :class="{ loaded: index < percent }"
      :style="{ height: _ + 'px' }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  data: () => ({
    percent: 0,
    randomProgress: []
  }),
  created() {
    this.percent = this.min;
    setInterval(() => {
      if (this.percent < this.max) {
        this.percent++;
      }
    }, 250);
    for (let i = 0; i < 100; i++) {
      this.randomProgress.push(this.randomHeight(i));
    }
  },
  methods: {
    randomHeight(i) {
      if (i < 5 || i > this.max - 10) return Math.floor(Math.random() * 4) + 6;
      if (i < 10 || i > this.max - 15) return Math.floor(Math.random() * 7) + 6;
      if (i < 15 || i > this.max - 20)
        return Math.floor(Math.random() * 10) + 6;
      if (i < 20 || i > this.max - 25)
        return Math.floor(Math.random() * 15) + 6;
      return Math.floor(Math.random() * 22) + 6;
    }
  },
  watch: {
    percent(val) {
      this.$emit("input", val);
    },
    value(val) {
      this.percent = val;
    }
  }
};
</script>

<style>
.bar {
  width: 1.4px;
  background: white;

  margin-right: 1px;
}
.loaded {
  background: #3498db;
}
</style>
