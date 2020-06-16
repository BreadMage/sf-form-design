<template>
  <a-tabs default-active-key="1">
    <a-tab-pane key="1" tab="字段属性">
      <field-attribute :active-field="activeField" />
    </a-tab-pane>
    <a-tab-pane key="2" tab="表单属性">
      <form-attribute :form-config="formConfig" />
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import FormAttribute from "./form-attribute";
import FieldAttribute from "./field-attribute";
import { Tabs } from "ant-design-vue";
export default {
  components: {
    [Tabs.name]: Tabs,
    [Tabs.TabPane.name]: Tabs.TabPane,
    "form-attribute": FormAttribute,
    "field-attribute": FieldAttribute
  },
  props: {
    formConfig: {
      type: Object,
      default: () => {}
    },
    activeField: {
      type: Object,
      default: () => {}
    }
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.ant-tabs {
  height: 100%;
  /deep/.ant-tabs-bar {
    margin: 0;
  }
  /deep/.ant-tabs-content {
    height: calc(100% - 45px);
  }
}
</style>
