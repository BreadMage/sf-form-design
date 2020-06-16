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
  </div>
</template>
<script>
import { Checkbox } from "ant-design-vue";
export default {
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
