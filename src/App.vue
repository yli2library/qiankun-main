<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="6">
        主应用区域
        <el-menu
          class="el-menu-vertical-demo">
          <el-menu-item v-for="item in menus" :index="item.index" :key="item.index">
            <router-link :to="{path: item.path}">
              {{item.title}}
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <div>
          主应用信息
          <!-- 修改state的按钮 -->
          <el-button type="primary" @click="changeState('main update')">main修改state</el-button>
          <hr>
          <div style="background: #eee">
            <div>主应用state</div>
            <div class="detail_info">
              {{mainInfo}}
            </div>
          </div>
        </div>
        <!-- 主应用渲染区域，用于挂载主应用路由触发的组件 -->
        <router-view v-show="$route.name" />
        
        <div style="margin-top: 50px;">
          微应用信息
          <hr>
          <div style="background: #eee">
            <div>微应用state</div>
          </div>
        </div>
        <!-- 微应用渲染区，用于挂载微应用节点 -->
        <div v-show="!$route.name" id="frame"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainInfo: {},
      activeIndex: '1',
      menus: [
        {
          index: '1',
          key: 'Home',
          title: '主应用',
          path: '/home'
        },
        {
          index: '2',
          key: 'VueMicroAppOne',
          title: '第一个Vue应用主页',
          path: '/vueone'
        },
        {
          index: '3',
          key: 'VueMicroAppOneList',
          title: 'Vue列表页',
          path: '/vueone/list'
        },
        {
          index: '4',
          key: 'VueMicroAppTwo',
          title: '第二个Vue应用',
          path: '/vuetwo'
        },
        {
          index: '5',
          key: 'VueMicroAppThree',
          title: '第三个Vue应用',
          path: '/vuethree'
        }
      ],
    }
  },
  methods: {
    changeState(value) {
      this.$actions.setGlobalState({
        msg: value,
        person: {
          name: 'bob',
          sex: 'male',
          age: 18
        },
        info: 'from main app'
      })
    }
  },
  mounted() {
    this.$actions.onGlobalStateChange((state, prev) => {
      this.mainInfo = state
    })
  }
}
</script>

<style lang="stylus" scoped>
  .router-link-active {
    color: #e85f0f;
  }
  .detail_info {
    color: blue;
  }
</style>
