<template>
  <div class="portfolio">
        <div class="portfolio__content">
          <h1>Portfolio</h1>
          <PortfolioItem v-for="item in portfolioItems" 
            :key="item.link"
            :text="item.text"
            :image="item.image"
            :tags="item.tags"
            :link="item.link"
            :linkTitle="item.linkTitle"
          />
        </div>
      </div>
</template>

<script>
import PortfolioItem from "@/components/partials/PortfolioItem.vue";
export default {
    components: {
        PortfolioItem
    },
    data() {
        return {
            portfolioItems: [
                {
                    text: "Highly customised, multilanguage Magento eCommerce website",
                    image: "missguided-portfolio.jpg",
                    tags: "Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing",
                    link: "https://missguided.co.uk",
                    linkTitle: "Missguided"
                },
                {
                    text: "Highly customised, multilanguage Magento eCommerce website",
                    image: "mennace-portfolio.jpg",
                    tags: "Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing",
                    link: "https://mennace.com/uk",
                    linkTitle: "Mennace"
                },
                {
                    text: "Responsive website based on Wordpress and developed from scratch",
                    image: "aqua-pura-portfolio.jpg",
                    tags: "Wordpress, Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, WebGL, RESTful API",
                    link: "https://aqua-pura.com",
                    linkTitle: "Aqua Pura UK"
                },
                {
                    text: "Responsive website made on top of Umbraco cms.",
                    image: "belling-portfolio.jpg",
                    tags: "Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX",
                    link: "http://www.belling.co.uk",
                    linkTitle: "Belling UK"
                },
                {
                    text: "Responsive single page website built from scratch",
                    image: "tankard-portfolio.jpg",
                    tags: "Frontend Development, HTML5, Sass, CSS animations, Javascript",
                    link: "http://www.thelanterntankard.com",
                    linkTitle: "The Lantern Tankard"
                },
                {
                    text: "Magento Enterprise eCommerce Website built for the USA branch of BrandyMelville. An High street fashion brand",
                    image: "bmusa-portfolio.jpg",
                    tags: "Graphic Design, Full Stack Development, Magento, Sass, Javascript, JSON, AJAX, RESTful API",
                    link: "http://www.brandymelvilleusa.com",
                    linkTitle: "Brandy Melville USA"
                },
                {
                    text: "Responsive website made on top of Umbraco cms.",
                    image: "stoves-portfolio.jpg",
                    tags: "Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, GoogleMaps API",
                    link: "http://www.stoves.co.uk",
                    linkTitle: "Stoves UK"
                },
                {
                    text: "Responsive website built for a Bed&amp;Breakfast in Venice using HTML5, Sass, jQuery, and PHP for the online booking.",
                    image: "bbvenezia-portfolio.jpg",
                    tags: "Graphic Design, Full Stack Development, PHP, Sass, CSS3, Javascript, RESTful API",
                    link: "http://www.bbvenezia.com",
                    linkTitle: "B&amp;B Venezia"
                },
                {
                    text: "Magento Enterprise eCommerce Website built for the UK branch of BrandyMelville. An High street fashion brand",
                    image: "bmuk-portfolio.jpg",
                    tags: "Graphic Design, Full Stack Development, Magento, Sass, Javascript, JSON, AJAX, RESTful API",
                    link: "http://www.brandymelville.co.uk",
                    linkTitle: "Brandy Melville UK"
                }
            ]
        };
    },
    head() {
        return {
            title: "Portfolio - Marco Poletto Portfolio"
        };
    }
};
</script>
