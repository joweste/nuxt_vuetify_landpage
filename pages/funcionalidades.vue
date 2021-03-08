<template>
  <section id="features" class="pt-2 pb-2">
    <!-- <v-responsive class="mx-auto"> -->
    <v-container fluid class="pt-0">
      <v-row>
        <v-col cols="12"
          ><v-img
            max-height="400"
            src="/article-2.jpg"
            class="white--text"
            gradient="to right, rgba(5, 11, 31, .5), rgba(5, 11, 31, .5)"
          >
            <v-container class="fill-height px-4">
              <v-responsive
                class="d-flex align-center"
                height="100%"
                width="100%"
              >
                <v-row>
                  <v-col cols="12" md="8">
                    <base-heading
                      class="text-center"
                      :size="'display-3'"
                      title="iClinDoctor"
                    />

                    <v-card-subtitle class="text-center white--text headline">
                      Os clientes iClinDoctor são prioridade, pois trabalhamos
                      para seu sucesso. <br />
                      Valorizamos o contato próximo para, juntos, encontrarmos
                      as melhores soluções dentro da necessidade de cada um.
                    </v-card-subtitle>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        offset-sm="3"
                        md="12"
                        offset-md="0"
                      >
                        <!-- <VideoPlayer :video="video" /> -->
                        <client-only>
                          <vue-plyr :options="options">
                            <div
                              data-plyr-provider="youtube"
                              data-plyr-embed-id="rVZr8dusjvo"
                            ></div>
                          </vue-plyr>
                        </client-only>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-responsive>
            </v-container>
          </v-img>
        </v-col>
        <!-- <v-col cols="12">
            <v-card-subtitle
              class="text-center primary darken-2 white--text headline"
            >
              Os clientes iClinDoctor são prioridade, pois trabalhamos para seu
              sucesso. <br />
              Valorizamos o contato próximo para, juntos, encontrarmos as
              melhores soluções dentro da necessidade de cada um.
            </v-card-subtitle>
          </v-col>
          <v-card-text class="px-0 py-0">
            <v-col cols="12" sm="12" md="6" offset-md="3" lg="6" offset-lg="3">
              <v-card-title
                class="justify-center display-1 primary darken-2 white--text py-1"
              >
                Funcionalidades
              </v-card-title>
            </v-col>
          </v-card-text> -->

        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          sm="4"
          md="4"
          lg="3"
        >
          <v-card class="py-3 my-3 elevation-12 flex d-flex flex-column">
            <base-info-card align="center" v-bind="card"> </base-info-card>
            <v-responsive>
              <v-img :src="card.imgcard" contain class="mx-2"> </v-img>
            </v-responsive>

            <v-list nav dense>
              <v-list-item
                v-for="(item, i) in card.items"
                :key="i"
                class="py-0 my-0"
              >
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-responsive> -->
  </section>
</template>

<script>
import BaseInfoCard from "@/components/base/InfoCard";
import BaseHeading from "@/components/base/Heading";
export default {
  name: "SectionFeatures",
  components: {
    BaseInfoCard,
    BaseHeading
  },
  head: () => ({
    title: "iClinDoctor - Funcionalidades",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Conheça as Funcionalidades do iClinDoctor"
      },
      { property: "og:title", content: "iClinDoctor- Funcionalidades" },
      { property: "og:site_name", content: "iClinDoctor" },
      {
        property: "og:description",
        content: "Conheça as Funcionalidades do iClinDoctor"
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "http://iclindoctor.techaboutdev.com.br/funcionalidades"
      }
      //{property: 'og:image', content: this.aws_url + '/users/' + this.userData.profileurl + '-main.jpg' }
    ]
  }),
  data: () => ({
    //
    options: {
      quality: { default: "720p" },
      autoplay: false,
      tooltips: {
        controls: true,
        seek: true
      },
      i18n: {
        restart: "Reiniciar",
        rewind: "Retroceder {seektime}s",
        play: "Reproduzir",
        pause: "Pausar",
        fastForward: "Avançar {seektime}s",
        seek: "Seek",
        seekLabel: "{currentTime} de {duration}",
        played: "Reproduzindo",
        buffered: "Buffered",
        currentTime: "Hora atual",
        duration: "Duração",
        volume: "Volume",
        mute: "Silenciar",
        unmute: "Normal",
        enableCaptions: "Habilitar captions",
        disableCaptions: "Desabilitar captions",
        download: "Download",
        enterFullscreen: "Tela cheia",
        exitFullscreen: "Sair de Tela cheia ",
        frameTitle: "Player for {title}",
        captions: "Captions",
        settings: "Config",
        pip: "PIP",
        menuBack: "Voltar menu anterior",
        speed: "Veloz",
        normal: "Normal",
        quality: "Qualidade",
        loop: "Loop",
        start: "Início",
        end: "Fim",
        all: "Todos",
        reset: "Reset",
        disabled: "Disabilitado",
        enabled: "Habilitado",
        advertisement: "Ad",
        qualityBadge: {
          2160: "4K",
          1440: "HD",
          1080: "HD",
          720: "HD",
          576: "SD",
          480: "SD"
        }
      }
    },
    cards: [
      {
        icon: "mdi-camera-outline",
        title: "Prescrição eletrônica",
        text: "Prescrição eletrônica",
        imgcard: "/prescricao.png",
        items: [
          {
            icon: "mdi-check",
            text: "Uso de Certificado Digital do Profissional"
          },
          { icon: "mdi-check", text: "Telemedicina" },
          { icon: "mdi-check", text: "Tabela CID" },
          { icon: "mdi-check", text: "Textos padrões por profissional" },
          { icon: "mdi-check", text: "Transcrição de voz para texto" },
          {
            icon: "mdi-check",
            text: "Atestados personalizados do cliente"
          },
          { icon: "mdi-check", text: "Cadastro de diagnósticos padrões" },
          { icon: "mdi-check", text: "Impressão personalizada de atestados" },
          { icon: "mdi-check", text: "Controle de privacidade de acesso" },
          { icon: "mdi-check", text: "Bulário on-line" },
          { icon: "mdi-check", text: "Anexo de arquivos e documentos" }
        ]
      },
      {
        icon: "mdi-camera-outline",
        title: "Agendamento",
        text: "Agendamento fácil e rápido",
        imgcard: "/agendamento.png",
        items: [
          { icon: "mdi-check", text: "Multi-clinicas" },
          { icon: "mdi-check", text: "Multi-especialidade" },
          { icon: "mdi-check", text: "Agendamento Online" },
          { icon: "mdi-check", text: "Reagendamento facil" },
          { icon: "mdi-check", text: "Visualização intuitiva e realista" },
          { icon: "mdi-check", text: "Controle de fila de espera" },
          {
            icon: "mdi-check",
            text: "Acompanhamento do status do agendamento"
          },
          {
            icon: "mdi-check",
            text: "Confirmação de agendamento por SMS e/ou Email"
          },
          {
            icon: "mdi-check",
            text: "Horário de atendimento persoanalizados"
          },
          {
            icon: "mdi-check",
            text: "Integração com painel de chamadas"
          }
        ]
      },
      {
        icon: "mdi-pencil-outline",
        title: "Faturamento TISS",
        text: "Faça suas faturas no padrão TISS.",
        imgcard: "/ConsTiss.png",
        items: [
          { icon: "mdi-check", text: "Geração de faturas no padrão TISS" },
          { icon: "mdi-check", text: "Guias de Consulta" },
          { icon: "mdi-check", text: "Guias de SP-SADT" },
          { icon: "mdi-check", text: "Guias de Honorários" },
          { icon: "mdi-check", text: "Guias de Outras Despesas" },
          { icon: "mdi-check", text: "Geração de XML TISS" },
          { icon: "mdi-check", text: "Geração de Lotes de Guias" }
        ]
      },

      {
        icon: "mdi-keyboard-outline",
        title: "Teleconsulta",
        text: "Realize teleconsulta com seus clientes.",
        imgcard: "/telemedicina2.jpg",
        items: [
          { icon: "mdi-check", text: "Faça teleconsulta com seus clientes" },
          { icon: "mdi-check", text: "Link via WhatsApp para a Consulta" },
          { icon: "mdi-check", text: "Consulta com vídeo e áudio" },
          { icon: "mdi-check", text: "Video-Conferência" },
          {
            icon: "mdi-check",
            text: "Aplicativo Android e Iphone para Teleconsulta do Cliente "
          }
        ]
      },
      {
        icon: "mdi-camera-outline",
        title: "Fisioterapia",
        text: "Fisioterapia",
        imgcard: "/sessoesfis.png",
        items: [
          { icon: "mdi-check", text: "Controle de Autorizações" },
          { icon: "mdi-check", text: "Controle de Sessões" },
          { icon: "mdi-check", text: "Cadastro de Avaliações" },
          { icon: "mdi-check", text: "Cadastro de Aparelhos" },
          { icon: "mdi-check", text: "Cadastro de Regiões e Lados da sessão" }
        ]
      },
      {
        icon: "mdi-camera-outline",
        title: "Chat interno",
        text: "Chat interno",
        imgcard: "/chat.png",
        items: [
          { icon: "mdi-check", text: "Troca de mensagens entre usuários" },
          { icon: "mdi-check", text: "Persistência das mensagens" },
          { icon: "mdi-check", text: "Mensagens instãntaneas" }
        ]
      },
      {
        icon: "mdi-camera-outline",
        title: "Bulário",
        text: "Bulário",
        imgcard: "/Bulario.png",
        items: [
          { icon: "mdi-check", text: "Acesso ao Bulário da Medicamentos" },
          { icon: "mdi-check", text: "Visualização de bulas em formato PDF" },
          { icon: "mdi-check", text: "Pesquisa de medicamentos no bulário" }
        ]
      },
      {
        icon: "mdi-camera-outline",
        title: "Controle de Estoque",
        text: "Controle de Estoque",
        imgcard: "/estoque.png",
        items: [
          { icon: "mdi-check", text: "Gestão de Produtos" },
          { icon: "mdi-check", text: "Movimentação de estoque" },
          { icon: "mdi-check", text: "Controle de vencimento" },
          { icon: "mdi-check", text: "Alertas de estoque baixo" }
        ]
      },

      {
        icon: "mdi-camera-outline",
        title: "Gravação de fotos e documentos",
        text: "Gravação de fotos e documentos no Atendimento Médico",
        imgcard: "/FotosArquivos.png",
        items: [
          { icon: "mdi-check", text: "Anexo de imagens e documentos" },
          { icon: "mdi-check", text: "Visualizar imagens e documentos" }
        ]
      },
      {
        icon: "mdi-camera-outline",
        title: "Telão de chamadas por voz",
        text: "Telão de chamadas por voz",
        imgcard: "/telao.png",
        items: [
          { icon: "mdi-check", text: "Chamada de clientes por voz" },
          { icon: "mdi-check", text: "Visualizar telão com chamadas" }
        ]
      },

      {
        icon: "mdi-pencil-outline",
        title: "Relacionamento com Cliente",
        text: "Relacionamento com Cliente",
        imgcard: "/suporte.jpg",
        items: [
          // Pesquisa de satisfação
          // SMS Marketing
          // Fidelização de Pacientes
          { icon: "mdi-check", text: "Mensagens de Aniversário" },
          { icon: "mdi-check", text: "Atendimento Humanizado" },
          { icon: "mdi-check", text: "Redução de faltas" }
        ]
      },
      {
        icon: "mdi-camera-outline",
        title: "Controle de entrega de exames",
        text: "Controle de entrega de exames",
        imgcard: "/ControleExames.png",
        items: [{ icon: "mdi-check", text: "Controle de Entrega de Laudos" }]
      },
      {
        icon: "mdi-puzzle-outline",
        title: "Suporte 24/7",
        text: "Atendimento por E-mail e WhatsApp",
        imgcard: "/call-center.jpg",
        items: [
          { icon: "mdi-check", text: "Equipe pronta para lhe atender" },
          { icon: "mdi-check", text: "Atendimento por E-mail e WhatsApp" }
        ]
      }
    ]
  }),
  methods: {
    //
  }
};
</script>

<style lang="scss">
.v-list-item__title {
  white-space: normal;
}
</style>
