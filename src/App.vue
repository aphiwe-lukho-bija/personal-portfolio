<script setup>
import { computed, ref } from 'vue'

const activeView = ref('home')
const submitted = ref(false)
const form = ref({ name: '', email: '', subject: '', message: '' })
const profileImage = 'https://i.ibb.co/rGQ067W2/IMG-1049-2.jpg'
const interests = [
  ['Reading & Self Development', 'Reading puts me in a flow state. I enjoy learning from self-development books.', 'https://i.ibb.co/twjRstS1/jodie-cook-7y-P7fd-YOIEM-unsplash.jpg'],
  ['Soccer', 'I support Manchester City and never miss the chance to watch my team play.', 'https://i.ibb.co/gM7YNkTb/jonny-gios-r-CD5-ZCCc-IZU-unsplash.jpg'],
  ['Programming', 'Coding is more than a career to me. I love solving problems and building useful things.', 'https://i.ibb.co/KccnnY7c/ilya-pavlov-Oqtaf-YT5k-Tw-unsplash.jpg'],
  ['Amapiano Music', 'I enjoy relaxed Amapiano by Kelvin Momo and Kabza De Small.', 'https://i.ibb.co/Dx0KWcf/romina-veliz-DGKJz-Omjy-S4-unsplash.jpg'],
  ['Long Distance Running', 'Health is wealth, so I stay fit with long-distance treadmill runs.', 'https://i.ibb.co/gF9QYZTH/martins-zemlickis-NPFu4-Gf-FZ7-E-unsplash.jpg'],
  ['Public Speaking', 'GBVF Ambassador training strengthened my confidence and presentation skills.', 'https://i.ibb.co/LztgpcDX/herlambang-tinasih-gusti-ym-Bs1m-Vim8-unsplash.jpg']
]
const pageTitle = computed(() => ({ home: 'Aphiwe Lukho Bija', about: 'About me', goals: 'My goals', gallery: 'My interests', contact: 'Contact me' }[activeView.value]))
const showView = (view) => { activeView.value = view; submitted.value = false; window.scrollTo({ top: 0, behavior: 'smooth' }) }
const submitForm = () => { submitted.value = true; form.value = { name: '', email: '', subject: '', message: '' } }
</script>

<template>
  <div class="app-shell">
    <header class="top-bar"><button class="logo" @click="showView('home')">Aphiwe<span>.</span></button><nav aria-label="Main navigation"><button v-for="item in [['home','Home'],['about','About'],['goals','Goals'],['gallery','Interests'],['contact','Contact']]" :key="item[0]" :class="{ active: activeView === item[0] }" @click="showView(item[0])">{{ item[1] }}</button></nav></header>
    <main>
      <section v-if="activeView === 'home'" class="hero view-enter"><div class="hero-copy"><p class="eyebrow">FULL-STACK SOFTWARE DEVELOPMENT TRAINEE</p><h1>Building a future<br /><em>with purpose.</em></h1><p class="lead">I’m Aphiwe Lukho Bija, an aspiring software developer and GBVF Ambassador who enjoys turning ideas into practical solutions.</p><button class="primary" @click="showView('about')">Get to know me <span>↗</span></button></div><div class="hero-image"><img :src="profileImage" alt="Aphiwe Lukho Bija" /><div class="image-note">Based in South Africa<br /><strong>Available to connect</strong></div></div></section>
      <section v-else-if="activeView === 'gallery'" class="content-view view-enter"><div class="section-heading"><p class="eyebrow">A LITTLE MORE ABOUT ME</p><h1>{{ pageTitle }}</h1><p class="lead">The things that keep me curious, focused, and inspired.</p></div><div class="interest-grid"><article v-for="interest in interests" :key="interest[0]" class="interest-card"><img :src="interest[2]" :alt="interest[0]" /><div><h2>{{ interest[0] }}</h2><p>{{ interest[1] }}</p></div></article></div></section>
      <section v-else-if="activeView === 'contact'" class="content-view narrow view-enter"><div class="section-heading"><p class="eyebrow">LET'S TALK</p><h1>{{ pageTitle }}</h1><p class="lead">Have a question or an opportunity? Send me a message.</p></div><form @submit.prevent="submitForm"><label>Full name<input v-model="form.name" required placeholder="Your name" /></label><label>Email address<input v-model="form.email" type="email" required placeholder="you@example.com" /></label><label>Subject<input v-model="form.subject" required placeholder="What is this about?" /></label><label>Message<textarea v-model="form.message" required rows="5" placeholder="Write your message..."></textarea></label><button class="primary" type="submit">Send message <span>↗</span></button><p v-if="submitted" class="success">Thanks, your message is ready to be sent.</p></form></section>
      <section v-else class="content-view narrow view-enter"><div class="section-heading"><p class="eyebrow">{{ activeView === 'goals' ? 'THE ROAD AHEAD' : 'THE PERSON BEHIND THE CODE' }}</p><h1>{{ pageTitle }}</h1></div><div class="prose" v-if="activeView === 'about'"><p>I am a 23-year-old aspiring software developer currently studying software development and building practical experience through coding projects.</p><p>I enjoy solving problems, learning new technologies, and creating applications that provide real-world value. Communication is one of my strengths, and I enjoy presenting technical concepts clearly.</p><p>Coding puts me in a flow state. Every challenge is an opportunity to grow, every mistake is a lesson, and every solution reminds me how rewarding persistence can be.</p><p>Alongside my studies, I completed training as a GBVF Ambassador, strengthening my leadership, advocacy, and communication skills.</p></div><div class="prose" v-else><p>My goal is to successfully complete the Full-Stack Software Development programme at Life Choices Academy and keep growing through disciplined daily habits.</p><p>I am drawn to the connection between technology and business. After completing my course, I plan to expand my skills into Data Engineering.</p><p>I want to contribute to improving the lives of South Africans through meaningful technological solutions and eventually create employment opportunities in tech.</p></div></section>
    </main>
    <footer><span>© 2026 Aphiwe Lukho Bija</span><button @click="showView('contact')">Let's connect ↗</button></footer>
  </div>
</template>
