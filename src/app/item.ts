export class Item {
  name: string | undefined;
  description: string |undefined;
  price: string | undefined;
  amountOfStock: number;
  stockUrgency: string | undefined;
  constructor(name: string | undefined, description: string | undefined, price: string | undefined, amountInStock: number) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.amountOfStock = amountInStock;
    this.calculateUrgency();
  }

  public calculateUrgency(): void{
    if (this.amountOfStock < 5){
      this.stockUrgency = 'STOCK_LOW';
    }
    if (this.amountOfStock > 5 && this.amountOfStock < 10){
      this.stockUrgency = 'STOCK_MEDIUM';
    }
    if (this.amountOfStock > 10){
      this.stockUrgency = 'STOCK_HIGH';
    }
  }
}
