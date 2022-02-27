<template>
  <section
    class="min-vh-100 bg-cover bg-black bg-opacity-50 d-flex flex-column"
    style="padding-top: 11rem; background-image: url(img/banner-0.jpg)"
  >
    <div
      class="
        container
        d-flex
        flex-column flex-fill
        align-items-center
        justify-content-center
      "
    >
      <div class="text-center px-0 mx-auto col-12 col-md-10">
        <h1 class="mb-4 text-white display-6 fw-600 text-uppercase">
          WE BUILD BEAUTIFUL WEBSITES AND LEVEL UP YOUR DIGITAL MARKETING.
        </h1>
        <ul class="nav justify-content-center gap-3">
          <li class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <router-link
              title="portfolio"
              to="/portfolio"
              class="btn btn-lg btn-primary text-uppercase h-100 w-100"
            >
              See Proof
            </router-link>
          </li>
          <li class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <router-link
              title="contact"
              to="/contact"
              class="
                btn btn-lg btn-outline-primary
                border-2
                text-uppercase
                h-100
                w-100
              "
            >
              Get started
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hero Section",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>