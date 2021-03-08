<template>
  <v-container fluid>
    <v-row style="background:#FFFFFF">
      <v-col cols="12">
        <v-row class="mt-3">
          <!-- <v-col cols="2"></v-col> -->
          <v-col cols="8" offset="2" class="mr-5">
            <span style="font-size:32px;" class="mt-3">{{
              article.title
            }}</span>
            <div class="mt-3">
              <span style="color:grey">Escrito por </span>
              <strong>{{ article.author.name }}</strong>
              <span style="color:grey"> em </span>
              <strong>{{ cnvrtDate(article.updatedAt) }}</strong>
            </div>
            <v-img :src="article.img" height="300px" class="mt-3"></v-img>
            <v-card-text style="font-size:16px;">{{
              concatStr(article.description)
            }}</v-card-text>
          </v-col>
          <v-row v-if="$vuetify.breakpoint.smAndUp">
            <v-btn color="primary" @click.stop="to">
              <v-icon class="mr-2">mdi-backspace-outline</v-icon>
              Voltar
            </v-btn>
          </v-row>
        </v-row>
        <nuxt-content :document="article" />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-btn color="primary" @click.stop="to">
        <v-icon class="mr-2">mdi-backspace-outline</v-icon>
        Voltar
      </v-btn>
    </v-row>
  </v-container>

  <!-- <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

    <nuxt-content :document="article" />
  </article> -->
</template>
<script>
export default {
  // async asyncData({ $content, params }) {
  //   const article = await $content("articles", params.slug).fetch();

  //   return { article };
  // },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    // const tags = await $content("tags", params.slug)
    //   .only(["name", "description", "img", "slug"])
    //   .sortBy("createdAt", "asc")
    //   .fetch();
    //console.log(articles);
    return { article };
  },
  methods: {
    to() {
      this.$router.back(); // this.$router.go(-1);
    },
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("pt", options);
    },
    hoverEvnt() {
      this.hoverStyle = "background-color:red;";
    },
    concatStr(str) {
      return str?.substring(0, 300) + " ...";
    },
    cnvrtDate(date) {
      return this.$moment(date)
        .utcOffset(-0, false)
        .format("DD MMM YYYY, hh:mm A");
    }
  }
};
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
/* .icon.icon-link {
  background-image: url("~assets/svg/icon-hashtag.svg");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
} */

.nowrap {
  white-space: nowrap;
}
</style>
