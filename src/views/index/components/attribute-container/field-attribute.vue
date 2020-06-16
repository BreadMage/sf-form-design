<template>
  <div class="tab-child">
    <a-empty v-if="!activeField.id" />
    <section v-else>
      <h4>字段标识</h4>
      <a-input v-model="activeField.model" />
      <a-divider />
      <h4>标题</h4>
      <a-input v-model="activeField.label" />
      <a-divider />
      <input-design
        v-if="activeField.type === 'input' || activeField.type === 'textarea'"
        :type="activeField.type"
        :activeField="activeField"
      />
      <input-number-design :activeField="activeField" />
    </section>
  </div>
</template>
<script>
import { Empty, Divider, Input } from "ant-design-vue";
import { InputDesign, InputNumberDesign } from "@/components/field-design";
export default {
  components: {
    [Empty.name]: Empty,
    [Divider.name]: Divider,
    [Input.name]: Input,
    "input-design": InputDesign,
    "input-number-design": InputNumberDesign
  },
  props: {
    activeField: {
      type: Object,
      default: () => {}
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
