<template>
  <v-container fluid class="pb-0 mb-0">
    <v-dialog v-model="dialogWait" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Aguarde por favor...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />
    <v-alert
      dense
      color="error"
      :value="error"
      icon="mdi-close"
      dark
      class="ma-1 pa-1 caption white--text"
    >
      {{ error_message }}
    </v-alert>

    <v-text-field
      outlined
      dense
      single-line
      label="Nome"
      v-model="nome"
      name="nome"
      ref="nome"
      :error-messages="nomeErrors"
      required
      @input="$v.nome.$touch()"
      @blur="$v.nome.$touch()"
    />

    <v-text-field
      outlined
      dense
      single-line
      label="Email"
      v-model="email"
      :error-messages="emailErrors"
      required
      name="Email"
      ref="email"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    />

    <v-text-field
      outlined
      dense
      single-line
      label="Assunto"
      v-model="assunto"
      ref="assunto"
      :error-messages="assuntoErrors"
      @input="$v.assunto.$touch()"
      @blur="$v.assunto.$touch()"
    />

    <v-textarea
      outlined
      dense
      single-line
      rows="6"
      class="mb-6"
      label="Sua Mensagem"
      :error-messages="mensagemErrors"
      @input="$v.mensagem.$touch()"
      @blur="$v.mensagem.$touch()"
      v-model="mensagem"
      ref="mensagem"
    />
    <!-- href="mailto:suporte@techaboutdev.com.br" -->
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center justify-space-around py-0 my-0"
      >
        <base-btn 
          :color="!theme.isDark ? 'accent' : 'white'"
          @click.stop="enviaMensagem"
          outlined
        >
          Enviar
        </base-btn>
        <base-btn
          :color="!theme.isDark ? 'error' : 'white'"
          @click.stop="limparForm"
          outlined
          class="ml-2"
        >
          Limpar
        </base-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import EmailService from "@/services/EmailService";
import { required, minLength, email } from "vuelidate/lib/validators";
import BaseInfoCard from "@/components/base/InfoCard";
import BaseBtn from "@/components/base/Btn";
// import BaseTextarea from "@/components/base/Textarea";
// import BaseTextField from "@/components/base/TextField";
export default {
  name: "BaseContactForm",
  components: {
    BaseInfoCard,
    BaseBtn
    // BaseTextarea,
    // BaseTextField,
  },
  // Injected from the Vuetify Themeable mixin
  inject: ["theme"],

  props: {
    subtitle: String,
    title: {
      type: String,
      default: "Envie-nos um email"
    }
  },
  validations: {
    nome: { required },
    assunto: { required },
    email: { required, email },
    mensagem: { required, minLength: minLength(4) }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("E-mail inválido");
      !this.$v.email.required && errors.push("E-mail é obrigatório");
      return errors;
    },
    assuntoErrors() {
      const errors = [];
      if (!this.$v.assunto.$dirty) return errors;
      !this.$v.assunto.required && errors.push("Assunto é obrigatório");
      return errors;
    },
    nomeErrors() {
      const errors = [];
      if (!this.$v.nome.$dirty) return errors;
      !this.$v.nome.required && errors.push("Nome é obrigatório");
      return errors;
    },
    mensagemErrors() {
      const errors = [];
      if (!this.$v.mensagem.$dirty) return errors;
      !this.$v.mensagem.minLength && errors.push("Mínimo de 4 caracteres");
      !this.$v.mensagem.required && errors.push("Mensagem é obrigatório");
      return errors;
    }
  },
  data: () => ({
    dialogWait: false,
    error: false,
    error_message: null,
    nome: null,
    email: null,
    assunto: null,
    mensagem: null
  }),
  methods: {
    limparForm() {
      this.error = false;
      this.error_message = null;
      this.nome = null;
      this.email = null;
      this.assunto = null;
      this.mensagem = null;
      this.$v.$reset();
    },
    async enviaMensagem() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.error = true;
        this.error_message = "Dados inválidos";
        return;
      }
      const data = {
        nome: this.nome,
        email: this.email,
        assunto: this.assunto,
        mensagem: this.mensagem
      };
      this.dialogWait = true;
      try {
        //await EmailService.enviaEmail(data);
        const port = window.location.port;
        const urlapi = `${window.location.protocol}//${window.location.hostname}:${port}`;
        //console.log(urlapi);
        await this.$axios.$post(`${urlapi}/api/site/enviaEmail`, data);
        this.error = false;
        this.error_message = null;
        await this.$dialog.confirm({
          text: "Sua mensagem foi enviada. Em breve entraremos em contato.",
          title: "Informação",
          type: "success",
          actions: {
            true: {
              text: "Ok",
              color: "primary"
            }
          }
        });
      } catch (error) {
        console.log(error.response.data);
        this.error = true;
        this.error_message =
          error?.response?.data?.message ||
          "Erro enviando mensagem. Tente novamente";
      } finally {
        this.dialogWait = false;
      }
    }
  }
};
</script>
