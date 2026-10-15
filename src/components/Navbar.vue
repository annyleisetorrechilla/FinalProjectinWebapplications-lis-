<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header
    class="navbar-wrap"
    :class="{
      'navbar-wrap--home': route.name === 'home',
      'navbar-wrap--information-technology': route.name === 'information-technology',
    }"
  >
    <div class="navbar">
      <RouterLink to="/" class="brand" aria-label="CCS home">
        <img src="@/assets/LOGO.png" alt="CCS" />
      </RouterLink>

      <nav class="nav-links" aria-label="Main navigation">
        <RouterLink to="/#hero">Home</RouterLink>
        <details class="nav-dropdown">
          <summary>Academic Programs</summary>
          <div class="submenu">
            <RouterLink to="/#programs">All Programs</RouterLink>
            <RouterLink to="/computer-science">Computer Science</RouterLink>
            <RouterLink to="/information-technology">Information Technology</RouterLink>
            <RouterLink to="/#program-bsdmia">Digital Media and Interactive Arts</RouterLink>
            <RouterLink to="/#program-blis">Library Information Science</RouterLink>
          </div>
        </details>
        <RouterLink to="/#partnerships">Partnerships</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
  background: #244b53;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.14);
}

.navbar-wrap--home {
  position: absolute;
  background: transparent;
  box-shadow: none;
}

.navbar-wrap--information-technology {
  background: #725500;
}

.navbar {
  max-width: 790px;
  margin: 0 auto;
  padding: 0.45rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.brand {
  display: block;
  flex: 0 0 auto;
}

.brand img {
  width: 38px;
  height: 38px;
  object-fit: contain;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(0.65rem, 1.5vw, 1.4rem);
}

.nav-links a {
  text-decoration: none;
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.nav-dropdown {
  position: relative;
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 600;
  white-space: nowrap;
}

.nav-dropdown summary {
  cursor: pointer;
  list-style: none;
}

.nav-dropdown summary::-webkit-details-marker {
  display: none;
}

.nav-dropdown summary::after {
  content: ' ▾';
}

.submenu {
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 30;
  display: grid;
  min-width: 220px;
  padding: 0.4rem 0;
  transform: translateX(-50%);
  background: #363636;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
}

.submenu a {
  padding: 0.6rem 0.85rem;
}

.submenu a:hover,
.submenu a:focus-visible,
.nav-dropdown[open] summary,
.nav-dropdown summary:hover,
.nav-dropdown summary:focus-visible {
  color: #ffffff;
}

.nav-links a:hover,
.nav-links a:focus-visible,
.nav-links a.router-link-active {
  color: #ffffff;
}

@media (max-width: 640px) {
  .navbar {
    max-width: 100%;
    padding: 0.5rem 1rem;
    align-items: center;
  }

  .nav-links {
    gap: 0.75rem;
    overflow-x: auto;
  }

  .nav-links a {
    font-size: 0.65rem;
  }

  .nav-dropdown {
    font-size: 0.65rem;
  }

  .submenu {
    left: auto;
    right: 0;
    transform: none;
  }
}
</style>
