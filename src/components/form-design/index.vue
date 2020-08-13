<template>
  <div
    :class="{
      hidden: fieldInfo.hidden,
      normal: !fieldInfo.hidden,
      active: activeField.id === fieldInfo.id
    }"
    class="form-design"
  >
    <basic-container :fieldInfo="fieldInfo" :form-config="formConfig" />
    <layout-container :fieldInfo="fieldInfo" />
    <a-icon
      v-show="activeField.id === fieldInfo.id"
      class="drag-icon item-icon"
      type="drag"
    />
    <a-icon
      v-show="activeField.id === fieldInfo.id"
      class="copy-icon item-icon"
      type="copy"
    />
    <a-icon
      v-show="activeField.id === fieldInfo.id"
      class="delete-icon item-icon"
      type="delete"
    />
    <div class="field-id">{{ fieldInfo.model }}</div>
  </div>
</template>
<script>
import { Icon, Divider } from "ant-design-vue";
import BasicContanier from "./components/basic-container.vue";
import LayoutContainer from "./components/layout-container.vue";
export default {
  components: {
    [Icon.name]: Icon,
    [Divider.name]: Divider,
    [BasicContanier.name]: BasicContanier,
    [LayoutContainer.name]: LayoutContainer
  },
  props: {
    fieldInfo: {
      type: Object,
      default: () => ({})
    },
    activeField: {
      type: Object,
      default: () => ({})
    },
    formConfig: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
<style lang="less" scoped>
.hidden {
  background-color: #fff1f0;
}
.normal {
  background-color: rgba(236, 245, 255, 0.3);
  &:hover {
    background-color: #ecf5ff;
    outline: 1px solid #409eff;
  }
}
.active {
  outline: 3px solid #409eff !important;
}
.form-design {
  position: relative;
  user-select: none;
  margin: 3px;
  overflow: auto;
  &::after {
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    border: 1px dashed #999;
    z-index: 10;
  }
  .form-design-inner {
    padding: 3px;
    .rate-text {
      display: inline-block;
      margin-left: 8px;
      font-size: 14px;
    }
  }
  .item-icon {
    background-color: #1890ff;
    color: #fff;
    font-size: 18px;
    padding: 4px;
    position: absolute;
    cursor: pointer;
    z-index: 20;
  }
  .drag-icon {
    cursor: move;
    top: 0;
    left: 0;
  }
  .copy-icon {
    bottom: 0;
    right: 26px;
  }
  .delete-icon {
    bottom: 0;
    right: 0;
  }
  .field-id {
    position: absolute;
    right: 6px;
    top: 4px;
    color: #52c41a;
  }
}
.select-block {
  display: block;
  line-height: 30px;
  margin-right: 8px;
  margin-left: 0;
}
</style>
