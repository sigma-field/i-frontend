<template>
  <div class="container bg-cover">
    <mr-header></mr-header>
    <h2>Categories</h2>
    <hr />
    <div class="row" v-for="i in Math.ceil(categories.length / 3)">
      <div
        class="col-sm-4"
        v-for="category in categories.slice((i - 1) * 3, i * 3)"
      >
        <div class="card mb-3 mt-3">
          <div class="card-body">
            <h5 class="card-title">{{ category.name }}</h5>
          </div>
          <router-link :to="'recipes/' + category.id">
            <img
              v-bind:src="category.image"
              class="card-img-top img-thumbnail"
            />
          </router-link>
        </div>
      </div>
    </div>
    <mrFooter></mrFooter>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CategoryDataService from "@/services/CategoryDataService";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    mrHeader: Header,
    mrFooter: Footer,
  },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    getAllCategories() {
      CategoryDataService.getAll().then((response) => {
        this.categories = response.data._embedded.categories;
      });
    },
  },
  created() {
    this.getAllCategories();
  },
};
</script>
<style lang="css"></style>
