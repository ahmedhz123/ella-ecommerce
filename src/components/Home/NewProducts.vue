<template>
  <div class="new-prods">
    <div class="d-flex mx-4 justify-space-between align-center">
      <h1 class="text-red">New Products</h1>
      <router-link
        class="text-black"
        :to="{
          name: 'ProductCategory',
          query: {
            title: categories[2].title,
            category: categories[2].category,
          },
        }"
        >Shop All</router-link
      >
    </div>
    <v-container fluid>
      <v-row
        class="d-sm-flex flex-sm-column-reverse d-md-flex flex-md-row d-lg-flex justify-lg-space-between align-lg-center"
      >
        <v-col cols="7" v-if="!laptops.length" class="mt-10">
          <v-container fluid>
            <v-row>
              <v-col cols="4" v-for="num in 3" :key="num">
                <v-skeleton-loader
                  type="image, article, button"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="7"
          lg="7"
          xl="7"
          xxl="7"
          v-if="laptops.length"
        >
          <Swiper
            :modules="modules"
            slides-per-view="3"
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :space-between="0"
            :breakpoints="breakpoints"
          >
            <swiper-slide v-for="product in laptops" :key="product.id">
              <v-card :elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div class="img overflow-hidden position-relative">
                    <img
                      :src="
                        obj[product.id] ? obj[product.id] : product.thumbnail
                      "
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
                        width: 60px;
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
                <v-card-text class="text-left pl-0 w-100">
                  {{
                    product.description.split(" ").length <= 10
                      ? product.description
                      : product.description.split(" ").slice(0, 8).join(" ") +
                        "..."
                  }}
                </v-card-text>
                <v-rating
                  v-model="product.rating"
                  half-increments
                  class="text-left w-100"
                  readonly
                  size="x-small"
                  style="font-size: 5px"
                  density="false"
                  color="yellow-darken-2"
                ></v-rating>
                <v-card-text class="pl-0 text-left">
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
                  class="pl-0 w-100 mb-1 ml-0"
                  mandatory
                  v-model="obj[product.id]"
                >
                  <v-btn
                    v-for="(pic, i) in product.images"
                    :key="i"
                    :value="pic"
                    variant="none"
                    style="
                      height: 48px;
                      width: 39px;
                      border-radius: 20px;
                      padding: 0;
                      padding-left: 0 !important;
                    "
                    :elevation="0"
                    class="pl-2 ml-0"
                    :ripple="false"
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
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col
          cols="12"
          sm="8"
          md="5"
          lg="5"
          xl="5"
          xxl="5"
          class="text-center mx-auto"
        >
          <img src="../../../ella/images/vr-banner.webp" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
export default {
  inject: ["emitter"],
  data: () => ({
    obj: {},
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      990: {
        slidesPerView: 3,
      },
    },
    categories: [
      {
        title: "Beauty",
        category: "beauty",
      },
      {
        title: "Fragrances",
        category: "fragrances",
      },
      {
        title: "Furniture",
        category: "furniture",
      },
      {
        title: "Groceries",
        category: "groceries",
      },
      {
        title: "Laptops",
        category: "laptops",
      },
      {
        title: "Vehicle",
        category: "vehicle",
      },
      {
        title: "Tablets",
        category: "tablets",
      },
    ],
  }),
  props: {
    laptops: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    showQuickView(product) {
      this.emitter.emit("display", product);
    },
  },
};
</script>

<style lang="scss">
div.new-prods {
  .swiper-pagination {
    position: relative;
    top: 5px;
    .swiper-pagination-bullet {
      background-color: black;
      width: 10px;
      height: 10px;
      margin-top: 1em;
    }
  }
}
</style>
