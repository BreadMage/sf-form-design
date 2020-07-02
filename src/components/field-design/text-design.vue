<template>
  <div>
    <h4>隐藏标签</h4>
    <a-switch v-model="activeField.hiddenLabel"></a-switch>
    <a-divider />
    <h4>默认值</h4>
    <a-input v-model="activeField.defaultValue"></a-input>
    <a-divider />
    <h4>自定义Class</h4>
    <a-input v-model="activeField.customClass" />
    <a-divider />
    <action-attribute-config
      :active-field="activeField"
      :control="['hidden']"
    />
    <a-divider />
  </div>
</template>
<script>
import { Input, Divider, Switch } from "ant-design-vue";
import ActionAttributeConfig from "./action-attribute-config";
export default {
  name: "text-design",
  components: {
    [Input.name]: Input,
    [Divider.name]: Divider,
    [Switch.name]: Switch,
    [ActionAttributeConfig.name]: ActionAttributeConfig
  },
  props: {
    // 当前选择的field
    activeField: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style lang="less" scoped></style>
