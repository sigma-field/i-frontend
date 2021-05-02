<template>
  <div class="submit-form collapse" id="collapsePostCommentForm">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="postedBy">Your Fullname</label>
        <input
          type="text"
          class="form-control"
          id="postedBy"
          required="required"
          v-model="comment.postedBy"
          name="postedBy"
        />
      </div>

      <div class="form-group">
        <label for="content">Your Comment</label>
        <textarea
          class="form-control"
          id="content"
          required="required"
          v-model="comment.content"
          name="Content"
        />
      </div>

      <button @click="saveCommment" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <p>Comment succesfully submitted. Please be aware that your comment is not published until it's approved by the site owner.</p>
      <button class="btn border border-dark font-weight-bold mr-3 mb-3" @click="newComment">Post New</button>
    </div>
  </div>
</template>

<script>
import CommentDataService from "@/services/CommentDataService";

export default {
  props: ["recipeId"],

  name: "add-comment",
  data() {
    return {
      comment: {
        title: "",
        content: "",
        published: false,
        postedBy: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveCommment() {
      var data = {
        title: this.comment.title,
        content: this.comment.content,
        postedBy: this.comment.postedBy,
      };
      this.submitted = true;
      CommentDataService.update(this.recipeId, data)
        .then((response) => {
          this.comment.id = response.data.id;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newComment() {
      this.submitted = false;
      this.comment = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 600px;
}
</style>