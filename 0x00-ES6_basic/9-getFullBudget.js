import getBudgetObject from "./7-getBudgetObject.js";

export default function getFullBudgetObject(income, gdp, capita) {
    const budget = getBudgetObject(income, gdp, capita);
    const fullBudget = {
        ...budget,
        getInomeInDollars(income) {
            return `$${income}`;
        },
        getIncomeInEuros(income) {
            return `${income} euros`;
        },
    };

    return fullBudget;
}