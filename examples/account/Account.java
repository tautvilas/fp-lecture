public class Account {
    private int money;

    public Account(int money) {
        this.money = money;
    }

    public addMoney(int amount) {
        this.money += amount;
    }

    public int getMoney() {
        return this.money;
    }
}

/*
    Account a = new Account(100);
    a.addMoney(20);
    int x = a.getMoney(); // 120
 */