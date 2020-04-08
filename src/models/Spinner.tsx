export interface ISpinnerItem {
    value: Number,
    color: "Black" | "Red",
    isMoneyCard?: Boolean;
    toString: () => String;
}

export class SpinnerItem implements ISpinnerItem {
  value: Number;
  color: "Black" | "Red";
  isMoneyCard?: Boolean | undefined;
  constructor(value: Number, color: "Black" | "Red", isMoneyCard?: Boolean) {
    this.value = value;
    this.color = color;
  }
  toString() {
    return this.isMoneyCard ? `Money Card!` : `${this.value} ${this.color}`;
  }
}

export class Spinner {
    spinnerOptions: Array<ISpinnerItem> = [
        new SpinnerItem(4, "Black"),
        new SpinnerItem(2, "Red"),
        new SpinnerItem(1, "Black"),
        new SpinnerItem(3, "Red"),
        new SpinnerItem(5, "Black"),
        new SpinnerItem(2, "Red"),
        new SpinnerItem(4, "Black"),
        new SpinnerItem(3, "Red"),
        new SpinnerItem(1, "Black"),
        new SpinnerItem(5, "Red", true)
    ]
    spin () {
        return this.spinnerOptions[Math.floor(Math.random() * this.spinnerOptions.length)];
    }
}
