<template>
    <transition appear :name="transitionName">
        <div class="cookie" :class="containerPosition" v-if="isOpen">
            <div class="cookie__content">
                <slot name="message" class="cookie__content">
                    We use cookies to ensure you get the best experience on our website. <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
                </slot>
            </div>
            <div class="cookie__buttons">
                <button v-if="disableDecline === false" @click="decline" class="cookie__buttons__button cookie__buttons__button--decline">
                    <slot name="declineContent">
                        Opt Out
                    </slot>
                </button>
                <button @click="accept" class="cookie__buttons__button cookie__buttons__button--accept">
                    <slot name="acceptContent">
                        Got It!
                    </slot>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import * as tinyCookie from 'tiny-cookie'

export default {
    name: 'vue-cookie-accept-decline',
    props: {
        debug: {
            type: Boolean,
            default: false
        },

        disableDecline: {
            type: Boolean,
            default: false
        },

        // bottom, top
        position: {
            type: String,
            default: 'bottom'
        },

        // slideFromBottom, slideFromTop, fade
        transitionName: {
            type: String,
            default: 'slideFromBottom'
        }
    },
    data () {
        return {
            status: null,
            supportsLocalStorage: true,
            isOpen: false
        }
    },
    computed: {
        containerPosition () {
            return `cookie--${this.position}`
        }
    },
    mounted () {
        this.checkLocalStorageFunctionality()
        this.init()
    },
    methods: {
        init () {
            let visitedType = this.getCookieStatus()
            if (visitedType && (visitedType === 'accept' || visitedType === 'decline')) {
                this.isOpen = false
            }

            if (!visitedType) {
                this.isOpen = true
            }

            this.status = visitedType
            this.$emit('status', visitedType)
        },
        checkLocalStorageFunctionality () {
            // Check for availability of localStorage
            try {
                const test = '__vue-cookie-accept-decline-check-localStorage'
                window.localStorage.setItem(test, test)
                window.localStorage.removeItem(test)
            } catch (e) {
                console.error('Local storage is not supported, falling back to cookie use')
                this.supportsLocalStorage = false
            }
        },
        setCookieStatus (type) {
            if (this.supportsLocalStorage) {
                if (type === 'accept') {
                    localStorage.setItem('vue-cookie-accept-decline', 'accept')
                }
                if (type === 'decline') {
                    localStorage.setItem('vue-cookie-accept-decline', 'decline')
                }
            } else {
                if (type === 'accept') {
                    tinyCookie.set('vue-cookie-accept-decline', 'accept')
                }
                if (type === 'decline') {
                    tinyCookie.set('vue-cookie-accept-decline', 'decline')
                }
            }
        },
        getCookieStatus () {
            if (this.supportsLocalStorage) {
                return localStorage.getItem('vue-cookie-accept-decline')
            } else {
                return tinyCookie.get('vue-cookie-accept-decline')
            }
        },
        accept () {
            if (!this.debug) {
                this.setCookieStatus('accept')
            }

            this.status = 'accept'
            this.isOpen = false
            this.$emit('clickedAccept')
        },
        decline () {
            if (!this.debug) {
                this.setCookieStatus('decline')
            }

            this.status = 'decline'
            this.isOpen = false
            this.$emit('clickedDecline')
        }
    },
}
</script>