function updateShape() {
  var selectedShape = document.querySelector('input[name="shape"]:checked')
    .value;

  if (selectedShape == "circle") {
    document.getElementById("box").style.display = "none";
    document.getElementById("circle").style.display = "block";
    document.getElementById("borderRadiusSlider").disabled = true;
    document.getElementById("borderRadiusBox").disabled = true;
    document.getElementById("heightSlider").disabled = true;
    document.getElementById("heightBox").disabled = true;
  } else if (selectedShape == "rectangle") {
    document.getElementById("circle").style.display = "none";
    document.getElementById("box").style.display = "block";
    document.getElementById("borderRadiusSlider").disabled = false;
    document.getElementById("borderRadiusBox").disabled = false;
    document.getElementById("heightSlider").disabled = false;
    document.getElementById("heightBox").disabled = false;
  }
}
updateShape();

let root = document.documentElement;

function updateWidth() {
  var newInput = document.getElementById("widthSlider").value;
  root.style.setProperty("--width", newInput + "px");

  var selectedShape = document.querySelector('input[name="shape"]:checked')
    .value;
  if (selectedShape == "circle") {
    document.getElementById("heightSlider").value = newInput;
    document.getElementById("heightBox").value = newInput;
    root.style.setProperty("--height", newInput + "px");
  }
}

function updateHeight() {
  var newInput = document.getElementById("heightSlider").value;
  root.style.setProperty("--height", newInput + "px");
}

function updateBorderWidth() {
  var newInput = document.getElementById("borderWidthSlider").value;
  root.style.setProperty("--borderWidth", newInput + "px");
}

function updateBorderRadius() {
  var newInput = document.getElementById("borderRadiusSlider").value;
  root.style.setProperty("--borderRadius", newInput + "px");
}

function updateGradientType() {
  var selectedGradientType = document.querySelector(
    'input[name="gradientType"]:checked'
  ).value;

  root.style.setProperty(
    "--gradient",
    "radial-gradient(circle, var(--first-color) 0%, var(--second-color) 100%)"
  );
  document.getElementById("durationSlider").value = 5;
  document.getElementById("durationBox").value = 5;
  root.style.setProperty("--duration", "5s");
  document.getElementById("second-color").disabled = false;

  if (selectedGradientType == "fadeToWhite") {
    document.getElementById("second-color").disabled = true;
  } else if (selectedGradientType == "fadeToBlack") {
    document.getElementById("second-color").disabled = true;
  }
}

function updateFirstColor() {
  var newInput = document.getElementById("first-color").value;
  root.style.setProperty("--first-color", newInput);
}

function updateSecondColor() {
  var newInput = document.getElementById("second-color").value;
  root.style.setProperty("--second-color", newInput);
}

function updateDuration() {
  var newInput = document.getElementById("durationSlider").value;
  root.style.setProperty("--duration", newInput + "s");
}

const parent = document.querySelector("#basic");
popupBasic = new Picker({
  parent: parent,
  popup: "left",
  color: "#ffffff",
});
popupBasic.onChange = function (color) {
  document.body.style.backgroundColor = color.rgbaString;
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const inputHideControl = urlParams.get("hideControl");
console.log({queryString, inputHideControl})
if ((inputHideControl == null) || (inputHideControl == "false")) {
  document.getElementById("controller").style.display = "block";
}

const inputShape = urlParams.get("shape");
if (inputShape !== null) {
  if (inputShape == "rectangle") {
    document.getElementById("rectangleRadio").checked = true;
  } else if (inputShape == "circle") {
    document.getElementById("circleRadio").checked = true;
  }
  updateShape();
}
const inputWidth = urlParams.get("width");
if (inputWidth !== null) {
  document.getElementById("widthSlider").value = inputWidth;
  document.getElementById("widthBox").value = inputWidth;
  updateWidth();
}
const inputHeight = urlParams.get("height");
if (inputHeight !== null) {
  document.getElementById("heightSlider").value = inputHeight;
  document.getElementById("heightBox").value = inputHeight;
  updateHeight();
}
const inputBorderWidth = urlParams.get("borderWidth");
if (inputBorderWidth !== null) {
  document.getElementById("borderWidthSlider").value = inputBorderWidth;
  document.getElementById("borderWidthBox").value = inputBorderWidth;
  updateBorderWidth();
}
const inputBorderRadius = urlParams.get("borderRadius");
if (inputBorderRadius !== null) {
  document.getElementById("borderRadiusSlider").value = inputBorderRadius;
  document.getElementById("borderRadiusBox").value = inputBorderRadius;
  updateBorderRadius();
}
const inputGradientType = urlParams.get("gradientType");
if (inputGradientType !== null) {
  if (inputGradientType == "twoTones") {
    document.getElementById("twoTonesRadio").checked = true;
  } else if (inputGradientType == "fadeToWhite") {
    document.getElementById("fadeToWhiteRadio").checked = true;
  } else if (inputGradientType == "fadeToBlack") {
    document.getElementById("fadeToBlackRadio").checked = true;
  }
  updateGradientType();
}
const firstColor = urlParams.get("first-color");
if (firstColor !== null) {
  document.getElementById("first-color").value = decodeURIComponent(firstColor);
  updateFirstColor();
}
const secondColor = urlParams.get("second-color");
if (secondColor !== null) {
  document.getElementById("second-color").value = decodeURIComponent(secondColor);
  updateSecondColor();
}
const inputDuration = urlParams.get("duration");
if (inputDuration !== null) {
  document.getElementById("durationSlider").value = inputDuration;
  document.getElementById("durationBox").value = inputDuration;
  updateDuration();
}

function copyURL() {
  var copyText = document.getElementById("outputURL");
  copyText.value =
    window.location.origin +
    window.location.pathname +
    "?shape=" +
    document.querySelector('input[name="shape"]:checked').value +
    "&width=" +
    document.getElementById("widthSlider").value +
    "&height=" +
    document.getElementById("heightSlider").value +
    "&borderWidth=" +
    document.getElementById("borderWidthSlider").value +
    "&borderRadius=" +
    document.getElementById("borderRadiusSlider").value +
    "&gradientType=" +
    document.querySelector('input[name="gradientType"]:checked').value +
    "&first-color=" +
    encodeURIComponent(document.getElementById("first-color").value) +
    "&second-color=" +
    encodeURIComponent(document.getElementById("second-color").value) +
    "&duration=" +
    document.getElementById("durationSlider").value +
    "&hideControl=true";
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
}
