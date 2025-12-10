const currencySymbol = (currency) => {
  const normalized = currency.toUpperCase();

  switch (normalized) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "JPY":
      return "¥";
    case "CHF":
      return "Fr";
    default:
      return "?"; // fallback
  }
};

console.log(currencySymbol("usd"));
console.log(currencySymbol("EUR"));
console.log(currencySymbol("jpy"));
console.log(currencySymbol("chf"));
console.log(currencySymbol("PLN"));
