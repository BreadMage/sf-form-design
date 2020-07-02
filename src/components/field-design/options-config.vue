<template>
  <div>
    <h4>选项</h4>
    <div class="flex">
      <label>是否区分标签：</label>
      <a-switch v-model="activeField.showLabel"></a-switch>
    </div>
    <a-radio-group
      :default-value="false"
      v-model="activeField.remote"
      style="margin-top:12px"
    >
      <a-radio-button :value="false">静态数据</a-radio-button>
      <a-radio-button :value="true">动态数据</a-radio-button>
    </a-radio-group>
    <draggable
      v-if="!activeField.remote"
      tag="ul"
      v-model="activeField.options"
      class="options-config"
      handle=".drag-icon"
      :animation="200"
    >
      <li
        v-for="(option, key) in activeField.options"
        :key="key"
        class="options-config-main flex"
      >
        <a-radio
          v-if="activeField.mode === 'default'"
          :checked="activeField.defaultValue === option.value"
          @change="
            () => {
              singleDefaultValueChange(option.value);
            }
          "
        ></a-radio>
        <a-checkbox
          style="margin-right: 8px"
          v-if="activeField.mode === 'multiple'"
          :checked="activeField.defaultValue.includes(option.value)"
          @change="
            () => {
              multipleDefaultValueChange(option.value);
            }
          "
        ></a-checkbox>
        <a-input v-model="option.value" class="options-config-value"></a-input>
        <a-input
          v-model="option.label"
          class="options-config-label"
          v-if="activeField.showLabel"
          :default-value="variableName"
        ></a-input>
        <a-icon class="drag-icon" type="bars" />
        <a-icon type="delete" @click="delOption(key)" />
      </li>
      <a-button type="link" class="add-option" @click="addOption"
        >添加选项</a-button
      >
    </draggable>
    <div v-if="activeField.remote">
      <a-radio-group
        default-value="variable"
        v-model="activeField.remoteType"
        style="margin-top:8px"
        @change="remoteTypeChange"
      >
        <a-radio value="variable">变量赋值</a-radio>
        <a-radio value="function">方法函数</a-radio>
      </a-radio-group>
      <a-input
        style="margin-top:8px"
        v-model="activeField.remoteOption"
        @change="remoteOptionChange"
      ></a-input>
      <a-input
        style="margin-top:8px"
        addonBefore="值"
        v-model="activeField.prop.label"
      ></a-input>
      <a-input
        style="margin-top:8px"
        addonBefore="标签"
        v-model="activeField.prop.value"
      ></a-input>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import { uniqueId } from "lodash";
import {
  Input,
  Divider,
  InputNumber,
  Radio,
  Switch,
  Icon,
  Button,
  Checkbox
} from "ant-design-vue";
export default {
  name: "options-config",
  components: {
    [Input.name]: Input,
    [InputNumber.name]: InputNumber,
    [Divider.name]: Divider,
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button,
    [Radio.name]: Radio,
    [Switch.name]: Switch,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    draggable
  },
  data() {
    return {
      variableName: uniqueId("option_"),
      functionName: uniqueId("function_")
    };
  },
  props: {
    // 当前选择的field
    activeField: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    optionsInner: {
      get() {
        return this.activeField.options;
      },
      set(value) {
        this.$set(this.activeField, "options", value);
      }
    }
  },
  methods: {
    addOption() {
      this.activeField.options.push({ label: "新选项", value: "新选项" });
    },
    delOption(index) {
      this.activeField.options.splice(index, 1);
    },
    singleDefaultValueChange(value) {
      this.$set(this.activeField, "defaultValue", value);
    },
    multipleDefaultValueChange(value) {
      if (this.activeField.defaultValue.includes(value)) {
        const index = this.activeField.defaultValue.findIndex(l => l === value);
        this.activeField.defaultValue.splice(index, 1);
      } else {
        this.activeField.defaultValue.push(value);
      }
    },
    remoteTypeChange() {
      if (this.activeField.remoteType === "variable") {
        this.$set(this.activeField, "remoteOption", this.variableName);
      } else {
        this.$set(this.activeField, "remoteOption", this.functionName);
      }
    },
    remoteOptionChange(e) {
      if (this.activeField.remoteType === "variable") {
        this.variableName = e.target.value;
      } else {
        this.functionName = e.target.value;
      }
    }
  },
  created() {
    this.$set(this.activeField, "remoteOption", this.variableName);
  }
};
</script>
<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}
.options-config {
  margin-top: 12px;
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}
.options-config-main {
  display: flex;
  margin-bottom: 8px;
}
.options-config-value,
.options-config-label {
  margin-right: 8px;
}
.anticon {
  font-size: 18px;
  cursor: pointer;
}
.drag-icon {
  margin-right: 8px;
}
.add-option {
  padding-left: 24px;
}
.ant-input-group-wrapper {
  /deep/.ant-input-group-addon {
    width: 56px;
  }
}
</style>
