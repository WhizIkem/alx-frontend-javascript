function getCurrentYear() {
    const Date = new Date();
    return Date.getFullYear();
}

export default function getBudgetCurrentYear(income, gdp, capita) {
    const budget = {
        [`income-${getCurrentYear()}`]: income,
        [`gdp-${getCurrentYear()}`]: gdp,
        [`capita-${getCurrentYear()}`]: capita
    };

    return budget;
}