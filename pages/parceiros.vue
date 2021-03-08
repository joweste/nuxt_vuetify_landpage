<template>
  <section class="pt-2 pb-2">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="primary">
          <v-card-title
            class="justify-center display-2 black--text font-weight-bold"
          >
            iCLinDoctor
          </v-card-title>
          <v-card-title
            class="justify-center display-1 black--text font-weight-bold py-0"
          >
            Programa de Indicadores
          </v-card-title>
          <v-card-title class="justify-center title black--text">
            O iCLinDoctor tem um Programa de Indicadores para consultores,
            profissionais de TI, contadores e faturistas.
          </v-card-title>
          <v-card-title class="justify-center title black--text py-0">
            Indique o melhor software de gestão para seus clientes e tenha
            ganhos diretos.
          </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" cols="12" sm="4" md="4">
          <base-info-card align="center" v-bind="card" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card-title class="justify-center display-1 font-weight-bold  mx-2">
            <base-btn class="mb-2" outlined>
              SEJA UM INDICADOR
            </base-btn>
          </v-card-title>
        </v-col>
        <v-col
          v-for="card in cardExps"
          :key="card.title"
          cols="12"
          sm="4"
          md="4"
        >
          <base-info-card align="center" v-bind="card" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img
            :max-height="700"
            src="/article-4.jpg"
            class="white--text"
            gradient="to right, rgba(5, 11, 31, .3), rgba(5, 11, 31, .3)"
          >
            <v-container fluid class="fill-height">
              <v-responsive class="d-flex align-center flex-column">
                <!-- <v-col cols="12"> -->
                <base-heading
                  title="Preencha o formulário"
                  class="white--text"
                />
                <v-spacer />
                <v-theme-provider dark>
                  <base-contact-form title="ENVIE-NOS UM EMAIL" class="mt-12" />
                </v-theme-provider>
              </v-responsive>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
//import BaseSection from "@/components/base/Section";
import BaseInfoCard from "@/components/base/InfoCard";
import BaseBtn from "@/components/base/Btn";

import BaseContactForm from "@/components/base/ContactForm";
import BaseHeading from "@/components/base/Heading";
export default {
  name: "SectionFeatures",
  components: {
    //BaseSection,
    BaseContactForm,
    BaseBtn,
    BaseHeading,
    BaseInfoCard
  },
  data: () => ({
    cardExps: [
      {
        icon: "mdi-numeric-1",
        title: "Inscrição",
        size: 100,
        text:
          "Envie as suas informações para o Programa Indicadores iClinDoctor preenchendo o formulário"
      },
      {
        icon: "mdi-numeric-2",
        title: "Análise",
        size: 100,
        text:
          "Nossa equipe de especialistas irá analisar o seu cadastro cuidadosamente para saber se você se encaixa em nosso projeto."
      },
      {
        icon: "mdi-numeric-3",
        title: "Ganhando",
        size: 100,
        text:
          "Se for aprovado, basta começar a indicar os novos clientes! Você será informado quando um contrato for fechado.."
      }
    ],
    cards: [
      {
        icon: "mdi-currency-usd-circle",
        title: "Renda Adicional",
        size: 100,
        text:
          "Indicando o iClinDoctor para uma clínica, policlínica ou consultório, você pderá ter rendas extras."
      },
      {
        icon: "mdi-account-multiple-plus",
        title: "Indicação",
        size: 100,
        text:
          "É só indicar, e nossos profssionais capacitados farão o processo de venda"
      },
      {
        icon: "mdi-network",
        title: "Rede de Contatos",
        size: 100,
        text: "Ao fazer indicações, você aumenta sua rede de contatos"
      }
    ]
  }),
  methods: {
    //
  }
};
</script>
