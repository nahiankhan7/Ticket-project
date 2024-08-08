const firstClass = document.getElementById("firstClass");
const economy = document.getElementById("economy");

const subtotal = document.getElementById("subtotal");
const chargeVat = document.getElementById("vat");
const grandTotal = document.getElementById("total");

function firstClassButton(firstButton) {
  const firstClassValue = parseInt(firstClass?.value) ?? 0;
  let newValue = firstClassValue;

  if (firstButton == true) {
    newValue = firstClassValue + 1;
  }
  if (firstButton == false && firstClassValue > 0) {
    newValue = firstClassValue - 1;
  }

  firstClass.value = newValue;
  const countPrice = newValue * 150;
  subtotal.innerText = countPrice;

  calculateTotal();
}

function economyButton(secondButton) {
  const economyValue = parseInt(economy?.value) ?? 0;
  let newValue = economyValue;

  if (secondButton == true) {
    newValue = economyValue + 1;
  }
  if (secondButton == false && economyValue > 0) {
    newValue = economyValue - 1;
  }

  economy.value = newValue;
  const countPrice = newValue * 100;
  subtotal.innerText = countPrice;

  calculateTotal();
}

function calculateTotal() {
  const firstClassCount = parseInt(firstClass.value);
  const economyCount = parseInt(economy.value);

  const totalPrice = firstClassCount * 150 + economyCount * 100;
  subtotal.innerText = totalPrice;

  const vatAmount = totalPrice * 0.1;
  chargeVat.innerText = vatAmount;

  const total = totalPrice + vatAmount;
  grandTotal.innerText = total;
}

function bookNowButton() {
  alert("Done");
}
