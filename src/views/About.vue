<template>
  <div class="home-page">
    <NavbarPrimary />
    <div>
      <HeroSection />
      <OurWorksSection />
      <OurPartnersSection />
      <ContactSection />
    </div>
    <FooterPrimary />
  </div>
</template>

<script>
// @ is an alias to /src

import NavbarPrimary from "../components/NavbarPrimary.vue";
import FooterPrimary from "../components/FooterPrimary.vue";
import HeroSection from "../components/about/HeroSection.vue";
import OurWorksSection from "../components/about/OurWorksSection.vue";
import OurPartnersSection from "../components/home/OurPartnersSection.vue";
import ContactSection from "../components/home/ContactSection.vue";

export default {
  name: "About",
  components: {
    NavbarPrimary,
    HeroSection,
    FooterPrimary,
    OurWorksSection,
    OurPartnersSection,
    ContactSection,
  },
};
</script>
