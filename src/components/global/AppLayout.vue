<template>
  <div class="layout">
    <v-layout class="position-relative">
      <NavigationDrawerVue />
      <MenuDrawer />
      <v-main
        class="main"
        :style="`padding-top: ${
          $route.name == 'cart-page' || width <= 990 ? '0px' : '160px'
        }; margin-top: 1em`"
      >
        <!-- This slot represents the router views -->
        <slot></slot>
      </v-main>
      <AppNavVue v-show="$route.name != 'cart-page' && width > 990" />
      <ResponsiveNav v-show="$route.name != 'cart-page' && width <= 990" />
      <FixedNav v-show="$route.name != 'cart-page' && width > 990" />
      <SecondFooter v-show="$route.name != 'cart-page'" />
      <FooterCompVue v-show="$route.name != 'cart-page'" />
    </v-layout>
  </div>
</template>

<script>
import AppNavVue from "./AppNav.vue";
import FooterCompVue from "./FooterComp.vue";
import NavigationDrawerVue from "./NavigationDrawer.vue";
import FixedNav from "./FixedNav.vue";
import SecondFooter from "./SecondFooter.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
import MenuDrawer from "./MenuDrawer.vue";
export default {
  data: () => ({
    width: 0,
  }),
  mounted() {
    this.width = window.innerWidth;
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
    });
  },
  components: {
    AppNavVue,
    NavigationDrawerVue,
    FooterCompVue,
    FixedNav,
    SecondFooter,
    ResponsiveNav,
    MenuDrawer,
  },
};
</script>

<style lang="scss"></style>
