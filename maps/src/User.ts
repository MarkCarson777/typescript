import { faker } from "@faker-js/faker";
<<<<<<< HEAD
import { Mappable } from "./CustomMap";

class User implements Mappable {
=======

class User {
>>>>>>> 554481eb844256e65a3c4fd95bd17ae26e32f307
  name: string;
  location: {
    lat: number;
    lng: number;
  };
<<<<<<< HEAD
  color: string = "red";
=======
>>>>>>> 554481eb844256e65a3c4fd95bd17ae26e32f307

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User: ${this.name}`;
  }
}

export { User };
