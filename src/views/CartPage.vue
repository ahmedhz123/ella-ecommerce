<template>
  <div class="cart_page mt-16">
    <v-breadcrumbs :items="['Home', 'Your Cart']" class="pt-0">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-card-title
      class="text-left text-black"
      style="font-size: 1.9rem; font-weight: bold"
      v-if="!cartItems.length"
    >
      Your Cart
    </v-card-title>
    <v-card :elevation="0" class="pt-8" v-if="!cartItems.length">
      <div>
        <v-card-title
          class="font-weight-bold text-left"
          style="font-size: 1.1rem"
          >Shopping Cart</v-card-title
        >
      </div>
      <v-card-text
        class="text-grey-darken-1 text-left"
        style="font-size: 0.9rem"
        >{{ cartItems.length }} items</v-card-text
      >
      <v-card-text class="text-left text-grey-darken-1"
        >From shipping for all orders over 900.00$</v-card-text
      >
      <v-card-text class="text-grey-darken-1"> Your cart is empty </v-card-text>
      <v-card-actions>
        <v-btn
          variant="outlined"
          height="50"
          width="300"
          style="
            border-radius: 30px;
            text-transform: none;
            border-color: #baafaf;
            margin: 0 auto;
          "
          @click="$router.push({ name: 'home' })"
          >Continue Shipping</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-card :elevation="0" v-if="cartItems.length" class="px-3">
      <v-card-title
        class="text-left pl-0"
        style="font-size: 1.9rem; font-weight: bold"
      >
        Your Cart
      </v-card-title>
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
        class="text-grey-darken-1 text-left pl-0"
        v-if="10000 - computeTotalPrice > 0"
      >
        Only ${{ 10000 - computeTotalPrice }} away from Free Shipping
      </v-card-text>
      <v-card-text
        style="font-size: 0.9rem"
        class="text-grey-darken-1 text-left"
        v-if="10000 - computeTotalPrice <= 0"
      >
        Now Free Shipping
      </v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-alert
              class="bg-orange-lighten-4"
              icon="mdi-alert-circle-outline"
              text="Please, hurry! Someone has placed an order on one of 
              the items you have in the cart. 
              We'll keep it for you for 39:34 minutes"
            ></v-alert>
          </v-col>
        </v-row>
        <v-row align="start">
          <v-col cols="12" md="9" lg="9">
            <v-table>
              <thead>
                <tr>
                  <th style="font-size: 12px; font-weight: bold; width: 55%">
                    PRODUCT
                  </th>
                  <th style="font-size: 12px; font-weight: bold; width: 15%">
                    PRICE
                  </th>
                  <th style="font-size: 12px; font-weight: bold; width: 15%">
                    QUANTITY
                  </th>
                  <th style="font-size: 12px; font-weight: bold; width: 15%">
                    TOTAL
                  </th>
                  <th style="font-size: 12px; font-weight: bold; width: 15%">
                    DELETE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                  <td>
                    <v-container>
                      <v-row align="center">
                        <v-col cols="4" class="pt-0">
                          <img :src="item.thumbnail" class="w-100" />
                        </v-col>
                        <v-col cols="8" class="pl-0">
                          <v-card-title
                            class="text-left pt-0 font-weight-regular"
                            style="font-size: 1.1rem"
                            >{{ item.title }}</v-card-title
                          >
                          <v-card-text class="text-left"
                            >Category: {{ item.category }}</v-card-text
                          >
                        </v-col>
                      </v-row>
                    </v-container>
                  </td>
                  <td class="pl-3">
                    <v-card-text
                      class="pl-0 text-left"
                      style="font-size: 16px; font-weight: bold"
                    >
                      ${{
                        Math.trunc(
                          item.price -
                            item.price * (item.discountPercentage / 100)
                        )
                      }}
                    </v-card-text>
                  </td>
                  <td class="pl-0">
                    <div
                      class="input py-4 w-100 d-flex justify-start pl-0"
                      style="border-radius: 30px; border: 1px solid black"
                    >
                      <v-icon
                        class="cursor-pointer"
                        @click="item.quantity > 1 ? item.quantity-- : false"
                        >mdi-minus</v-icon
                      >
                      <input
                        type="number"
                        style="
                          border: none;
                          outline: none;
                          width: 100%;
                          text-align: center;
                        "
                        v-model="item.quantity"
                      />
                      <v-icon class="cursor-pointer" @click="item.quantity++"
                        >mdi-plus</v-icon
                      >
                    </div>
                  </td>
                  <td class="text-left pl-0">
                    <v-card-text
                      style="font-size: 16px"
                      class="font-weight-bold"
                    >
                      ${{
                        Math.trunc(
                          item.price -
                            item.price * (item.discountPercentage / 100)
                        ) * item.quantity
                      }}
                    </v-card-text>
                  </td>
                  <td>
                    <v-icon @click="deleteItem(item.id)">mdi-close</v-icon>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <v-card :elevation="0" class="mt-10">
              <v-card-text class="d-flex align-center pl-0" style="gap: 10px">
                <div class="p d-flex align-center" style="gap: 10px">
                  <v-icon>mdi-gift</v-icon>
                  <span
                    >DO YOU WANT A GIFT WRAP?
                    <strong>ONLY FOR $10.00</strong></span
                  >
                </div>
                <v-btn
                  style="text-transform: none"
                  variant="outlined"
                  rounded="xl"
                  >Add</v-btn
                >
              </v-card-text>
              <v-card-text class="pl-0 text-left">
                <h4>Additional Comments</h4>
                <v-textarea
                  class="w-75"
                  variant="outlined"
                  placeholder="Special instruction for seller..."
                  rounded="xl"
                ></v-textarea>
              </v-card-text>
              <v-card-text class="pl-0 d-flex align-center" style="gap: 15px">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 179.94 179.96"
                  width="25"
                  class="icon icon-shield-check"
                >
                  <path
                    d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"
                  ></path>
                  <polygon
                    class="cls-1"
                    fill="white"
                    points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"
                  ></polygon>
                </svg>
                <span class="text-grey">Secure Shopping Guarantee</span>
              </v-card-text>
              <v-cart-text class="w-50 pl-0 d-flex justify-start mt-4">
                <img
                  src="../../ella/images/cart-page-cards.webp"
                  class="w-75"
                />
              </v-cart-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="3" lg="3">
            <v-card :elevation="0" class="pt-2">
              <v-card-title
                class="text-left font-weight-bold pl-0"
                style="font-size: 1rem"
                >ORDER SUMMARY</v-card-title
              >
              <v-divider length="100%" color="black" thickness="2"></v-divider>
              <v-card-text
                class="d-flex align-center justify-space-between px-0"
              >
                <span style="font-size: 1rem">Subtotal</span>
                <span style="font-size: 1rem; font-weight: bold"
                  >${{ computeTotalPrice }}</span
                >
              </v-card-text>
              <v-card-text class="pl-0 text-left font-weight-bold">
                Get Shipping Estimate:
              </v-card-text>
              <v-select
                :items="['Egypt', 'Syria', 'USA', 'UK', 'Australia', 'Brazil']"
                variant="outline"
                style="
                  border: 1px solid black;
                  border-radius: 30px;
                  height: 50px !important;
                "
                chips
              ></v-select>
              <div
                class="selects w-100 d-flex align-center justify-space-between mt-3"
                style="gap: 10px"
              >
                <v-select
                  :items="[
                    'Egypt',
                    'Syria',
                    'USA',
                    'UK',
                    'Australia',
                    'Brazil',
                  ]"
                  variant="outline"
                  style="
                    border: 1px solid black;
                    border-radius: 30px;
                    height: 50px !important;
                    width: 60%;
                  "
                  chips
                ></v-select>
                <input
                  type="text"
                  placeholder="Postal Code"
                  style="
                    border: 1px solid black;
                    border-radius: 50px;
                    height: 50px !important;
                    width: 40%;
                    text-align: center;
                  "
                />
              </div>
              <v-card-actions class="px-0">
                <v-btn
                  style="text-transform: none"
                  block
                  rounded="xl"
                  height="50"
                  class="bg-blue-darken-2 font-weight-bold mt-2"
                  outline="elevated"
                  >Calculate Shipping</v-btn
                >
              </v-card-actions>
              <v-card-text
                class="mt-5 pl-0 text-black text-left font-weight-bold pb-3"
              >
                Coupon Code
              </v-card-text>
              <input
                type="text"
                placeholder="Enter Coupon Code"
                style="
                  border: 1px solid black;
                  border-radius: 50px;
                  height: 50px !important;
                  width: 100% !important;
                  padding-left: 15px;
                "
              />
              <p class="pl-0 mt-3 text-grey" style="font-size: 12px">
                Coupon code will be applied on the checkout page
              </p>
              <v-divider length="100%" class="my-5"></v-divider>
              <v-card-text
                class="px-0 pt-0 d-flex align-center justify-space-between"
              >
                <span class="font-weight-bold">TOTAL:</span>
                <span class="font-weight-bold" style="font-size: 1rem"
                  >${{ computeTotalPrice }}</span
                >
              </v-card-text>

              <p class="pl-0 mt-3 text-grey text-left" style="font-size: 12px">
                Tax included and shipping calculated at checkout
              </p>
              <v-card-text
                class="check d-flex align-center pt-0 pl-0 justify-start"
              >
                <v-checkbox class="pa-0 mt-4"></v-checkbox>
                <span style="font-size: 12px" class="pt-0"
                  >I agree with
                  <span style="text-decoration: underline; font-weight: bold"
                    >Terms &amp; Conditions</span
                  ></span
                >
              </v-card-text>
              <v-card-actions
                class="d-flex px-0 flex-column align-center justify-center"
              >
                <v-btn
                  style="text-transform: none"
                  height="50"
                  class="bg-blue-darken-2 mb-3 text-white mt-2"
                  block
                  @click="toCheckout()"
                  >Proceed To Checkout</v-btn
                >
                <v-btn
                  style="text-transform: none; border: 1px solid black"
                  height="50"
                  block
                  variant="outline"
                  @click="$router.push({ name: 'home' })"
                  >Continue Shopping</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { CartStore } from "@/stores/CartStore";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    computeTotalPrice() {
      let total = 0;
      this.cartItems.forEach((e) => {
        total +=
          Math.ceil(e.price - e.price * (e.discountPercentage / 100)) *
          e.quantity;
      });
      return total;
    },
    ...mapState(CartStore, ["cartItems"]),
  },
  methods: {
    ...mapActions(CartStore, ["deleteItem", "setToLocaleStorage"]),
    toCheckout() {
      this.setToLocaleStorage();
      this.$router.push({ name: "cart-page" });
    },
  },
};
</script>

<style></style>
