<template>
    <div v-if="!$store.state.loading" class="blog__container">
        <section>
            <h1>{{article.title}}</h1>
            <div class="blog__image">
                <img :src="article.thumbnail" alt="">
            </div>
            <div class="blog__post">
                <p>{{article.content}}</p>
            </div>
            
        </section>
        <div class="blog__back-container">
            <nuxt-link to="/blog" class="blog__back">&lt; Back to blogs</nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            article: ""
        };
    },
    beforeCreate() {
        this.$store.commit("retrieveList");
        console.log(this.article);
    },
    created() {
        this.article = this.$store.state.articles.filter(el => el.slug === this.$route.params.slug)[0];
    },
    head() {
        return {
            title: `${this.article} - Marco Poletto Portfolio`
        };
    }
};
</script>
