interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
<<<<<<< HEAD
  color: string;
=======
>>>>>>> 554481eb844256e65a3c4fd95bd17ae26e32f307
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}

<<<<<<< HEAD
export { CustomMap, Mappable };
=======
export { CustomMap };
>>>>>>> 554481eb844256e65a3c4fd95bd17ae26e32f307
