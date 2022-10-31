<template>
  <section class="route-list-view">
    <div class="route-list-view-header">
      <div class="list_title">
        <h2 class="ui header">Lista de Rotas</h2>
      </div>
    </div>
    <div
      class="item"
      v-for="(route, index) in routes.routePath"
      :key="index"
      :style="{ 'background-color': route.color }"
    >
      <div>
        <i class="marker alternate icon"></i>
        {{ route.origin.name }}
      </div>
      <div>
        <i class="flag checkered icon"></i>
        {{ route.destination.name }}
      </div>
      <div class="list_distance_duration">{{ route.distance.text }}</div>
      <div class="list_distance_duration">{{ route.duration.text }}</div>
    </div>
    <div class="rodape_list">
      {{ this.convertDistance(routes.distanceComplete) }}
    </div>
    <div class="rodape_list">
      {{ this.convertDutarion(routes.durationComplete) }}
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      routes: {},
    };
  },
  computed: mapGetters(["getRoute"]),
  created() {
    this.routes = this.getRoute;
  },
  methods: {
    convertDistance(distance) {
      if (distance >= 1000) {
        return `Distancia: ${distance} km`;
      }
      return `Distancia: ${distance} m`;
    },
    convertDutarion(duration) {
      const d = Math.trunc(duration / 60);
      return `Duração: ${d} min`;
    },
  },
};
</script>

<style lang="scss" scoped>
.route-list-view { 
  font-size: 18px;
  border-radius: 8px;
  height: 720px; 
  position: absolute;
  z-index: 2;
  max-width: 350px;
  margin: 40px;
  overflow-y: scroll;
  background-color: white;
}
.route-list-view-header {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}

.item {
  padding: 10px;
  cursor: pointer;
}
.item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.select-style {
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.1);
}

.show-all {
  margin-left: 10px;
  padding: 4px 10px;
}

.list_title {
  color: gold;
  text-align: center;
}
.rodape_list {
  width: 96%;
  border: 4px solid gray;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  margin: 7px;
  color: black;
  background-color: gray;
  display: inline-block;
}

.list_distance_duration{
  width: 20%;
  border: 2px solid grey;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  margin: 4px;
  color: black;
  background-color: gray;
  display: inline-block;
}
</style>>
