import { convertCurrency } from "../../scripts/utils/money.js";

describe('test suit: formatCurrency', ()=>{
    it('convert cents into dollar', ()=>{
        expect(convertCurrency(2095)).toEqual('20.95');
    });
    
    it('work with zero', ()=>{
        expect(convertCurrency(0)).toEqual('0.00');
    });

    it('round up to the nearest cent', ()=>{
        expect(convertCurrency(2000.5)).toEqual('20.01');
    });
});