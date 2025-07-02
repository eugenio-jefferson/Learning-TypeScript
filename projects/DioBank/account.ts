interface IAccount {
  ownerName: string;
  balance?: number;
  active?: boolean;
}

export class Account {
  private readonly ownerName: string;
  private balance: number;
  private active: boolean = true;

  constructor({ ownerName, balance = 0, active = true }: IAccount) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.active = active;

    console.log("Account created successfully.");
    console.log(`Welcome, ${this.ownerName}! Your initial balance is $${this.balance}.`);
  }

  getBalance = (): number => this.balance;

  deposit(amount: number): void {
    if (!this.active) {
      throw new Error("Cannot withdraw from a closed account.");
    }
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (!this.active) {
      throw new Error("Cannot withdraw from a closed account.");
    }
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds.");
    }
    this.balance -= amount;
  }

  close(): void {
    if (this.balance === 0) {
      this.active = false;

      console.log(`Account for ${this.ownerName} has been closed successfully.`);
    } else {
      console.log(`Cannot close account for ${this.ownerName}. Please withdraw all funds before closing.`);
    }
  }

  isActive = (): boolean => this.active;

  transferFunds(targetAccount: Account, amount: number): void {
    if (!this.active || !targetAccount.isActive()) {
      throw new Error("Cannot transfer funds from or to a closed account.");
    }
    if (amount <= 0) {
      throw new Error("Transfer amount must be positive.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds for transfer.");
    }

    this.withdraw(amount);
    targetAccount.deposit(amount);

    console.log(`Transferred $${amount} from ${this.ownerName} to ${targetAccount.ownerName}.`);
  }
}
