<template>
  <v-theme-provider dark>
    <section id="contact-us" class="primary" space="40">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="10" md="8" lg="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              title="QUER SER NOSSO PARCEIRO?"
            />
            <base-body space="0">
              <span class="white--text">
                Você é de um escritório de contabilidade, consultoria ou agência
                de marketing? Seja parceiro do software médico que mais cresce
                no Brasil.
              </span>
            </base-body>
          </v-col>

          <v-col cols="12" md="2">
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              large
              :to="{ name: 'parceiros' }"
              outlined
            >
              Fale conosco
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-theme-provider>
</template>

<script>
import BaseBody from "@/components/base/Body";
import BaseTitle from "@/components/base/Title";
import BaseBtn from "@/components/base/Btn";
export default {
  name: "SectionContactUs",
  components: {
    BaseTitle,
    BaseBtn,
    BaseBody
  }
};
</script>

<style></style>
