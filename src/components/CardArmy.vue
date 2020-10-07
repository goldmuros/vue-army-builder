<template>
  <v-card>
    <v-img
      contain
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :src="imagen"
    >
      <v-card-title v-text="datos.title"></v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "CardArmy",
  props: {
    datos: Object
  },
  data() {
    return {
      imagen: require("../assets/armies/" + this.datos.src)
    };
  },
  mounted() {
    // alert(this.$vuetify.breakpoint.name);
  }
};
</script>
