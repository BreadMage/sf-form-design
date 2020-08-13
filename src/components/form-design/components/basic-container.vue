<template>
  <a-form-model-item
    v-if="fieldInfo.wrapper === 'basic'"
    :label="fieldInfo.label"
    :labelCol="{ span: !fieldInfo.hiddenLabel ? formConfig.labelWidth : 0 }"
    :wrapperCol="{
      span: !fieldInfo.hiddenLabel ? 24 - formConfig.labelWidth : 24
    }"
    class="form-design-inner"
    :class="fieldInfo.customClass"
    :required="fieldInfo.required"
  >
    <a-input
      v-if="fieldInfo.type === 'input' && !fieldInfo.password"
      :placeholder="fieldInfo.placeholder"
      :disabled="fieldInfo.disabled"
      v-model="fieldInfo.defaultValue"
    />
    <a-input-password
      v-if="fieldInfo.type === 'input' && fieldInfo.password"
      :placeholder="fieldInfo.placeholder"
      :disabled="fieldInfo.disabled"
      v-model="fieldInfo.defaultValue"
    />
    <a-textarea
      v-if="fieldInfo.type === 'textarea'"
      :disabled="fieldInfo.disabled"
    />
    <a-input-number
      v-if="fieldInfo.type === 'input-number'"
      :disabled="fieldInfo.disabled"
    />
    <a-radio-group
      v-if="fieldInfo.type === 'radio-group'"
      v-model="fieldInfo.defaultValue"
      :disabled="fieldInfo.disabled"
    >
      <a-radio
        :class="fieldInfo.layout !== 'inline' && 'select-block'"
        v-for="(option, key) in fieldInfo.options"
        :key="key"
        :value="option.value"
        >{{ fieldInfo.showLabel ? option.label : option.value }}</a-radio
      >
    </a-radio-group>
    <a-checkbox-group
      v-if="fieldInfo.type === 'checkbox-group'"
      v-model="fieldInfo.defaultValue"
      :disabled="fieldInfo.disabled"
    >
      <a-checkbox
        :class="fieldInfo.layout !== 'inline' && 'select-block'"
        v-for="(option, key) in fieldInfo.options"
        :key="key"
        :value="option.value"
        >{{ fieldInfo.showLabel ? option.label : option.value }}</a-checkbox
      >
    </a-checkbox-group>
    <a-select
      v-model="fieldInfo.defaultValue"
      v-if="fieldInfo.type === 'select'"
      :mode="fieldInfo.mode"
      :allowClear="fieldInfo.allowClear"
      :placeholder="fieldInfo.placeholder"
      :disabled="fieldInfo.disabled"
    >
      <a-select-option
        v-for="(option, key) in fieldInfo.options"
        :key="key"
        :value="option.value"
        >{{
          fieldInfo.showLabel ? option.label : option.value
        }}</a-select-option
      >
    </a-select>
    <a-rate
      v-if="fieldInfo.type === 'rate'"
      v-model="fieldInfo.defaultValue"
      :count="fieldInfo.count"
      :allowHalf="fieldInfo.allowHalf"
      :disabled="fieldInfo.disabled"
    />
    <span
      class="rate-text"
      v-if="fieldInfo.type === 'rate' && fieldInfo.showText"
      >{{ fieldInfo.defaultValue || 0 }}</span
    >
    <a-switch
      v-if="fieldInfo.type === 'switch'"
      v-model="fieldInfo.defaultValue"
    />
    <a-slider
      v-if="fieldInfo.type === 'slider'"
      :min="fieldInfo.min"
      :max="fieldInfo.max"
      :step="fieldInfo.step"
      v-model="fieldInfo.defaultValue"
      :disabled="fieldInfo.disabled"
    />
    <a-input-number
      v-if="fieldInfo.type === 'slider' && fieldInfo.showInput"
      :min="fieldInfo.min"
      :max="fieldInfo.max"
      :step="fieldInfo.step"
      v-model="fieldInfo.defaultValue"
      :disabled="fieldInfo.disabled"
    />
    <a-date-picker
      :allowClear="fieldInfo.allowClear"
      :placeholder="fieldInfo.placeholder"
      :valueFormat="fieldInfo.format"
      :format="fieldInfo.format"
      :disabled="fieldInfo.disabled"
      v-if="fieldInfo.type === 'date-picker' && !fieldInfo.isRange"
    />
    <a-time-picker
      :allowClear="fieldInfo.allowClear"
      :placeholder="fieldInfo.placeholder"
      :valueFormat="fieldInfo.format"
      :format="fieldInfo.format"
      :disabled="fieldInfo.disabled"
      v-if="fieldInfo.type === 'time-picker'"
    />
    <a-range-picker
      :format="fieldInfo.format"
      :showTime="true"
      :allowClear="fieldInfo.allowClear"
      :placeholder="fieldInfo.placeholder"
      :valueFormat="fieldInfo.format"
      :disabled="fieldInfo.disabled"
      v-if="fieldInfo.type === 'date-picker' && fieldInfo.isRange"
    />
    <div v-if="fieldInfo.type === 'text'" v-text="fieldInfo.defaultValue"></div>
    <div v-if="fieldInfo.type === 'html'" v-html="fieldInfo.defaultValue"></div>
  </a-form-model-item>
</template>

<script>
import {
  FormModel,
  Input,
  InputNumber,
  Rate,
  Switch,
  Slider,
  DatePicker,
  TimePicker,
  Icon,
  Radio,
  Checkbox,
  Select
} from "ant-design-vue";
export default {
  name: "basic-container",
  components: {
    [FormModel.Item.name]: FormModel.Item,
    [Input.name]: Input,
    [Input.TextArea.name]: Input.TextArea,
    [InputNumber.name]: InputNumber,
    [Rate.name]: Rate,
    [Switch.name]: Switch,
    [Slider.name]: Slider,
    [DatePicker.name]: DatePicker,
    [TimePicker.name]: TimePicker,
    [DatePicker.RangePicker.name]: DatePicker.RangePicker,
    [Icon.name]: Icon,
    [Input.Password.name]: Input.Password,
    [Radio.Group.name]: Radio.Group,
    [Radio.name]: Radio,
    [Checkbox.name]: Checkbox,
    [Checkbox.Group.name]: Checkbox.Group,
    [Select.name]: Select,
    [Select.Option.name]: Select.Option
  },
  props: {
    fieldInfo: {
      type: Object,
      default: () => ({})
    },
    formConfig: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="less" scoped></style>
