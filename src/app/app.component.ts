import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 100;
  name = 'dan';
  age  = 90;
  img = 'https://d500.epimg.net/cincodias/imagenes/2022/02/21/gadgets/1645453218_839118_1645453324_noticia_normal.jpg';
  btnDisabled = true;
  person  = {
    name:'Dan',
    img: 'https://d500.epimg.net/cincodias/imagenes/2022/02/21/gadgets/1645453218_839118_1645453324_noticia_normal.jpg',
    human: true,
    planet: 'earth',
    yearBirth: 1984,
    age: 18,
  }

  register = {
    name:'',
    email:'',
    password:''
  }
  names: string[] = ['Helen', 'Barbara', 'Kazel'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  products: Product[] = [
    {
      name: 'dreamercatcher',
      price: 565,
      image: './assets/images/dreamercatcher.jpg',
      category: 'Summer'
    },
    {
      name: 'heart',
      price: 356,
      image: './assets/images/heart.jpg'
    },
    {
      name: 'lips',
      price: 34,
      image: './assets/images/lips.jpg'
    },
    {
      name: 'rock',
      price: 23,
      image: './assets/images/rock.jpg'
    },
    {
      name: 'rainbow',
      price: 34,
      image: './assets/images/rainbow.jpg'
    },
    {
      name: 'love',
      price: 3434,
      image: './assets/images/love.jpg'
    }
  ]



  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  yearIncrease() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const  element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    element.value;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
}

  deleteName(index: number) {
    this.names.splice(index , 1);
  }

  onRegister() {
    console.log(this.register)
  }
}
