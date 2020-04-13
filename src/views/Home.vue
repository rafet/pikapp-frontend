<template>
  <div>
    <full-screen-loading v-if="pageLoading" />
    <div class="back-cover"></div>
    <a-row class="track-info " type="flex" align="middle" justify="center">
      <a-col>
        <h2
          style="text-shadow: 2px 2px grey;left:0;top:-30px;right:0;color:white;font-size:36px;text-align:center;font-family:Comfortaa;z-index:123123;position:absolute"
        >
          pikapp
        </h2>
        <a-row type="flex" justify="center">
          <a-col :span="15" style="">
            <img
              @click="coverInfoShow = true"
              src="https://img.discogs.com/U5ODewnQ0-YE-_spw-gc3WzNz0k=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13488944-1555168337-7837.jpeg.jpg"
              width="100%"
              class="cover-image"
            />
            <div class="cover-info" v-if="coverInfoShow">
              <div
                style="position:absolute;top:10px;right:14px;font-size:20px;color:#ffffffaa"
                @click="coverInfoShow = false"
              >
                X
              </div>
              <a-row
                type="flex"
                justify="center"
                style="height:100%;color:white"
                align="middle"
              >
                <a-col>
                  <a-row type="flex" align="middle" :gutter="6">
                    <a-col>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
                        alt=""
                        style="width:16px"
                      />
                    </a-col>
                    <a-col>
                      <span>Spotify</span>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
        <a-row
          type="flex"
          justify="center"
          style="text-align:center;margin-top:14px"
        >
          <a-col>
            <div class="track-name">Sarılırım Birine</div>
            <span class="artist-name">Adamlar</span>
            <span class="album-name"> • Dünya Günlükleri</span>
            <TrackProgress
              v-model="progressPercent"
              :min="0"
              :max="100"
              style="margin-top:8px"
            />
          </a-col>
        </a-row>
      </a-col>
    </a-row>

    <a-row class="selections" type="flex">
      <a-col :span="24">
        <p style="color:white; text-align:center">
          Bir sonraki şarkıyı sen seç!
        </p>
      </a-col>
      <a-col
        :span="24"
        v-for="(item, index) in tracks"
        :key="index"
        @click="selectTrack(index)"
      >
        <TrackButton
          :track="item.name"
          :artist="item.artist"
          :album="item.album"
          :cover="item.cover"
          :selected="item.selected"
          :loading="item.loading"
          :vote-ratio="item.voteRatio"
          :vote="item.vote"
          style="border-bottom: 1px solid #ffffff11;border-top: 1px solid #ffffff11;"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import TrackButton from "../components/TrackButton";
import TrackProgress from "../components/TrackProgress";
import { mapState, mapMutations } from "vuex";
export default {
  components: { TrackButton, TrackProgress },
  data() {
    return {
      progressPercent: 0,
      pageLoading: false,
      coverInfoShow: false
    };
  },
  created() {
    const totalVote = this.tracks.map(x => x.vote).reduce((a, b) => a + b, 0);
    this.SET_TRACKS(
      this.tracks.map(x => {
        return {
          ...x,
          voteRatio: (x.vote / totalVote) * 100
        };
      })
    );
  },
  computed: {
    ...mapState(["tracks"])
  },
  methods: {
    ...mapMutations(["SET_TRACKS"]),
    selectTrack(i) {
      if (this.tracks[i].selected) return;
      this.tracks[i].loading = true;
      setTimeout(() => {
        this.tracks[i].selected = true;
        this.tracks[i].loading = false;
        this.tracks.forEach((x, ind) => {
          if (ind != i) x.selected = false;
        });
      }, 500);
    }
  },
  watch: {
    progressPercent(val) {
      if (val >= 100) {
        this.pageLoading = true;
        setTimeout(() => {
          this.pageLoading = false;
          this.progressPercent = 0;
          this.tracks.forEach(x => {
            x.selected = null;
            x.loading = false;
          });
        }, 2000);
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');

body {
  background: rgb(0, 0, 0) !important;
  font-family: 'Nunito', sans-serif !important;
}
.back-cover {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 5%,
      rgba(0, 0, 0, 0.8) 45%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url('https://img.discogs.com/U5ODewnQ0-YE-_spw-gc3WzNz0k=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13488944-1555168337-7837.jpeg.jpg');
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 330px;
  background-size: cover;
}
.track-name {
  color: #eeeeee;
  font-size: 1.4rem;
}
.artist-name {
  color: #eeeeeeaa;
  font-size: 0.7rem;
}
.album-name {
  color: #eeeeeeaa;
  font-size: 0.7rem;
}
.track-info {
  height: 65vh;
  width: 100%;
}
.selections {
  height: 35vh;
}
.cover-image {
  margin-top: 40px;
  z-index: 10;
  position: relative;
  transition: margin-top 2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 6px rgba(0, 0, 0, 0.19);
}
.cover-info {
  background: #000000cc;
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  bottom: 0;
  z-index: 9999999;
}
</style>
