<template>
  <div>
    <v-snackbar
      v-model="pwarningSnackbar"
      timeout="-1"
      absolute
      color="white black--text"
      left
      app
      top
      width="80%"
    >
      <v-container class="pt-0">
        <v-row>
          <v-col cols="12" sm="9">
            Este site usa cookies para garantir que você obtenha a melhor
            experiência em nosso site.
          </v-col>
          <v-col cols="12" sm="3" class="text-right">
            <v-btn color="success" @click="salvaCookie">
              Aceitar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "SnackBarComponent",
  props: {
    warningSnackbar: {
      type: Boolean | String,
      required: true,
      default: false
    }
  },
  data: function() {
    return {
      pwarningSnackbar: this.warningSnackbar
    };
  },
  methods: {
    salvaCookie() {
      this.pwarningSnackbar = false;
      this.$cookies.set("techab_lgpd", "true");
    }
  }
};
</script>

<style></style>
