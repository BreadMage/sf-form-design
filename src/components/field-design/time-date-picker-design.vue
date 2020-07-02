<template>
  <div>
    <div v-if="activeField.type === 'date-picker'">
      <h4>是否为范围选择</h4>
      <a-switch v-model="activeField.isRange" @change="isRangeChange" />
      <a-divider />
    </div>
    <div v-if="!activeField.isRange">
      <h4>占位内容</h4>
      <a-input v-model="activeField.placeholder" />
      <a-divider />
    </div>
    <div v-else>
      <h4>开始时间占位符</h4>
      <a-input v-model="activeField.placeholder[0]" />
      <a-divider />
      <h4>结束时间占位内容</h4>
      <a-input v-model="activeField.placeholder[1]" />
      <a-divider />
    </div>
    <h4>格式</h4>
    <a-input v-model="activeField.format" />
    <a-divider />
    <h4>自定义Class</h4>
    <a-input v-model="activeField.customClass" />
    <a-divider />
    <action-attribute-config
      :active-field="activeField"
      :control="['hidden', 'disabled', 'allowClear', 'inputReadOnly']"
    />
    <a-divider />
    <form-rules-config :active-field="activeField" :control="['required']" />
  </div>
</template>
<script>
import { Input, Divider, InputNumber, Radio, Switch } from "ant-design-vue";
import ActionAttributeConfig from "./action-attribute-config";
import FromRulesConfig from "./form-rules-config";
export default {
  name: "time-date-picker-design",
  components: {
    [Input.name]: Input,
    [InputNumber.name]: InputNumber,
    [Divider.name]: Divider,
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button,
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
  },
  methods: {
    isRangeChange(value) {
      if (value) {
        this.$set(this.activeField, "placeholder", []);
      } else {
        this.$set(this.activeField, "placeholder", null);
      }
    }
  }
};
</script>
<style lang="less" scoped></style>
