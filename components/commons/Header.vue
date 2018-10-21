<template>
    <header>
        <div class="header--top">
            <div class="nav__container">
                <div class="header__mobile">
                    <a class="toggleLink" title="Toggle mobile menu" @click="handleMenu"><img src="/img/toggle.svg" class="toggle" alt="Toggle menu" /></a>
                    <p class="mobileName" >Marco Poletto</p>
                </div>
                <nav>
                    <ul>
                        <li><router-link @click.native="handleMenu" to="/" title="Home">Home</router-link></li>
                        <li><router-link @click.native="handleMenu" to="/portfolio" title="Portfolio">Portfolio</router-link></li>
                        <li><router-link @click.native="handleMenu" to="/blog" title="Blog">Blog</router-link></li>
                        <li><router-link @click.native="handleMenu" to="/workshop" title="Workshop">Workshop</router-link></li>
                        <li><router-link @click.native="handleMenu" to="/resume" title="Resume">Resume</router-link></li>
                    </ul>
                </nav>
            </div>
            <h2 class="header__name">Marco Poletto</h2>
        </div>
        <div class="header__logo">
            <img src="/img/logo.png" class="logo" alt="logo" />
        </div>
    </header>
</template>
<script>
export default {
    methods: {
        handleMenu() {
            let el = document.querySelector(".nav__container>nav");
            let name = document.querySelector(".mobileName");
            el.classList.toggle("open");
            name && name.classList.toggle("open");
        }
    }
};
</script>