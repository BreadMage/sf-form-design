<template>
  <div>
    <h4>隐藏标签</h4>
    <a-switch v-model="activeField.hiddenLabel"></a-switch>
    <a-divider />
    <h4>默认值</h4>
    <a-switch v-model="activeField.defaultValue"></a-switch>
    <a-divider />
    <h4>自定义Class</h4>
    <a-input v-model="activeField.customClass" />
    <a-divider />
    <action-attribute-config
      :active-field="activeField"
      :control="['hidden', 'disabled']"
    />
    <a-divider />
    <form-rules-config :active-field="activeField" :control="['required']" />
  </div>
</template>
<script>
import { Input, Divider, Switch } from "ant-design-vue";
import ActionAttributeConfig from "./action-attribute-config";
import FromRulesConfig from "./form-rules-config";
export default {
  name: "switch-design",
  components: {
    [Input.name]: Input,
    [Divider.name]: Divider,
    [Switch.name]: Switch,
    "form-rules-config": FromRulesConfig,
    "action-attribute-config": ActionAttributeConfig
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
