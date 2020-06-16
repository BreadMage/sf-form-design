<template>
  <a-layout-header class="sf-form-design-layout__header">
    <div class="header-title">SF表单设计器</div>
  </a-layout-header>
</template>
<script>
import { Layout } from "ant-design-vue";
export default {
  components: {
    [Layout.Header.name]: Layout.Header
  }
};
</script>
<style lang="less" scoped>
.sf-form-design-layout__header {
  height: @header-height;
  .header-title {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
  }
}
</style>
