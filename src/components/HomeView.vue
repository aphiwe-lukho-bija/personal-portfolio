<script setup>
// ---------------------------------------------------------------------------
// HomeView.vue
// The first page a visitor sees: my introduction on the left and my photo on
// the right.
//
// In the html version this was the top half of index.html, now it is a
// component that only shows when currentView === 'home'.
// ---------------------------------------------------------------------------

// my photo. I also moved this one into public/images for the same reason as the
// interests pictures, the imgbb link was slow to load.
const profileImage = '/images/profile.jpg'

// I do not have the navigation logic here, I only tell App.vue that somebody
// clicked "Get to know me" and App.vue does the actual page change.
const emit = defineEmits(['navigate'])
</script>

<template>
  <section class="hero view-enter">

    <!-- the text side of the hero -->
    <div class="hero-copy">
      <p class="eyebrow">FULL-STACK SOFTWARE DEVELOPMENT TRAINEE</p>

      <h1>
        Building a future<br />
        <em>with purpose.</em>
      </h1>

      <p class="lead">
        I’m Aphiwe Lukho Bija, an aspiring software developer and GBVF
        Ambassador who enjoys turning ideas into practical solutions.
      </p>

      <button class="primary" @click="emit('navigate', 'about')">
        Get to know me <span>↗</span>
      </button>
    </div>

    <!-- the photo side of the hero -->
    <div class="hero-image">
      <img :src="profileImage" alt="Aphiwe Lukho Bija" />

      <!-- :src is needed because profileImage is a variable, not a plain
           string typed directly in the html -->
      <div class="image-note">
        Based in South Africa<br />
        <strong>Available to connect</strong>
      </div>
    </div>

  </section>
</template>