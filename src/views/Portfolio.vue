<template>
  <div class="home-page">
    <NavbarPrimary />
    <div>
      <HeroSection />
      <PortfolioSection />
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
import HeroSection from "../components/portfolio/HeroSection.vue";
import OurWorksSection from "../components/portfolio/OurWorksSection.vue";
import OurPartnersSection from "../components/home/OurPartnersSection.vue";
import ContactSection from "../components/home/ContactSection.vue";
import PortfolioSection from "../components/portfolio/PortfolioSection.vue";

export default {
  name: "Portfolio",
  components: {
    NavbarPrimary,
    HeroSection,
    FooterPrimary,
    OurWorksSection,
    OurPartnersSection,
    ContactSection,
    PortfolioSection,
  },
};
</script>
