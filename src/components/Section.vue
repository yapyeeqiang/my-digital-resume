<script setup>
defineProps({
    title: String,
})
</script>

<template>
    <section>
        <h1 class="bg-black text-white w-fit text-sm pl-1 pr-2 font-semibold">{{ title }}</h1>

        <slot />
    </section>
</template>

<style></style>
