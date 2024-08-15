import React from 'react';

const Checkout = ({ cartItems, total, clearCart }) => {

  const handlePrintReceipt = () => {
    const receiptContent = `
      <div class="receipt-container">
        <div class="company-name">Your Company Name</div>
        <h1>Receipt</h1>
        <ul>
          ${cartItems.map(item => `
            <li>
              <span class="item-name">${item.name}</span>
              <span class="item-quantity">x${item.quantity}</span>
              <span class="item-total">$${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          `).join('')}
        </ul>
        <div class="receipt-total">
          <strong>Total: $${total.toFixed(2)}</strong>
        </div>
        <div class="thank-you">Thank you for your purchase!</div>
      </div>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
          <style>
            body { font-family: 'Courier New', Courier, monospace; margin: 0; padding: 0; }
            .receipt-container { width: 58mm; padding: 10px; border: 1px solid #ddd; margin: auto; background-color: #fff; font-size: 12px; }
            .company-name { text-align: center; font-weight: bold; font-size: 14px; margin-bottom: 10px; }
            h1 { font-size: 16px; text-align: center; margin-bottom: 20px; }
            ul { list-style-type: none; padding: 0; margin: 0; }
            li { display: flex; justify-content: space-between; margin-bottom: 5px; }
            .item-name { flex: 1; }
            .item-quantity { margin-left: 10px; }
            .item-total { text-align: right; }
            .receipt-total { text-align: right; font-size: 14px; margin-top: 10px; padding-top: 10px; border-top: 1px dashed #000; }
            .thank-you { text-align: center; margin-top: 20px; font-size: 12px; }
          </style>
        </head>
        <body>
          ${receiptContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();

    // Clear the cart after printing
    clearCart();
  };

  return (
    <div className="checkout">
      <h2>Total: ${total}</h2>
      <button onClick={handlePrintReceipt} className="checkout-button">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Checkout;
