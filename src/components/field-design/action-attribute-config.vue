<template>
  <div>
    <h4>操作属性</h4>
    <a-checkbox v-model="activeField.hidden" v-if="control.includes('hidden')"
      >隐藏</a-checkbox
    >
    <a-checkbox
      v-model="activeField.disabled"
      v-if="control.includes('disabled')"
      >禁用</a-checkbox
    >
    <a-checkbox
      v-model="activeField.password"
      v-if="control.includes('password')"
      >密码模式</a-checkbox
    >
    <a-checkbox
      v-model="activeField.inputReadOnly"
      v-if="control.includes('inputReadOnly')"
      >完全只读</a-checkbox
    >
    <a-checkbox
      v-model="activeField.allowClear"
      v-if="control.includes('allowClear')"
      >显示清除按钮</a-checkbox
    >
    <a-checkbox
      v-model="activeField.showText"
      v-if="control.includes('showText')"
      >显示分数</a-checkbox
    >
  </div>
</template>
<script>
import { Checkbox } from "ant-design-vue";
export default {
  name: "action-attribute-config",
  components: {
    [Checkbox.name]: Checkbox
  },
  props: {
    control: {
      type: Array,
      default: () => ["hidden", "disabled", "password"]
    },
    // 当前选择的field
    activeField: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style lang="less" scoped></style>
