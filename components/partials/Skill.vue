<template>
    <div class="skill">
        <h4>{{title}}</h4>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['title', 'text','children']
}
</script>
