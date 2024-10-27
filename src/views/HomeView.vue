<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import TheContact from '@/components/TheContact.vue';
import TheGreet from '@/components/TheGreet.vue';
import { onMounted, ref } from 'vue';

const projectsData = ref(null)
const getProjectPosts = async()=>{
  await new Promise((resolve)=> setTimeout(resolve,2000));
  const response = await fetch('/homepost.json');
  projectsData.value = await response.json()
}

onMounted(
  getProjectPosts
)

</script>

<template>
  <div class="container mx-auto">
    <TheGreet class="px-4" id="sectionGreet"/>
    <div class="mt-sectionbase ">
      <h2 class="text-2xl py-2 px-2">All projects</h2>

      <div v-if="projectsData"
      class="grid grid-cols-2 gap-4 
      pb-4 select-none"
      id="sectionProjects">
        <div v-if="projectsData"
         class="" v-for="(item,n) in projectsData">
          <ProjectCard class="cursor-pointer" 
          :pindex="n" :title="item.title" :content="dddd" :tag="['Vue.js','SCSS','WebAPI']" />
        </div>
      </div>
            <!-- loading-section -->
      <div v-else class="mx-auto py-4 flex w-fit gap-4 
       [&>div]:bg-stone-600 [&>div]:rounded-sm
        [&>div]:size-2">
        <div class="animate-[bounce_.8s_infinite_0ms]"></div>
        <div class="animate-[bounce_.8s_infinite_100ms]"></div>
        <div class="animate-[bounce_.8s_infinite_200ms]"></div>
        <div class="animate-[bounce_.8s_infinite_300ms]"></div>
      </div>

    </div>

    <TheContact class="mt-sectionbase"  id="sectionContact"/>
  </div>
</template>
<style scoped>
.d0{
  animation-delay: 0ms;
}
.d1{
  animation-delay: 100ms;
}
.d2{
  animation-delay: 200ms;
}
</style>
