// import { Company } from "./Company";
// import { User } from "./User";

const mapElement = document.getElementById("map");

if (mapElement) {
  new google.maps.Map(mapElement, {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0,
    },
  });
}
