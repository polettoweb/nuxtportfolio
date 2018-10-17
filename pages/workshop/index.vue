<template>
    <div class="portfolio">
      <div class="portfolio__content">
        <h1>Workshop</h1>
        <PortfolioItem v-for="item in portfolioItems" 
        :key="item.text"
        :text="item.text"
        :image="item.image"
        :tags="item.tags"
        :link="item.link"
        :linkTitle="item.linkTitle"
        :linkGit="item.linkGit"
        :linkGitTitle="item.linkGitTitle"
        />
      </div>
      </div>
</template>
<script>
import PortfolioItem from "@/components/partials/PortfolioItem.vue";
export default {
    data() {
        return {
            portfolioItems: [
                {
                    text: "This portfolio using React.JS as framework.",
                    image: "react.png",
                    tags: "React.JS, React-router, Sass",
                    link: "https://github.com/polettoweb/reactportfolio",
                    linkTitle: "React portfolio Github repository",
                    linkGit: "https://github.com/polettoweb/reactportfolio",
                    linkGitTitle: "React portfolio Github repository"
                },
                {
                    text: "Second version of the portfolio using Nuxt.JS as framework.",
                    image: "nuxtCover.jpg",
                    tags: "Nuxt.JS, Vue.JS, Vuex, Sass",
                    link: "https://nuxt.marcopoletto.co.uk",
                    linkTitle: "Marco Poletto Nuxt.JS",
                    linkGit: "https://github.com/polettoweb/nuxtportfolio",
                    linkGitTitle: "Nuxt portfolio Github repository"
                },
                {
                    text: "First version of the portfolio using Vue.JS as framework.",
                    image: "vue.jpg",
                    tags: "Vue.JS, Vuex, Sass",
                    link: "https://vue.marcopoletto.co.uk",
                    linkTitle: "Marco Poletto Vue.JS",
                    linkGit: "https://github.com/polettoweb/vueportfolio",
                    linkGitTitle: "Vue portfolio Github repository"
                },
                {
                    text: "Small example of ecommerce functionality in Vue.JS",
                    image: "vueCover.jpg",
                    tags: "Vue.JS, vue-resource, Imageur API",
                    link: "https://small-ecommerce-example-vuejs-ldaubcucrv.now.sh/",
                    linkTitle: "Small ecommerce example in Vue.JS",
                    linkGit: "https://github.com/polettoweb/vue-small-ecommerce",
                    linkGitTitle: "Vue eCommerce Github repository"
                },
                {
                    text: "Todo list Built with Vue.JS",
                    image: "vueCover.jpg",
                    tags: "Vue.JS",
                    link: "https://github.com/polettoweb/todo-vue",
                    linkTitle: "Todo list Built with Vue.JS",
                    linkGit: "https://github.com/polettoweb/todo-vue",
                    linkGitTitle: "Todo list Built with Vue.JS"
                }
            ]
        };
    },
    components: {
        PortfolioItem
    },
    head() {
        return {
            title: "Workshop - Marco Poletto Portfolio"
        };
    }
};
</script>
