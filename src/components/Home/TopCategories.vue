<template>
  <div class="cats mt-10">
    <img
      src="../../../ella/images/cyber-banner.webp"
      style="width: 100%"
      alt=""
    />
    <div class="top mt-7">
      <div class="title d-flex justify-space-between">
        <h3 class="font-weight-black text-black flex-grow-1">Top Categories</h3>
      </div>
      <div class="prods pt-5">
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              lg="2"
              md="4"
              sm="6"
              v-for="product in products"
              :key="product.title"
            >
              <v-card :elevation="0" class="pa-2 mb-16">
                <div class="img">
                  <img :src="product.link" />
                </div>
                <h3 style="font-size: 20px !important; font-weight: 500">
                  {{ product.title }}
                </h3>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        title: "Mobile Phones",
        link: " https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Laptops",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "TVS",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "PCs",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "Audio & Video",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "Gaming",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "Home Appliances",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },
      {
        title: "Kitchen",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "Cameras",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "Consumables",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },
      {
        title: "Smart Homes",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "Accessories",
        link: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
};
</script>

<style></style>
