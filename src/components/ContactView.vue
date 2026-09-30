<script setup>
// ---------------------------------------------------------------------------
// ContactView.vue
// The contact page with the message form.
//
// v-model is the bit I understand best now - it connects an input to a variable
// in both directions. I type in the box and the variable updates, and if the
// variable changes the box updates as well.
// ---------------------------------------------------------------------------

import { ref } from 'vue'

// the heading comes from App.vue
const props = defineProps({
  title: { type: String, required: true }
})

// the message the visitor is typing. I use one object so I can clear
// everything later with one line instead of four separate variables.
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// only true after the form was sent, used to show the green thank you line
const sent = ref(false)

function sendMessage() {
  sent.value = true

  // clear the form so the visitor can type a new message.
  // form.value = { ... } replaces the whole object - this is the part of refs
  // that confused me, I first tried form = { ... } and nothing happened.
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<template>
  <section class="content-view narrow view-enter">

    <div class="section-heading">
      <p class="eyebrow">LET'S TALK</p>
      <h1>{{ props.title }}</h1>
      <p class="lead">Have a question or an opportunity? Send me a message.</p>
    </div>

    <!--
      @submit.prevent stops the page from reloading. Without the .prevent the
      browser does a normal form submit and the whole site reloads, which is
      exactly what I was trying to avoid when I moved to Vue.
    -->
    <form @submit.prevent="sendMessage">
      <label>
        Full name
        <input v-model="form.name" required placeholder="Your name" />
      </label>

      <label>
        Email address
        <input
          v-model="form.email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </label>

      <label>
        Subject
        <input v-model="form.subject" required placeholder="What is this about?" />
      </label>

      <label>
        Message
        <textarea
          v-model="form.message"
          required
          rows="5"
          placeholder="Write your message..."
        ></textarea>
      </label>

      <button class="primary" type="submit">
        Send message <span>↗</span>
      </button>

      <!-- v-if so this line only appears after the form was sent -->
      <p v-if="sent" class="success">Thanks, your message is ready to be sent.</p>
    </form>

  </section>
</template>