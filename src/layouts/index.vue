<template>
  <a-layout class="sf-form-design-layout">
    <Header />
    <a-layout-content class="sf-form-design-layout__content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>
<script>
import { Layout } from "ant-design-vue";
import Header from "./header/index";
export default {
  components: {
    Header,
    [Layout.name]: Layout,
    [Layout.Content.name]: Layout.Content
  }
};
</script>
<style lang="less" scoped>
.sf-form-design-layout {
  .sf-form-design-layout__content {
    min-height: calc(100vh - @header-height);
    position: relative;
  }
}
</style>
