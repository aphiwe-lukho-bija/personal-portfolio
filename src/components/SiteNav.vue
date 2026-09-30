<script setup>
// ---------------------------------------------------------------------------
// SiteNav.vue
// The bar at the top with my name and the menu buttons.
//
// I moved this into its own component because the same header was repeated on
// every page in my old html version. Now it only exists once.
//
// The parent (App.vue) sends the page that is currently open and listens for
// the "navigate" event that I send out when a button is clicked.
// ---------------------------------------------------------------------------

// my menu links. id is the value I compare with currentView,
// label is the text that the visitor actually sees.
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'goals', label: 'Goals' },
  { id: 'gallery', label: 'Interests' },
  { id: 'contact', label: 'Contact' }
]

// props are the values that the parent gives me.
// currentView is required because without it I cannot highlight the right button.
const props = defineProps({
  currentView: { type: String, required: true }
})

// this is how a child component talks to the parent.
// App.vue listens with @navigate="goToView" and the value I send (the link id)
// arrives as the "view" parameter in goToView().
const emit = defineEmits(['navigate'])
</script>

<template>
  <header class="top-bar">

    <!-- clicking my name always takes me back to the home page -->
    <button class="logo" @click="emit('navigate', 'home')">
      Aphiwe<span>.</span>
    </button>

    <nav aria-label="Main navigation">
      <!--
        v-for creates one <button> for every item in the links array.
        :key tells vue that each button is a separate element (it needs a
        unique value, that is why I use link.id and not the label).
        :class adds the "active" class only to the button that matches the page
        I am currently on.
      -->
      <button
        v-for="link in links"
        :key="link.id"
        :class="{ active: props.currentView === link.id }"
        @click="emit('navigate', link.id)"
      >
        {{ link.label }}
      </button>
    </nav>

  </header>
</template>