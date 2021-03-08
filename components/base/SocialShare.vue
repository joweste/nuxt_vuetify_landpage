<template>
  <v-speed-dial
    v-model="dialShare"
    absolute
    right
    top
    direction="left"
    open-on-hover
  >
    <template v-slot:activator>
      <v-btn fab bottom small color="primary">
        <v-icon v-if="dialShare">mdi-close</v-icon>
        <v-icon v-else>mdi-share-variant</v-icon>
      </v-btn>
    </template>
    <v-btn
      dark
      fab
      bottom
      color="blue"
      small
      :href="`https://business.facebook.com/techaboutdev/`"
      target="_blank"
    >
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn
      dark
      fab
      bottom
      color="green"
      small
      :href="
        `https://api.whatsapp.com/send?phone=5521999990097&text=iClinDoctor%20Gostaria%20de%20saber%20mais%20sobre%20a%20Solução%20%20de%20Teleconsulta%20de%20vocês&lang=pt_br`
      "
      target="_blank"
    >
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
    <v-btn
      dark
      fab
      bottom
      :color="'orange'"
      small
      :href="`https://www.instagram.com/techaboutinfo/`"
      target="_blank"
    >
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: "SocialShare",
  data: () => ({
    dialShare: false,
    pageUrl: "https://techformist.com"
  })
};
</script>

<style scoped lang="scss">
.v-speed-dial--top {
  top: 0px;
}
</style>
