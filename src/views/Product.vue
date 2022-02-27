<template>
  <div class="home-page">
    <NavbarPrimary />
    <div>
      <HeroSection />
      <ProductSection />
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
import HeroSection from "../components/product/HeroSection.vue";
import OurWorksSection from "../components/product/OurWorksSection.vue";
import OurPartnersSection from "../components/home/OurPartnersSection.vue";
import ContactSection from "../components/home/ContactSection.vue";
import ProductSection from "../components/product/ProductSection.vue";

export default {
  name: "Product",
  components: {
    NavbarPrimary,
    HeroSection,
    FooterPrimary,
    OurWorksSection,
    OurPartnersSection,
    ContactSection,
    ProductSection,
  },
};
</script>
