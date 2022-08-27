import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'dan';
  age  = 90;
  img = 'https://d500.epimg.net/cincodias/imagenes/2022/02/21/gadgets/1645453218_839118_1645453324_noticia_normal.jpg';
  btnDisabled = true;

  type  = {
    human: true,
    planet: 'earth',
    yearBirth: 1984,
    age: 18,
  }

  names: string[] = ['Helen', 'Barbara', 'Kazel'];
  newName = '';
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  yearIncrease() {
    this.type.age += 1;
  }

  onScroll(event: Event) {
    const  element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    element.value;
    this.type.planet = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
}

  deleteName(index: number) {
    this.names.splice(index , 1);
  }
}
