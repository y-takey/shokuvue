<template>
  <el-row>
    <el-col :span="12">
      <el-input placeholder="title" :value="keyword" clearable @input="changeKeyword" >
      </el-input>
    </el-col>
    <el-col :span="12" style="text-align: right;">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState({
    keyword: state => state.Video.searchKey,
  }),
  methods: {
    ...mapMutations(['changeKeyword']),
  },
};
</script>
