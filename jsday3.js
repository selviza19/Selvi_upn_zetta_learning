function bookPurchasing(book, discount, tax, stock, order) {
    let result = 0;
    let pricee = 0;
    let AmntDiscnt;
    let AmntTax;
    let Total;
  
    for (let i = 0; i < order; i++) {
      if (book && book.price && book.title && i < stock) {
        const prc = book.price;
        const AmountofDiscount = prc * (discount / 100);
        const PriceafterDiscount = prc - AmountofDiscount;
        const Tax = PriceafterDiscount * (tax / 100);
        const PriceTax = PriceafterDiscount - Tax;
        const TotalPrice = order * PriceTax;
        result += TotalPrice;
  
        pricee = prc;
        AmntDiscnt = PriceafterDiscount;
        AmntTax = PriceTax;
        Total = TotalPrice;

      } else {
        console.log('Stok Book', book.title, 'empty');
        break;
      }
    }
  
    console.group();
    console.log("Title Book                    :", book.title);
    console.log("Price                         : Rp.", pricee);
    console.log("Discount                      :", discount, "%");
    console.log("Tax                           :", tax, "%");
    console.log("Price after discount          : Rp.", AmntDiscnt);
    console.log("Tax deductible price          : Rp.", AmntTax);
    console.log("Total purchases               : Rp.", order);
    console.log("Total price                   : Rp.", Total);
    console.groupEnd();
  
    return result;
  }

  function Credit(result, installment) {
    monthlyCredit = result/installment;
    CreditPayment = [];
    for(let i = 0; i < installment; i++) {
      CreditPayment.push(
        {
          installment: i+1,
          price: monthlyCredit
        }
      )
    }
    return CreditPayment;
  }

  console.log(Credit(bookPurchasing({title: "Love Story", price: 10000, printing_status: true },10,10,6,3), 12));
    
  