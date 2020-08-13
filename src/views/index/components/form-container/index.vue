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
        <slot />
      </a-form-model>
    </main>
  </div>
</template>
<script>
import { FormModel } from "ant-design-vue";
export default {
  components: {
    [FormModel.name]: FormModel
  },
  props: {
    formConfig: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
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
    }
  }
}
</style>
