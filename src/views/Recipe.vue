<template>
  <div class="container recipe">
    <div class="row">
      <div class="col-12">
        <mr-header></mr-header>

        <h1>
          <b>{{recipe.title}}</b>
        </h1>
        <hr />
        <img class="img-fluid" v-bind:src="recipe.image" alt />
        <div class="properties mt-3">
          <label class="border-left border-dark font-weight-bold mb-3 p-2">
            <b>Prep. Time:{{recipe.preparationTime}} mins.</b>
          </label>

          <label class="border-left border-dark font-weight-bold mb-3 p-2">
            <b>
              <b>Cooking Time:</b>
              {{recipe.cookingTime}} mins.
            </b>
          </label>

          <label class="border-left border-dark font-weight-bold mb-3 p-2">
            <b>Level:</b>
            {{recipe.level}}
          </label>

          <label class="border-left border-right border-dark font-weight-bold mb-3 p-2">
            <b>Servings:</b>
            {{recipe.servings}}
          </label>
        </div>
        <hr />
        <h3>
          <b>Ingredients</b>
        </h3>
        <hr />
        <p v-html="recipe.ingredients"></p>
        <hr />
        <h3>
          <b>Instructions</b>
        </h3>
        <hr />
        <p v-html="recipe.instructions"></p>
        <hr />

        <a
          class="btn border border-dark font-weight-bold mr-3 mb-3"
          data-toggle="collapse"
          href="#collapsePostCommentForm"
          role="button"
          aria-expanded="false"
          aria-controls="collapsePostCommentForm"
        >Post Comment</a>

        <a
          class="btn border border-dark font-weight-bold mb-3"
          id="showHideComments"
          data-toggle="collapse"
          href="#collapseComments"
          role="button"
          aria-expanded="false"
          aria-controls="collapseComments"
          v-on:click="changeText()"
        >Show Comments</a>
        <mr-add-comment :recipeId="recipeId"></mr-add-comment>
        <hr />
        <mr-list-comments :recipeId="recipeId"></mr-list-comments>
      </div>
    </div>
    <mr-footer></mr-footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import AddComment from "@/components/comments/AddComment.vue";
import ListComments from "@/components/comments/ListComments.vue";
import RecipeDataService from "@/services/RecipeDataService";

import RecipeScript from "@/assets/javascripts/recipe";
import http from "../http-common";
export default {
  props: ["recipeId"],
  name: "Home",
  components: {
    mrHeader: Header,
    mrAddComment: AddComment,
    mrListComments: ListComments,
    mrFooter: Footer,
  },
  data() {
    return {
      recipeId: this.$route.recipeId,
      recipe: "",
    };
  },
  methods: {
    findRecipeById(id) {
      RecipeDataService.get(id).then((response) => {
        this.recipe = response.data;
        console.log(this.recipe);
      });
    },
    changeText() {
      var x = document.getElementById("showHideComments");
      if (x.innerHTML === "Show Comments") {
        x.innerHTML = "Hide Comments";
      } else {
        x.innerHTML = "Show Comments";
      }
    },
  },
  created() {
    this.findRecipeById(this.recipeId);
  },
  mounted() {},
};
</script>

