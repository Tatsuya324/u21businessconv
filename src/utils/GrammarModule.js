const TinySegmenter = require("tiny-segmenter");
const tinySegmenter = new TinySegmenter();

function ConvertText(targetSegments) {
  let segments = tinySegmenter.segment(targetSegments);
  console.log(segments);
  let tempText = "";
  segments.forEach(textsegment => {
    tempText = tempText + textsegment;
  });
  return tempText;
}

export default { ConvertText };
