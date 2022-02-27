<template>
  <footer class="footer px-5 pt-4 mt-5 border-top shadow">
    <div>
      <div class="row gy-4 justify-content-lg-between">
        <div class="col-12 col-md-6 col-lg-4">
          <ul class="nav flex-column">
            <li>
              <router-link to="/">
                <div class="icon-size-2">
                  <img
                    src="/img/logo.jpg"
                    class="d-inline-block object-contain w-100 h-100"
                    alt="bored ape logo"
                  />
                </div>
              </router-link>
            </li>
            <li class="mb-3">
              <p class="mb-0 small">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enimad minim veniam, quis nostrud exercitation ullamcolaboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </li>
            <li>
              <p class="mb-0 small">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enimad minim veniam, quis nostrud exercitation ullamcolaboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-xl-2 pt-md-4">
          <ul class="nav flex-column gap-3">
            <li class="position-relative mb-3">
              <h6 class="mb-2 text-primary text-uppercase footer-title">
                PROMISED COUNTRY
              </h6>
            </li>
            <li>
              <a href>Promised Land UG</a>
            </li>
            <li>
              <a href> Metzlerstr. 26 </a>
            </li>
            <li>
              <a href> 60594 Frankfurt am Main </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-xl-2 pt-md-4">
          <ul class="nav flex-column gap-3">
            <li class="position-relative mb-3">
              <h6 class="mb-2 text-primary text-uppercase footer-title">
                SERVICES
              </h6>
            </li>
            <li>
              <a href>Property</a>
            </li>
            <li>
              <a href>Finance </a>
            </li>
            <li>
              <a href>Education</a>
            </li>
            <li>
              <a href>Realty Manager </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-xl-2 pt-md-4">
          <ul class="nav flex-column gap-3">
            <li class="position-relative mb-3">
              <h6 class="mb-2 text-primary text-uppercase footer-title">
                LEGAL
              </h6>
            </li>
            <li>
              <a href>Imprint</a>
            </li>
            <li>
              <a href>Data protection</a>
            </li>
            <li>
              <a href>Terms and Conditions</a>
            </li>
            <li>
              <a href>Disclaimer </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-top py-3 mt-3">
      <ul class="nav gap-4 justify-content-center social-media">
        <li>
          <a
            class="
              icon-size-1
              bg-primary
              d-flex
              align-items-center
              justify-content-center
              rounded-circle
              text-white text-decoration-none
            "
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fs-5 fa-facebook" />
          </a>
        </li>
        <li>
          <a
            class="
              icon-size-1
              bg-primary
              d-flex
              align-items-center
              justify-content-center
              rounded-circle
              text-white text-decoration-none
            "
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fs-5 fa-twitter" />
          </a>
        </li>
        <li>
          <a
            class="
              icon-size-1
              bg-primary
              d-flex
              align-items-center
              justify-content-center
              rounded-circle
              text-white text-decoration-none
            "
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fs-5 fa-linkedin" />
          </a>
        </li>
        <li>
          <a
            class="
              icon-size-1
              bg-primary
              d-flex
              align-items-center
              justify-content-center
              rounded-circle
              text-white text-decoration-none
            "
            href="http://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fs-5 fa-pinterest-p" />
          </a>
        </li>
        <li>
          <a
            class="
              icon-size-1
              bg-primary
              d-flex
              align-items-center
              justify-content-center
              rounded-circle
              text-white text-decoration-none
            "
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fs-5 fa-youtube-play" />
          </a>
        </li>
        <li>
          <a
            class="
              icon-size-1
              bg-primary
              d-flex
              align-items-center
              justify-content-center
              rounded-circle
              text-white text-decoration-none
            "
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fs-5 fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      msg: "Footer Primary",
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-title {
  display: inline-flex;
  flex-direction: column;

  &::before {
    content: "";
    background-color: #a52226;
    height: 0.1rem;
    width: 100%;
    display: block;
    position: absolute;
    bottom: 0;
  }

  &::after {
    content: "";
    background-color: #a52226;
    height: 0.4rem;
    display: block;
    border-radius: 20rem;
    transform: translateY(150%);
  }
}

a {
  color: #143349;

  &:hover {
    color: #a52226;
  }
}
</style>