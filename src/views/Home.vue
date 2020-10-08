<template>
  <div class="d-flex flex-column mh-100">
    <v-row id="container" class="fill-height overflow-auto">
      <v-col
        :cols="12 / itemsPerRow"
        v-for="(army, index) in armies"
        :key="index"
      >
        <card-army :datos="army"></card-army>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardArmy from "@/components/CardArmy.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      rows: 1
    };
  },
  computed: {
    ...mapState("army", ["armies"]),
    itemsPerRow() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1;
        case "sm":
          return 2;
        case "md":
          return 3;
        case "lg":
          return 4;
        case "xl":
          return 6;
        default:
          return 12;
      }
    }
  },
  components: {
    CardArmy
  }
};
</script>

<style scoped>
.mh-100 {
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
}
</style>
