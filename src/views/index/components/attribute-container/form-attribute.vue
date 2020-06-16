<template>
  <section class="tab-child">
    <h4>标签对齐方式</h4>
    <a-radio-group
      default-value="left"
      button-style="solid"
      v-model="formConfig.labelAlign"
      @change="labelAlignChange"
    >
      <a-radio-button value="left">
        左对齐
      </a-radio-button>
      <a-radio-button value="right">
        右对齐
      </a-radio-button>
      <a-radio-button value="top">
        上对齐
      </a-radio-button>
    </a-radio-group>
    <a-divider />
    <h4>表单标签宽度</h4>
    <a-input-number
      :min="0"
      :max="24"
      v-model="formConfig.labelWidth"
      :precision="0"
      :disabled="formConfig.labelAlign === 'top'"
    />
    <a-divider />
    <h4>自定义Class</h4>
    <a-input v-model="formConfig.customClass" />
  </section>
</template>
<script>
import { Radio, InputNumber, Input, Divider } from "ant-design-vue";
export default {
  components: {
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button,
    [InputNumber.name]: InputNumber,
    [Input.name]: Input,
    [Divider.name]: Divider
  },
  model: {
    prop: "formConfig"
  },
  props: {
    formConfig: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    labelAlignChange() {
      if (this.formConfig.labelAlign === "top") {
        this.$set(this.formConfig, "labelWidth", 0);
      }
      if (this.formConfig.labelAlign !== "top" && !this.formConfig.labelWidth) {
        this.$set(this.formConfig, "labelWidth", 4);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tab-child {
  padding: 12px 8px;
  height: 100%;
  overflow: auto;
}
</style>
