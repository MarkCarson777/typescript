import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "blue";

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div><p>Company:${this.name}</p><p>${this.catchPhrase}</p></div>`;
  }
}

export { Company };
