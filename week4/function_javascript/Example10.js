// process payment
function processPayment(amount, paymentCallback) {
    console.log(`Processing payment of UGX ${amount}`);
    paymentCallback();
    }
    function onPaymentSuccess() {
    console.log("Payment successful!");
    }
    processPayment(50000, onPaymentSuccess);