<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{title}}</span>
      <el-button style="float: right; padding: 3px 0" @click="clearCurrentKey" type="text"><i class="el-icon-close"></i></el-button>
    </div>
    <div>
      <video autoPlay controls style="width: 100%" >
        <source :src="filePath" type="video/mp4" />
      </video>
    </div>
  </el-card>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['title'],
  computed: {
    filePath() {
      const path = `file://${this.$store.state.Video.dirPath}/${this.title}`;
      return path;
    },
  },
  methods: {
    ...mapMutations(['clearCurrentKey']),
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
