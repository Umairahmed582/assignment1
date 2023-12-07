function buyGroceries(choice: string) {
    let items: string[];
    let prices: number[];
  
    if (choice === 'fruits') {
      items = ['apple', 'banana', 'orange'];
      prices = [1, 2, 1.5];
    } else if (choice === 'vegetables') {
      items = ['carrot', 'broccoli', 'spinach'];
      prices = [1.5, 2.5, 1.75];
    } else {
      console.log('Invalid choice');
      return;
    }
  
    console.log('Available items:');
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i]} - $${prices[i]}`);
    }
  
    let totalBill = 0;
    for (let i = 0; i < items.length; i++) {
      totalBill += prices[i];
    }
  
    console.log(`Total bill: $${totalBill}`);
  }
  function checkDiscount(totalBill: number) {
    let discount;
  
    if (totalBill > 100) {
      discount = 0.1; // 10% discount for bills above $100
    } else if (totalBill > 50) {
      discount = 0.05; // 5% discount for bills above $50
    } else {
      discount = 0; // no discount
    }
  
    const discountedTotal = totalBill - (totalBill * discount);
  
    console.log(`Discounted total: $${discountedTotal}`);
  }
  buyGroceries('fruits');
checkDiscount(50);
function checkout(totalBill: number) {
    console.log(`Total bill: $${totalBill}`);
  
    let paymentMethod: string;
  
    while (true) {
      console.log('Choose a payment method:');
      console.log('1. Credit Card');
      console.log('2. Debit Card');
      console.log('3. Cash');
  
      const choice = prompt('Enter the number corresponding to your choice: ');
  
      if (choice === '1') {
        paymentMethod = 'Credit Card';
        break;
      } else if (choice === '2') {
        paymentMethod = 'Debit Card';
        break;
      } else if (choice === '3') {
        paymentMethod = 'Cash';
        break;
      } else {
        console.log('Invalid choice. Please try again.');
      }
    }
  
    console.log(`Payment method chosen: ${paymentMethod}`);
    console.log('Confirmation message: Payment successful. Thank you for shopping!');
  }
  
  checkout(50);