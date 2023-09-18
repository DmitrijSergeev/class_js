/*class Box {
    _age = 0
    constructor(name, age) {
        console.log('Create a class')

        this.name = name;
        this.age = age;
    }

    sayHi (){
        console.log(`Hello ${this.name}`)
    }
    set age(value){
        this._age = value
        console.log(2023 - this._age)
    }
    get age(){
        return this._age
    }
}

let myBox3 = new Box('Bob', 47);
myBox3.age = 14;
myBox3.sayHi();*/

class Car {
    constructor(params) {
        this.name = params.name
        this.model = params.model
        this.type = params.type
        this.color = params.color
        this.transmission = params.transmission
        this.volume = params.volume
    }

    getCarInfo() {
        console.log(`
        ${this.name} ${this.color} ${this.model}
         Год выпуска: 2022
         Разгон до 100 км/ч: 0
         Расход на 100 км: 0
         Коробка: ${this.transmission}
         `)
    }
}

const car = new Car({
    name: 'BMW',
    model: 'X7',
    type: 'Geep',
    color: 'black',
    transmission: 'auto',
    volume: 2.4
});

car.getCarInfo();