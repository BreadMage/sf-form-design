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
      <input-number-design
        :activeField="activeField"
        v-if="activeField.type === 'input-number'"
      />
      <radio-checkbox-group-design
        :activeField="activeField"
        v-if="
          activeField.type === 'radio-group' ||
            activeField.type === 'checkbox-group'
        "
      />
      <select-design
        v-if="activeField.type === 'select'"
        :activeField="activeField"
      />
      <time-date-picker-design
        v-if="
          activeField.type === 'time-picker' ||
            activeField.type === 'date-picker'
        "
        :activeField="activeField"
      />
      <rate-design
        v-if="activeField.type === 'rate'"
        :activeField="activeField"
      />
      <switch-design
        v-if="activeField.type === 'switch'"
        :activeField="activeField"
      />
      <text-design
        v-if="activeField.type === 'text'"
        :activeField="activeField"
      />
      <slider-design
        v-if="activeField.type === 'slider'"
        :activeField="activeField"
      />
      <html-design
        v-if="activeField.type === 'html'"
        :activeField="activeField"
      />
    </section>
  </div>
</template>
<script>
import { Empty, Divider, Input } from "ant-design-vue";
import {
  InputDesign,
  InputNumberDesign,
  RadioCheckboxGroupDesign,
  SelectDesign,
  TimeDatePikcerDesign,
  RateDesign,
  SwitchDesign,
  TextDesign,
  SliderDesign,
  HtmlDesign
} from "@/components/field-design";
export default {
  components: {
    [Empty.name]: Empty,
    [Divider.name]: Divider,
    [Input.name]: Input,
    [InputDesign.name]: InputDesign,
    [InputNumberDesign.name]: InputNumberDesign,
    [RadioCheckboxGroupDesign.name]: RadioCheckboxGroupDesign,
    [SelectDesign.name]: SelectDesign,
    [TimeDatePikcerDesign.name]: TimeDatePikcerDesign,
    [RateDesign.name]: RateDesign,
    [SwitchDesign.name]: SwitchDesign,
    [TextDesign.name]: TextDesign,
    [SliderDesign.name]: SliderDesign,
    [HtmlDesign.name]: HtmlDesign
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
