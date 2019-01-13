import { createNumberMask, createTextMask } from 'redux-form-input-masks';

export const DateMask = createTextMask({
    pattern: '9999/99/99',
    stripMask: false,
    guide: false,
    notStripped: "____/__/__",
}); 

export const NationalCode = createTextMask({
    pattern: '9999999999',
    stripMask: true,
    guide: false,
}); 
const letterAndNumbers = {
    9: {
      regExp: /[0-9]/,
    },
    A: {
      regExp: /[A-Za-z]/,
      transform: char => char.toUpperCase(),
    },
};
  
export const PassportNo = createTextMask({
    pattern: 'A99999999',
    maskDefinitions: letterAndNumbers,
    stripMask: true,
    guide: false,    
});

export const IBANNo = createTextMask({
    pattern: 'AA99-9999-9999-9999-9999-9999-99',
    maskDefinitions: letterAndNumbers,
    stripMask: true,
    guide: false,    
});

export const CardNo = createTextMask({
    pattern: '9999-9999-9999-9999',
    stripMask: true,
    guide: true,    
});

export const DigitWithFourLength = createTextMask({
    pattern: '9999',
    stripMask: true,
    guide: false,    
});

export const CurrencyMask = createNumberMask({
    // prefix: 'US$ ',
    // suffix: ' per item',
    decimalPlaces: 0,
    //locale: 'fa-IR',
})

export const HoursMask = createTextMask({
    pattern: 'Hh:Mm',
    maskDefinitions: {
        H: {
          regExp: /[0-2]/,
        },
        h: {
          regExp: /[0-9]/,
        },
        M: {
            regExp: /[0-5]/,
        },
        m: {
            regExp: /[0-9]/,
        },
    },
    stripMask: false,
    guide: true, 
})
export const Date = createTextMask({
    pattern: '99/99/9999',
    stripMask: false,
    guide: false,    
});