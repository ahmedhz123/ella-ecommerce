<template>
  <div class="bar">
    <v-app-bar color="indigo-darken-3" style="position: fixed; top: 0">
      <v-container>
        <v-row align="center">
          <v-col cols="2">
            <img
              src="../../assets/logo.png"
              class="w-100"
              @click="$router.push({ name: 'home' })"
              style="cursor: pointer"
            />
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="6" class="pl-md-0">
            <ul class="d-flex align-center justify-space-between">
              <li
                v-for="category in categories"
                :key="category.title"
                style="list-style: none"
              >
                <router-link
                  style="text-decoration: none; color: white; font-weight: 600"
                  class="pl-md-2"
                  :to="{
                    name: 'ProductCategory',
                    query: {
                      category: category.category,
                      title: category.title,
                    },
                  }"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="2">
            <div class="icons d-flex align-center justify-space-evenly">
              <div class="first-icon">
                <svg
                  data-icon="search"
                  viewBox="0 0 512 512"
                  style="width: 30px"
                  height="100%"
                >
                  <path
                    fill="white"
                    d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
                  ></path>
                </svg>
              </div>
              <div
                class="second-icon"
                @click="displayCart()"
                :style="`cursor: pointer; pointer-events: ${
                  $route.name === 'cartPage' ? 'none' : 'unset'
                }`"
              >
                <v-badge
                  color="red"
                  :content="cartItems.length"
                  location="top left"
                  offset-y="-30"
                  offset-x="30"
                ></v-badge>
                <svg
                  viewBox="0 0 1024 1024"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="path1"
                    fill="white"
                    d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path2"
                    fill="white"
                    d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path3"
                    fill="white"
                    d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
                  ></path>
                </svg>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { CartStore } from "@/stores/CartStore";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(CartStore, ["cartItems"]),
  },
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
  inject: ["emitter"],
  methods: {
    displayCart() {
      this.emitter.emit("Show");
    },
  },
};
</script>

<style></style>
