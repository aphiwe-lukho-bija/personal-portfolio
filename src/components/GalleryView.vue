<script setup>
// ---------------------------------------------------------------------------
// GalleryView.vue
// The interests page: a grid of cards, each one with a picture, a title and a
// short description.
//
// The old gallery.html had 14 cards of copy-pasted html, this time the cards
// are generated from the array below so if I want to add an interest I only
// add one line.
// ---------------------------------------------------------------------------

// NOTE TO SELF: I first wrote this as an array of arrays
// ['Soccer', 'I support...', 'image link'] and then I had to remember which
// number was which. Objects with names are much easier to read.

// NOTE 2: I used to link the pictures straight from imgbb, but they were the
// full size originals (one was 8MB!) and the page was painfully slow and the
// pictures sometimes did not load at all. So I downloaded them into
// public/images and made them smaller. Now they are inside the project and
// they load straight away. The files in that folder start with a forward
// slash because everything in public/ is served from the root of the site.
const interests = [
  {
    title: 'Reading & Self Development',
    text: 'Reading puts me in a flow state. I enjoy learning from self-development books.',
    image: '/images/reading.jpg'
  },
  {
    title: 'Soccer',
    text: 'I support Manchester City and never miss the chance to watch my team play.',
    image: '/images/soccer.jpg'
  },
  {
    title: 'Programming',
    text: 'Coding is more than a career to me. I love solving problems and building useful things.',
    image: '/images/programming.jpg'
  },
  {
    title: 'Amapiano Music',
    text: 'I enjoy relaxed Amapiano by Kelvin Momo and Kabza De Small.',
    image: '/images/amapiano.jpg'
  },
  {
    title: 'Long Distance Running',
    text: 'Health is wealth, so I stay fit with long-distance treadmill runs.',
    image: '/images/running.jpg'
  },
  {
    title: 'Public Speaking',
    text: 'GBVF Ambassador training strengthened my confidence and presentation skills.',
    image: '/images/public-speaking.jpg'
  }
]

// the heading comes from App.vue (it also uses the same titles object)
const props = defineProps({
  title: { type: String, required: true }
})
</script>

<template>
  <section class="content-view view-enter">

    <div class="section-heading">
      <p class="eyebrow">A LITTLE MORE ABOUT ME</p>
      <h1>{{ props.title }}</h1>
      <p class="lead">The things that keep me curious, focused, and inspired.</p>
    </div>

    <div class="interest-grid">
      <!-- one card per item in the interests array -->
      <article
        v-for="interest in interests"
        :key="interest.title"
        class="interest-card"
      >
        <img :src="interest.image" :alt="interest.title" />
        <div>
          <h2>{{ interest.title }}</h2>
          <p>{{ interest.text }}</p>
        </div>
      </article>
    </div>

  </section>
</template>