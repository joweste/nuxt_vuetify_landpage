<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card :title="title" color="primary">
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          class="red--text mb-0 pb-0"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
import BaseInfoCard from "@/components/base/InfoCard";
import BaseAvatarCard from "@/components/base/AvatarCard";
export default {
  name: "BaseBusinessContact",
  components: {
    BaseInfoCard,
    BaseAvatarCard
  },

  props: {
    dark: Boolean,
    dense: Boolean,
    title: String
  },

  data: () => ({
    business: [
      {
        icon: "mdi-cellphone",
        title: "Fone",
        text: "(21)99999-00XX<br>+39XX187204XX(WhastApp)"
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
