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
const interests = [
  {
    title: 'Reading & Self Development',
    text: 'Reading puts me in a flow state. I enjoy learning from self-development books.',
    image: 'https://i.ibb.co/twjRstS1/jodie-cook-7y-P7fd-YOIEM-unsplash.jpg'
  },
  {
    title: 'Soccer',
    text: 'I support Manchester City and never miss the chance to watch my team play.',
    image: 'https://i.ibb.co/gM7YNkTb/jonny-gios-r-CD5-ZCCc-IZU-unsplash.jpg'
  },
  {
    title: 'Programming',
    text: 'Coding is more than a career to me. I love solving problems and building useful things.',
    image: 'https://i.ibb.co/KccnnY7c/ilya-pavlov-Oqtaf-YT5k-Tw-unsplash.jpg'
  },
  {
    title: 'Amapiano Music',
    text: 'I enjoy relaxed Amapiano by Kelvin Momo and Kabza De Small.',
    image: 'https://i.ibb.co/Dx0KWcf/romina-veliz-DGKJz-Omjy-S4-unsplash.jpg'
  },
  {
    title: 'Long Distance Running',
    text: 'Health is wealth, so I stay fit with long-distance treadmill runs.',
    image: 'https://i.ibb.co/gF9QYZTH/martins-zemlickis-NPFu4-Gf-FZ7-E-unsplash.jpg'
  },
  {
    title: 'Public Speaking',
    text: 'GBVF Ambassador training strengthened my confidence and presentation skills.',
    image: 'https://i.ibb.co/LztgpcDX/herlambang-tinasih-gusti-ym-Bs1m-Vim8-unsplash.jpg'
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