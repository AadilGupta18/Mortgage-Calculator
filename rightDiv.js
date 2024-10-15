function submitForm() {
  defaultBox.style.display = "none";
  result.style.display = "flex";
  let mortgageAmount = input1.value;
  let mortgageTerm = input2.value;
  let interestRate = input3.value;
  if (radioInput1.checked) {
    var mortgageType = "repayment";
  } else if (radioInput2.checked) {
    var mortgageType = "interest";
  }

  if (mortgageType == "repayment") {
    calculateRepayment(mortgageAmount, mortgageTerm, interestRate);
  } else {
    calculateInterestOnlyMortgage(mortgageAmount, interestRate, mortgageTerm);
  }
}

function unsubmitForm() {
  defaultBox.style.display = "flex";
  result.style.display = "none";
}

function calculateRepayment(mortgageAmount, mortgageTerm, interestRate) {
  let monthlyRate = interestRate / 100 / 12;

  // Total number of payments (months)
  let totalPayments = mortgageTerm * 12;

  // Mortgage repayment formula
  let monthlyRepayment =
    (mortgageAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  // Total repayment over the loan term
  let totalRepayment = monthlyRepayment * totalPayments;

  monthlyPaymentBox.innerText = "₹ " + monthlyRepayment.toFixed(2);
  totalPaymentBox.innerText = "₹ " + totalRepayment.toFixed(2);
  totalPaymentDescription.innerText = "Total you'll repay over the term";
}

function calculateInterestOnlyMortgage(
  mortgageAmount,
  interestRate,
  mortgageTerm
) {
  // Convert annual interest rate to a monthly rate
  let monthlyRate = interestRate / 100 / 12;

  // Interest-only monthly payment formula
  let monthlyRepayment = mortgageAmount * monthlyRate;

  // Total interest over the loan term (assuming interest-only payments for the full term)
  let totalInterest = monthlyRepayment * (mortgageTerm * 12);

  monthlyPaymentBox.innerText = "₹ " + monthlyRepayment.toFixed(2);
  totalPaymentBox.innerText = "₹ " + totalInterest.toFixed(2);
  totalPaymentDescription.innerText =
    "Total interest you'll repay over the term except principal amount";
}

submitBtn.addEventListener("click", () => {
  checkForm();
});
