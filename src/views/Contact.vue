<template>
  <div class="home-page" style="padding-top: 8rem">
    <NavbarPrimary />
    <div>
      <ContactSection />
    </div>
    <FooterPrimary />
  </div>
</template>

<script>
// @ is an alias to /src

import NavbarPrimary from "../components/NavbarPrimary.vue";
import FooterPrimary from "../components/FooterPrimary.vue";
import ContactSection from "../components/home/ContactSection.vue";

export default {
  name: "Contact",
  components: {
    NavbarPrimary,
    FooterPrimary,
    ContactSection,
  },
};
</script>


