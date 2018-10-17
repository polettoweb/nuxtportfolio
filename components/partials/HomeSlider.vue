<template>
    <div class='carousel-view' @mouseover="pause" @mouseleave="start">
    <transition-group class='carousel' tag="div">
      <div v-for="slide in slides" class='slide' :key="slide.id">
        <img :src="slide.src" :alt="slide.title"/>
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button ion-arrow-left-b' @click="previous"></button>
      <button class='carousel-controls__button ion-arrow-right-b' @click="next"></button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            slides: [
                {
                    title: "Aqua Pura",
                    id: 1,
                    src: "/img/aqua-pura-portfolio.jpg"
                },
                {
                    title: "B&amp;B Venezia",
                    id: 2,
                    src: "/img/bbvenezia-portfolio.jpg"
                },
                {
                    title: "Belling",
                    id: 3,
                    src: "/img/belling-portfolio.jpg"
                },
                {
                    title: "Brandy Melville UK",
                    id: 4,
                    src: "/img/bmuk-portfolio.jpg"
                },
                {
                    title: "The Lantern Takard",
                    id: 5,
                    src: "/img/tankard-portfolio.jpg"
                },
                {
                    title: "Stoves",
                    id: 6,
                    src: "/img/stoves-portfolio.jpg"
                },
                {
                    title: "Brandy Melville USA",
                    id: 7,
                    src: "/img/bmusa-portfolio.jpg"
                }
            ]
        };
    },
    created() {
        this.start();
    },
    methods: {
        next() {
            const first = this.slides.shift();
            this.slides = this.slides.concat(first);
        },
        previous() {
            const last = this.slides.pop();
            this.slides = [last].concat(this.slides);
        },
        pause() {
            clearInterval(this.interval);
        },
        start() {
            this.interval = setInterval(() => {
                this.next();
            }, 3000);
        }
    }
};
</script>
