<template>
  <div>
    <h4>隐藏标签</h4>
    <a-switch v-model="activeField.hiddenLabel"></a-switch>
    <a-divider />
    <h4>最大值</h4>
    <a-input-number v-model="activeField.count"></a-input-number>
    <a-divider />
    <h4>允许半选</h4>
    <a-switch v-model="activeField.allowHalf"></a-switch>
    <a-divider />
    <h4>默认值</h4>
    <a-rate
      v-model="activeField.defaultValue"
      :count="activeField.count"
    ></a-rate>
    <a-button type="link" @click="activeField.defaultValue = 0">清空</a-button>
    <a-divider />
    <h4>自定义Class</h4>
    <a-input v-model="activeField.customClass" />
    <a-divider />
    <action-attribute-config
      :active-field="activeField"
      :control="['hidden', 'disabled', 'showText']"
    />
    <a-divider />
    <form-rules-config :active-field="activeField" :control="['required']" />
  </div>
</template>
<script>
import {
  Input,
  Divider,
  InputNumber,
  Radio,
  Switch,
  Rate,
  Button
} from "ant-design-vue";
import ActionAttributeConfig from "./action-attribute-config";
import FromRulesConfig from "./form-rules-config";
export default {
  components: {
    [Input.name]: Input,
    [InputNumber.name]: InputNumber,
    [Divider.name]: Divider,
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button,
    [Switch.name]: Switch,
    [Rate.name]: Rate,
    [Button.name]: Button,
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
