<template>
  <section id="features" class="pt-2 pb-2">
    <v-responsive class="mx-auto" max-width="1350">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card align="center" v-bind="card" />
          </v-col>
          <!-- problema esta em infocard -->
          <v-col cols="12">
            <base-body class="text-center">
              Quer saber quanto custa o software médico ideal para seu
              consultório, clínica ou policlínica?
            </base-body>
          </v-col>

          <v-col cols="12" class="text-center">
            <base-btn class="mb-2" outlined @click.stop="verPrecos">
              Ver Preços
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </section>
</template>

<script>
import BaseInfoCard from "@/components/base/InfoCard";
import BaseBody from "@/components/base/Body";
import BaseBtn from "@/components/base/Btn";
export default {
  name: "SectionFeatures",
  components: {
    BaseBtn,
    BaseBody,
    BaseInfoCard
  },
  data: () => ({
    cards: [
      {
        icon: "mdi-keyboard-outline",
        title: "Teleconsulta",
        text: "Realize teleconsulta com seus clientes."
      },
      {
        icon: "mdi-camera-outline",
        title: "Agendamento",
        text: "Agendamento fácil e rápido para seus clientes"
      },
      {
        icon: "mdi-pencil-outline",
        title: "Faturamento TISS",
        text: "Faça suas faturas no padrão TISS e envie a Operadora."
      },
      {
        icon: "mdi-puzzle-outline",
        title: "Suporte 24/7",
        text: "Suporte por email e WhatsApp."
      }
    ]
  }),
  methods: {
    verPrecos() {
      this.$router.push({
        name: "precos",
        params: {}
      });
    }
  }
};
</script>
