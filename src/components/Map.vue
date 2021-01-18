<template>
  <div>
    <div class="map-wrapper">
      <yandex-map
        class="map"
        :coords="mapAttrs.coords"
        @map-was-initialized="saveMapInstance">
        <!--Markers-->
      </yandex-map>
    </div>
    <button 
      style="margin-top: 20px"
      @click="createRoute">Create route</button>
  </div>
</template>

<script>
import { loadYmap } from 'vue-yandex-maps';

export default {
  name: 'Map',
  data() {
    return {
      mapInstance: null,
      mapAttrs: {
        coords: [55.755814, 37.617635]
      }
    }
  },
  methods: {
    saveMapInstance(instance) {
      this.mapInstance = instance;
    },

    createRoute() {
      if(!this.mapInstance || !ymaps) return;
      ymaps.route(['Южное Бутово', 'Москва, метро Парк Культуры'], {
          multiRoute: true
      }).done(function (route) {
          //route.options.set("mapStateAutoApply", true);
          this.mapInstance.geoObjects.add(route);
          this.mapInstance.setBounds(this.mapInstance.geoObjects.getBounds(), {checkZoomRange: true, zoomMargin:42});
      }, function (err) {
          throw err;
      }, this);
    }
  },
  // async mounted() {

  // }
}
</script>

<style scoped>
  .map-wrapper {
    height: 500px;
    width: 100%;
  }

  .map {
    height: 100%;
  }  
</style>