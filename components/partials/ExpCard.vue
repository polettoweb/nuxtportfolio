<template>
    <li :class="number" class="expcard">
            <i class="ion-ios-circle-filled"></i>
            <div class="expcard__title">
                <p>{{title}}</p>
            </div>
            <div class="expcard__text">
                <p class="expcard__location">{{location}}</p>
                <p class="expcard__date">{{date}}</p>
                <p class="expcard__text">{{text}}</p>
            </div>
        </li>
</template>
<script>
export default {
    props: ['number', 'title', 'location', 'date', 'text']
}
</script>