'use strict';

const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

  class Transport {
      constructor (type, price, brand) {
          this.type = type;
          this.price = price;
          this.brand = brand;
      }
      getInfo(){
        return this.brand;
      }
      getPrice(){
        return this.price;
      }
  }

  class Car extends Transport {
    constructor (type, price, brand, doors){
      super(type, price, brand)
      this.doors = doors;
    }
    getDoorsCount(){
      return this.doors;
    }
  }

  class Bike extends Transport {
    constructor (type, price, brand, maxSpeed) {
      super(type, price, brand)
      this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
      return this.maxSpeed;
    }
  }

const container = document.getElementById('container');
data.forEach(el => {
  const transport = new Transport(el.type, el.price, el.brand);

  //вот тут мне не нравится
  const car = new Car(el.type, el.price, el.brand, el.doors);
  const bike = new Bike(el.type, el.price, el.brand, el.maxSpeed);
  //
  
  const transportItem = document.createElement('div');
  transportItem.className = 'transport-item';
  container.append(transportItem);

  const img = document.createElement('img');
  img.src = el.image;
  transportItem.append(img);

  const info = document.createElement('div');
  info.className = 'transport-item__info';
  transportItem.append(info);

  const brand = document.createElement('h3');
  brand.innerText = transport.getInfo();
  info.append(brand);

  const price = document.createElement('p');
  price.innerText = `Цена: ${transport.getPrice()} рублей`;
  info.append(price);

  const otherInfo = document.createElement('p');
  if (transport.type === 'car') {otherInfo.innerText = `Машина имеет ${car.getDoorsCount()} двери`;}
  else if (transport.type === 'bike') {otherInfo.innerText = `Максимальная скорость мотоцикла: ${bike.getMaxSpeed()} км/ч`;};

  info.append(otherInfo);
});