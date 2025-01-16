// import { Company } from "./Company";
// import { User } from "./User";

const mapContainer = document.getElementById("map");
if (mapContainer) {
  new google.maps.Map(mapContainer, {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0,
    },
  });
}
