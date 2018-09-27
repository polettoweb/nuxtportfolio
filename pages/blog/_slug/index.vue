<template>
    <div v-if="!loading" class="blog__container">
        <section>
            <h1>{{article.title}}</h1>
            <div class="blog__image">
                <img :src="article.thumbnail" alt="">
            </div>
            <div class="blog__post">
                <p>{{article.content}}</p>
                <code>function() { console.log}</code>
            </div>
            
        </section>
        <div class="blog__back-container">
            <nuxt-link to="/blog" class="blog__back">&lt; Back to blogs</nuxt-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: true,
            article: '',
            articles: ''
        }
    },
    created() {
        console.log(this.$route.params.slug);
        const url = 'https://marcopolettouk.firebaseio.com/articles/.json';
        axios(url)
        .then(res => {
            this.article = res.data.filter(el => el.slug === this.$route.params.slug)[0]
        })
        .finally(() => {
            this.loading = false;
        })
    }
}
</script>
