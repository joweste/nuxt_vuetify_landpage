<template>
  <v-container fluid style="background:#FFFFFF">
    <v-row class="d-flex">
      <v-col
        v-for="article in articles"
        :key="article.slug"
        class="grey--text text--darken-2"
        cols="12"
        md="6"
      >
        <v-card class="pa-2" height="100%">
          <span style="font-size:32px;" class="mt-3">{{ article.title }}</span>
          <div class="mt-3">
            <span style="color:grey">Escrito por </span>
            <strong>{{ article.author.name }}</strong>
            <span style="color:grey"> em </span>
            <strong>{{ formatDate(article.updatedAt) }}</strong>
          </div>
          <NuxtLink
            :to="{
              name: 'pagesblog-blog-slug',
              params: { slug: article.slug }
            }"
          >
            <v-img :src="article.img" height="300px" class="mt-3"></v-img>
          </NuxtLink>
          <v-card-text style="font-size:16px;">{{
            concatStr(article.description)
          }}</v-card-text>
          <v-card-actions class="mb-3">
            <NuxtLink
              :to="{
                name: 'pagesblog-blog-slug',
                params: { slug: article.slug }
              }"
              ><v-btn text style="color:#5277AC;">LEIA MAIS</v-btn>
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- <nuxt-content :document="article" /> -->
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
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author", "updatedAt"])
      .sortBy("createdAt", "desc")
      .fetch();
    const tags = await $content("tags", params.slug)
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    //console.log(articles);
    return { articles, tags };
  },
  methods: {
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
        .format("ddd, MMM Do YYYY, hh:mm A");
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
</style>
