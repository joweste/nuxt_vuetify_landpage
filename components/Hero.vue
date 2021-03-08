<template>
  <!-- :max-height="maxHeight" -->

  <section id="hero">
    <v-img
      :max-height="maxHeight"
      src="/home-hero.jpg"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .3), rgba(5, 11, 31, .3)"
    >
      <v-container fluid class="fill-height px-4">
        <v-responsive class="d-flex align-center" height="100%" width="100%">
          <v-row>
            <v-col cols="12" md="8">
              <social-share> </social-share>
              <base-heading
                class="text-center"
                :size="'display-3'"
                title="iClinDoctor"
              />

              <base-heading
                class="d-none d-sm-flex"
                :size="'display-1'"
                title="Software Médico que organiza e simplifica o dia a dia de sua clínica"
              />

              <div
                class="subitile-1 white--text text--darken-1 mb-2 d-none d-sm-flex"
              >
                Especialmente desenvolvido para o seu Consultório ou Clínica.
                Tenha mais agilidade no seu dia a dia com o software para
                clínicas mais prático de usar. Inicie agora:
              </div>

              <div
                :class="
                  $vuetify.breakpoint.xsOnly
                    ? 'flex-column align-center'
                    : 'align-center'
                "
                class="d-flex flex-wrap"
              >
                <base-btn @click.stop="openDemo" color="primary">
                  Quero fazer um teste grátis
                </base-btn>
                <!-- :class="$vuetify.breakpoint.xsOnly ? 'd-none' : 'd-block'" -->
                <span class="font-weight-bold ml-6 mr-4 my-4 d-none d-sm-flex"
                  >ou</span
                >

                <base-btn
                  color="primary"
                  :class="$vuetify.breakpoint.xsOnly ? 'my-2' : ''"
                  :href="
                    `https://api.whatsapp.com/send?phone=5521999990097&text=iClinDoctor%20Gostaria%20de%20saber%20mais%20sobre%20a%20Solução%20%20de%20Teleconsulta%20de%20vocês&lang=pt_br`
                  "
                  target="_blank"
                >
                  Ligamos pra você
                </base-btn>
              </div>
              <div class="text-center mt-8">
                O iClinDoctor está preparado para a LGPD
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <v-row>
                <v-col cols="12" sm="6" offset-sm="3" md="12" offset-md="0">
                  <!-- <VideoPlayer :video="video" /> -->
                  <client-only>
                    <vue-plyr :options="options">
                      <div
                        data-plyr-provider="youtube"
                        data-plyr-embed-id="_GylVq1VcVY"
                      ></div>
                    </vue-plyr>
                  </client-only>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <!-- <v-col cols="12" md="4">
              <script
                  type="text/javascript"
                  src="https://campaigns.zoho.com/js/zc.iframe.js"
                ></script>

              <iframe
                frameborder="0"
                id="iframewin"
                width="100%"
                height="100%"
                src="https://publ.maillist-manage.com/ua/Optin?od=11287ecb695683&zx=12b584e05&lD=1a4ccd82bc6dcfeb&n=11699f74ec7e6da&sD=1a4ccd82bc6ec5f7"
              ></iframe>
            </v-col> -->
          <!-- </v-row> -->
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
import BaseBtn from "@/components/base/Btn";
import BaseHeading from "@/components/base/Heading";
import SocialShare from "@/components/base/SocialShare";
// import VideoPlayer from "@/components/VideoPlayer";
export default {
  name: "SectionHero",
  components: {
    BaseBtn,
    // VideoPlayer,
    SocialShare,
    BaseHeading
  },
  provide: {
    theme: { isDark: true }
  },

  data: () => ({
    // video: {
    //   type: "video/mp4",
    //   videoUrl: "/teste.mp4"
    // }
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
    }
  }),

  computed: {
    maxHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "70vh" : "100vh";
      const calc = `calc(${height} - ${this.$vuetify.application.top}px)`;
      return calc;
    }
  },
  methods: {
    openDemo() {
      //this.$gtag.event('Quer', { method: 'Google' })
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

<style lang="scss"></style>
