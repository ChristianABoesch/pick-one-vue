var app = new Vue({
  el: "#app",
  data: {
    message: "PICK ONE"
  },
  methods: {
    sayYes() {
      let url = "http://soundbible.com/mp3/Yess-Fabio_Farinelli-187689388.mp3";
      let sound = new Audio(url);
      sound.play();
    },
    sayNo() {
      let url =
        "http://soundbible.com/mp3/Mummy%20Zombie-SoundBible.com-1966938763.mp3";
      let sound = new Audio(url);
      sound.play();
    }
  }
});
