<template>
    <div class="blog-cat__home">
        <h1>Blog</h1>
        <div class="blog-cat__container">
            <h2 v-if="$store.state.loading">Please wait while the contentg is loading...</h2>
            <article v-if="!$store.state.loading" v-for="article in $store.state.articles" :key="article.id" class="blog-cat__post">
                <nuxt-link :to="`/blog/${article.slug}`" :title="article.slug">
                    <div class="blog-cat__image">
                        <img :src="article.thumbnail" alt="" class="blog-cat__image">
                    </div>
                    <div class="blog-cat__title">
                        <h2 >{{article.title}}</h2>
                    </div>
                    <div class="blog-cat__text">
                        <p>{{article.previewText}}</p>
                    </div>
                </nuxt-link>
            </article>
        </div>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: "Blog - Marco Poletto Portfolio"
        };
    }
};
</script>



