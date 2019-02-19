export class Car {
    brand: string;
    year: number;

    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    getBrand() {
        return this.brand;
    }

    getYear() {
        return this.year;
    }
}