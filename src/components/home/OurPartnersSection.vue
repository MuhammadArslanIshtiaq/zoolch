<template>
  <section class="mb-5">
    <div class="container">
      <div class="text-center">
        <!-- heading -->
        <div class="mb-5">
          <div class="heading-primary position-relative mb-5">
            <span class="mb-0 title-bg d-none d-lg-block">Our Partners</span>
            <h1 class="mb-0 fw-bold">Our Partners</h1>
          </div>
        </div>
        <!-- /heading -->
      </div>

      <div class="py-5">
        <VueSlickCarousel v-bind="settings">
          <div class="px-3">
            <div class="p-4 bg-white border shadow rounded-lg">
              <img
                class="icon-size-5 mx-auto"
                src="/img/p-image-0.png"
                alt=".."
              />
            </div>
          </div>
          <div class="px-3">
            <div class="p-4 bg-white border shadow rounded-lg">
              <img
                class="icon-size-5 mx-auto"
                src="/img/p-image-1.png"
                alt=".."
              />
            </div>
          </div>
          <div class="px-3">
            <div class="p-4 bg-white border shadow rounded-lg">
              <img
                class="icon-size-5 mx-auto"
                src="/img/p-image-2.png"
                alt=".."
              />
            </div>
          </div>
          <div class="px-3">
            <div class="p-4 bg-white border shadow rounded-lg">
              <img
                class="icon-size-5 mx-auto"
                src="/img/p-image-0.png"
                alt=".."
              />
            </div>
          </div>
          <div class="px-3">
            <div class="p-4 bg-white border shadow rounded-lg">
              <img
                class="icon-size-5 mx-auto"
                src="/img/p-image-1.png"
                alt=".."
              />
            </div>
          </div>
          <div class="px-3">
            <div class="p-4 bg-white border shadow rounded-lg">
              <img
                class="icon-size-5 mx-auto"
                src="/img/p-image-2.png"
                alt=".."
              />
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,

        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>