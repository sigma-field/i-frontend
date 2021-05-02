<template>
  <div class="container">
    <mr-header></mr-header>
    <mr-recipe-carousel :recents="recents"></mr-recipe-carousel>
    <mr-footer></mr-footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import RecipeCarousel from "@/components/RecipeCarousel.vue";
import Footer from "@/components/Footer.vue";
import RecipeDataService from "@/services/RecipeDataService";
export default {
  name: "Home",
  components: {
    mrHeader: Header,
    mrRecipeCarousel: RecipeCarousel,
    mrFooter: Footer,
  },
  data() {
    return {
      recents: [],
    };
  },

  methods: {
    getRecents() {
      RecipeDataService.getAll().then((response) => {
        this.recents = response.data._embedded.recipes
          .sort((a, b) => b.id - a.id)
          .slice(0, 3);
      });
    },
  },
  created() {
    this.getRecents();
  },
};
</script>




