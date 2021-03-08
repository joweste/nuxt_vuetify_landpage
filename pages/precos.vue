<template>
  <v-card class="mx-2 px-2 py-2">
    <v-img
      max-height="400"
      src="/pricing.jpg"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .3), rgba(5, 11, 31, .3)"
    >
      <v-container class="fill-height px-4">
        <v-responsive class="d-flex align-center" height="100%" width="100%">
          <base-heading
            class="text-center"
            :size="'display-3'"
            title="iClinDoctor"
          />

          <base-heading
            class="text-center"
            :size="'headline'"
            title="Escolha o plano certo para sua clínica"
          />
        </v-responsive>
      </v-container>

      <!-- <v-card-title
        class="justify-center display-1 primary darken-2 white--text"
      >
        Escolha o plano certo para sua clínica
      </v-card-title> -->
    </v-img>
    <v-row>
      <v-col md="4" class="d-flex flex-column">
        <v-card class="my-3 elevation-12 flex d-flex flex-column">
          <v-card-title class="py-2 justify-center">
            <v-img
              src="/logoV4.png"
              contain
              max-width="128"
              max-height="80"
              width="100%"
            />
          </v-card-title>
          <v-card-title
            class="display-1 justify-center font-weight-bold text-uppercase py-0"
          >
            Standard</v-card-title
          >
          <!-- <v-card-title
            class="display-3 justify-center font-weight-bold text-uppercase"
            ><span class="display-1">R$</span>99,00<span class="display-1"
              >/Mês</span
            ></v-card-title
          > -->
          <v-card-title class="d-flex justify-center align-center">
            <span class="align-self-start text-h6">R$</span>
            <h2 class="text-h2 font-weight-bold">89,00</h2>
            <span class="align-self-end">/Mês</span>
          </v-card-title>

          <v-card-subtitle
            class="d-flex justify-center black--text font-weight-black text-uppercase"
            >Por Usuário</v-card-subtitle
          >
          <v-card-actions class="d-flex justify-center">
            <base-btn class="mb-2" outlined @click.stop="openDemo">
              Testar Grátis
            </base-btn>
          </v-card-actions>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-list nav dense>
                <v-list-item v-for="(item, i) in Standard" :key="i">
                  <v-list-item-icon>
                    <v-icon color="green" v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title
                      class="subtitle-2"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col md="4" class="d-flex flex-column">
        <v-card class="my-3 elevation-12 flex d-flex flex-column">
          <v-card-title class="py-2 justify-center">
            <v-img
              src="/logoV4.png"
              contain
              max-width="128"
              max-height="80"
              width="100%"
            />
          </v-card-title>
          <v-card-title
            class="display-1 justify-center font-weight-bold text-uppercase py-0"
            >PLUS</v-card-title
          >
          <!-- <v-card-title
            class="display-3 justify-center font-weight-bold text-uppercase"
            ><span class="display-1">R$</span>115,00<span class="display-1"
              >/Mês</span
            ></v-card-title
          > -->
          <v-card-title class="d-flex justify-center align-center">
            <span class="align-self-start text-h6">R$</span>
            <h2 class="text-h2 font-weight-bold primary--text">115,00</h2>
            <span class="align-self-end">/Mês</span>
          </v-card-title>
          <v-card-subtitle
            class="d-flex justify-center black--text font-weight-black text-uppercase"
            >Por Usuário</v-card-subtitle
          >
          <v-card-actions class="d-flex justify-center">
            <base-btn class="mb-2" outlined @click.stop="openDemo">
              Testar Grátis
            </base-btn>
          </v-card-actions>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-list nav dense>
                <v-list-item v-for="(item, i) in Plus" :key="i">
                  <v-list-item-icon>
                    <v-icon color="green" v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title
                      class="subtitle-2"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card class="my-3 elevation-12">
          <v-card-title class="py-2 justify-center">
            <v-img
              src="/logoV4.png"
              contain
              max-width="128"
              max-height="80"
              width="100%"
            />
          </v-card-title>
          <v-card-title
            class="display-1 justify-center font-weight-bold text-uppercase py-0"
            >Premium</v-card-title
          >
          <!-- <v-card-title
            class="display-3 justify-center font-weight-bold text-uppercase"
            ><span class="display-1">R$</span>199,00<span class="display-1"
              >/Mês</span
            ></v-card-title
          > -->
          <v-card-title class="d-flex justify-center align-center">
            <span class="align-self-start text-h6">R$</span>
            <h2 class="text-h2 font-weight-bold warning--text">199,00</h2>
            <span class="align-self-end">/Mês</span>
          </v-card-title>

          <v-card-subtitle
            class="d-flex justify-center black--text font-weight-black text-uppercase"
            >Por Usuário</v-card-subtitle
          >
          <v-card-actions class="d-flex justify-center">
            <base-btn class="mb-2" outlined @click.stop="openDemo">
              Testar Grátis
            </base-btn>
          </v-card-actions>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-list nav dense>
                <v-list-item v-for="(item, i) in Premium" :key="i">
                  <v-list-item-icon>
                    <v-icon color="green" v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title
                      class="subtitle-2"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card-text class="warning align-center my-0 py-0">
      <v-row>
        <v-col cols="12" md="8" sm="12" class="body-1 black--text">
          <div
            class="headline black--text"
            :class="$vuetify.breakpoint.xsOnly ? 'd-flex justify-center' : ''"
          >
            3 profissionais ou mais?
          </div>
          <div>
            Se você possui mais de 3 usuários podemos fazer um orçamento
            exclusivo para sua clínica com para atender esses profissionais de
            saúde.
          </div>
        </v-col>
        <v-spacer />
        <base-btn
          class="mt-4"
          :class="$vuetify.breakpoint.xsOnly ? 'my-2 mx-auto' : ''"
          color="white"
          outlined
          target="_blank"
          :href="
            `https://api.whatsapp.com/send?phone=5521999990097&text=iClinDoctor%20Gostaria%20de%20saber%20mais%20sobre%20a%20Solução%20%20de%20Teleconsulta%20de%20vocês&lang=pt_br`
          "
        >
          Fale com um Consultor
        </base-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Precos",
  components: {
    BaseBtn: () => import("@/components/base/Btn"),
    BaseHeading: () => import("@/components/base/Heading")
  },
  head: () => ({
    title: "iClinDoctor - Preços",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Conheça as Preços do iClinDoctor"
      },
      { property: "og:title", content: "iClinDoctor- Preços" },
      { property: "og:site_name", content: "iClinDoctor" },
      {
        property: "og:description",
        content: "Conheça as Preços do iClinDoctor"
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "http://iclindoctor.techaboutdev.com.br/precos"
      }
    ]
  }),
  data: () => ({
    Standard: [
      {
        icon: "mdi-check-all",
        title: "Agendamento",
        text: "Agendamento "
      },
      {
        icon: "mdi-check-all",
        title: "Cadastro de pacientes",
        text: "Cadastro de pacientes"
      },
      {
        icon: "mdi-check-all",
        title: "Prontuário eletrônico",
        text: "Prontuário eletrônico"
      },
      {
        icon: "mdi-check-all",
        title: "Prescrição eletrônica",
        text: "Prescrição eletrônica"
      },
      {
        icon: "mdi-check-all",
        title: "Faturamento TISS",
        text: "Faturamento TISS"
      },

      {
        icon: "mdi-check-all",
        title: "Relatórios",
        text: "Relatórios"
      },
      {
        icon: "mdi-check-all",
        title: "Bulário",
        text: "Bulário"
      },
      {
        icon: "mdi-check-all",
        title: "Gravação de fotos e documentos",
        text: "Gravação de fotos e documentos"
      },

      {
        icon: "mdi-check-all",
        title: "Envio de lembretes - R$0,15 por SMS",
        text: "Envio de lembretes - R$0,15 por SMS"
      }
    ],

    Plus: [
      {
        icon: "mdi-check-all",
        title: "Agendamento",
        text: "Agendamento "
      },
      {
        icon: "mdi-check-all",
        title: "Cadastro de pacientes",
        text: "Cadastro de pacientes"
      },
      {
        icon: "mdi-check-all",
        title: "Prontuário eletrônico",
        text: "Prontuário eletrônico"
      },
      {
        icon: "mdi-check-all",
        title: "Prescrição eletrônica",
        text: "Prescrição eletrônica"
      },
      {
        icon: "mdi-check-all",
        title: "Faturamento TISS",
        text: "Faturamento TISS"
      },

      {
        icon: "mdi-check-all",
        title: "Relatórios",
        text: "Relatórios"
      },
      {
        icon: "mdi-check-all",
        title: "Bulário",
        text: "Bulário"
      },
      {
        icon: "mdi-check-all",
        title: "Gravação de fotos e documentos",
        text: "Gravação de fotos e documentos"
      },

      {
        icon: "mdi-check-all",
        title: "Chat interno",
        text: "Chat interno"
      },
      {
        icon: "mdi-check-all",
        title: "Assinatura digital",
        text: "Assinatura digital"
      },

      {
        icon: "mdi-check-all",
        title: "Telemedicina",
        text: "Telemedicina"
      },

      {
        icon: "mdi-check-all",
        title: "Gravação de fotos e documentos",
        text: "Gravação de fotos e documentos"
      },

      {
        icon: "mdi-check-all",
        title: "Atendimento com transcrição de voz para texto",
        text: "Atendimento com transcrição de voz para texto"
      },

      {
        icon: "mdi-check-all",
        title: "Envio de lembretes R$0,13 por SMS",
        text: "Envio de lembretes R$0,13 por SMS"
      }
    ],

    Premium: [
      {
        icon: "mdi-check-all",
        title: "Agendamento",
        text: "Agendamento "
      },
      {
        icon: "mdi-check-all",
        title: "Cadastro de pacientes",
        text: "Cadastro de pacientes"
      },
      {
        icon: "mdi-check-all",
        title: "Prontuário eletrônico",
        text: "Prontuário eletrônico"
      },
      {
        icon: "mdi-check-all",
        title: "Prescrição eletrônica",
        text: "Prescrição eletrônica"
      },
      {
        icon: "mdi-check-all",
        title: "Faturamento TISS",
        text: "Faturamento TISS"
      },

      {
        icon: "mdi-check-all",
        title: "Relatórios",
        text: "Relatórios"
      },
      {
        icon: "mdi-check-all",
        title: "Bulário",
        text: "Bulário"
      },
      {
        icon: "mdi-check-all",
        title: "Gravação de fotos e documentos",
        text: "Gravação de fotos e documentos"
      },

      {
        icon: "mdi-check-all",
        title: "Chat interno",
        text: "Chat interno"
      },
      {
        icon: "mdi-check-all",
        title: "Assinatura digital",
        text: "Assinatura digital"
      },

      {
        icon: "mdi-check-all",
        title: "Telemedicina",
        text: "Telemedicina"
      },

      {
        icon: "mdi-check-all",
        title: "Gravação de fotos e documentos",
        text: "Gravação de fotos e documentos"
      },

      {
        icon: "mdi-check-all",
        title: "Atendimmento com transcrição de voz para texto",
        text: "Atendimmento com transcrição de voz para texto"
      },

      {
        icon: "mdi-check-all",
        title: "Envio de lembretes R$0,12 por SMS",
        text: "Envio de lembretes R$0,12 por SMS"
      },

      {
        icon: "mdi-check-all",
        title: "Telão de chamadas por voz",
        text: "Telão de chamadas por voz"
      },

      {
        icon: "mdi-check-all",
        title: "Telemedicina",
        text: "Telemedicina"
      },

      {
        icon: "mdi-check-all",
        title: "Fisioterapia",
        text: "Fisioterapia"
      },

      {
        icon: "mdi-check-all",
        title: "Estoque",
        text: "Estoque"
      }
    ]
  }),
  methods: {
    openDemo() {
      this.$gtag.event("testou_demo", {
        event_category: "click",
        event_label: "Testar Demo"
      });
      const th = new Date().getTime();
      return window.open(
        `https://www.techaboutdev.com.br/login?conta=demo&email=supervisor@techabout.com.br&password=12345&th=${th}`,
        "_blank"
      );
    }
  }
};
</script>

<style lang="scss">
.v-list-item__title {
  white-space: normal !important;
}
</style>
