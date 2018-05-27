<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{title}}</span>
      <el-button style="float: right; padding: 3px 0" @click="clearCurrentKey" type="text"><i class="el-icon-close"></i></el-button>
    </div>
    <div style="height: 520px;" class="vjs-custom-skin">
      <video autoPlay controls style="width: 100%; height: 100%" ref="video" class="video-js">
        <source :src="filePath" type="video/mp4" />
      </video>
      <div class="clearfix" />
    </div>
  </el-card>
</template>

<script>
import { mapMutations } from 'vuex';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
// custom skin css
import './custom-theme.css';

const videoOptions = {
  autoplay: true,
  controls: true,
  // preload: 'auto',
  // fluid: false,
  // muted: false,
  playbackRates: [1.0, 1.5, 2.0],
  controlBar: {
    remainingTimeDisplay: false,
    playToggle: {},
    progressControl: {},
    fullscreenToggle: {},
    volumeMenuButton: {
      inline: false,
      vertical: true,
    },
  },
  techOrder: ['html5'],
  plugins: {},
};

export default {
  props: ['title'],
  data() {
    return {
      player: null,
    };
  },
  computed: {
    filePath() {
      const path = `file://${this.$store.state.Video.dirPath}/${this.title}`;
      return path;
    },
  },
  mounted() {
    if (!this.player) {
      this.initialize();
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.dispose();
    }
  },
  methods: {
    ...mapMutations(['clearCurrentKey']),
    initialize() {
      // avoid error "VIDEOJS: ERROR: Unable to find plugin: __ob__"
      // if (videoOptions.plugins) {
      //   delete videoOptions.plugins.__ob__
      // }

      this.player = videojs(this.$refs.video, videoOptions, () => {
        this.player.on('timeupdate', () => {
          console.log('timeupdate', this.player.currentTime());
        });
      });
    },
    dispose() {
      if (!this.player) return;

      if (this.player.pause) this.player.pause();
      if (this.player.dispose) this.player.dispose();
      this.player = null;
    },
  },
};
</script>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
</style>
