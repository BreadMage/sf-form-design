<template>
  <div>
    <h4>布局方式</h4>
    <a-radio-group default-value="block" v-model="activeField.layout">
      <a-radio-button value="block">块级</a-radio-button>
      <a-radio-button value="inline">行内</a-radio-button>
    </a-radio-group>
    <a-divider />
    <options-config :active-field="activeField" />
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
import { Input, Divider, InputNumber, Radio } from "ant-design-vue";
import OptionsConfig from "./options-config";
import ActionAttributeConfig from "./action-attribute-config";
import FromRulesConfig from "./form-rules-config";
export default {
  name: "radio-checkbox-gruop-design",
  components: {
    [Input.name]: Input,
    [InputNumber.name]: InputNumber,
    [Divider.name]: Divider,
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button,
    "form-rules-config": FromRulesConfig,
    "action-attribute-config": ActionAttributeConfig,
    "options-config": OptionsConfig
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
