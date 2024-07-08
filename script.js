document.getElementById('currency-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    let result = 0;

    switch (currency) {
        case 'cruzado':
            // Cr$ 1.000 = Cz$ 1
            result = amount / 1000;
            result = convertToReal(result, 'cruzado_novo');
            break;
        case 'cruzado_novo':
            // Cz$ 1.000 = NCz$ 1
            result = amount / 1000;
            result = convertToReal(result, 'cruzeiro');
            break;
        case 'cruzeiro':
            // De NCz$ para Cr$
            result = amount;
            result = convertToReal(result, 'cruzeiro_real');
            break;
        case 'cruzeiro_real':
            // Cr$ 1.000 = CR$ 1
            result = amount / 1000;
            result = convertToReal(result, 'real');
            break;
        case 'real':
            result = amount;
            break;
    }

    document.getElementById('result').innerText = `Valor em Reais: R$ ${result.toFixed(2)}`;
});

function convertToReal(amount, fromCurrency) {
    switch (fromCurrency) {
        case 'cruzado_novo':
            // NCz$ 1.000 = Cr$ 1
            return amount * 1;
        case 'cruzeiro':
            // Cr$ 1.000 = CR$ 1
            return amount * 1000;
        case 'cruzeiro_real':
            // CR$ 2.750 = R$ 1
            return amount / 2750;
        case 'real':
            return amount;
    }
}
