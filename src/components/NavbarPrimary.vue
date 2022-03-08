<template>
  <nav
    id="nav"
    class="
      navbar navbar-expand-lg navbar-light
      position-absolute
      fixed-top
      top-20
      px-3
    "
  >
    <div class="container bg-white rounded-xl p-xl-3">
      <router-link to="/" class="navbar-brand me-auto">
        <div class="logo ms-xl-5">
          <img
            src="/img/logo.jpg"
            class="d-inline-block align-top w-100 h-100"
            alt="bored ape logo"
          />
        </div>
      </router-link>
      <button
        id="nav-toggle"
        type="button"
        class="navbar-dark navbar-toggler collapsed"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div
        class="navbar-collapse collapse bg-white p-3"
        id="navbarSupportedContent"
      >
        <div class="navbar-nav ms-auto" id="nav-bar">
          <ul class="nav align-items-center gap-3">
            <li>
              <router-link title="HOME" to="/" class="nav-link">
                HOME
              </router-link>
            </li>

            <li>
              <router-link title="SERVICES" to="/services" class="nav-link">
                SERVICES
              </router-link>
            </li>
            <li>
              <router-link title="PRODUCTS" to="/products" class="nav-link">
                PRODUCTS
              </router-link>
            </li>
            <li>
              <router-link title="PORTFOLIO" to="/portfolio" class="nav-link">
                PORTFOLIO
              </router-link>
            </li>

            <li>
              <router-link title="ABOUT US" to="/about" class="nav-link">
                ABOUT US
              </router-link>
            </li>
            <li class="ms-lg-5">
              <router-link
                title="CONTACT US"
                to="/contact"
                class="btn btn-primary text-white"
              >
                CONTACT US
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      msg: "Navbar Primary",
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  font-weight: 400;
  color: #143349 !important;
  text-transform: uppercase;

  &:hover,
  &.router-link-exact-active {
    color: #a52226 !important;
  }
}
</style>