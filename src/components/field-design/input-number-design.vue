<template>
  <div>
    <h4>最小值</h4>
    <a-input-number v-model="activeField.min" :defaultValue="0" />
    <a-divider />
    <h4>最大值</h4>
    <a-input-number v-model="activeField.max" :defaultValue="9" />
    <a-divider />
    <h4>步长</h4>
    <a-input-number v-model="activeField.step" :defaultValue="1" />
    <a-divider />
    <h4>默认值</h4>
    <a-input-number v-model="activeField.defaultValue" :defaultValue="0" />
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
import { Input, Divider, InputNumber } from "ant-design-vue";
import ActionAttributeConfig from "./action-attribute-config";
import FromRulesConfig from "./form-rules-config";
export default {
  components: {
    [Input.name]: Input,
    [InputNumber.name]: InputNumber,
    [Divider.name]: Divider,
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
