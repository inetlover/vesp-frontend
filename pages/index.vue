<template>
  <div>
    <a href="img/ecodesign_900.png" class="glightbox">
      <img src="img/ecodesign_150.png" alt="image" />
    </a>
  </div>
</template>

<script>
// import "glightbox/dist/js/glightbox.min.js"
// import { GLightbox } from "glightbox/src/js/glightbox";
// import { GLightbox } from "glightbox";
// import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

export default {
  name: "IndexPage",
  mounted() {
    // eslint-disable-next-line no-undef
    new GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  },
};
</script>
