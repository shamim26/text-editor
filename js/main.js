// get text value
function textArea() {
  const getTextArea = document.getElementById("textarea");
  return getTextArea;
}

// getting button element
function btnElement(id) {
  const getBtnId = document.getElementById(id);
  return getBtnId;
}

// set border to selected button
function setBorder(btnID, styleProperty, styleValue) {
  const textStyle = textArea();
  if (
    textStyle.style[styleProperty] === styleValue ||
    textStyle.style[styleProperty] === ""
  ) {
    btnElement(btnID).style.border = "1px solid grey";
  } else {
    btnElement(btnID).style.border = "none";
  }
}

// make bold
document.getElementById("btn-bold").addEventListener("click", function () {
  setBorder("btn-bold", "fontWeight", "normal");
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
  setBorder("btn-italic", "fontStyle", "normal");
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
  setBorder("btn-underline", "textDecoration", "none");
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
document.getElementById("btn-uppercase").addEventListener("click", function () {
  setBorder("btn-uppercase", "textTransform", "initial");
  const changeCase = textArea();
  if (changeCase.style.textTransform === "uppercase") {
    changeCase.style.textTransform = "initial";
  } else {
    changeCase.style.textTransform = "uppercase";
  }
});

// text lower case
document.getElementById("btn-lowercase").addEventListener("click", function () {
  setBorder("btn-lowercase", "textTransform", "initial");
  const changeCase = textArea();
  if (changeCase.style.textTransform === "lowercase") {
    changeCase.style.textTransform = "initial";
  } else {
    changeCase.style.textTransform = "lowercase";
  }
});

// text color
document
  .getElementById("input-color")
  .addEventListener("input", function (evt) {
    const colorValue = evt.target.value;
    const colorChange = textArea();
    colorChange.style.color = colorValue;
  });
