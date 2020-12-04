<template>
  <div class="text_area_frame">
    <textarea id="text_area" v-model="InputValue"></textarea>
    <button @click="CheckConsole">チェックする</button>
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
    CheckConsole() {
      console.log(this.InputValue);
    }
  }
};
</script>
