export interface ISpinnerItem {
  value: Number,
  color: "Black" | "Red",
  isMoneyCard?: boolean
}

export function spinnerItemToString(item: ISpinnerItem) {
  return item.isMoneyCard ? `Money Card!` : `${item.value} ${item.color}`
}

export class Spinner {
    spinnerOptions: Array<ISpinnerItem> = [
        { value: 4, color: "Black" },
        { value: 2, color: "Red" },
        { value: 1, color: "Black" },
        { value: 3, color: "Red" },
        { value: 5, color: "Black" },
        { value: 2, color: "Red" },
        { value: 4, color: "Black" },
        { value: 3, color: "Red" },
        { value: 1, color: "Black" } ,
        { value: 5, color: "Red", isMoneyCard: true }
    ]
    spin () {
        return this.spinnerOptions[Math.floor(Math.random() * this.spinnerOptions.length)];
    }
}
