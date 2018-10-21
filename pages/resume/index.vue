<template>
        <section class="resume__container">
        <section class="experience__container">
          <h1>Experience</h1>
          <ul class="experience">
             <ExpCard
              number="odd first"
              title="UI Engineer"
              location="MAG-O - Manchester"
              date="July 2018 - Now"
              :text="magText"
            />
            <ExpCard
              number="even second"
              title="Frontend Software Engineer"
              location="Missguided LTD - Manchester"
              date="December 2017 - June 2018"
              :text="missText"
            />
            <ExpCard
              number="odd third"
              title="Frontend Web Developer"
              location="Shoot The Moon LTD - Manchester"
              date="April 2017 - December 2017"
              :text="shootText"
            />
            <ExpCard
              number="even fourth"
              title="Software Developer"
              location="Galtone LTD - Liverpool"
              date="June 2015 - March 2017"
              :text="galtoneText"
            />
            <ExpCard
              number="odd fifth"
              title="Freelance Web Developer"
              location="Freelance - Italy/Manchester"
              date="January 2014 - May 2015"
              :text="freelanceText"
            />
            
          </ul>
        </section>
        <section class="skills__container">
          <h3>Skills</h3>
          <Skill title="Professional">
            <div class="skill__title">
              <p>Frontend Development - 90%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="90" />
              <p>Email Development - 90%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="90" />
              <p>Reactive Development - 90%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="90" />
              <p>Prototyping - 85%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="85" />
              <p>UX/UI Design - 90%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="90" />
              <p>Backend Development - 60%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="60" />
              <p>Use cases - 90%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="90" />
            </div>
          </Skill>
          <Skill title="Detailed">
            <div class="skill__title">
              <p>Test-driven Development - 70%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="70" />
              <p>HTML / CSS - 100%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="100" />
              <p>Reactive Frameworks (React, VueJS) - 90%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="90" />
              <p>Prototyping Tools (Proto.io, Invision) - 80%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="80" />
              <p>Adobe Creative Suite - 70%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="70" />
              <p>PHP and MySQL - 60%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="60" />
              <p>Magento - 70%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="70" />
            </div>
          </Skill>
          <Skill title="Personal">
            <div class="skill__title">
              <p>Commitment - 100%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="100" />
              <p>Punctuality - 100%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="100" />
              <p>Leadership - 90%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="90" />
              <p>Communication Skill - 80%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="80" />
              <p>Analytical Skill - 90%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="90" />
              <p>Teamwork - 85%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="85" />
              <p>Self-Motivation - 100%</p>
              <ProgressBar bar-color="#4db2b3" size="small" :val="100" />
            </div>
          </Skill>
        </section>

        <div class="home__me">
          <div class="resume__buttons">
            <a class="button" href="/pdfs/marco-poletto-cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
            <a class="button" href="mailto:marco@marcopoletto.eu">Contact Me</a>
          </div>
        </div>
      </section>
</template>
<script>
import ExpCard from "@/components/partials/ExpCard.vue";
import Skill from "@/components/partials/Skill.vue";
import ProgressBar from "vue-simple-progress";

const shootText =
    "Maintenance and development of the frontend part of various websites with or without CMS. Develop, refinement and management of the automated development environment (Gulp, GIT, Webpack, browsersynch, etc), of RESTful APIs between Wordpress and other services such as OpenWeather and social networks. Specialisation in Frontend Development and UX experience.";
const galtoneText =
    "Maintenance and development of e-commerce websites. My role covers all aspect of development new websites based in Magento and Wordpress. From the creation of the development environment to the release in production. I am specialized in Front end development but I work on the backend too. We use code versioning and I am coordinating in-house and external developers to merge the code into the final product.";
const freelanceText =
    "The beginning of my developer career. A freelance role that allows me to develop projects from the wireframe to the production code. Managing clients and their expectations. Work independently and with tight deadProgressBars.";
const missText =
    "I was part of a big project for migrating a strong and solid website into a new era. As part of the team I was maintening the two company websites (Missguided and Mennace), improving performance, updating/refactoring the code and mentoring more junior developers with a pair programmimg system.";
const magText =
    "A new exciting adventure is starting now. Being part of such a big organization and working with cutting edge technology will end up being an epic challenge that I am happy to enjoy";
export default {
    data: function() {
        return {
            shootText,
            galtoneText,
            freelanceText,
            missText,
            magText
        };
    },
    components: {
        ExpCard,
        Skill,
        ProgressBar
    },
    head() {
        return {
            title: "Resume - Marco Poletto Portfolio"
        };
    }
};
</script>
