<template>
  <div class="mt-3 px-1">
    <div class="center-component">
      <div class="ui left icon input route-client-box ">
        <i class="marker alternate icon"></i>
        <input type="text" placeholder="Endereço Cliente" ref="endereco" />
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "FormCliente",
  data() {
    return { 
      client: {
        nome: "",
        telefone: "",
        endereco: {
          name: "",
          lat: "",
          lng: "",
        },
      },
    };
  },
  mounted() {
    const autocomplete = new window.google.maps.places.Autocomplete(
      this.$refs["endereco"],
      {
        bounds: new window.google.maps.LatLngBounds(
          new window.google.maps.LatLng(
            -20.850210194013535,
            -41.115082441039796
          )
        ),
      }
    );
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      this.client.endereco.name = `${place.name}, ${place.vicinity}`;
      this.client.endereco.lat = place.geometry.location.lat();
      this.client.endereco.lng = place.geometry.location.lng();
      console.log(this.client);
    });
  },
};
</script>

<style scoped>
.center-component {
  max-width: 400px;
  margin: 0 auto;
}
.route-client-box {
  display: flex;
  flex-wrap: wrap;
}

.btn-route-client {
  padding-left: 10px;
  padding-top: 2px;
}
</style>