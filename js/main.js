// get text value
function textArea() {
  const getTextArea = document.getElementById("textarea");
  return getTextArea;
}

// make bold
document.getElementById("btn-bold").addEventListener("click", function () {
  const makeBold = textArea();
  if (
    makeBold.style.fontWeight === "normal" ||
    makeBold.style.fontWeight === ""
  ) {
    makeBold.style.fontWeight = "bold";
  } else {
    makeBold.style.fontWeight = "normal";
  }
});

// make italic
document.getElementById("btn-italic").addEventListener("click", function () {
  const makeItalic = textArea();
  if (
    makeItalic.style.fontStyle === "normal" ||
    makeItalic.style.fontStyle === ""
  ) {
    makeItalic.style.fontStyle = "italic";
  } else {
    makeItalic.style.fontStyle = "normal";
  }
});

// underline
document.getElementById("btn-underline").addEventListener("click", function () {
  const putUnderline = textArea();
  if (putUnderline.style.textDecoration === "underline") {
    putUnderline.style.textDecoration = "none";
  } else {
    putUnderline.style.textDecoration = "underline";
  }
});

// align left
document.getElementById("btn-left").addEventListener("click", function () {
  textArea().style.textAlign = "left";
});

// align center
document.getElementById("btn-center").addEventListener("click", function () {
  textArea().style.textAlign = "center";
});

// align right
document.getElementById("btn-right").addEventListener("click", function () {
  textArea().style.textAlign = "right";
});

// align justify
document.getElementById("btn-justify").addEventListener("click", function () {
  textArea().style.textAlign = "justify";
});

// font size
function fontValue() {
  const fontSizeValue = document.getElementById("font-size");
  return fontSizeValue;
}

document.getElementById("font-size").addEventListener("input", function () {
  textArea().style.fontSize = fontValue().value + "px";
});

//text uppercase
document.getElementById("btn-upperCase").addEventListener("click", function () {
  const changeCase = textArea();
  if (changeCase.style.textTransform === "uppercase") {
    changeCase.style.textTransform = "initial";
  } else {
    changeCase.style.textTransform = "uppercase";
  }
});

// text lower case

document.getElementById("btn-lowerCase").addEventListener("click", function () {
  const changeCase = textArea();
  if (changeCase.style.textTransform === "lowercase") {
    changeCase.style.textTransform = "initial";
  } else {
    changeCase.style.textTransform = "lowercase";
  }
});
