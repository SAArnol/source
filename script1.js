function updateRates() {
  const currencies = ['usd', 'gbp', 'eur', 'kes', 'tzs', 'zar', 'cny', 'rwf'];

  currencies.forEach(currency => {
    const buyInput = document.getElementById(`${currency}BuyInput`);
    const sellInput = document.getElementById(`${currency}SellInput`);
    const buyCell = document.getElementById(`${currency}Buy`);
    const sellCell = document.getElementById(`${currency}Sell`);

    if (buyInput.value) {
      buyCell.innerText = buyInput.value;
    }
    if (sellInput.value) {
      sellCell.innerText = sellInput.value;
    }
  });
}
