<template>
  <div>
    <h4>隐藏标签</h4>
    <a-switch v-model="activeField.hiddenLabel"></a-switch>
    <a-divider />
    <h4>默认值</h4>
    <a-textarea
      v-model="activeField.defaultValue"
      :auto-size="{ minRows: 5 }"
    />
    <a-divider />
    <action-attribute-config
      :active-field="activeField"
      :control="activeField.acctionAttributeControl"
    />
  </div>
</template>
<script>
import { Input, Divider, Checkbox, Switch } from "ant-design-vue";
import ActionAttributeConfig from "./action-attribute-config";
export default {
  name: "html-design",
  components: {
    [Divider.name]: Divider,
    [Checkbox.name]: Checkbox,
    [Input.TextArea.name]: Input.TextArea,
    [Switch.name]: Switch,
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
