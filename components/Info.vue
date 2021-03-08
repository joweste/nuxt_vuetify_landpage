<template>
  <v-theme-provider dark>
    <section id="info-alt" class="primary darken-4 px-2 mx-2 my-2" space="4">
      <v-responsive class="mx-auto" max-width="1400">
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="3" md="4" class="my-0">
              <base-info />
            </v-col>

            <v-col cols="12" sm="6" md="4" class="my-0">
              <base-info-card title="Contato"></base-info-card>

              <!-- problema aqui -->
              <base-business-contact dense></base-business-contact>
            </v-col>

            <v-col cols="12" sm="3" md="4" id="contato" class="my-0">
              <info-features />
            </v-col>
            <v-col cols="12" class="white--text darken-2 my-0 text-center">
              Copyright © 2016-{{ new Date().getFullYear() }} Techabout Info
              LTDA. Todos os Direitos Reservados.
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </section>
  </v-theme-provider>
</template>

<script>
import BaseInfo from "@/components/base/InfoBase";
import BaseBusinessContact from "@/components/base/BusinessContact";
import BaseInfoCard from "@/components/base/InfoCard";
import InfoFeatures from "@/components/InfoFeatures";
export default {
  name: "SectionBusinessInfo",

  components: {
    BaseInfo,
    BaseBusinessContact,
    BaseInfoCard,
    InfoFeatures
  }
};
</script>

<style lang="sass">
#info-alt a
  text-decoration: none
</style>
