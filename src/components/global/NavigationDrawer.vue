<template>
  <div class="drawer">
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
      width="400"
    >
      <v-card :elevation="0" class="pt-8" v-if="!cartItems.length">
        <div class="d-flex justify-space-between align-center">
          <v-card-title class="font-weight-bold" style="font-size: 1.1rem"
            >Shopping Cart</v-card-title
          >
          <v-icon @click="drawer = false">mdi-close</v-icon>
        </div>
        <v-card-text
          class="text-grey-darken-1 text-left"
          style="font-size: 0.9rem"
          >{{ cartItems.length }} items</v-card-text
        >
        <v-card-text class="text-left text-grey-darken-1"
          >From shipping for all orders over 900.00$</v-card-text
        >
        <v-card-text class="text-grey-darken-1">
          Your cart is empty
        </v-card-text>
        <v-card-actions>
          <v-btn
            variant="outlined"
            block
            height="50"
            style="
              border-radius: 30px;
              text-transform: none;
              border-color: #baafaf;
            "
            @click="drawer = false"
            >Continue Shipping</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        :elevation="0"
        v-if="cartItems.length"
        class="pt-6 px-2 mr-1"
        style="max-height: 500px; overflow-y: auto"
      >
        <div class="d-flex justify-space-between align-center">
          <v-card-title class="font-weight-bold" style="font-size: 1.1rem"
            >Shopping Cart</v-card-title
          >
          <v-icon @click="drawer = false">mdi-close</v-icon>
        </div>
        <v-card-text
          class="text-grey-darken-1 text-left pt-0"
          style="font-size: 0.9rem"
          >{{ cartItems.length }} items</v-card-text
        >
        <div class="progress mt-5 position-relative w-100">
          <svg
            class="icon-shipping-truck position-absolute"
            :style="`bottom: 50%; width: 38px; z-index: 2; left: calc(${
              parseInt((computeTotalPrice / 10000) * 100) <= 100
                ? parseInt((computeTotalPrice / 10000) * 100)
                : 100
            }% - 38px); transition: 0.2s ease-in-out`"
            viewBox="0 0 40.55 24"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="truck-body"
                  fill="#F44336"
                  d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                ></path>
                <path
                  class="truck-body"
                  fill="#F44336"
                  d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                ></path>
                <path
                  class="wheel"
                  fill="white"
                  d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                ></path>
                <path
                  class="wheel"
                  fill="white"
                  d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                ></path>
              </g>
            </g>
          </svg>
          <v-progress-linear
            :model-value="
              parseInt((computeTotalPrice / 10000) * 100) <= 100
                ? parseInt((computeTotalPrice / 10000) * 100)
                : 100
            "
            height="10"
            color="red"
            striped
            class="w-100"
            rounded="lg"
          ></v-progress-linear>
        </div>
        <v-card-text
          style="font-size: 0.9rem"
          class="text-grey-darken-1 text-left"
          v-if="10000 - computeTotalPrice > 0"
        >
          Only $ {{ 10000 - computeTotalPrice }} away from Free Shipping
        </v-card-text>
        <v-card-text
          style="font-size: 0.9rem"
          class="text-grey-darken-1 text-left"
          v-if="10000 - computeTotalPrice <= 0"
        >
          Now Free Shipping
        </v-card-text>
        <v-container class="mt-5">
          <v-row v-for="product in cartItems" :key="product.id" class="mb-6">
            <v-col cols="4">
              <img :src="product.thumbnail" class="w-100" />
            </v-col>
            <v-col cols="8">
              <v-card-title
                class="text-left pt-0 font-weight-regular"
                style="font-size: 1.1rem"
                >{{ product.title }}</v-card-title
              >
              <v-card-text class="text-left"
                >Category: {{ product.category }}</v-card-text
              >
              <v-card-text class="text-left pt-0">
                <span class="font-weight-regular" style="font-size: 1.1rem">
                  ${{
                    Math.trunc(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * product.quantity
                  }}
                </span>
              </v-card-text>
              <div class="footer d-flex align-center justify-space-between">
                <div
                  class="input py-4 w-50"
                  style="border-radius: 30px; border: 1px solid black"
                >
                  <v-icon
                    class="cursor-pointer"
                    @click="product.quantity > 1 ? product.quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="
                      border: none;
                      outline: none;
                      width: 50%;
                      text-align: center;
                    "
                    v-model="product.quantity"
                  />
                  <v-icon class="cursor-pointer" @click="product.quantity++"
                    >mdi-plus</v-icon
                  >
                </div>
                <v-icon @click="deleteItem(product.id)">mdi-close</v-icon>
              </div>
            </v-col>
            <v-divider></v-divider>
          </v-row>
        </v-container>
      </v-card>
      <v-card class="mt-10" v-if="cartItems.length" :elevation="0">
        <v-card-actions>
          <v-btn
            block
            class="bg-info text-white"
            style="text-transform: none; border-radius: 30px"
            height="50"
            @click="$router.push({ name: 'cart-page' })"
            >Check Out</v-btn
          >
        </v-card-actions>
        <v-card-actions>
          <v-btn
            class="text-black"
            variant="outline"
            block
            height="50"
            style="
              text-transform: none;
              border-radius: 30px;
              border: 1px solid black;
            "
            @click="$router.push({ name: 'cartPage' })"
            >View Cart</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { CartStore } from "@/stores/CartStore.js";
import { mapActions, mapState } from "pinia";
export default {
  data: () => ({
    drawer: false,
  }),
  methods: {
    ...mapActions(CartStore, ["getItem", "deleteItem"]),
  },
  computed: {
    ...mapState(CartStore, ["cartItems"]),
    computeTotalPrice() {
      let total = 0;
      this.cartItems.forEach((e) => {
        total +=
          Math.ceil(e.price - e.price * (e.discountPercentage / 100)) *
          e.quantity;
      });
      return total;
    },
  },
  inject: ["emitter"],
  mounted() {
    this.emitter.on("Show", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>

<style lang="scss">
div.v-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(149, 149, 149);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(200, 200, 200);
  }
}
div.v-navigation-drawer__content {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(149, 149, 149);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(200, 200, 200);
  }
}
</style>
