<template>
  <div>
      <section class="home__intro">
          <div class="home__social">
              <a href="https://github.com/polettoweb" title="GitHub Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-github"></i></a>
              <a href="https://twitter.com/polettoweb" title="Twitter Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-twitter"></i></a>
              <a href="https://www.linkedin.com/in/marco-poletto-96853774/" title="Linkedin Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-linkedin"></i></a>
              <a href="https://plus.google.com/+MarcoPoletto" title="Google+ Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-googleplus"></i></a>
              <a href="mailto:marco@marcopoletto.eu" title="Contact me via email"><i class="ion-email"></i></a>
          </div>
          <div class="home__me">
              <h1>Hello, my name is Marco, I'm a <strong>Web Developer </strong>and a <strong>Frontend </strong><strong>Engineer</strong>.</h1><p> I create websites from scratch using the latest cutting edge web technologies. <strong>Innovation</strong>, <strong>clean code</strong> and <strong>pixel perfect</strong> results characterize all my projects. With attention to details, I always deliver the best solution to the clients according to their requirements.</p>
              <div class="home__buttons">
                <a class="button" :href="cvHref" target="_blank" rel="noopener noreferrer" title="Download CV">Download CV</a>
                  
              </div>
          </div>
      </section>
      <section class="home__container">
          <section class="home__carousel">
              <h3>Recent Works</h3>
              <HomeSlider />
              
          </section> 
          <section class="cards__container">
              <h3>Services</h3>
              <div class="cards">
                      <Card title="Design" logo="/img/pantone.svg" :text="designText" />
                      <Card title="Develop" logo="/img/programming.svg" :text="codeText" />
                      <Card title="SEO &amp; Optimisation" logo="/img/analysis.svg" :text="seoText" />
              </div>
              <div class="cards__buttons">
                  <a class="button" title="Contact Me" href="mailto:marco@marcopoletto.eu">Contact Me</a>                        
              </div>
          </section>
      </section>
  </div>
</template>

<script>
import Card from "@/components/partials/Card.vue";
import HomeSlider from "@/components/partials/HomeSlider.vue";

const designText =
    "Creation of Logos and brand identities. Designing websites starting from wireframes and mock-ups for a totally customizable experience.";
const codeText =
    "Writing clean code for best performance and high scalability. Using the latest technologies, I write code whether if it's completely custom, or using cms like Magento and Wordpress.";
const seoText =
    "Service of optimization for your existing website. I can work on the existing code for the optimization of the code and for improvement in search engines' results.";
const cvHref = "/pdfs/marco-poletto-cv.pdf";
export default {
    data: function() {
        return {
            designText,
            codeText,
            seoText,
            cvHref
        };
    },
    components: {
        Card,
        HomeSlider
    },
    head() {
        return {
            title: "Homepage - Marco Poletto Portfolio"
        };
    }
};
</script>
