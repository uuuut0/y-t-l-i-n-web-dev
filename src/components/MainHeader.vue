<script setup>
import { RouterLink, useRouter} from 'vue-router'

const router = useRouter();
function goToHome(param){
    router.push({path:'/'})
}
</script>
<template>
    <div class="container mx-auto  min-h-12 sticky top-0 z-30 transition-all" id="main-header">
        <div class="flex flex-col md:flex-row md:items-end  bg-mainbrand \">
            <div class="bg-myyellow w-fit py-2 px-6 hover:bg-myyellow-50 select-none cursor-pointer" @click="goToHome">
                YT-LIN
            </div>
            <div class="flex h-fit">
                <!-- header-links -->
                <div class="px-4 hover:text-red-400">
                    <RouterLink to="/#sectionGreet">Info</RouterLink>
                </div>
                <div class="px-4 hover:text-red-400">
                    <RouterLink to="/#sectionProjects">Projects</RouterLink>
                </div>
                <div class="px-4 hover:text-red-400">
                    <RouterLink to="/#sectionContact">Contact</RouterLink>
                </div>
                <!-- <div class="px-4 hover:text-red-400">
                    <RouterLink to="/projectpost">post</RouterLink>
                </div> -->
             </div>
            </div>
    </div>
</template>