<template>
  <section class="map" ref="map"></section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      map: null,
      initMapLatLng: { lat: -20.841883068850247, lng: -41.123348450883235 },
      routes: {},
    };
  },
  computed: mapGetters(["getRoute"]),
  created() {
    this.routes = this.getRoute;
  },
  mounted() {
    const directionsService = new window.google.maps.DirectionsService();
    this.map = new window.google.maps.Map(this.$refs["map"], {
      center: new window.google.maps.LatLng(
        this.initMapLatLng.lat,
        this.initMapLatLng.lng
      ),
      zoom: 17,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
      },
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    });
    this.routes.routePath.forEach(({ origin, destination, color }) => {
      directionsService.route(
        {
          origin: new window.google.maps.LatLng(
            Number(origin.lat),
            Number(origin.lng)
          ),
          destination: new window.google.maps.LatLng(
            Number(destination.lat),
            Number(destination.lng)
          ),
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            new window.google.maps.DirectionsRenderer({
              suppressMarkers: true, // tira os marcadores padroes
              directions: response,
              map: this.map,
              polylineOptions: {
                strokeColor: color,
                strokeWeight: 8,
              },
            });

            this.createInfoWindow(origin, "marker alternate", color);
            this.createInfoWindow(destination, "flag checkered", color);

            const overviewPath = response.routes[0].overview_path;

            this.createPolylineWith(
              [
                { lat: Number(origin.lat), lng: Number(origin.lng) },
                { lat: overviewPath[0].lat(), lng: overviewPath[0].lng() },
              ],
              color
            );

            this.createPolylineWith(
              [
                { lat: Number(destination.lat), lng: Number(destination.lng) },
                {
                  lat: overviewPath[overviewPath.length - 1].lat(),
                  lng: overviewPath[overviewPath.length - 1].lng(),
                },
              ],
              color
            );
          }
        }
      );
    });
  },
  methods: {
    createInfoWindow(location, icon, color) {
      // função pra criar infoWindow
      const infoWindow = new window.google.maps.InfoWindow({
        content: `<div style="background-color:${color};padding:5px;"><i class="${icon} icon"></i>${location.name}</div>`,
        position: new window.google.maps.LatLng(
          Number(location.lat),
          Number(location.lng)
        ),
      });

      infoWindow.open(this.map, null);
    },
    createPolylineWith(path, color) {
      // responsavel por criar a linha de preenchimento
      new window.google.maps.Polyline({
        path: path,
        strokeColor: color,
        strokeOpacity: 1,
        strokeWeight: 8,
        map: this.map,
      });
    },
  },
};
</script>
<style>
.map {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 64vw;
}
.gm-style-iw button {
  display: none !important;
}

.gm-style .gm-style-iw-c {
  padding: 0px !important;
}

.gm-style-iw-d {
  overflow: hidden !important;
}
</style>
