<template>
  <section class="sf-form-design-main">
    <aside class="field-container container">
      <field-container />
    </aside>
    <section class="form-container container">
      <form-container :form-config="formJson.config">
        <drag-container
          :form-config="formJson.config"
          :form-list.sync="formJson.list"
          :active-field.sync="activeField"
        />
      </form-container>
    </section>
    <aside class="attribute-container container">
      <attribute-container
        :form-config="formJson.config"
        :active-field="activeField"
      />
    </aside>
  </section>
</template>
<script>
import FieldContainer from "./components/field-container";
import FormContainer from "./components/form-container";
import AttributeContainer from "./components/attribute-container";
import DragContainer from "./components/drag-container";
export default {
  components: {
    "field-container": FieldContainer,
    "form-container": FormContainer,
    "attribute-container": AttributeContainer,
    [DragContainer.name]: DragContainer
  },
  data() {
    return {
      formJson: {
        list: [],
        config: {
          labelAlign: "left",
          labelWidth: 4,
          customClass: ""
        }
      },
      activeField: {}
    };
  }
};
</script>
<style lang="less" scoped>
.sf-form-design-main {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  .container {
    height: 100%;
  }
  .field-container,
  .attribute-container {
    width: 300px;
    background-color: #fff;
  }
  .form-container {
    flex: 1;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
  }
}
</style>
