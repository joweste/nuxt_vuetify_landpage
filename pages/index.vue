<template>
  <div>
    <Hero />
    <Features />
    <ContactUs />
    <KeepInTouch />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ContactUs from "@/components/ContactUs";
import KeepInTouch from "@/components/KeepInTouch";

export default {
  components: {
    Hero,
    ContactUs,
    KeepInTouch,
    Features
  }
};
</script>

<style></style>
