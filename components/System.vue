<template>
  <v-system-bar
    height="30"
    class="success white--text  hidden-sm-and-down mb-1"
  >
    Atenda seus pacientes remotamente com a Teleconsulta do iClinDoctor
    <v-spacer />
    <v-btn
      class="white--text"
      text
      target="_blank"
      :href="
        `https://api.whatsapp.com/send?phone=5521999990097&text=iClinDoctor%20Gostaria%20de%20saber%20mais%20sobre%20a%20Solução%20%20de%20Teleconsulta%20de%20vocês&lang=pt_br`
      "
    >
      <v-icon left color="white"> mdi-whatsapp </v-icon> Chamar no
      WhatsApp</v-btn
    >
  </v-system-bar>
</template>

<script>
export default {
  name: "System"
};
</script>

<style></style>
