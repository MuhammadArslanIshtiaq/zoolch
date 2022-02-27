<template>
  <section>
    <!-- item -->
    <div class="position-relative mb-5 pb-lg-5">
      <span class="icon-size-4 position-absolute start-0" style="top: -4rem">
        <img class="d-block h-100 w-100" src="/img/dots.svg" alt="..." />
      </span>

      <div class="container position-relative">
        <div class="bg-white rounded-lg shadow border">
          <div class="row gy-4">
            <div class="col-12 col-lg-5 col-xl-6">
              <div>
                <img
                  class="d-block h-100 w-100"
                  src="/img/a-image-0.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div class="col">
              <div class="p-4 p-xl-5">
                <ul class="nav flex-column gap-4 text-black text-center">
                  <li>
                    <button
                      type="button"
                      class="btn btn-lg btn-secondary fw-600 px-5"
                    >
                      <span>WHERE WE ARE</span>
                    </button>
                  </li>
                  <li>
                    <h5 class="mb-0 lh-base fw-normal">
                      We are an up-and-coming start-up from Frankfurt am Main,
                      which is on a mission to modernize the outdated
                      foreclosure market.
                    </h5>
                  </li>
                  <li>
                    <h5 class="mb-0 lh-base fw-normal">
                      With our digital solutions, we want to offer our customers
                      up-to-date information that can be called up at any time.
                      Our services are characterized by the fact that they are
                      suitable for everyone, whether an expert or a newcomer.
                    </h5>
                  </li>
                  <li>
                    <h5 class="mb-0 lh-base fw-normal">
                      We do our best to accompany you in the best possible way
                      on the way to the property and beyond.
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span class="icon-size-4 position-absolute end-0" style="bottom: -7rem">
        <img class="d-block h-100 w-100" src="/img/dots.svg" alt="..." />
      </span>
    </div>
    <!-- /item -->
    <OurTeamSection />
    <!-- item -->
    <div class="position-relative mb-5 pb-lg-5">
      <span class="icon-size-4 position-absolute start-0" style="top: -4rem">
        <img class="d-block h-100 w-100" src="/img/dots.svg" alt="..." />
      </span>

      <div class="container position-relative">
        <div class="bg-white rounded-lg shadow border">
          <div class="row gy-4">
            <div class="col">
              <div class="p-4 p-xl-5">
                <ul class="nav flex-column gap-4 text-black">
                  <li>
                    <h2 class="mb-0 fw-600 text-uppercase">
                      SPECIAL MARKETING SERVICES
                    </h2>
                  </li>
                  <li>
                    <h5 class="mb-0 lh-base fw-normal">
                      For experts and amateurs. Here you can find out everything
                      about foreclosures. Starting with the general processes
                      and formalities, through tips on how to proc- eed with the
                      search to the optimal stra- tegy when bidding.
                    </h5>
                  </li>
                  <li>
                    <h5 class="mb-0 lh-base fw-normal">
                      Here you can find out everything you need to know
                    </h5>
                  </li>
                  <li>
                    <router-link
                      title="CONTACT US"
                      to="/contact"
                      class="btn btn-lg btn-primary rounded-pill"
                    >
                      <span class="me-3">Learn More About it</span>
                      <span>
                        <i class="fa fa-arrow-right" />
                      </span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-lg-5 col-xl-6">
              <div>
                <img
                  class="d-block h-100 w-100"
                  src="/img/w-image-2.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <span class="icon-size-4 position-absolute end-0" style="bottom: -7rem">
        <img class="d-block h-100 w-100" src="/img/dots.svg" alt="..." />
      </span>
    </div>
    <!-- /item -->
    <!-- item -->
    <div class="position-relative mb-5 pb-lg-5">
      <div class="container position-relative">
        <div class="bg-white rounded-lg shadow border">
          <div class="row gy-4">
            <div class="col-12 col-lg-5 col-xl-6">
              <div>
                <img
                  class="d-block h-100 w-100"
                  src="/img/w-image-1.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div class="col">
              <div class="p-4 p-xl-5">
                <ul class="nav flex-column gap-4 text-black">
                  <li>
                    <h2 class="mb-0 fw-600 text-uppercase">
                      WEBSITE DEVELOPMENT
                    </h2>
                  </li>
                  <li>
                    <h5 class="mb-0 lh-base fw-normal">
                      For experts and amateurs. Here you can find out everything
                      about foreclosures. Starting with the general processes
                      and formalities, through tips on how to proc- eed with the
                      search to the optimal stra- tegy when bidding.
                    </h5>
                  </li>
                  <li>
                    <h5 class="mb-0 lh-base fw-normal">
                      Here you can find out everything you need to know
                    </h5>
                  </li>
                  <li>
                    <router-link
                      title="CONTACT US"
                      to="/contact"
                      class="btn btn-lg btn-primary rounded-pill"
                    >
                      <span class="me-3">Learn More About it</span>
                      <span>
                        <i class="fa fa-arrow-right" />
                      </span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /item -->
  </section>
</template>

<script>
import OurTeamSection from "./OurTeamSection.vue";
export default {
  components: { OurTeamSection },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>