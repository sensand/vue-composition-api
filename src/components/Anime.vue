<template>
    <div class="flex flex-col justify-center">
        <h1 class="text-5xl mx-auto mb-4">Anime API</h1>

        <p v-if="error" class="text-red-600 mx-auto mb-2">
            Ooops! Something went wrong! Please try again
        </p>

        <form
            v-if="!loading"
            class="mb-4 md:flex md:flex-wrap md:justify-between"
            @submit.prevent="callAPI"
        >
            <div class="flex mx-auto">
                <input
                    v-model="query"
                    type="text"
                    placeholder="Search..."
                    class="
                        border-2
                        focus:border-green-700
                        mr-4
                        rounded-lg
                        px-3
                        text-gray-800
                    "
                />
                <button
                    :disabled="!query"
                    class="
                        py-2
                        px-4
                        font-semibold
                        rounded-lg
                        shadow-md
                        text-white
                        bg-red-500
                        hover:bg-red-700
                        disabled:bg-red-900
                    "
                >
                    Search
                </button>
            </div>
        </form>
        <h2 v-else class="text-2xl mx-auto">Loading... Please wait</h2>

        <img v-if="res" :src="res" alt="Anime Poster" class="w-1/2 mx-auto" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        // API path
        // `https://kitsu.io/api/edge/anime?filter[text]=${query.value}`
    },
})
</script>
