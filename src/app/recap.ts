const username = 'dansc147';
const sum = ( a: number, b: number) => {
  return  a + b;
}
sum(1,2);

class Person {

  constructor(private age: number, public lastName: string) {}

}

const dan = new Person(39, 'Socorro');
