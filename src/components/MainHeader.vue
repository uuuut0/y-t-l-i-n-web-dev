<script setup>
import { RouterLink} from 'vue-router'

</script>
<template>
    <div class="container mx-auto  min-h-12 sticky top-0 z-30" id="main-header">
        <div class="flex flex-col md:flex-row md:items-end  bg-slate-100  shadow-md \">
            <div class="bg-myyellow w-fit py-2 px-6">
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