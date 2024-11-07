<script setup>
import DotLoader from '@/components/DotLoader.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import TheContact from '@/components/TheContact.vue';
import TheGreet from '@/components/TheGreet.vue';
import { onMounted, ref } from 'vue';

const projectsData = ref(null)
const getProjectPosts = async()=>{
  //await new Promise((resolve)=> setTimeout(resolve,1000));
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
    <div class="mt-sectionbase "id="sectionProjects">
      <h2 class="text-2xl py-4 px-4" >All projects</h2>
      <div v-if="projectsData"
      class="grid grid-cols-2 gap-x-2 md:gap-x-6 gap-y-6  
      pb-4 select-none px-4"
      >
        <div class="" v-for="(item,n) in projectsData">
          <ProjectCard class="cursor-pointer" 
          :pindex="n" :title="item.title" :content="item.content"
           :tags="item.tags" />
        </div>
      </div>
      <DotLoader v-else/>
    </div>
    <TheContact class="mt-sectionbase"  id="sectionContact"/>
  </div>
</template>
