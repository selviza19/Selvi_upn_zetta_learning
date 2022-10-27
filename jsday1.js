function bookPurchasing(book, discount, tax)
 {
     let result = 0;
     if(book && book.price)
     {
         const price = book.price;
         const AmountofDiscount  = price *(discount/100);
         const PriceafterDiscount = price - AmountofDiscount;
         const Tax = PriceafterDiscount * (tax/100);
         const PriceTax = PriceafterDiscount  - Tax;
         
 
         console.group();
         console.log('Title Book                    :',book.title);
         console.log('Price                         : Rp.', price);
         console.log('Discount                      :', discount,'%');
         console.log('Tax                           :', tax,'%');
         console.log('Price after discount          : Rp.', PriceafterDiscount);
         console.log('Tax deductible price          : Rp.', PriceTax);
         console.log('Total price                   : Rp.', PriceTax);
         console.groupEnd();
         
     }
     return result;
 }
 bookPurchasing({title: 'Love Story', price: 10000, printing_status: true}, 10, 10);