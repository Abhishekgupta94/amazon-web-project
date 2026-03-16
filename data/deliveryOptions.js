
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
export function getDeliveryOption(deliveryOptionId){
      let deliveryOption;
      deliveryOptions.forEach((Option)=>{
      if(Option.id===deliveryOptionId){
        deliveryOption = Option;
      }
    });
    return deliveryOption || deliveryOptions[0];
};

export function getDeliveryDate(deliveryOption){
        const today = dayjs();
        const deliveryDate = today.add(
        deliveryOption.deliveryDays,
        'days')
        const dateString =  deliveryDate.format(
            'dddd, MMMM DD');
    return dateString;
};

export const deliveryOptions = [
    {
        id: '1',
        deliveryDays:7,
        priceCents:0
    },
    {
        id:'2',
        deliveryDays:3,
        priceCents:499
    },
    {
        id:'3',
        deliveryDays:1,
        priceCents:999
    }
];