function updateRates() {
  document.getElementById('usdBuy').innerText = document.getElementById('usdBuyInput').value || 3546;
  document.getElementById('usdSell').innerText = document.getElementById('usdSellInput').value || 3795;
  // You can add more updates for GBP, EUR, etc here
}
