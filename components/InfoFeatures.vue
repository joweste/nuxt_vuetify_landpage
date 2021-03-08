<template>
  <div>
    <base-info-card title="Links Úteis">
      <nuxt-link
        v-for="item in features"
        :key="item.id"
        :to="item.link"
        class="mb-2 white--text body-1 d-block text-none"
        >{{ `&rsaquo;` + item.text }}</nuxt-link
      >
    </base-info-card>
    <social-share> </social-share>
  </div>
</template>

<script>
import BaseInfoCard from "@/components/base/InfoCard";
import SocialShare from "@/components/base/SocialShare";
export default {
  name: "SectionFeaturesAlt",
  components: {
    BaseInfoCard,
    SocialShare
  },
  data: () => ({
    features: [
      { id: 1, text: "Funcionalidades", link: "funcionalidades" },
      { id: 2, text: "Planos e Preços", link: "precos" },
      // { id: 3, text: "Termos de Uso", link: "termosDeUso" },
      // { id: 4, text: "Central de Ajuda", link: "centralDeAjuda" },
      { id: 5, text: "Política de Privacidade", link: "politicaPrivacidade" },
      { id: 6, text: "Trabalhe Conosco", link: "parceiros" }
    ]
  })
};
</script>
