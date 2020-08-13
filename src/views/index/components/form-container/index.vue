<template>
  <div class="form-inner">
    <header class="form-inner-header"></header>
    <main class="form-inner-main">
      <a-form-model
        class="main-wrapper"
        :class="formConfig.customClass"
        :layout="formConfig.labelAlign === 'top' ? 'vertical' : 'horizontal'"
        :labelAlign="
          formConfig.labelAlign !== 'top' ? formConfig.labelAlign : 'right'
        "
        :labelCol="{ span: formConfig.labelWidth }"
        :wrapperCol="{ span: 24 - formConfig.labelWidth }"
      >
        <draggable
          class="main-content"
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
      </a-form-model>
    </main>
  </div>
</template>
<script>
import { FormModel } from "ant-design-vue";
import { uniqueId } from "lodash";
import draggable from "vuedraggable";
import FormDesign from "@/components/form-design";
export default {
  components: {
    draggable,
    [FormModel.name]: FormModel,
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
  data() {
    return {};
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
@form-inner-header-height: 45px;
.form-inner {
  height: 100%;
  .form-inner-header {
    height: @form-inner-header-height;
    background-color: #fff;
    border-bottom: 2px solid #e4e7ed;
  }
  .form-inner-main {
    height: calc(100% - @form-inner-header-height);
    position: relative;
    .main-wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      .main-content {
        height: calc(100% - 24px);
        overflow: auto;
        margin: 12px;
        background-color: #fff;
        border: 1px dashed #999;
      }
    }
  }
  /deep/.field-classfiy-label {
    margin: 3px;
    background-color: #e6f7ff;
    border: 1px dashed #999;
    padding: 6px 3px;
  }
}
</style>
