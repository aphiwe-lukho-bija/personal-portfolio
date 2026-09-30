<script setup>
// ---------------------------------------------------------------------------
// SiteFooter.vue
// Small footer at the bottom of every page: my copyright and a link that takes
// the visitor to the contact page.
// ---------------------------------------------------------------------------

const emit = defineEmits(['navigate'])
</script>

<template>
  <footer>
    <span>© 2026 Aphiwe Lukho Bija</span>
    <button @click="emit('navigate', 'contact')">Let's connect ↗</button>
  </footer>
</template>