<template>
  <div
    class="track-button"
    :class="{
      selected: selected,
      'no-selected':
        selected === null ? false : selected === false ? true : false
    }"
    v-ripple
  >
    <div class="progress-background" :style="{ right: ratio + 'px' }"></div>
    <div class="loading" v-if="loading">
      <a-spin>
        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
      </a-spin>
    </div>
    <a-row
      type="flex"
      align="middle"
      style="height: 100%;"
      justify="space-between"
    >
      <a-col>
        <a-row type="flex" align="middle">
          <a-col>
            <a-avatar
              :size="54"
              :src="cover"
              alt=""
              style="border:2px solid white"
            />
          </a-col>
          <a-col class="info">
            <div
              style="width:55vw;  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            >
              <b>{{ track }}</b>
            </div>
            <div
              style="opacity:.7;font-size:12px;width:55vw;  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            >
              {{ artist }} • {{ album }}
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col>
        <center style="margin-right:20px;">
          <div style="color: #ccc;font-size:14px;">
            <span style="font-size:10px">%</span>{{ parseInt(voteRatio, 10) }}
          </div>
          <div style="margin-top:-6px;font-size:10px;opacity:.5">
            {{ vote }} oy
          </div>
        </center>
        <!-- <a-progress
          style="margin-right:20px"
          :width="45"
          type="circle"
          :percent="percent"
          :strokeColor="{
            '0%': '#4ecca3',
            '100%': '#4ecca3'
          }"
        >
          <template v-slot:format="percent">
            <span style="color: white;font-size:10px">%{{ percent }}</span>
          </template>
        </a-progress> -->
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  props: {
    track: {
      type: String,
      default: null
    },
    album: {
      type: String,
      default: null
    },
    cover: {
      type: String,
      default: null
    },
    artist: {
      type: String,
      default: null
    },
    percent: {
      type: [String, Number],
      default: null
    },
    selected: {
      type: Boolean,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    voteRatio: {
      type: Number,
      default: 0
    },
    vote: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ratio() {
      return screen.width - (screen.width * this.voteRatio) / 100;
    }
  }
};
</script>
<style scoped>
.track-button {
  color: #eeeeee;
  padding-left: 28px;
  height: 100%;
  transition: background 0.7s ease-out;
}
.selected {
  background: #40739e;
  transition: background 0.7s ease-out;
}
.no-selected {
  opacity: 0.4;
  transition: background 0.7s ease-out;
  transition: opacity 0.6s;
  transition: filter 0.6s;
  size: 0.5;

  filter: blur(1px) !important;
  -webkit-filter: blur(1px) !important;
}
.info {
  margin-left: 12px;
}
.loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;
  background: black;
  opacity: 0.8;
  text-align: center;
  padding-top: 26px;
}
.progress-background {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
  right: 0;
  /* opacity: 0.35; */
  text-align: center;
  padding-top: 26px;
  transition: right 2s ease-in-out;

  background: #192a56; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #00000000,
    #192a56
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #00000000,
    #192a56
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
