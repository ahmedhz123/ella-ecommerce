<template>
  <div class="top">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4">
          <div class="img">
            <img src="../../../ella/images/playstations.webp" class="w-100" />
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <div class="img">
            <img src="../../../ella/images/headset.webp" class="w-100" />
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <div class="img">
            <img src="../../../ella/images/chairs.webp" class="w-100" />
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
          <div class="img">
            <img src="../../../ella/images/iphones.webp" class="w-100" />
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
          <div class="img">
            <img src="../../../ella/images/laptops.webp" class="w-100" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
div.img {
  overflow: hidden;
  cursor: pointer;
  &:hover img {
    scale: 1.07;
    transition: 0.7s;
  }
  img {
    border-radius: 10px;
  }
}
</style>
