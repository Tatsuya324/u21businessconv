<template>
  <div id="preview_frame">
    <p id="preview" v-text="result_sentence">
      {{result_sentence}}
    </p>
  </div>
</template>

<script>
export default {
  name: "preview",
  props: ["result_sentence"],
  methods: {
    CheckConsole() {
      console.log(this.InputValue);
    }
  }
};
</script>

<style lang="scss">
#preview_frame {
  width: 45%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  #preview {
    white-space: pre-wrap;
    font-size: 15px;
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
