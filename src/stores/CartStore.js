import { defineStore } from "pinia";
export const CartStore = defineStore("cart-store", {
  state: () => ({
    // contain the the products added to the cart
    cartItems: [],
  }),
  actions: {
    addItem(product) {
      let exist = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == product.id) {
          this.cartItems[i].quantity += product.quantity;
          exist = true;
          break;
        }
      }
      // prevent the redunancy of the products
      if (!exist) {
        // Add isolated object, which its component has no reference on it
        this.cartItems.push(JSON.parse(JSON.stringify(product)));
      }
      // Add the unique items of cartItems to the local storage
      // every time you add a product you must modify the local storage every time
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    getItem() {
      // getItem function will be used in the drawer
      if (localStorage.getItem("cart-items")) {
        this.cartItems = JSON.parse(localStorage.getItem("cart-items"));
      }
    },
    deleteItem(id) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if ((this.cartItems[i].id = id)) {
          this.cartItems.splice(i, 1);
          break;
        }
      }
      // modify the cart items after deleting
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    setToLocaleStorage() {
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    resetItems() {
      // delete all items
      this.cartItems = [];
      // reset the local storage with empty array
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
  },
});
