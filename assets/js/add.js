   
   function tax() {
    let userSum = document.querySelector('#userSum').value;
    let result = document.querySelector('#result');
    const single = 14600;
    let taxIncome = userSum - single;

    if (isNaN(userSum) || userSum < 0) {
        result.innerHTML = "Введите корректное число.";
        return;
    } else if(userSum <= single || userSum == 0) {
        result.innerHTML = "0.00$"
        return;
    }

    const minIncome = [0, 11600, 47150, 100525, 191950, 243725, 609350];
    const maxIncome = [11600, 47150, 100525, 191950, 243725, 609350, Infinity];
    const taxRates = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

    let calcTax = 0;

    for (let i = 0; i < minIncome.length; i++) {
        if (taxIncome > maxIncome[i]) {
            calcTax += Math.round((maxIncome[i] - minIncome[i] + 1) * taxRates[i]) * 100 / 100;

        } else {
            calcTax += Math.round((taxIncome - minIncome[i] + 1) * taxRates[i]) * 100 / 100;
            break;
        }
    }
    

    result.innerHTML = `${calcTax.toFixed(2)}$`;
}