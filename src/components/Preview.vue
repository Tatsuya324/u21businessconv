<template>
  <div id="preview_frame">
    <p id="copy_alert" v-if="CopyFlag">
      Copied!!
    </p>
    <p id="preview" @click="writeToClipboard(result_sentence)" v-else>
      {{ result_sentence }}
    </p>
  </div>
</template>

<script>
export default {
  name: "preview",
  props: ["result_sentence"],
  data() {
    return {
      CopyFlag: false
    };
  },
  methods: {
    writeToClipboard(text) {
      this.CopyFlag = true;
      navigator.clipboard.writeText(text).catch(e => {
        console.error(e);
      });
      setTimeout(() => {
        this.CopyFlag = false;
      }, 1000);
    },
    CopyModal() {
      this.CopyFlag = true;
      setTimeout(() => {
        this.CopyFlag = false;
      }, 3000);
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
  #copy_alert {
    font-size: 25px;
    font-weight: 900;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 5px #313d4f;
    border-radius: 10px;
    color: #ffffff;
    background-color: #26c1c9;
    transition: 300ms;
  }
  #preview {
    cursor: copy;
    overflow: scroll;
    scrollbar-color: #26c1c9;
    white-space: pre-line;
    font-size: 20px;
    width: 100%;
    height: 100%;
    padding: 10px;
    border: solid 5px #313d4f;
    border-radius: 10px;
    color: #ffffff;
    background-color: #171e29;
    transition: 300ms;
    &:hover {
      transition: 300ms;
      background-color: #25374f;
    }
  }
}
</style>
