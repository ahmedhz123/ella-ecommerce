<template>
  <div class="prod_details mt-16 mb-10">
    <v-container>
      <v-row>
        <v-col cols="12" md="7">
          <img
            :src="tab ? tab : product.thumbnail"
            class="w-100"
            height="500"
            width="500"
          />
          <v-tabs
            v-model="tab"
            center-active
            height="100"
            align-tabs="center"
            stacked
          >
            <v-tab v-for="(img, i) in product.images" :key="i" :value="img">
              <img :src="img" width="100" height="100" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="12" md="5">
          <v-card
            :elevation="0"
            class="bg-transparnet ml-16 d-flex flex-column align-start"
          >
            <v-card-text
              class="pl-0 ml-0 font-weight-black text-left"
              style="font-size: 1.1rem; text-wrap: wrap"
            >
              (Product {{ product.id }}) Sample - {{ product.category }} For
              Sale
            </v-card-text>
            <div class="rating d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="product.rating"
                half-increments
                class="text-left"
                readonly
                size="x-small"
                style="font-size: 5px"
                density="false"
                color="yellow-darken-2"
              ></v-rating>
              <span class="text-grey-lighten-1 mt-1" style="font-size: 12px"
                >1 Review</span
              >
            </div>
            <v-card-text class="text-left pl-0">
              {{ product.description }}
            </v-card-text>
            <v-card-text class="pl-0 text-left pt-1">
              <p>Vendor: Ella - Halothemes</p>
              <p class="pt-1">SKU: KJSU-58636</p>
              <p class="pt-1">
                Availability: {{ product.stock ? "In Stock" : "Out Stock" }}
              </p>
            </v-card-text>
            <v-card-text class="pl-0">
              <span class="font-weight-black" style="font-size: 1.1rem">
                ${{
                  Math.trunc(
                    product.price -
                      product.price * (product.discountPercentage / 100)
                  )
                }}
              </span>
            </v-card-text>
            <v-card-text class="pl-0">
              <h4 class="text-left w-100 mb-3">Quantity:</h4>
              <div
                class="input py-4 w-75"
                style="
                  border-radius: 30px;
                  border: 1px solid black;
                  height: 42px;
                  padding: 0 !important;
                  width: 106px !important;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <v-icon
                  class="cursor-pointer"
                  @click="quantity > 1 ? quantity-- : false"
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
                  v-model="quantity"
                />
                <v-icon class="cursor-pointer" @click="quantity++"
                  >mdi-plus</v-icon
                >
              </div>
            </v-card-text>
            <v-card-text class="pl-0 pt-1">
              <span style="font-size: 0.8rem">
                Subtotal: ${{
                  Math.trunc(
                    product.price -
                      product.price * (product.discountPercentage / 100)
                  ) * quantity
                }}
              </span>
            </v-card-text>
            <v-card-actions
              class="w-100 pl-0 d-flex flex-column d-md-flex flex-md-row"
            >
              <v-btn
                class="w-md-75 w-50 bg-grey-darken-4 text-white"
                variant="outlined"
                style="text-transform: none; border-radius: 50px"
                density="comfortable"
                height="50"
                @click="addToCart(product)"
                :loading="btnLoading"
                >Add To Cart</v-btn
              >
              <div class="btns d-flex" style="gap: 10px">
                <v-btn
                  icon="mdi-heart-outline"
                  variant="outlined"
                  size="small"
                  style="border-radius: 50px"
                ></v-btn>
                <v-btn
                  icon="mdi-share-variant-outline"
                  variant="outlined"
                  size="small"
                  style="border-radius: 50px"
                ></v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { CartStore } from "@/stores/CartStore";
import { mapActions } from "pinia";
export default {
  inject: ["emitter"],
  data: () => ({
    product: {},
    tab: "",
    quantity: 1,
    btnLoading: false,
  }),
  methods: {
    async getProductById(id) {
      await axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => (this.product = res.data));
    },
    ...mapActions(CartStore, ["addItem"]),
    addToCart(product) {
      product.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.emitter.emit("openSnack", product.title);
        this.emitter.emit("Show");
      }, 1000);
      this.addItem(product);
    },
  },
  async mounted() {
    await this.getProductById(this.$route.params.id);
  },
};
</script>

<style></style>
