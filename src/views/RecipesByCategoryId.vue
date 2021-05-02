<template>
  <div class="home container">
    <mr-header></mr-header>
    <h2>Recipes</h2>
    <hr />
    <div class="row" v-for="i in Math.ceil(recipes.length / 3)">
      <div class="col-sm-4" v-for="recipe in recipes.slice((i - 1) * 3, i * 3)">
        <div class="card mb-3 mt-3">
          <router-link :to="'/recipe/'+recipe.id">
            <img v-bind:src="recipe.image" class="card-img-top" alt="..." />
          </router-link>
          <div class="card-body">
            <h5 class="card-title">{{recipe.title}}</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Added on: {{recipe.uploadTime}}</small>
          </div>
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
      recipes: [],
    };
  },
  methods: {
    getRecipesByCategoryId(id) {
      CategoryDataService.getCategoryRecipes(id).then((response) => {
        this.recipes = response.data._embedded.recipes;
      });
    },
  },
  props: ["categoryId"],

  created() {
    this.getRecipesByCategoryId(this.categoryId);
  },
};
</script>
