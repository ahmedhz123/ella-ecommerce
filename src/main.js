import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

// Pinia
import { createPinia } from "pinia";

//Mitt
import mitt from "mitt";
let emitter = mitt();

const vuetify = createVuetify({
  components,
  directives,
});

//Config Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

createApp(App)
  .provide("emitter", emitter)
  .use(vuetify)
  .use(createPinia())
  .use(router)
  .mount("#app");
