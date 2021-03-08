<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card title="Fale conosco para obter mais informações" pace="6">
        Mais informações? Aqui estão nossos dados de contato
      </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
import BaseInfoCard from "@/components/base/InfoCard";
import BaseBusinessContact from "@/components/base/BusinessContact";
export default {
  name: "BaseBusinessInfo",
  components: {
    BaseInfoCard,
    BaseBusinessContact
  },

  props: { dark: Boolean },

  data: () => ({
    business: [
      // {
      //   icon: "mdi-map-marker-outline",
      //   title: "Address",
      //   text: "8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137",
      // },
      {
        icon: "mdi-cellphone",
        title: "Fone",
        text: "(21)99999-00XX<br>+XX35187204XX(WhastApp)"
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
