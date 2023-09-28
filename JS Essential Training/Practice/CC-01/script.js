class Phone {
  constructor(brand, os, model, color, price, releaseDate) {
    (this.brand = brand),
      (this.os = os),
      (this.model = model),
      (this.color = color),
      (this.price = `\$${price}`),
      (this.releaseDate = new Date(releaseDate));
  }
}

const iphone15ProMax = new Phone(
  'Apple',
  'iOS',
  '15 Pro Max',
  'Grey',
  1650,
  '24 Sep 2023'
);

console.log(iphone15ProMax);
