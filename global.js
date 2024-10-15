const input1 = document.getElementById("mortgage-input");
const input2 = document.getElementById("term-input");
const input3 = document.getElementById("interest-input");
const radioContainer1 = document.getElementById("radio-container1");
const radioContainer2 = document.getElementById("radio-container2");
const radioInput1 = document.getElementById("radio-input1");
const radioInput2 = document.getElementById("radio-input2");
const radioGroup = document.getElementsByName("payment");
const clearBtn = document.getElementById("clear-btn");
const myForm = document.getElementById("myForm");
const monthlyPaymentBox = document.getElementById("monthly-payment");
const totalPaymentBox = document.getElementById("total-payment");
const errorMsg = document.querySelectorAll(".error-msg");
const totalPaymentDescription = document.getElementById(
  "total-payment-description"
);
var input1Filled;
var input2Filled;
var input3Filled;
var radioInputFilled;

const amountIcon = document.getElementById("amount-icon");
const termIcon = document.getElementById("term-icon");
const interestIcon = document.getElementById("interest-icon");

const submitBtn = document.getElementById("btn");
const defaultBox = document.getElementById("default");
const result = document.getElementById("result");
