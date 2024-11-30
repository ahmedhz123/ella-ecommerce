<template>
  <div class="products mt-10">
    <v-container v-if="!products.length" class="px-10 px-sm-auto">
      <v-row>
        <v-col cols="12" md="4" lg="3" sm="12" v-for="num in 4" :key="num">
          <v-skeleton-loader type="image,article"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="products.length">
      <v-row>
        <v-col
          cols="12"
          md="4"
          lg="3"
          sm="6"
          class="pl-sm-7"
          v-for="product in products"
          :key="product.id"
        >
          <v-lazy>
            <v-card :elevation="0" class="pb-5">
              <v-hover v-slot="{ isHovering, props }">
                <div class="img overflow-hidden position-relative">
                  <img
                    :src="obj[product.id] ? obj[product.id] : product.thumbnail"
                    class="w-100"
                    height="250"
                    :style="`scale: ${
                      isHovering ? 1.1 : 1
                    }; transition: 0.5s; cursor: pointer`"
                    v-bind="props"
                  />
                  <v-btn
                    style="
                      text-transform: none;
                      position: absolute;
                      border-radius: 30px;
                      width: 100px;
                      height: 30px;
                      left: 50%;
                      top: 50%;
                      background-color: white;
                      transform: translateX(-50%);
                      transition: 0.5s;
                    "
                    @click="showQuickView(product)"
                    class="btn"
                    v-bind="props"
                    :style="`opacity: ${isHovering ? 1 : 0}`"
                    variant="outlined"
                    >Quick View</v-btn
                  >
                </div>
              </v-hover>
              <v-card-text
                class="text-left pl-0 w-100 text-sm-center text-md-left text-center"
              >
                {{
                  `(${product.title}) ${product.description}`.length <= 55
                    ? `(${product.title}) ${product.description}`
                    : `(${product.title})
            ${product.description}`.substring(0, 55) + "..."
                }}
              </v-card-text>
              <v-rating
                v-model="product.rating"
                half-increments
                class="text-left w-100 d-flex justify-center d-sm-flex justify-sm-center d-md-flex justify-md-start"
                readonly
                size="x-small"
                style="font-size: 5px"
                density="false"
                color="yellow-darken-2"
              ></v-rating>
              <v-card-text
                class="pl-0 text-left text-sm-center text-md-left text-center"
              >
                <del>${{ product.price }}</del>
                <span class="font-weight-black text-red">
                  ${{
                    Math.trunc(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    )
                  }}
                </span>
              </v-card-text>
              <v-btn-toggle
                class="pl-0 ml-0 w-100 d-sm-flex justify-sm-center d-flex justify-center"
                v-model="obj[product.id]"
                mandatory
              >
                <v-btn
                  v-for="(pic, i) in product.images.slice(0, 4)"
                  :key="i"
                  :value="pic"
                  variant="none"
                  class="ml-0"
                  :elevation="0"
                  :ripple="false"
                  style="
                    height: 48px;
                    width: 39px;
                    border-radius: 20px;
                    padding: 0;
                    padding-left: 0 !important;
                  "
                >
                  <img
                    :src="pic"
                    style="border-radius: 50%; border: 0.1px solid black"
                    width="35"
                    height="35"
                  />
                </v-btn>
              </v-btn-toggle>
              <v-card-actions>
                <v-btn
                  variant="outlined"
                  style="text-transform: none"
                  rounded="xl"
                  class="py-1 px-13 mx-auto"
                  @click="
                    $router.push({
                      name: 'prod-details',
                      params: { id: product.id },
                    })
                  "
                  >Choose Option</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  inject: ["emitter"],
  components: {
    VSkeletonLoader,
  },
  data: () => ({
    obj: {},
    products: [],
  }),
  watch: {
    async $route() {
      if (this.$route.name == "ProductCategory") {
        document.documentElement.scrollTo(0, 0);
        await this.getProductsByCategory(this.$route.query.category);
      }
    },
  },
  methods: {
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.products = res.data.products));
    },
    showQuickView(product) {
      this.emitter.emit("display", product);
    },
  },
  async mounted() {
    if (!this.$route.query.category) {
      this.$router.go(-1);
    }
    await this.getProductsByCategory(this.$route.query.category);
  },
};
</script>

<style></style>
