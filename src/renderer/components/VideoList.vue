<template>
  <el-table :data="data" ref="videoTable" @row-click="handleClick" highlight-current-row height="100%" style="width: 100%">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="fav" label="Favorite" width="120" />
    <el-table-column prop="last_viewed_at" label="Watched" width="120" />
  </el-table>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['data'],
  data() {
    return {
      currentRow: null,
    };
  },
  methods: {
    ...mapMutations(['setCurrentKey']),
    handleClick(row) {
      this.setCurrentKey(row);
      if (!this.$store.state.Video.currentKey) this.$refs.videoTable.setCurrentRow();
    },
  },
};
</script>
