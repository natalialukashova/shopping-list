const App = {
  data() {
    return {
      title: "Список покупок",
      subtitle: "Что нужно купить?",
      inputPlaceholder: "Например, Тунец",
      inputValue: "",
      products: [],
    };
  },
  methods: {
    addNewProduct() {
      if (this.inputValue !== '') {
        this.products.push(this.inputValue);
        this.inputValue = "";
      }
    },
    deleteProduct(idx) {
      this.products.splice(idx, 1)
    }
  },
};
Vue.createApp(App).mount("#app");
