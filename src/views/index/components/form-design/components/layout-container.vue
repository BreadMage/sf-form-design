<template>
  <div>
    <a-divider
      v-if="fieldInfo.type === 'divider'"
      :orientation="fieldInfo.contentPosition"
      >{{ fieldInfo.label }}</a-divider
    >
  </div>
</template>

<script>
import { Divider } from "ant-design-vue";
export default {
  name: "layout-container",
  components: {
    [Divider.name]: Divider
  },
  props: {
    fieldInfo: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="less" scoped></style>
