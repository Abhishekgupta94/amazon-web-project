import { convertCurrency } from "../../scripts/utils/money.js";

console.log('Test suite: Format Currency')

console.log('convert cents to dollar')

if(convertCurrency(2025)=== '20.25'){
    console.log('passed')
}else{
    console.log('failed')
};

console.log('works with 0')

if(convertCurrency(0)=== '0.00'){
    console.log('passed')
}else{
    console.log('failed')
};

console.log('round up to the nearest cent ')

if(convertCurrency(2000.5)=== '20.01'){
    console.log('passed')
}else{
    console.log('failed')
};

