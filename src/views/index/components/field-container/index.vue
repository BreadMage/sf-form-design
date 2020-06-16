<template>
  <div class="field-list">
    <h4>基础字段</h4>
    <draggable
      tag="ul"
      :list="basicField"
      :group="{ name: 'field', pull: 'clone', put: false }"
      :sort="false"
      :clone="cloneField"
      class="field-classfiy"
    >
      <li
        class="field-classfiy-label"
        v-for="(field, key) in basicField"
        :key="key"
      >
        {{ field.label }}
      </li>
    </draggable>
    <h4>高级字段</h4>
    <draggable
      tag="ul"
      :list="advanceField"
      :group="{ name: 'field', pull: 'clone', put: false }"
      :sort="false"
      :clone="cloneField"
      class="field-classfiy"
    >
      <li
        class="field-classfiy-label"
        v-for="(field, key) in advanceField"
        :key="key"
      >
        {{ field.label }}
      </li>
    </draggable>
    <h4>布局字段</h4>
    <draggable
      tag="ul"
      :list="layoutField"
      :group="{ name: 'field', pull: 'clone', put: false }"
      :sort="false"
      :clone="cloneField"
      class="field-classfiy"
    >
      <li
        class="field-classfiy-label"
        v-for="(field, key) in layoutField"
        :key="key"
      >
        {{ field.label }}
      </li>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import BasicField from "@/utils/basic-field.json";
import AdvanceField from "@/utils/advance-field.json";
import LayoutField from "@/utils/layout-field.json";
import { uniqueId } from "lodash";
export default {
  components: {
    draggable
  },
  data() {
    return {
      basicField: BasicField,
      advanceField: AdvanceField,
      layoutField: LayoutField
    };
  },
  methods: {
    cloneField(item) {
      const id = uniqueId(`${item.type}-`);
      return {
        id,
        model: id,
        ...item
      };
    }
  }
};
</script>
<style lang="less" scoped>
.field-list {
  padding: 8px 10px;
  .field-classfiy {
    list-style: none;
    padding: 0;
    .field-classfiy-label {
      display: inline-block;
      width: 48%;
      box-sizing: border-box;
      margin: 1%;
      background-color: #f4f6fc;
      padding: 8px 10px;
      cursor: move;
      border: 1px solid #f4f6fc;
      &:hover {
        color: #1890ff;
        border-color: #1890ff;
        border-style: dashed;
        user-select: none;
      }
    }
  }
}
</style>
