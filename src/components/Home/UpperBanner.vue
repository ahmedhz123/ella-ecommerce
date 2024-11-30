<template>
  <div class="banner mx-0">
    <div class="container mx-0">
      <img
        src="../../../ella/images/banner-bg.jpg"
        class="w-100 pb-16 position-relative"
        style="height: 560px"
        alt=""
      />
      <v-container>
        <v-row>
          <v-col
            cols="6"
            class="pt-0 position-absolute text"
            style="left: 20px; top: 250px"
          >
            <div class="cont mt-1 d-flex justfiy-start flex-column">
              <h1 class="text-white font-weight-black text-left">
                <span style="color: rgb(45, 251, 223)">Huge Saving</span>
                on<br /><span> UHD Televisions</span>
              </h1>
              <p class="text-white text-left mt-5" style="font-size: 1.1rem">
                Sale up 70% off an selected items*
              </p>
              <v-btn
                variant="outlined"
                density=""
                style="
                  border-radius: 90px;
                  text-transform: capitalize;
                  width: 40%;
                "
                class="py-6 px-10 mt-10 font-weight-bold text-center text-white"
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
div.banner {
  height: 500px;
  div.v-col {
    h1 {
      font-size: 2.5rem;
    }
  }
}
@media (max-width: 990px) {
  div.banner {
    div.v-col {
      margin-bottom: 8em;
      top: 150px !important;
    }
  }
}
@media (min-width: 991px) {
  div.banner {
    div.v-col {
      margin-bottom: 8em;
      top: 280px !important;
    }
  }
}
@media (max-width: 776px) {
  div.banner {
    img {
      height: 200px;
      object-fit: cover;
    }
    div.v-col {
      top: 150px !important;
      div {
        span {
          font-size: 1.8rem;
        }
        h1 {
          font-size: 1.7rem;
        }
        .v-btn__content {
          font-size: 1rem;
        }
      }
    }
  }
}
@media (max-width: 575px) {
  div.banner {
    img {
      height: 200px;
    }
    div.v-col {
      top: 150px !important;
      margin-bottom: 2em;
      div {
        span {
          font-size: 1.4rem;
        }
        h1 {
          font-size: 0.5rem;
        }
        .v-btn__content {
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>
