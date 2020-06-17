<template>
  <div>
    <h4>占位内容</h4>
    <a-input v-model="activeField.placeholder" />
    <a-divider />
    <h4>默认值</h4>
    <a-input v-model="activeField.defaultValue" v-if="type === 'input'" />
    <a-textarea v-model="activeField.defaultValue" v-if="type === 'textarea'" />
    <a-divider />
    <h4>自定义Class</h4>
    <a-input v-model="activeField.customClass" />
    <a-divider />
    <action-attribute-config
      :active-field="activeField"
      :control="activeField.acctionAttributeControl"
    />
    <a-divider />
    <form-rules-config
      :active-field="activeField"
      :control="activeField.formRulesControl"
    />
  </div>
</template>
<script>
import { Input, Divider, Checkbox } from "ant-design-vue";
import FromRulesConfig from "./form-rules-config";
import ActionAttributeConfig from "./action-attribute-config";
export default {
  components: {
    [Input.name]: Input,
    [Divider.name]: Divider,
    [Checkbox.name]: Checkbox,
    [Input.TextArea.name]: Input.TextArea,
    "form-rules-config": FromRulesConfig,
    "action-attribute-config": ActionAttributeConfig
  },
  props: {
    // 当前选择的field
    activeField: {
      type: Object,
      default: () => {}
    },
    // input的类型，可选值：input，textarea
    type: {
      type: String,
      default: "input"
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped></style>
