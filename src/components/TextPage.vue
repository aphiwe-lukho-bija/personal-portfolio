<script setup>
// ---------------------------------------------------------------------------
// TextPage.vue
// A plain page: small label, big heading and a few paragraphs.
//
// About and Goals look exactly the same, only the text is different, so instead
// of copying the same html twice I made this component and the text comes in as
// a prop from App.vue.
//
// This was the first time I really used props and I had to read the docs a few
// times before it made sense.
// ---------------------------------------------------------------------------

const props = defineProps({
  eyebrow: { type: String, required: true }, // small orange label above the title
  title: { type: String, required: true }, // the big heading
  paragraphs: { type: Array, required: true } // the body text
})
</script>

<template>
  <section class="content-view narrow view-enter">

    <div class="section-heading">
      <p class="eyebrow">{{ props.eyebrow }}</p>
      <h1>{{ props.title }}</h1>
    </div>

    <div class="prose">
      <!-- one <p> per paragraph in the array that I got as a prop -->
      <p v-for="(paragraph, index) in props.paragraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>

  </section>
</template>