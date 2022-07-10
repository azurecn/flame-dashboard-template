<template>
  <div class="mobile-setting">
    <div class="component-list">
      <div class="component"
        v-for="component in componentList"
        :key="component.type"
        @click="addComponent(component)"
      >{{ component.name }}</div>
    </div>
    <div class="setting-main">
      <div class="mobile-module">
        <component
          class="flm-component"
          v-for="(component, componentIndex) in pageSetting"
          :key="componentIndex"
          :is="controlList[component.type]"
          :config="component.defaultConfig"
          @click="selectComponent(componentIndex)"
        ></component>
      </div>
    </div>
    <div class="component-setting">
      <component
        v-if="currentIndex !== null"
        :is="controlList[`${pageSetting[currentIndex].type}Setting`]"
        v-model:setting="pageSetting[currentIndex].defaultConfig"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, reactive, defineAsyncComponent, computed } from 'vue'
import _ from 'lodash'
import { flmComponent, FlmComponentDist } from './MobileSetting';

let currentIndex: Ref<number | null> = ref(null),  // 当前组件索引
  pageSetting: Array<flmComponent> = reactive([])  // 页面设置

// 组件列表
const componentList: Array<flmComponent> = reactive([
  {
    name: '标题',
    type: 'flmTitle',
    defaultConfig: { title: '标题', subTitle: '副标题' }
  },
  {
    name: '文字',
    type: 'flmText',
    defaultConfig: { content: '文字段落' }
  },
])

// 控件列表
const controlList = computed(() => {
  let dist: FlmComponentDist = {
    flmTitle: {},
    flmTitleSetting: {},
    flmText: {},
    flmTextSetting: {},
  }
  componentList.forEach(({ type }) => {
    dist[type] = defineAsyncComponent(() => import(`@/components/${type}/${type}.vue`))
    dist[`${type}Setting`] = defineAsyncComponent(() => import(`@/components/${type}Setting/${type}Setting.vue`))
  })
  return dist
})

// 添加组件
const addComponent = (component: flmComponent) => {
  pageSetting.push(_.cloneDeep({ ...component, id: pageSetting.length }))
}

// 选择组件
const selectComponent = (index: number) => {
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
.mobile-setting {
  display: grid;
  grid-template-columns: 200px 1fr 400px;
  height: 100%;
  .component-list {
    display: flex;
    flex-wrap: wrap;
    .component {
      width: 98px;
      height: 98px;
      border: 1px solid #EFEFEF;
      text-align: center;
      line-height: 100px;
    }
  }
  .setting-main {
    display: flex;
    justify-content: center;
    .mobile-module {
      width: 375px;
      height: 667px;
      padding: 10px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      color: #666;
      .flm-component {
        margin-bottom: 10px;
      }
    }
  }
}
</style>