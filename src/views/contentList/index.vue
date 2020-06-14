<template>
  <div class="contentList">
    <el-card class="box-card oneCard">
      <!-- 卡片头部 -->
      <div slot="header" class="clearfix">
        <span>全部图文</span>
      </div>
      <!-- 卡片内容,就是一个from表单 -->
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 第二张卡片内容列表 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>共找到167893条符合条件的内容</span>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination class="mypag" background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.clearfix {
  line-height: 55px;
  span {
    font-size: 14px;
    margin-left: 15px;
  }
}
/deep/ .el-card__header {
  padding: 0;
  border-bottom: 1px dashed rgb(204, 204, 204);
}
.oneCard {
  margin-bottom: 10px;
}
.mypag {
  text-align: center;
  margin-top: 30px;
}
</style>
