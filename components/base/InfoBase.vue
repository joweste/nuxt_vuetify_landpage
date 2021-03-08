<template>
  <v-theme-provider :dark="dark">
    <div>
      <v-img
        src="/logoV4.png"
        contain
        :class="$vuetify.breakpoint.xsOnly ? 'mx-auto' : ''"
        max-width="128"
        min-height="78"
        width="100%"
      />

      <base-title
        size="body-1"
        space="4"
        title="iClinDoctor"
        weight="regular"
      />

      <base-body>
        Software de gestão para clínicas e consultórios.
      </base-body>

      <base-btn
        class="mb-2"
        color="white"
        outlined
        :to="{ name: 'funcionalidades' }"
      >
        Mais Info
      </base-btn>
    </div>
  </v-theme-provider>
</template>

<script>
import BaseBtn from "@/components/base/Btn";
import BaseBody from "@/components/base/Body";
import BaseTitle from "@/components/base/Title";

export default {
  name: "BaseInfo",
  components: {
    BaseBtn,
    BaseBody,
    BaseTitle
  },
  props: {
    title: String,
    dark: Boolean
  },

  data: () => ({
    business: [
      {
        icon: "mdi-cellphone",
        title: "Fone",
        text: "(21)99999-00XX<br>+XX351872XXXX(WhastApp)"
      },
      {
        icon: "mdi-email",
        title: "Email",
        text: "suporte@tech.com.br<br>admin@tech.com.br"
      }
    ]
  })
};
</script>
