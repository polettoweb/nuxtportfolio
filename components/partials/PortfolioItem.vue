<template>
    <div class="portfolio__box">
                <div class="portfolio__img">
                    <a :href="link" :title="linkTitle" target="_blank" rel="noopener noreferrer">
                        <img :src="'/img/' + image" :alt="linkTitle" />
                    </a>
                </div>
                <div class="portfolio__links">
                    <p class="portfolio__links-text">{{text}}</p>
                    <a v-if="linkGit" :href="linkGit" :title="linkGitTitle" target="_blank" class="portfolio__links-git" rel="noopener noreferrer"><img src="/img/GitHub.png" /></a>
                </div>
                <div class="portfolio__tags">
                    <a v-for="(tag, i) in (tags.split(','))" target="_self" :key="i" @click="preventDefault" rel="none" tabindex="-1" href="">{{tag}}</a>
                </div>
            </div>
</template>
<script>
export default {
    props: ["text", "image", "tags", "link", "linkTitle", "linkGit", "linkGitTitle"],
    methods: {
        preventDefault(e) {
            e.preventDefault();
        }
    }
};
</script>