<template>
    <footer>
        <div class="footer__content">
            <div class="footer__logo">
                <router-link to="/" title="Marco Poletto">
                    <img src="/img/logo.png" class="logo" alt="logo" />
                </router-link>
                <div class="footer__copy">
                    <p><span>&copy;</span> {{ $store.state.year }} Marco Poletto</p>
                </div>
            </div>
            <div class="footer__social">
                <a href="https://github.com/polettoweb" title="GitHub Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-github"></i></a>
                <a href="https://twitter.com/polettoweb" title="Twitter Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-twitter"></i></a>
                <a href="https://www.linkedin.com/in/marco-poletto-96853774/" title="Linkedin Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-linkedin"></i></a>
                <a href="https://plus.google.com/+MarcoPoletto" title="Google+ Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-googleplus"></i></a>
                <a href="mailto:marco@marcopoletto.eu" title="Contact me via email"><i class="ion-email"></i></a>
            </div>
        </div>
    </footer>
</template>