<template>
  <div class="deals">
    <div class="d-flex mx-4 justify-space-between align-center">
      <h1 :class="`text-${titleColor}`">{{ title }}</h1>
      <router-link
        :to="{
          name: 'ProductCategory',
          query: {
            title: categories[index].title,
            category: categories[index].category,
          },
        }"
        class="text-black"
        >Shop All</router-link
      >
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col v-for="num in 4" :key="num" cols="3">
          <v-skeleton-loader type="image, article"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :modules="modules"
      slides-per-view="4"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :loop="true"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :navigation="{ prevIcon: 'prevIcon', nextIcon: 'nextIcon' }"
      :breakpoints="breakpoints"
      :space-between="10"
      v-if="products.length"
    >
      <swiper-slide v-for="product in products" :key="product.id">
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
              `(${product.title}) ${product.description}`.length <= 55
                ? `(${product.title}) ${product.description}`
                : `(${product.title})
            ${product.description}`.substring(0, 55) + "..."
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
            class="pl-0 ml-0 w-100"
            v-model="obj[product.id]"
            :mandatory="true"
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
              class="pl-6 ml-0"
              :elevation="0"
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
      <div class="prevIcon"></div>
      <div class="nextIcon"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Navigation, Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
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
        slidesPerView: 3,
      },
      990: {
        slidesPerView: 4,
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
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  methods: {
    showQuickView(product) {
      this.emitter.emit("display", product);
    },
  },
};
</script>

<style lang="scss">
div.deals {
  .swiper-button-prev {
    left: 10px;
    right: auto;
    border: 2px solid black;
    border-radius: 40px;
    width: 35px;
    top: 30%;
    height: 35px;
    &::after {
      font-family: swiper-icons;
      text-transform: none !important;
      letter-spacing: 0;
      font-variant: initial;
      line-height: 1;
      font-size: 1.2rem;
      color: black;
    }
  }
  .swiper-button-next {
    right: 10px;
    left: auto;
    border: 2px solid black;
    border-radius: 40px;
    width: 35px;
    top: 30%;
    height: 35px;
    &::after {
      font-family: swiper-icons;
      text-transform: none !important;
      letter-spacing: 0;
      font-variant: initial;
      line-height: 1;
      font-size: 1.2rem;
      color: black;
    }
  }
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
