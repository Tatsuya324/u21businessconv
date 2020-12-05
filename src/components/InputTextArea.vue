<template>
  <div id="text_area_frame">
    <textarea
      id="text_area"
      v-model="InputValue"
      placeholder="構成したい文章を入力してください。"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "inputtextarea",
  data() {
    return {
      InputValue: ""
    };
  },
  methods: {
    transInputValue() {
      // console.log(this.InputValue);
      this.$emit("GetText", this.InputValue);
    }
  }
};
</script>

<style lang="scss">
#text_area_frame {
  width: 45%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  #text_area {
    font-size: 20px;
    width: 100%;
    height: 100%;
    padding: 10px;
    border: solid 5px #313d4f;
    border-radius: 10px;
    resize: none;
    color: #ffffff;
    background-color: #171e29;
    transition: 300ms;
    &:focus {
      border-color: #56a9ff;
      outline: 0;
      transition: 300ms;
    }
  }
}
</style>
