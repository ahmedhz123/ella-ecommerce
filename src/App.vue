<template>
  <app-layout-vue style="position: relative">
    <!-- Slot of App Layout -->
    <QuickView />
    <router-view />
    <v-snackbar
      v-model="snackbar"
      style="position: absolute; top: 103%; left: 0"
      location="left"
      :timeout="1500"
      color="indigo-darken-1"
      >{{ titleProd }} has been added to your cart
      <template v-slot:actions>
        <v-btn icon="mdi-close" @click="snackbar = false"></v-btn>
      </template>
    </v-snackbar>
  </app-layout-vue>
</template>

<script>
import AppLayoutVue from "./components/global/AppLayout.vue";
import QuickView from "./components/global/QuickView.vue";
export default {
  inject: ["emitter"],
  data: () => ({
    titleProd: "",
    snackbar: false,
  }),
  components: {
    AppLayoutVue,
    QuickView,
  },
  mounted() {
    this.emitter.on("openSnack", (title) => {
      this.titleProd = title;
      this.snackbar = true;
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
</style>
