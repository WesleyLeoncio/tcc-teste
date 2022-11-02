<template>
  <div class="main-container">
    <RouteList />
    <DirectionsMapView />
  </div>
</template>

<script>
import DirectionsMapView from "../components/maper/DirectionsMapView.vue";
import RouteList from "../components/maper/RouteList.vue";
import { mapGetters } from "vuex";
export default {
  name: "Maps",
  components: { DirectionsMapView, RouteList },
  data() {
    return {
      rota: [],
    };
  },
  computed: mapGetters(["getRoute"]),
  created() { 
    this.rota = this.getRoute; 
  },
};
</script>

<style scoped>

</style>