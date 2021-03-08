<template>
  <div>
    <client-only>
      <vue-plyr :options="options">
        <video
          controls
          crossorigin
          playsinline
          style="border: 1px solid #fff;"
          class="pa-1"
        >
          <source size="720" :src="src" :type="video.type" />
        </video>
      </vue-plyr>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  computed: {
    src() {
      return this.video.videoUrl;
    }
  }
};
</script>

<style lang="scss" scoped>
video {
  /* override other styles to make responsive */
  width: 100% !important;
  height: auto !important;
}
</style>
