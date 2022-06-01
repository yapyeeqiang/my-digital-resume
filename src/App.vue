<script setup>
import BasicInfo from './components/BasicInfo.vue'
</script>

<template>
    <div class="flex h-screen py-12 px-8 max-w-5xl mx-auto space-x-8">
        <header class="w-1/4">
            <BasicInfo />
        </header>

        <main class="w-3/4">
            <section>
                <h1 class="bg-black text-white w-fit text-sm pl-1 pr-2 font-semibold">About</h1>

                <p class="text-sm px-2 py-4">
                    Hello! My name is Yap Yee Qiang and I enjoy sharing knowledge and exploring the beauty of technology. My interest in programming started back in 2019 when I decided to try self taught myself Python, and eventually explore into the world of Web Development. Fast-forward to today, and I’ve had the privilege of building several projects, including an E-commerce platform , a
                    logistic company dashboard, a site generation tool . My main focus these days is building accessible, inclusive products and educate people about web development at Sigma School.
                </p>
            </section>
        </main>
    </div>
</template>
