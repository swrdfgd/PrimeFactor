function factorize() {
    let number = document.getElementById('numberInput').value;
    if (number <= 0 || number >= 1e13) {
        alert("Please enter a positive integer below 10^13.");
        return;
    }

    let factors = {};
    for (let i = 2; i <= Math.sqrt(number); i++) {
        while (number % i === 0) {
            if (!factors[i]) factors[i] = 0;
            factors[i]++;
            number /= i;
        }
    }
    if (number > 1) {
        factors[number] = 1;
    }

    displayResult(factors);
}

function displayResult(factors) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    for (let factor in factors) {
        resultDiv.innerHTML += `${factor}^${factors[factor]}<br>`;
    }
}
