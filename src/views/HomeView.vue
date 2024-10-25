<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import TheContact from '@/components/TheContact.vue';
import TheGreet from '@/components/TheGreet.vue';


</script>

<template>
  <div class="container mx-auto ">
    <TheGreet class="px-4" id="sectionGreet"/>
    <div class="px-4 bg-white mt-sectionbase">
      <h2 class="text-xl pt-2 pb-4">All projects</h2>
      <div class="grid grid-cols-2  gap-4  select-none" id="sectionProjects">
        <div class="" v-for="n in 4">
          <ProjectCard class="cursor-pointer"/>
        </div>
      </div>
    </div>

    <TheContact class="px-4 mt-sectionbase"  id="sectionContact"/>
  </div>
</template>
