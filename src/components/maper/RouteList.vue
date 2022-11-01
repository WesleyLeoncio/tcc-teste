<template>
  <section class="route-list-view">
    <div class="route-list-view-header">
      <div>
        <h2 class="ui header list_title">Lista de Rotas</h2>
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
  border-radius: 15px;
  position: absolute;
  z-index: 2;
  max-height: 60vw;
  max-width: 350px;
  margin: 30px;
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
  color: black;
  text-align: center;
}
.rodape_list {
  width: 96%;
  margin: 7px;
  border: 4px solid #9E9E9E;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  color: black;
  background-color: #9E9E9E;
  display: inline-block;
}

.list_distance_duration{
  width: 20%;
  border: 2px solid #F5F5F5;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
  margin: 4px;
  color: black;
  background-color: #F5F5F5;
  display: inline-block;
}
</style>>
