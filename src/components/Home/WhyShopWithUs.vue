<template>
  <div class="why">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="3">
          <v-card :elevation="0" class="bg-transparent">
            <img src="../../../ella/images/free-shipping.png" width="50" />
            <v-card-title
              style="text-wrap: wrap"
              class="text-white font-weight-bold"
              >Free Shipping On First Order</v-card-title
            >
            <p class="text-white">Lorem ipsum dolor sit amet.</p>
            <a href="" class="text-white">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="3">
          <v-card :elevation="0" class="bg-transparent">
            <img src="../../../ella/images/weekly-flash-sales.png" width="50" />
            <v-card-title
              style="text-wrap: wrap"
              class="text-white font-weight-bold"
              >Weekly Flash Sale</v-card-title
            >
            <p class="text-white">Lorem ipsum dolor sit amet.</p>
            <a href="" class="text-white">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="3">
          <v-card :elevation="0" class="bg-transparent">
            <img src="../../../ella/images/discount.png" width="50" />
            <v-card-title
              style="text-wrap: wrap"
              class="text-white font-weight-bold"
              >Annual Payment Discount</v-card-title
            >
            <p class="text-white">Lorem ipsum dolor sit amet.</p>
            <a href="" class="text-white">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="3">
          <v-card :elevation="0" class="bg-transparent">
            <img src="../../../ella/images/cash-back.png" width="50" />
            <v-card-title
              style="text-wrap: wrap"
              class="text-white font-weight-bold"
              >Cashback Reward Program</v-card-title
            >
            <p class="text-white">Lorem ipsum dolor sit amet.</p>
            <a href="" class="text-white">Learn More</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.why {
  background-image: url("../../../ella/images/why-shop-with-us-banner.webp");
  background-size: cover;
}
</style>
