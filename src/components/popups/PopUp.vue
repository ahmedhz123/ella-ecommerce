<template>
  <div class="dialog">
    <v-dialog v-model="dialog" class="w-100 w-md-" persistent>
      <v-card class="py-8 text-center d-flex justify-center align-center">
        <div
          class="icon d-flex align-center justify-center"
          style="
            border-radius: 50%;
            border: 1px solid green;
            width: 100px;
            height: 100px;
          "
        >
          <v-icon color="success" style="font-size: 70px">mdi-check</v-icon>
        </div>
        <v-card-title class="font-weight-bold" style="font-size: 1.4rem"
          >Order Placed Successfuly!</v-card-title
        >
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci
          doloremque mollitia voluptatum exercitationem tempora aliquam!
          Doloribus, incidunt eos amet placeat maiores sequi aliquid quis optio
          expedita laboriosam animi maxime.
        </v-card-text>
        <v-card-actions>
          <v-btn
            style="text-transform: none"
            color="info"
            variant="elevated"
            @click="closeDialog()"
            >Got it</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { CartStore } from "@/stores/CartStore";
import { mapActions } from "pinia";
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("close-dialog");
        }, 1000);
      }
    },
  },
  methods: {
    ...mapActions(CartStore, ["resetItems"]),
    closeDialog() {
      this.dialog = false;
      this.$router.push({ name: "home" });
      this.resetItems();
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>

<style></style>
