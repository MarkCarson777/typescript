class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    const mapElement = document.getElementById("map");

    if (mapElement) {
      this.googleMap = new google.maps.Map(mapElement, {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    } else {
      throw new Error("Map element not found");
    }
  }
}

export { CustomMap };
