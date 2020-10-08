<template>
  <v-card>
    <v-img
      contain
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :src="image"
    >
      <v-card-title v-text="army.title"></v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "CardArmy",
  props: {
    army: Object
  },
  data() {
    return {
      image: require("../assets/armies/" + this.army.src)
    };
  }
};
</script>
