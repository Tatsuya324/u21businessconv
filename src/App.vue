<template>
  <div id="all_bg_frame">
    <span id="title">FABINESS</span>
    <div id="column_frame">
      <InputTextArea />
    </div>
  </div>
</template>

<script>
import InputTextArea from "./components/InputTextArea";
export default {
  name: "App",
  components: {
    InputTextArea
  }
};
</script>

<style lang="scss">
// RESET
body {
  overflow: hidden;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote {
  &:before,
  &:after {
    content: none;
  }
}

q {
  &:before,
  &:after {
    content: none;
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input[type="submit"],
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
// // ライトモードの時
// @media (prefers-color-scheme: light) {
//   #all_bg_frame {
//     height: 300px;
//     width: 300px;
//     background-color: #a1a1a1;
//     color: #000;
//   }
// }
// ダークモードの時
@media (prefers-color-scheme: dark) {
  #all_bg_frame {
    height: 100vh;
    width: 100%;
    background-color: #222c3c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #title {
      height: 10%;
      padding: 10px 0 10px 0;
      font-size: 50px;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #column_frame {
      height: 90%;
      padding: 10px;
      margin-bottom: 20px;
      border: solid #313d4f 3px;
      border-radius: 10px;
      color: #ffffff;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
