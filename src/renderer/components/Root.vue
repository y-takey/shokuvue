<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-openeds="['1', '2']">
        <el-menu-item-group><i class="el-icon-sort" />&nbsp;Sort</el-menu-item-group>
        <el-menu-item index="1-1">Name</el-menu-item>
        <el-menu-item index="1-2">Fav</el-menu-item>
        <el-menu-item index="1-3">Registered</el-menu-item>
        <el-menu-item index="1-4">Watched</el-menu-item>

        <el-menu-item-group><i class="el-icon-setting" />&nbsp;Filter</el-menu-item-group>
        <el-menu-item index="2-1">Tag1</el-menu-item>
        <el-menu-item index="2-2">Tag2</el-menu-item>
        <el-menu-item index="2-3">Tag3</el-menu-item>
        <el-menu-item index="2-4">Tag4</el-menu-item>
        <el-menu-item index="2-5">Tag5</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <Header />
      </el-header>

      <el-main>
        <video-list :data="list" height="100%" style="width: 100%" />
      </el-main>
      <el-footer height="300px" v-if="selectedTitle">
        <VideoPanel :title="selectedTitle" />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import VideoList from './VideoList';
import Header from './Header/Header';
import VideoPanel from './VideoPanel';

export default {
  components: { VideoList, Header, VideoPanel },
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
  computed: {
    list() {
      return this.$store.state.Video.list;
    },
    selectedTitle() {
      return this.$store.state.Video.currentKey;
    },
  },
};
</script>

<style>
.el-container {
  height: 100vh;
}

.el-aside {
  background-color: #409eff;
  color: #ffffff;
}

.el-menu {
  background-color: transparent;
}

.el-menu-item-group {
  padding-left: 14px;
}

.el-menu-item {
  height: 35px;
  line-height: 35px;
  padding-left: 28px;
  color: #ffffff;
}

.el-menu-item:hover {
  color: #409eff;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>
