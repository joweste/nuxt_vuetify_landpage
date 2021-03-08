<template>
  <section>
    <v-img
      :max-height="300"
      src="/home-hero.jpg"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .3), rgba(5, 11, 31, .3)"
    >
      <v-container fluid class="fill-height px-4">
        <v-responsive class="d-flex align-center" height="100%" width="100%">
          <base-heading
            class="text-center white--text"
            :size="'display-3  font-weight-black'"
            title="iClinDoctor"
          />

          <base-heading
            class="d-none d-sm-flex white--text justify-center"
            :size="'text-h5'"
            :tag="'div'"
            title="Software Médico que organiza e simplifica o dia a dia de sua clínica"
          />
          <div
            :class="
              $vuetify.breakpoint.xsOnly
                ? 'flex-column align-center'
                : 'align-center justify-center'
            "
            class="d-flex flex-wrap"
          >
            <base-btn @click.stop="openDemo" color="primary">
              Quero fazer um teste grátis
            </base-btn>
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
        </v-responsive>
      </v-container>
    </v-img>

    <!-- <v-tooltip min-width="500" top>
      <template v-slot:activator="{ on }">
        <v-icon v-on="on" class="icone-estilo-ajuda mt-1 ml-1 mr-1"
          >mdi-help-circle</v-icon
        >
      </template>
      <span>teste de tooltip</span>
    </v-tooltip> -->

    <v-card class="py-3 my-3 elevation-12 flex d-flex">
      <v-card-text>
        <BaseContactForm />
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
import BaseContactForm from "@/components/base/ContactForm";
import BaseHeading from "@/components/base/Heading";
import BaseBtn from "@/components/base/Btn";
import funcionalidades from "@/pages/funcionalidades";
export default {
  name: "SectionMarketing",
  components: {
    BaseHeading,
    BaseBtn,
    funcionalidades,
    BaseContactForm
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

<style></style>
