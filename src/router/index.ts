import { createRouter, createWebHistory } from 'vue-router'
import Anime from '../components/Anime.vue'
import RickAndMorty from '../components/RickAndMorty.vue'

const routes = [
    {
        path: '/anime',
        name: 'Anime',
        component: Anime,
    },
    {
        path: '/rick-morty',
        name: 'RickMorty',
        component: RickAndMorty,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
