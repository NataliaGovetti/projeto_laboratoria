const restaurantBill = (bill) => {
  const tax = bill * 0.1;
  let total = tax + bill;
  return "$"+(total/5)
};

module.exports = restaurantBill;
