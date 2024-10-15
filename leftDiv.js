//  Code to change the background and border color of amount icon when focused on its adjacent input

// Adding event listeners to input tags
input1.addEventListener("focus", () => {
  if (input1Filled !== false) {
    amountIcon.style.borderColor = "var(--Lime)";
    amountIcon.style.backgroundColor = "var(--Lime)";
  }
});

input1.addEventListener("blur", () => {
  if (input1Filled !== false) {
    amountIcon.style.borderColor = "var(--Slate-700)";
    amountIcon.style.backgroundColor = "var(--Slate-100)";
  }
});

input2.addEventListener("focus", () => {
  if (input2Filled !== false) {
    termIcon.style.borderColor = "var(--Lime)";
    termIcon.style.backgroundColor = "var(--Lime)";
  }
});

input2.addEventListener("blur", () => {
  if (input2Filled !== false) {
    termIcon.style.borderColor = "var(--Slate-700)";
    termIcon.style.backgroundColor = "var(--Slate-100)";
  }
});

input3.addEventListener("focus", () => {
  if (input3Filled !== false) {
    interestIcon.style.borderColor = "var(--Lime)";
    interestIcon.style.backgroundColor = "var(--Lime)";
  }
});

input3.addEventListener("blur", () => {
  if (input3Filled !== false) {
    interestIcon.style.borderColor = "var(--Slate-700)";
    interestIcon.style.backgroundColor = "var(--Slate-100)";
  }
});

// Adding event listeners to radio input tag also

function handleRadioChange() {
  if (radioInput1.checked) {
    radioContainer1.style.backgroundColor = "var(--light-lime)";
    radioContainer1.style.borderColor = "var(--Lime)";
  } else {
    radioContainer1.style.backgroundColor = "White";
    radioContainer1.style.borderColor = "var(--Slate-700)";
  }

  if (radioInput2.checked) {
    radioContainer2.style.backgroundColor = "var(--light-lime)";
    radioContainer2.style.borderColor = "var(--Lime)";
  } else {
    radioContainer2.style.backgroundColor = "White";
    radioContainer2.style.borderColor = "var(--Slate-700)";
  }
}

radioGroup.forEach(function (radio) {
  radio.addEventListener("change", handleRadioChange);
});

// Adding the clear button functionality
clearBtn.addEventListener("click", () => {
  myForm.reset();
  handleRadioChange();
  unsubmitForm();
});

function checkForm() {
  if (input1.value !== "") {
    input1Filled = true;
  } else {
    input1Filled = false;
  }
  if (input2.value !== "") {
    input2Filled = true;
  } else {
    input2Filled = false;
  }
  if (input3.value !== "") {
    input3Filled = true;
  } else {
    input3Filled = false;
  }
  if (radioInput1.checked == true || radioInput2.checked == true) {
    radioInputFilled = true;
  } else {
    radioInputFilled = false;
  }

  if (
    input1Filled !== true ||
    input2Filled !== true ||
    input3Filled !== true ||
    radioInputFilled !== true
  ) {
    showErrors();
  } else {
    submitForm();
  }
}

function showErrors() {
  if (input1Filled == false) {
    errorMsg[0].style.visibility = "visible";
    amountIcon.style.borderColor = "var(--Red)";
    amountIcon.style.backgroundColor = "var(--Red)";
    amountIcon.style.color = "var(--White)";
    input1.style.borderColor = "var(--Red)";
  } else {
    errorMsg[0].style.visibility = "hidden";
    amountIcon.style.borderColor = "var(--Slate-700)";
    amountIcon.style.backgroundColor = "var(--Slate-300)";
    amountIcon.style.color = "var(--Slate-700)";
    input1.style.borderColor = "var(--Slate-700)";
  }
  if (input2Filled == false) {
    errorMsg[1].style.visibility = "visible";
    termIcon.style.borderColor = "var(--Red)";
    termIcon.style.backgroundColor = "var(--Red)";
    termIcon.style.color = "var(--White)";
    input2.style.borderColor = "var(--Red)";
  } else {
    errorMsg[1].style.visibility = "hidden";
    termIcon.style.borderColor = "var(--Slate-700)";
    termIcon.style.backgroundColor = "var(--Slate-300)";
    termIcon.style.color = "var(--Slate-700)";
    input2.style.borderColor = "var(--Slate-700)";
  }
  if (input3Filled == false) {
    errorMsg[2].style.visibility = "visible";
    interestIcon.style.borderColor = "var(--Red)";
    interestIcon.style.backgroundColor = "var(--Red)";
    interestIcon.style.color = "var(--White)";
    input3.style.borderColor = "var(--Red)";
  } else {
    errorMsg[2].style.visibility = "hidden";
    interestIcon.style.borderColor = "var(--Slate-700)";
    interestIcon.style.backgroundColor = "var(--Slate-300)";
    interestIcon.style.color = "var(--Slate-700)";
    input3.style.borderColor = "var(--Slate-700)";
  }
  if (radioInputFilled == false) {
    errorMsg[3].style.visibility = "visible";
  } else {
    errorMsg[3].style.visibility = "hidden";
  }
}
