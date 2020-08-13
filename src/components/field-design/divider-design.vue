<template>
  <div>
    <h4>文案位置</h4>
    <a-radio-group v-model="activeField.contentPosition" button-style="solid">
      <a-radio-button value="left">
        左侧
      </a-radio-button>
      <a-radio-button value="center">
        居中
      </a-radio-button>
      <a-radio-button value="right">
        右侧
      </a-radio-button>
    </a-radio-group>
    <a-divider />
    <action-attribute-config
      :active-field="activeField"
      :control="activeField.acctionAttributeControl"
    />
  </div>
</template>
<script>
import { Divider, Radio } from "ant-design-vue";
import ActionAttributeConfig from "./action-attribute-config";
export default {
  name: "divider-design",
  components: {
    [Divider.name]: Divider,
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button,
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
