<script setup>
import { ref, onMounted } from 'vue'
import { getBasicInfo } from './api/gist'
import BasicInfo from './components/BasicInfo.vue'
import Section from './components/Section.vue'

const name = ref('')
const role = ref('')

onMounted(async () => {
    const basicInfo = await getBasicInfo()

    name.value = basicInfo.name
    role.value = basicInfo.role
})
</script>

<template>
    <div class="flex h-screen py-12 px-8 max-w-5xl mx-auto space-x-8">
        <header class="w-1/4">
            <BasicInfo :name="name" :role="role" />
        </header>

        <main class="w-3/4">
            <Section class="about-section" title="About"> 1 </Section>
            <Section title="Projects"> 2 </Section>
            <Section title="Work Experience"> 3 </Section>
        </main>
    </div>
</template>
