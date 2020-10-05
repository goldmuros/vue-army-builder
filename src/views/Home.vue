<template>
  <div class="home">
    <v-row>
      <v-col cols="4" v-for="(army, index) in armies" :key="index">
        <card-army :datos="army"></card-army>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import CardArmy from "@/components/CardArmy.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("army", ["armies"])
  },
  components: {
    CardArmy
  }
};
</script>
