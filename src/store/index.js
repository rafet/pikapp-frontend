import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tracks: [
      {
        name: "Trenler",
        artist: "Fikri Karayel",
        album: "Zor Zamanlar",
        selected: null,
        loading: false,
        vote: 12,
        cover:
          "https://www.mp3indirdur.mobi/album/Fikri-Karayel-Zor-Zamanlar.jpg"
      },
      {
        name: "İstiklal Caddesi Kadar",
        artist: "Şebnem Ferah",
        album: "Benim Adım Orman",
        selected: null,
        loading: false,
        vote: 8,
        cover:
          "https://images.genius.com/c73d61d93fe6a967f7997e5a8b086c12.600x599x1.jpg"
      },
      {
        name: "2012",
        artist: "mor ve ötesi",
        album: "Masumiyetin Ziyan Olmaz",
        selected: null,
        loading: false,
        vote: 20,
        cover:
          "https://upload.wikimedia.org/wikipedia/tr/a/a7/Morve%C3%96tesi_MZO.jpg"
      }
    ]
  },
  mutations: {
    SET_TRACKS(state, tracks) {
      state.tracks = tracks;
    }
  },
  actions: {},
  modules: {}
});
