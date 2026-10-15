<script setup>
import { ref } from 'vue'
import ciscoLogo from '../assets/Partners/1024px-Cisco_academy_logo.svg_-300x300.png'
import acerLogo from '../assets/Partners/acer-300x300.jpg.jpeg'
import huaweiLogo from '../assets/Partners/huawei-academy-logo.jpg.jpeg'

const isExpanded = ref(false)

const partners = [
  { name: 'Oracle Academy', logoText: 'ORACLE', kind: 'oracle' },
  { name: 'Cisco Networking Academy', logo: ciscoLogo },
  { name: 'Acer Academy', logo: acerLogo },
  { name: 'Huawei ICT Academy', logo: huaweiLogo },
]
</script>

<template>
  <section id="partnerships" class="partners-section">
    <header class="section-header">
      <p class="eyebrow">Connect</p>
      <h2>Our Partners and Memberships</h2>
      <p class="subtitle">Driving technology for education</p>
    </header>

    <div class="partners-grid" aria-label="Partners and memberships">
      <div v-for="partner in partners" :key="partner.name" class="partner">
        <div v-if="partner.kind === 'oracle'" class="oracle-wordmark" role="img" :aria-label="partner.name">
          <span>{{ partner.logoText }}</span>
          <small>Academy</small>
        </div>
        <img v-else :src="partner.logo" :alt="partner.name" />
      </div>
    </div>

    <div v-if="isExpanded" class="partner-details">
      <p v-for="partner in partners" :key="partner.name">{{ partner.name }}</p>
    </div>

    <button
      class="view-more"
      type="button"
      :aria-expanded="isExpanded"
      @click="isExpanded = !isExpanded"
    >
      {{ isExpanded ? 'View Less' : 'View More' }}
    </button>
  </section>
</template>

<style scoped>
.partners-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 470px;
  padding: 1.5rem 1.5rem 3rem;
  background: #3E3C3B;
  color: #263f44;
  text-align: center;
  scroll-margin-top: 5rem;
}

.section-header {
  margin: 0 auto;
}

.eyebrow {
  margin: 0 0 0.45rem;
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
}

.section-header h2 {
  margin: 0;
  color: #ffffff;
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.2;
}

.subtitle {
  margin: 0.25rem 0 0;
  color: #ffffff;
  font-size: 0.78rem;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  gap: 2rem;
  width: min(100%, 760px);
  margin: 3rem auto 3rem;
}

.partner {
  display: grid;
  place-items: center;
  width: 100%;
  height: 90px;
}

.partner img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 125px;
  object-fit: contain;
}

.oracle-wordmark {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #e44335;
  line-height: 1;
}

.oracle-wordmark span {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: -0.06em;
}

.oracle-wordmark small {
  margin-top: 0.2rem;
  color: #ffffff;
  font-size: 0.95rem;
}

.partner-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.65rem 1.5rem;
  width: min(100%, 760px);
  margin: -0.5rem auto 1.5rem;
  color: #617276;
  font-size: 0.82rem;
}

.partner-details p {
  margin: 0;
}

.view-more {
  min-width: 88px;
  padding: 0.55rem 0.9rem;
  border: 0;
  border-radius: 2px;
  background: #a1a1a1;
  color: #172d30;
  font-size: 0.65rem;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.view-more:hover {
  background: #a1a1a1;
  transform: translateY(-1px);
}

.view-more:focus-visible {
  outline: 2px solid #24484e;
  outline-offset: 3px;
}

@media (max-width: 560px) {
  .partners-section {
    padding-inline: 1rem;
  }

  .partners-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.4rem 1rem;
    margin: 2rem auto 3rem;
  }
}

@media (max-width: 640px) {
  .partners-section {
    min-height: 440px;
  }
}
</style>
