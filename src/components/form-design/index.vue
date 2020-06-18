<template>
  <div
    :class="{
      hidden: item.hidden,
      normal: !item.hidden,
      active: activeField.id === item.id
    }"
    class="form-design"
  >
    <a-form-model-item
      :label="item.label"
      class="form-design-inner"
      :class="item.customClass"
      :required="item.required"
    >
      <a-input
        v-if="item.type === 'input' && !item.password"
        :placeholder="item.placeholder"
        :disabled="item.disabled"
        v-model="item.defaultValue"
      />
      <a-input-password
        v-if="item.type === 'input' && item.password"
        :placeholder="item.placeholder"
        :disabled="item.disabled"
        v-model="item.defaultValue"
      />
      <a-textarea v-if="item.type === 'textarea'" />
      <a-input-number v-if="item.type === 'input-number'" />
      <a-radio-group
        v-if="item.type === 'radio-group'"
        v-model="item.defaultValue"
      >
        <a-radio
          :class="item.layout !== 'inline' && 'select-block'"
          v-for="(option, key) in item.options"
          :key="key"
          :value="option.value"
          >{{ item.showLabel ? option.label : option.value }}</a-radio
        >
      </a-radio-group>
      <a-checkbox-group
        v-if="item.type === 'checkbox-group'"
        v-model="item.defaultValue"
      >
        <a-checkbox
          :class="item.layout !== 'inline' && 'select-block'"
          v-for="(option, key) in item.options"
          :key="key"
          :value="option.value"
          >{{ item.showLabel ? option.label : option.value }}</a-checkbox
        >
      </a-checkbox-group>
      <a-select
        v-model="item.defaultValue"
        v-if="item.type === 'select'"
        :mode="item.mode"
        :allowClear="item.allowClear"
        :placeholder="item.placeholder"
      >
        <a-select-option
          v-for="(option, key) in item.options"
          :key="key"
          :value="option.value"
          >{{ item.showLabel ? option.label : option.value }}</a-select-option
        >
      </a-select>
      <a-rate v-if="item.type === 'rate'" />
      <a-switch v-if="item.type === 'switch'" />
      <a-slider v-if="item.type === 'slider'" />
      <a-date-picker v-if="item.type === 'date-picker'" />
      <a-time-picker v-if="item.type === 'time-picker'" />
    </a-form-model-item>
    <a-icon
      v-show="activeField.id === item.id"
      class="drag-icon item-icon"
      type="drag"
    />
    <a-icon
      v-show="activeField.id === item.id"
      class="copy-icon item-icon"
      type="copy"
    />
    <a-icon
      v-show="activeField.id === item.id"
      class="delete-icon item-icon"
      type="delete"
    />
    <div class="field-id">{{ item.model }}</div>
  </div>
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
    item: {
      type: Object,
      default: () => {}
    },
    activeField: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style lang="less" scoped>
.hidden {
  background-color: #fff1f0;
}
.normal {
  background-color: #e6f7ff;
}
.form-design {
  position: relative;
  user-select: none;
  &::after {
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    border: 1px dashed #999;
    z-index: 10;
  }
  border: 3px solid #fff;
  .form-design-inner {
    padding: 3px;
  }
  .item-icon {
    background-color: #1890ff;
    color: #fff;
    font-size: 18px;
    padding: 4px;
    position: absolute;
    cursor: pointer;
    z-index: 10;
  }
  .drag-icon {
    cursor: move;
    top: 0;
    left: 0;
  }
  .copy-icon {
    bottom: 0;
    right: 26px;
  }
  .delete-icon {
    bottom: 0;
    right: 0;
  }
  .field-id {
    position: absolute;
    right: 6px;
    top: 4px;
    color: #52c41a;
  }
}
.active {
  border-color: #1890ff;
}
.select-block {
  display: block;
  line-height: 30px;
  margin-right: 8px;
  margin-left: 0;
}
</style>
