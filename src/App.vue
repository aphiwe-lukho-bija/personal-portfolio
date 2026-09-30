<script setup>
// ---------------------------------------------------------------------------
// App.vue
// This is the top level file of my portfolio. Everything starts here:
// which page is open, what the heading should say and where the nav buttons
// send me when they are clicked.
//
// I first built this site as plain html files (those are still in the
// legacy-static folder) and then I converted it to Vue so that moving between
// pages does not reload the whole browser.
// ---------------------------------------------------------------------------

import { ref, computed } from 'vue'

import SiteNav from './components/SiteNav.vue'
import SiteFooter from './components/SiteFooter.vue'
import HomeView from './components/HomeView.vue'
import TextPage from './components/TextPage.vue'
import GalleryView from './components/GalleryView.vue'
import ContactView from './components/ContactView.vue'

// NOTE TO SELF (still learning this bit):
// ref() makes a value reactive. Because it is a ref, the template reads it
// without the .value, but inside javascript you always need currentView.value.
// I know Vue also has reactive() for objects, ref() is just easier for me to
// follow right now.

// the page that is currently open. 'home' is the page the site starts on.
const currentView = ref('home')

// the headings for the pages. I kept them in one object so I only have to type
// each title once, before this I repeated the same title in every section.
const pageTitles = {
  home: 'Aphiwe Lukho Bija',
  about: 'About me',
  goals: 'My goals',
  gallery: 'My interests',
  contact: 'Contact me'
}

// computed recalculates for me when currentView changes.
// this was the part I did not understand at first - it is not a normal
// function, you do not call it, you just use pageTitle in the template.
const pageTitle = computed(() => pageTitles[currentView.value])

// the text for the about page
const aboutParagraphs = [
  'I am a 23-year-old aspiring software developer currently studying software development and building practical experience through coding projects.',
  'I enjoy solving problems, learning new technologies, and creating applications that provide real-world value. Communication is one of my strengths, and I enjoy presenting technical concepts clearly.',
  'Coding puts me in a flow state. Every challenge is an opportunity to grow, every mistake is a lesson, and every solution reminds me how rewarding persistence can be.',
  'Alongside my studies, I completed training as a GBVF Ambassador, strengthening my leadership, advocacy, and communication skills.'
]

// the text for the goals page
const goalsParagraphs = [
  'My goal is to successfully complete the Full-Stack Software Development programme at Life Choices Academy and keep growing through disciplined daily habits.',
  'I am drawn to the connection between technology and business. After completing my course, I plan to expand my skills into Data Engineering.',
  'I want to contribute to improving the lives of South Africans through meaningful technological solutions and eventually create employment opportunities in tech.'
]

// every button that navigates (the menu, the logo and the footer link) calls
// this one function instead of repeating the same 3 lines of code everywhere.
function goToView(view) {
  currentView.value = view

  // scroll back to the top, otherwise you click "Goals" and land halfway down
  // the goals page because the last page was long.
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="app-shell">

    <!-- the top bar + menu -->
    <SiteNav :current-view="currentView" @navigate="goToView" />

    <main>
      <!--
        NOTE TO SELF: v-if / v-else-if means only ONE of these sections is
        actually in the html, the rest are removed completely. That is why
        every time you click a menu button the animation in .view-enter plays
        again. I tried <component :is="..."> as well but v-if is easier to read.

        I used to have all five sections inside App.vue. It became a very long
        file so I moved each page into its own component and now App.vue only
        decides which page shows.
      -->

      <!-- 1. HOME -->
      <HomeView v-if="currentView === 'home'" @navigate="goToView" />

      <!-- 2. ABOUT -->
      <!-- about and goals have exactly the same layout, only the words are
           different, so they share the TextPage component -->
      <TextPage
        v-else-if="currentView === 'about'"
        eyebrow="THE PERSON BEHIND THE CODE"
        :title="pageTitle"
        :paragraphs="aboutParagraphs"
      />

      <!-- 3. GOALS -->
      <TextPage
        v-else-if="currentView === 'goals'"
        eyebrow="THE ROAD AHEAD"
        :title="pageTitle"
        :paragraphs="goalsParagraphs"
      />

      <!-- 4. INTERESTS -->
      <GalleryView v-else-if="currentView === 'gallery'" :title="pageTitle" />

      <!-- 5. CONTACT -->
      <ContactView v-else :title="pageTitle" />

    </main>

    <!-- the footer with my name and a link to the contact page -->
    <SiteFooter @navigate="goToView" />

  </div>
</template>