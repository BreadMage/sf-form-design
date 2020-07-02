<template>
  <div>
    <h4>占位内容</h4>
    <a-input v-model="activeField.placeholder"></a-input>
    <a-divider />
    <h4>是否可多选</h4>
    <a-switch @change="isMultipleChange"></a-switch>
    <a-divider />
    <h4>是否可搜索</h4>
    <a-switch v-model="activeField.isSearch"></a-switch>
    <a-divider />
    <options-config :active-field="activeField" />
    <a-divider />
    <h4>自定义Class</h4>
    <a-input v-model="activeField.customClass" />
    <a-divider />
    <action-attribute-config
      :active-field="activeField"
      :control="['hidden', 'disabled', 'allowClear']"
    />
    <a-divider />
    <form-rules-config :active-field="activeField" :control="['required']" />
  </div>
</template>
<script>
import { Input, Divider, InputNumber, Radio, Switch } from "ant-design-vue";
import OptionsConfig from "./options-config";
import ActionAttributeConfig from "./action-attribute-config";
import FromRulesConfig from "./form-rules-config";
export default {
  name: "select-design",
  components: {
    [Input.name]: Input,
    [InputNumber.name]: InputNumber,
    [Divider.name]: Divider,
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button,
    [Switch.name]: Switch,
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
  },
  methods: {
    isMultipleChange(value) {
      if (value) {
        this.$set(this.activeField, "mode", "multiple");
        this.$set(this.activeField, "defaultValue", []);
      } else {
        this.$set(this.activeField, "mode", "default");
        this.$set(this.activeField, "defaultValue", null);
      }
    }
  }
};
</script>
<style lang="less" scoped></style>
