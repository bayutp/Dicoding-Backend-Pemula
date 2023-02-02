const { EventEmitter } = require("events");

const birthdayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}`);
};

const coffeeOrderListener = ({ coffee, price }) => {
  makeCoffee(coffee);
  makeBill(price);
};

const makeBill = (price) => {
  console.log(`The bill is ${price}`);
};

const makeCoffee = (coffee) => {
  console.log(`The ${coffee} coffee is ready`);
};

const myEmitter = new EventEmitter();

myEmitter.on("birthday", birthdayEventListener);

myEmitter.emit("birthday", { name: "John" });

myEmitter.on("order-coffee", coffeeOrderListener);

myEmitter.emit("order-coffee", { coffee: "Cappuccino", price: 50000 });
