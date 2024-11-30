<template>
  <div class="footer" :class="`d-flex flex-column justify-space-between`">
    <v-footer :app="true" absolute class="bg-grey-lighten-4 py-8">
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            lg="3"
            xl="3"
            md="6"
            sm="6"
            class="mx-sm-auto mx-md-auto"
          >
            <v-card :elevation="0" class="bg-transparent pl-0">
              <v-card-title
                class="pl-0 text-left pb-1 font-weight-black"
                style="font-size: 1rem"
                >SHOP</v-card-title
              >
              <v-card-text
                v-for="category in categories"
                :key="category.title"
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
              >
                <router-link
                  :to="{
                    name: 'ProductCategory',
                    query: {
                      category: category.category,
                      title: category.title,
                    },
                  }"
                  class="text-grey-darken-1 text-decoration-none"
                >
                  {{ category.title }}
                </router-link>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6"
            xl="3"
            lg="3"
            class="mx-sm-auto mx-md-auto"
          >
            <v-card :elevation="0" class="bg-transparent pl-0">
              <v-card-title
                class="pl-0 text-left pb-1 font-weight-black"
                style="font-size: 1rem"
                >FURTHER INFO.</v-card-title
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >About</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Customer Service</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Reward Program</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Shipping &amp; Returns</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Privacy Policy</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Terms &amp; Condition</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Blog</v-card-text
              >
            </v-card>
          </v-col>
          <v-col
            cols="12"
            lg="3"
            xl="3"
            md="6"
            sm="6"
            class="mx-sm-auto mx-md-auto"
          >
            <v-card :elevation="0" class="bg-transparent pl-0">
              <v-card-title
                class="pl-0 text-left pb-1 font-weight-black"
                style="font-size: 1rem"
                >CUSTOMER SERVICE</v-card-title
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Search Terms</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Advanced Search</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Orders And Returns</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Contact Us</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Theme FAQs</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Consultant</v-card-text
              >
              <v-card-text
                class="pl-0 t text-left text-grey-darken-1 text-left pb-0 pt-5"
                >Store Locations</v-card-text
              >
            </v-card>
          </v-col>
          <v-col
            cols="12"
            lg="3"
            xl="3"
            sm="6"
            md="6"
            class="mx-sm-auto mx-md-auto"
          >
            <v-card
              :elevation="0"
              class="bg-transparent pl-0 d-flex flex-column justify-left"
            >
              <img
                src="../../../ella/images/footer-logo.webp"
                class="w-75 pl-0 mb-5 ml-0"
                @click="$router.push({ name: 'home' })"
                style="cursor: pointer"
              />
              <v-card-text
                class="d-flex text-left align-center pl-0"
                style="gap: 10px"
              >
                <span>
                  <v-icon>mdi-map-marker</v-icon>
                </span>
                <p>
                  685 Market Street <br />
                  San Francisco, CA 94105, US
                </p>
              </v-card-text>
              <v-card-text
                class="d-flex text-left align-center pl-0"
                style="gap: 10px"
              >
                <span>
                  <v-icon>mdi-phone</v-icon>
                </span>
                <p>Call Us at (415)555-5555</p>
              </v-card-text>
              <v-card-text
                class="d-flex text-left align-center pl-0"
                style="gap: 10px"
              >
                <span>
                  <v-icon>mdi-email</v-icon>
                </span>
                <p>example@domain.com</p>
              </v-card-text>
            </v-card>
            <div class="social d-flex justify-space-around mt-4">
              <v-hover v-slot="{ props, isHovering }">
                <span
                  v-bind="props"
                  :class="`bg-${
                    isHovering ? 'grey-lighten-1' : 'grey-darken-3'
                  }`"
                  class="d-flex justify-center align-center"
                  style="
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: 0.5s;
                  "
                >
                  <v-icon>mdi-facebook</v-icon>
                </span>
              </v-hover>
              <v-hover v-slot="{ props, isHovering }">
                <span
                  v-bind="props"
                  :class="`bg-${
                    isHovering ? 'grey-lighten-1' : 'grey-darken-3'
                  }`"
                  class="d-flex justify-center align-center"
                  style="
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: 0.5s;
                  "
                >
                  <v-icon>mdi-instagram</v-icon>
                </span>
              </v-hover>
              <v-hover v-slot="{ props, isHovering }">
                <span
                  v-bind="props"
                  :class="`bg-${
                    isHovering ? 'grey-lighten-1' : 'grey-darken-3'
                  }`"
                  class="d-flex justify-center align-center"
                  style="
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: 0.5s;
                  "
                >
                  <v-icon>mdi-pinterest</v-icon>
                </span>
              </v-hover>
              <v-hover v-slot="{ props, isHovering }">
                <span
                  v-bind="props"
                  :class="`bg-${
                    isHovering ? 'grey-lighten-1' : 'grey-darken-3'
                  }`"
                  class="d-flex justify-center align-center"
                  style="
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: 0.5s;
                  "
                >
                  <v-icon>mdi-snapchat</v-icon>
                </span>
              </v-hover>
              <v-hover v-slot="{ props, isHovering }">
                <span
                  v-bind="props"
                  :class="`bg-${
                    isHovering ? 'grey-lighten-1' : 'grey-darken-3'
                  }`"
                  class="d-flex justify-center align-center"
                  style="
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: 0.5s;
                  "
                >
                  <v-icon>mdi-twitter</v-icon>
                </span>
              </v-hover>
            </div>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="6">
            <img
              src="../../../ella/images/cart-page-cards.webp"
              class="w-100 bg-transparent mt-9"
              alt=""
            />
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
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
};
</script>

<style></style>
