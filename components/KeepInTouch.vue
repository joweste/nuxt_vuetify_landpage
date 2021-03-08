<template>
  <section id="info-alt" space="56">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="12" md="5">
          <base-business-info title="Fale conosco para obter mais informações">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            pariatur quidem, quis modi iure nihil commodi suscipit, corporis
            dicta adipisci, voluptatum quia cupiditate.
          </base-business-info>
        </v-col>

        <v-col cols="12" md="6" class="pt-0">
          <base-contact-form title="ENVIE-NOS UM EMAIL" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import BaseContactForm from "@/components/base/ContactForm";
import BaseBusinessInfo from "@/components/base/BusinessInfo";
// import BaseSection from "@/components/base/Section";
export default {
  name: "SectionKeepInTouch",
  components: {
    // BaseSection,
    BaseContactForm,
    BaseBusinessInfo
  }
};
</script>
