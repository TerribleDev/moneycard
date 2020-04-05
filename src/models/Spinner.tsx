export interface ISpinner {
    currentValue: 
}

export interface ISpinnerItem {
    value: Number,
    color: "Black" | "Red",
    isMoneyCard?: Boolean
}

export class Spinner {
    spinnerOptions: Array<ISpinnerItem> = [
        { value: 4, color: "Black", },
        { value: 2, color: "Red", },
        { value: 1, color: "Black", },
        { value: 3, color: "Red", },
        { value: 5, color: "Black", },
        { value: 2, color: "Red", },
        { value: 4, color: "Black", },
        { value: 3, color: "Red", },
        { value: 1, color: "Black", },
        { value: 5, color: "Red", isMoneyCard: true }
    ]
    spin () {
        return this.spinnerOptions[Math.floor(Math.random() * this.spinnerOptions.length)];
    }
}