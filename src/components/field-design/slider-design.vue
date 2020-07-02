<template>
  <div>
    <h4>隐藏标签</h4>
    <a-switch v-model="activeField.hiddenLabel"></a-switch>
    <a-divider />
    <h4>显示输入框</h4>
    <a-switch v-model="activeField.showInput"></a-switch>
    <a-divider />
    <h4>最小值</h4>
    <a-input-number v-model="activeField.min"></a-input-number>
    <a-divider />
    <h4>最大值</h4>
    <a-input-number v-model="activeField.max"></a-input-number>
    <a-divider />
    <h4>步长</h4>
    <a-input-number v-model="activeField.step"></a-input-number>
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
import { Input, Divider, Switch, InputNumber } from "ant-design-vue";
import ActionAttributeConfig from "./action-attribute-config";
import FromRulesConfig from "./form-rules-config";
export default {
  name: "slider-design",
  components: {
    [Input.name]: Input,
    [Divider.name]: Divider,
    [Switch.name]: Switch,
    [InputNumber.name]: InputNumber,
    [FromRulesConfig.name]: FromRulesConfig,
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
