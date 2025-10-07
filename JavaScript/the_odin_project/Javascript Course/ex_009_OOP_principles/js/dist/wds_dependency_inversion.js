// class Store {
//     user;
//     stripe;
//     paypal;
//     constructor(user: string) {
//         this.user = user;
//         this.stripe = new Stripe(user);
//         this.paypal = new Paypal();
//     }
//     purchase_bike(quantity: number) {
//         this.paypal.make_payment(this.user, quantity * 200);
//         // this.stripe.make_payment(200 * quantity * 100);
//     }
//     purchase_helmet(quantity: number) {
//         this.paypal.make_payment(this.user, quantity * 15);
//         // this.stripe.make_payment(15 * quantity * 100);
//     }
// }
// class Stripe {
//     user;
//     constructor(user: string) {
//         this.user = user
//     }
//     make_payment(amount_in_cents: number) {
//         console.log(`${this.user} made payment of $${amount_in_cents / 100} with Stripe`)
//     }
// }
// class Paypal {
//     make_payment(user: string, amount_in_dollars: number) {
//         console.log(`${user} made payment of $${amount_in_dollars} with Paypal`);
//     }
// }
// const store = new Store("John");
// store.purchase_bike(2);
// store.purchase_helmet(3);
class Store {
    payment_processor;
    constructor(payment_processor) {
        this.payment_processor = payment_processor;
    }
    purchase_bike(quantity) {
        this.payment_processor.pay(quantity * 200);
    }
    purchase_helmet(quantity) {
        this.payment_processor.pay(quantity * 15);
    }
}
class StripePaymentProcessor {
    stripe;
    constructor(user) {
        this.stripe = new Stripe(user);
    }
    pay(amount_in_dollars) {
        this.stripe.make_payment(amount_in_dollars * 100);
    }
}
class Stripe {
    user;
    constructor(user) {
        this.user = user;
    }
    make_payment(amount_in_cents) {
        console.log(`${this.user} made payment of $${amount_in_cents / 100} with Stripe`);
    }
}
class PaypalPaymentProcessor {
    paypal;
    user;
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }
    pay(amount_in_dollars) {
        this.paypal.make_payment(this.user, amount_in_dollars);
    }
}
class Paypal {
    make_payment(user, amount_in_dollars) {
        console.log(`${user} made payment of $${amount_in_dollars} with Paypal`);
    }
}
const store = new Store(new PaypalPaymentProcessor("John"));
store.purchase_bike(2);
store.purchase_helmet(3);
