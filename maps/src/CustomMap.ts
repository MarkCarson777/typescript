interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapElement = document.getElementById(divId);

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

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}

export { CustomMap };
