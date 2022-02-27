<template>
  <section class="py-0 mt-5">
    <div class="pt-5">
      <div class="height-size bg-black">
        <div class="row mx-0 h-100">
          <div
            class="
              h-100
              px-0
              col-12 col-md-8 col-lg-5 col-xl-4
              me-auto
              position-relative
            "
          >
            <span class="d-block h-100 w-100 position-absolute">
              <img
                class="d-block h-100 w-100"
                src="img/banner-0.jpg"
                alt="..."
              />
            </span>
            <div
              class="h-100 bg-dark bg-opacity-90 text-white position-relative"
            >
              <div class="p-4 p-xl-5">
                <ul class="nav flex-column gap-4">
                  <li>
                    <hr class="w-25 opacity-100" style="height: 0.25rem" />
                  </li>
                  <li>
                    <h4 class="mb-0 fw-600">BLOG & CASE STUDIES</h4>
                  </li>
                  <li>
                    <p class="mb-0">
                      Learn more from our industry experts on how to improve
                      your business and some of the ways we've helped our
                      clients level up theirs.
                    </p>
                  </li>
                  <li>
                    <div class="px-0 col-7 col-sm-6 col-md-5 col-lg-6">
                      <router-link
                        title="Our Blogs"
                        to="/blogs"
                        class="btn btn-light text-capitalize w-100"
                      >
                        Our Blogs
                      </router-link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="h-100 col px-0 d-none d-md-block">
            <div class="h-100">
              <img
                class="d-block h-100 w-100 object-cover"
                src="img/banner-0.jpg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>