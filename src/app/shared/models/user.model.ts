import {Car} from './car.model';

export class User {
    id: number;
    name: string;
    car: Car;

    constructor(id, name, car) {
        this.id = id;
        this.name = name;
        this.car = car;
    }

    getName() {
        return this.name;
    }
    getCar() {
        return this.car;
    }
}