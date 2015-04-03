function Account(money) {
  this.money = money;
}

function addMoney(account, amount) {
  return new Account(account.money + amount);
}