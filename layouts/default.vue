<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <AppHeader />
        <System />
        <nuxt />
        <Info />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Info from "@/components/Info";
import System from "@/components/System";
export default {
  components: {
    AppHeader,
    System,
    Info
  }
};
</script>

<style>
#app {
  font-family: "PT Sans", serif;
}
</style>
