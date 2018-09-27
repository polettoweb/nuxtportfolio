<template>
    <div class="card">
            <div class="card__logo">
                <img :src="logo" :alt="title" />
            </div>
            <div class="card__title">
                <p>{{title}}</p>
            </div>
            <div class="card__text">
                <p>{{text}}</p>
            </div>
        </div>
</template>
<script>
export default {
    props: ['title', 'logo', 'text']
}
</script>
