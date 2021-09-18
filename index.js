const initialPrice = document.querySelector("#initial-Price");
const noOfStocks = document.querySelector("#no-of-stocks");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector(".output-div");

function calculateProfitAndLoss(initialPrice, noOfStocks, currentPrice) {
  if (initialPrice > 0 && noOfStocks > 0 && currentPrice > 0) {
    if (initialPrice > currentPrice) {
      let loss = (initialPrice - currentPrice) * noOfStocks;
      // let lossPercentage = ((loss / initialPrice) * 100).toFixed(2);
      let lossPercentage = (
        ((initialPrice - currentPrice) * 100) /
        initialPrice
      ).toFixed(2);
      showOutputMsg(
        `Loss is ₹${loss} and Loss Percentage is ${lossPercentage}%`,
        "red"
      );
    } else if (currentPrice > initialPrice) {
      let profit = ((currentPrice - initialPrice) * noOfStocks).toFixed(2);

      // let profitPercentage = ((profit / initialPrice) * 100).toFixed(2);
      let profitPercentage = (
        ((currentPrice - initialPrice) * 100) /
        initialPrice
      ).toFixed(2);
      showOutputMsg(
        `The Profit is ₹${profit} and the profit percentage is ${profitPercentage}%`,
        "green"
      );
    } else {
      showOutputMsg("No pain No gain");
    }
  }
}

function submitHandler() {
  let ip = Number(initialPrice.value);
  let qty = Number(noOfStocks.value);
  let cp = Number(currentPrice.value);
  validate(ip, qty, cp);
  calculateProfitAndLoss(ip, qty, cp);
}

function validate(ip, qty, cp) {
  if (ip == "") {
    showOutputMsg("Enter the Initial Price to Calculate");
  } else if (qty == "") {
    showOutputMsg(" How can I Calculate without the  Quantity :(");
  } else if (cp == "") {
    showOutputMsg("Please Enter the Current Price to Calculate");
  }
  if (Math.sign(ip) === -1 || Math.sign(qty) === -1 || Math.sign(cp) === -1) {
    showOutputMsg("Please Enter Positive Values and Be positive ");
  }
}

function showOutputMsg(msg, color) {
  outputDiv.innerText = msg;
  outputDiv.style.color = color;
}

submitBtn.addEventListener("click", submitHandler);
