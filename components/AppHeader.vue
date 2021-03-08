<template>
  <v-app-bar app color="white" height="50px">
    <SnackBar :warningSnackbar="showLGPD" v-if="showLGPD" />
    <div class="d-flex align-center">
      <v-toolbar-title>
        <v-img
          src="/logoV4.png"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          max-width="128"
          max-height="50"
          width="100%"
          @click.stop="goHome"
      /></v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-tabs class="hidden-sm-and-down" optional v-model="active_tab">
        <v-tabs-slider color="red"></v-tabs-slider>
        <v-tab :to="itemHome.link" exact class="black--text" min-width="96">
          {{ itemHome.name }}
        </v-tab>
        <v-tab :to="itemFunc.link" exact class="black--text" min-width="96">
          {{ itemFunc.name }}
        </v-tab>

        <v-tab :to="itemBlog.link" exact class="black--text" min-width="96">
          {{ itemBlog.name }}
        </v-tab>

        <v-tab :to="itemPrecos.link" exact class="black--text" min-width="96">
          {{ itemPrecos.name }}
        </v-tab>
        <v-tab
          :href="
            `https://api.whatsapp.com/send?phone=5521999990097&text=iClinDoctor%20Gostaria%20de%20saber%20mais%20sobre%20a%20Solução%20%20de%20Teleconsulta%20de%20vocês&lang=pt_br`
          "
          target="_blank"
          class="black--text"
          min-width="96"
        >
          {{ itemVenda.name }}
        </v-tab>
        <v-tab
          href="#"
          @click.stop="gotoContato()"
          class="black--text"
          exact
          min-width="96"
        >
          {{ itemContato.name }}
        </v-tab>
      </v-tabs>
    </div>

    <v-menu v-if="$vuetify.breakpoint.xsOnly">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="goHome">
          <v-list-item-title>{{ itemHome.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item :to="itemFunc.link">
          <v-list-item-title>{{ itemFunc.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item :to="itemBlog.link">
          <v-list-item-title>{{ itemBlog.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item :to="itemPrecos.link">
          <v-list-item-title>{{ itemPrecos.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          :href="
            `https://api.whatsapp.com/send?phone=5521999990097&text=iClinDoctor%20Gostaria%20de%20saber%20mais%20sobre%20a%20Solução%20%20de%20Teleconsulta%20de%20vocês&lang=pt_br`
          "
          target="_blank"
        >
          <v-list-item-title>{{ itemVenda.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#contato', options)">
          <v-list-item-title>{{ itemContato.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import SnackBar from "@/components/SnackBar";
export default {
  components: {
    SnackBar
  },
  data: () => ({
    showLGPD: false,
    active_tab: 0,
    itemHome: { name: "Home", link: "/" },
    itemPrecos: { name: "Preços", link: "/precos" },
    itemVenda: { name: "Vendas", link: "/precos" },
    itemContato: { name: "Contato", link: "/contato" },
    itemBlog: { name: "Blog", link: "/pagesblog" },
    itemFunc: { name: "Funcionalidades", link: "/funcionalidades" }
  }),
  mounted() {
    this.showLGPD = !this.$cookies.get("techab_lgpd");
  },
  computed: {
    options() {
      return {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      };
    }
  },
  methods: {
    gotoContato() {
      this.$vuetify.goTo("#contato", this.options);
    },
    goHome() {
      if (this.$route.name != "Home") {
        this.$router.push("/");
      } else this.$vuetify.goTo("#home", this.options);
    }
  }
};
</script>

<style lang="sass">
.extra-padding
  padding-bottom: 96px !important
  padding-top: 96px !important

  @media screen and (max-width: 959px)
    padding-top: 48px !important
    padding-bottom: 48px !important
</style>
