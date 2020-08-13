<template>
  <draggable
    class="drag-container"
    group="field"
    v-model="formListInner"
    handle=".drag-icon"
    :animation="200"
    @change="containerChange"
  >
    <div
      v-for="(item, key) in formListInner"
      :key="key"
      @click="activeFieldChange(item)"
    >
      <form-design
        :field-info="item"
        :active-field="activeField"
        :form-config="formConfig"
        :field-index="key"
        @deleteField="deleteField"
        @copyField="copyField"
      />
    </div>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import { uniqueId } from "lodash";
import FormDesign from "../form-design";
export default {
  name: "drag-container",
  components: {
    draggable,
    "form-design": FormDesign
  },
  props: {
    formList: {
      type: Array,
      default: () => []
    },
    formConfig: {
      type: Object,
      default: () => {}
    },
    activeField: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    formListInner: {
      get() {
        return this.formList;
      },
      set(value) {
        this.$emit("update:formList", value);
      }
    }
  },
  methods: {
    activeFieldChange(field) {
      this.$emit("update:activeField", field);
    },
    containerChange(event) {
      if (event.added) {
        this.activeFieldChange(event.added.element);
      }
    },
    deleteField(index) {
      this.formListInner.splice(index, 1);
    },
    copyField(index) {
      const targetField = this.formListInner[index];
      const copyId = uniqueId(`${targetField.type}-`);
      this.formListInner.splice(index + 1, 0, {
        ...targetField,
        id: copyId,
        model: copyId
      });
    }
  }
};
</script>

<style lang="less" scoped>
.drag-container {
  height: calc(100% - 24px);
  overflow: auto;
  margin: 12px;
  background-color: #fff;
  border: 1px dashed #999;
}
/deep/.field-classfiy-label {
  margin: 3px;
  background-color: #e6f7ff;
  border: 1px dashed #999;
  padding: 6px 3px;
}
</style>
