<template>
  <div class="home-page">
    <NavbarPrimary />
    <div>
      <HeroSection />
      <OurServicesSection />
      <BannerSection />
      <OurWorksSection />
      <BannerSectionTwo />
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
import HeroSection from "../components/home/HeroSection.vue";
import OurServicesSection from "../components/home/OurServicesSection.vue";
import BannerSection from "../components/home/BannerSection.vue";
import OurWorksSection from "../components/home/OurWorksSection.vue";
import BannerSectionTwo from "../components/home/BannerSectionTwo.vue";
import OurPartnersSection from "../components/home/OurPartnersSection.vue";
import ContactSection from "../components/home/ContactSection.vue";

export default {
  name: "Home",
  components: {
    NavbarPrimary,
    HeroSection,
    FooterPrimary,
    OurServicesSection,
    BannerSection,
    OurWorksSection,
    BannerSectionTwo,
    OurPartnersSection,
    ContactSection,
  },
};
</script>
