<template>
  <div>
    <h4>校验</h4>
    <a-row :gutter="[0, 8]" v-if="control.includes('required')">
      <!-- 必填 -->
      <a-col :span="24">
        <a-checkbox v-model="activeField.required">必填</a-checkbox>
      </a-col>
      <a-col :span="24" v-show="activeField.required" class="verify-extra">
        <a-input
          placeholder="请填写自定义错误提示"
          v-model="activeField.requiredMessage"
        />
      </a-col>
    </a-row>
    <!-- 字符类型 -->
    <a-row :gutter="[0, 8]" v-if="control.includes('dataType')">
      <a-col :span="24">
        <a-checkbox v-model="activeField.dataTypeCheck">字符类型</a-checkbox>
      </a-col>
      <a-col :span="24" v-show="activeField.dataTypeCheck" class="verify-extra">
        <a-select
          placeholder="选择字符类型"
          style="width:100%"
          :options="dataTypeOptions"
          v-model="activeField.dataType"
        />
      </a-col>
      <a-col :span="24" v-show="activeField.dataTypeCheck" class="verify-extra">
        <a-input
          placeholder="请填写自定义错误提示"
          v-model="activeField.dataTypeMessage"
        />
      </a-col>
    </a-row>
    <!-- 正则表达式 -->
    <a-row :gutter="[0, 8]" v-if="control.includes('pattern')">
      <a-col :span="24">
        <a-checkbox v-model="activeField.patternCheck">正则表达式</a-checkbox>
      </a-col>
      <a-col :span="24" v-show="activeField.patternCheck" class="verify-extra">
        <a-input placeholder="请填写正则表达式" v-model="activeField.pattern" />
      </a-col>
      <a-col :span="24" v-show="activeField.patternCheck" class="verify-extra">
        <a-input
          placeholder="请填写自定义错误提示"
          v-model="activeField.patternMessage"
        />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { Input, Checkbox, Row, Col, Select } from "ant-design-vue";
export default {
  components: {
    [Input.name]: Input,
    [Checkbox.name]: Checkbox,
    [Row.name]: Row,
    [Col.name]: Col,
    [Select.name]: Select
  },
  props: {
    // 当前选择的field
    activeField: {
      type: Object,
      default: () => {}
    },
    control: {
      type: Array,
      default: () => ["required", "dataType", "pattern"]
    }
  },
  data() {
    return {
      dataTypeOptions: [
        {
          label: "字符串",
          value: "string"
        },
        {
          label: "数字",
          value: "number"
        },
        {
          label: "整数",
          value: "integer"
        },
        {
          label: "浮点数",
          value: "float"
        },
        {
          label: "URL地址",
          value: "url"
        },
        {
          label: "邮箱地址",
          value: "email"
        },
        {
          label: "十六进制",
          value: "hex"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.verify-extra {
  padding-left: 24px;
}
</style>
