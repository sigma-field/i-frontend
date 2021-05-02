<template>
  <div class="container">
    <mr-header></mr-header>
    <div id="about" v-html="aboutUs"></div>
    <mr-footer></mr-footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AboutDataService from "@/services/AboutDataService";

export default {
  components: {
    mrHeader: Header,
    mrFooter: Footer,
  },
  data() {
    return {
      aboutUs: "",
    };
  },
  methods: {
    getAboutUs() {
      AboutDataService.getAll().then((response) => {
        this.aboutUs = response.data._embedded.aboutUses[0].content;
        console.log(this.aboutUs);
      });
    },
  },
  created() {
    this.getAboutUs();
  },
};
</script>




