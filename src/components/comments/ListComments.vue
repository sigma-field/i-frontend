<template>
  <div class="list row">
    <div class="col-md-12 collapse" id="collapseComments">
      <h4>Comments</h4>
      <div class="card mb-3" v-for="comment in comments">
        <div class="card-header">
          Posted by:
          <span style="font-weight: bold;">{{comment.postedBy}}</span> on
          <span>{{comment.postDate}}</span>
        </div>
        <div class="card-body">{{comment.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentDataService from "@/services/CommentDataService";
import RecipeDataService from "@/services/RecipeDataService";
export default {
  name: "comments-list",
  props: ["recipeId"],
  data() {
    return {
      comments: [],
      currentComment: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieve() {
      // console.log(this.recipeId);
      RecipeDataService.getComments(this.recipeId)
        .then((response) => {
          this.comments = response.data._embedded.comments;

          console.log(this.comments);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieve();
      this.currentComment = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(comment, index) {
      this.currentComment = comment;
      this.currentIndex = index;
    },

    removeAllComments() {
      CommentDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      CommentDataService.findByTitle(this.title)
        .then((response) => {
          this.comments = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieve();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
}
</style>