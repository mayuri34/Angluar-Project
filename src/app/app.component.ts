import { Component } from '@angular/core';
import { User } from './shared/models/user.model';
import { Car } from './shared/models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'model';
  cars = [
    new Car("Lambo", 2018),
    new Car("Ferrari", 2015),
  ];
  users = [
    new User(1, "Mark", this.cars[0]),
    new User(2, "John", this.cars[1])
  ];
}
