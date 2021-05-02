<template>
  <div>
    <div class="col-12 align-items-center" style="background-color:#171412">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-light">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          style="float:right; margin-top:auto;"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <em class="material-icons" id="toggler-icon">menu</em>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link custom" to="/">
              <i class="fa fa-home" aria-hidden="true"></i>
            </router-link>
            <router-link class="nav-item nav-link custom" to="/">
              Home
            </router-link>
            <router-link class="nav-item nav-link custom" to="/categories"
              >Recipes</router-link
            >
            <router-link class="nav-item nav-link custom" to="/about"
              >About Us</router-link
            >
          </div>
        </div>
      </nav>
    </div>
    <div class="page-header">
      <header class="row mb-3"></header>
      <div id="head-icon">
        <i class="fa fa-utensils mr-1" aria-hidden="true"></i>
        <i class="fa fa-hamburger mr-1" aria-hidden="true"></i>
        <i class="fa fa-pizza-slice" aria-hidden="true"></i>
        <br />BB RECIPES
      </div>
      <p id="head-text">FOOD&DRINKS</p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.navbar-nav > .custom:hover {
  color: grey;
}
</style>
