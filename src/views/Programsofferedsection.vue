<script setup>
import computerScienceLogo from '../assets/CSS_PNG-150x150.png'
import informationTechnologyLogo from '../assets/1-150x150.png'
import digitalMediaLogo from '../assets/MIDAS_PNG-150x150.png'
import libraryScienceLogo from '../assets/LISSO-150x150.png'

const programs = [
  {
    code: 'BSCS',
    title: 'Computer Science',
    description:
      'The Computer Science (CS) Program is designed for students who want to study computing in depth, focusing on software and hardware.',
    logo: computerScienceLogo,
    logoAlt: 'Computer Science Society logo',
  },
  {
    code: 'BSIT',
    title: 'Information Technology',
    description:
      'The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems.',
    logo: informationTechnologyLogo,
    logoAlt: 'Information Technology Society logo',
  },
  {
    code: 'BSDMIA',
    title: 'Digital Media and Interactive Arts',
    description:
      'The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts, and digital media technologies.',
    logo: digitalMediaLogo,
    logoAlt: 'MIDAS student organization logo',
  },
  {
    code: 'BLIS',
    title: 'Library Information Science',
    description:
      'The Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students for careers in information services.',
    logo: libraryScienceLogo,
    logoAlt: 'Library and Information Science student organization logo',
  },
]
</script>

<template>
  <section id="programs" class="programs-section" aria-label="Academic programs">
    <div class="program-grid">
      <article
        v-for="program in programs"
        :id="`program-${program.code.toLowerCase()}`"
        :key="program.code"
        class="program-card"
      >
        <div class="program-logo-wrap">
          <RouterLink
            v-if="program.code === 'BSCS' || program.code === 'BSIT'"
            :to="program.code === 'BSCS' ? '/computer-science' : '/information-technology'"
            :aria-label="`Open ${program.title} program page`"
          >
            <img class="program-logo" :src="program.logo" :alt="program.logoAlt" />
          </RouterLink>
          <img v-else class="program-logo" :src="program.logo" :alt="program.logoAlt" />
        </div>
        <div class="program-details">
          <p class="program-code">{{ program.code }}</p>
          <h2>{{ program.title }}</h2>
          <p class="program-description">{{ program.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.programs-section {
  display: grid;
  place-items: center;
  min-height: 470px;
  padding: 2rem;
  background: #ffffff;
  scroll-margin-top: 5rem;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.4rem;
  max-width: 1020px;
  margin: 0 auto;
}

.program-card {
  min-width: 0;
  text-align: center;
  scroll-margin-top: 5rem;
  transition: transform 0.2s ease;
}

.program-card:hover {
  transform: scale(1.04);
}

@media (prefers-reduced-motion: reduce) {
  .program-card {
    transition: none;
  }

  .program-card:hover {
    transform: none;
  }
}

.program-logo-wrap {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  height: 84px;
  margin-bottom: -3px;
}

.program-logo {
  width: 76px;
  height: 76px;
  object-fit: contain;
}

.program-details {
  box-sizing: border-box;
  min-height: 300px;
  padding: 1.25rem;
  border: 1px solid #dedede;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
  transition: box-shadow 0.2s ease;
}

.program-card:hover .program-details {
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.32);
}

.program-code {
  margin: 0 0 0.35rem;
  color: #8a6a16;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.program-details h2 {
  margin: 0.3rem 0 0.8rem;
  color: #244b53;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.08rem;
  font-weight: 500;
  line-height: 1.25;
}

.program-description {
  margin: 0;
  color: #81858a;
  font-size: 0.78rem;
  line-height: 1.8;
}

@media (max-width: 900px) {
  .program-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 600px;
    gap: 1.5rem 1rem;
  }
}

@media (max-width: 640px) {
  .programs-section {
    min-height: 440px;
  }
}

@media (max-width: 440px) {
  .programs-section {
    padding-inline: 1rem;
  }

  .program-grid {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
}
</style>
