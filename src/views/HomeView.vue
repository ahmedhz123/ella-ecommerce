<template>
  <div class="home">
    <UpperBanner class="w-100 mr-0" />
    <TopFeatures class="mt-2 mb-2" />
    <TopOffers class="bg-grey-lighten-3 py-8" />
    <ProductsComponent
      :products="flashDeals"
      title="Flash Deals"
      titleColor="red"
      class="pt-16 pb-8 px-4"
      :index="0"
    />
    <TopCategories />
    <NewProducts :laptops="newProducts" class="py-8" />
    <QualityFeatures class="bg-grey-lighten-2 py-10" />
    <ProductsComponent
      :products="groceries"
      title="Groceries"
      titleColor="black-lighten-3"
      class="pt-16 pb-8 px-4"
      :index="3"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <img src="../../ella/images/band-left-cover.webp" class="w-100" />
        </v-col>
        <v-col cols="6">
          <img src="../../ella/images/band-right-cover.webp" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
    <ProductsComponent
      :products="beauty"
      title="Beauty"
      titleColor="black-lighten-3"
      class="pt-16 pb-8 px-4"
      :index="0"
    />
    <img src="../../ella/images/tv-banner.webp" class="w-100" />
    <ProductsComponent
      :products="fragrances"
      title="Fragrances"
      titleColor="red"
      class="pt-16 pb-8 px-4"
      :index="1"
    />
    <WhyShopWithUs class="px-4 py-10" />
  </div>
</template>

<script>
import UpperBanner from "@/components/Home/UpperBanner.vue";
import TopFeatures from "@/components/Home/TopFeatures.vue";
import TopOffers from "@/components/Home/TopOffers.vue";
import ProductsComponent from "@/components/Home/ProductSwiper.vue";
import TopCategories from "@/components/Home/TopCategories.vue";
import NewProducts from "@/components/Home/NewProducts.vue";
import QualityFeatures from "@/components/Home/QualityFeatures.vue";
import WhyShopWithUs from "@/components/Home/WhyShopWithUs.vue";
import axios from "axios";
export default {
  data: () => ({
    flashDeals: [],
    newProducts: [],
    groceries: [],
    beauty: [],
    fragrances: [],
  }),
  components: {
    UpperBanner,
    TopFeatures,
    TopOffers,
    ProductsComponent,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopWithUs,
  },
  methods: {
    async getProducts() {
      await axios.get("https://dummyjson.com/products").then((res) => {
        console.log(res.data.products);
        this.flashDeals = res.data.products.slice(0, 8);
        this.newProducts = res.data.products.filter(
          (el) => el.category === "furniture"
        );
        this.groceries = res.data.products.filter(
          (el) => el.category === "groceries"
        );
        this.beauty = res.data.products.filter(
          (el) => el.category === "beauty"
        );
        this.fragrances = res.data.products.filter(
          (el) => el.category === "fragrances"
        );
      });
    },
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>

<style></style>
