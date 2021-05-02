<template>
  <section class="pt-5 pb-5">
    <div class="container my-3">
      <h2 class="font-weight-light">Recent recipes</h2>
      <div class="row mx-auto my-auto">
        <div
          id="recipeCarousel"
          class="carousel slide w-100"
          data-ride="carousel"
        >
          <div class="carousel-inner w-100" role="listbox">
            <div
              class="carousel-item"
              v-for="recipe in normalItems"
              :key="recipe.id"
            >
              <div class="col-md-4">
                <div class="card-body">
                  <router-link :to="'/recipe/' + recipe.id">
                    <img
                      class="img-fluid"
                      alt="100%x280"
                      v-bind:src="recipe.image"
                    />
                  </router-link>
                  <h4 class="card-title">{{ recipe.title }}</h4>
                  <p id="addedOn">Added on: {{ recipe.uploadTime }}</p>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev w-auto"
            href="#recipeCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark border border-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next w-auto"
            href="#recipeCarousel"
            role="button"
            data-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark border border-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["recents"],
  data() {
    return {};
  },
  computed: {
    normalItems: function() {
      return this.recents.slice(0, 5);
    },
  },
  methods: {
    slideCarousel() {
      $("#recipeCarousel").carousel({
        interval: 3000,
      });
      console.log("asdfdasf");
      $(".carousel .carousel-item").each(function() {
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(":first");
        }
        next
          .children(":first-child")
          .clone()
          .appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {
          next = next.next();
          if (!next.length) {
            next = $(this).siblings(":first");
          }

          next
            .children(":first-child")
            .clone()
            .appendTo($(this));
        }
      });
    },
  },
  updated() {
    this.slideCarousel();
    document.querySelector(".carousel-item").classList.add("active");
  },
};
</script>

<style lang="css">
#addedOn {
  font-size: 16px;
}

@media (max-width: 768px) {
  .carousel-inner .carousel-item > div {
    display: none;
  }
  .carousel-inner .carousel-item > div:first-child {
    display: block;
  }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

/* display 3 */
@media (min-width: 768px) {
  .carousel-inner .carousel-item-right.active,
  .carousel-inner .carousel-item-next {
    transform: translateX(33.333%);
  }

  .carousel-inner .carousel-item-left.active,
  .carousel-inner .carousel-item-prev {
    transform: translateX(-33.333%);
  }
}

.carousel-inner .carousel-item-right,
.carousel-inner .carousel-item-left {
  transform: translateX(0);
}
</style>
