<script setup>

import ProjectPostSection from '@/components/ProjectPostSection.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const postdata = ref(null)
const loadingstatus = ref('loading')

const fetchpost = async(param)=>{
    try{
        loadingstatus.value = 'loading';
        const response = await fetch('/post'+param+'.json');
        postdata.value = await response.json()
        await new Promise((resolve)=> setTimeout(resolve,1000));
        loadingstatus.value = 'loaded'
    }catch(error){
        console.error('Fetch Error:',error)
        loadingstatus.value = 'failed'
    }
}


onMounted(async()=>{
await fetchpost(route.params.id);
}
)
</script>

<template>
            <div class="container mx-auto " v-if="loadingstatus === 'loaded'">
                <section class="grid grid-cols-1 sm:grid-cols-2 max-w-screen-xl mx-auto items-center content-center bg-mygrey">
                    <!-- card -->
                    <div class="w-full flex flex-wrap content-end ">
                        <div class=" h-fit w-full shadow-sm">
                            <!-- head-title -->
                            <h1 class="text-xl leading-loose ml-6 my-4 px-1 md:px-2  bg-white w-fit">
                                {{postdata.intro.title}}
                            </h1>
                            <!-- body-content -->
                            <div class="pl-6 pr-8 py-2 md:py-3">
                                <p>{{postdata.intro.titleInfo}}</p>
                                <p v-for="(p ,n) in postdata.intro.list" :key="n" 
                                    class="before:content-['-']">
                                    {{p}}
                                </p>
                                <!-- foot-links -->
                                <div class="mt-3">
                                    <ul class="[&_a]:text-yellow-950 [&_a]:border-b [&_a]:border-b-yellow-600
                                    hover:[&_a]:border-b-2 ">
                                        <li v-if="postdata.intro.link.deployed">
                                            deployed->
                                            <a :href="postdata.intro.link.deployed"
                                            target="_blank" rel="noopener noreferrer">
                                                website
                                            </a>                    
                                        </li>
                                        <li v-if="postdata.intro.link.code">
                                            sourcecode->
                                            <a :href="postdata.intro.link.code"
                                            target="_blank" rel="noopener noreferrer">                                                github
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- image -->
                    <div class="h-auto md:max-h-80 px-4 md:px-0 overflow-hidden  ">
                        <img class="block object-co object-top m-auto  w-full h-full " src="@/assets/images/wireframe.png" alt="">
                    </div>
                </section>
                <div class="mb-sectionbase pl-4 md:pl-20 xl:pl-0 
                max-w-screen-xl mx-auto">
                    <!-- post- section-details -->
                    <section class="mt-sectionbase bg-white py-4 
" >
                        <div class="border-b px-2 border-neutral-300 ">
                            <h2 class="text-2xl ">Project Details</h2>
                            <p v-if="postdata.intro.projectDetails.titleInfo">
                                {{postdata.intro.projectDetails.titleInfo}}
                            </p>                            
                        </div>
                        <div class="pl-2 pr-8 md:px-0">
                            <!-- section-details --content  -->
                            <div v-if="postdata.intro.projectDetails.paragraphs"
                            class="pt-4 max-w-lg mx-auto ">
                                <p v-for="(p,n) in postdata.intro.projectDetails.paragraphs" :key="n" class="mb-1 mr-auto">
                                {{p}}
                                </p> 
                            </div>
                            <!-- section-details --links -->
                             <div class="max-w-lg mx-auto">
                                    <ul class=" w-fit md:w-auto max-w-lg px-2 py-2  mr-auto md:ml-auto my-4 bg-tilt
                                        [&>li]:w-fit [&>li]:text-base 
                                        [&>li]:mb-1 lg:[&>li]:mb-2
                                        [&>li_a]:border-b [&>li_a:hover]:border-b-2
                                        [&>li_a]:border-yellow-600
                                        [&>li_a]:transition-all
                                        " v-if="postdata.overview" >
                                        <li v-if="postdata.overview">
                                            <a href="#sectionoverview">Overview</a>
                                        </li>
                                        <li v-if="postdata.intro.sectionsTitle"
                                        v-for="(title,n) in postdata.intro.sectionsTitle">
                                        <a :href="'#section'+n" class="">#{{title}}</a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </section>
                    <!-- post- section-main --overview -->
                    <ProjectPostSection v-if="postdata.overview" 
                     :pindex="'overview'" :titleInfo="postdata.overview.titleInfo"
                    :paragraphs="postdata.overview.paragraphs">
                    </ProjectPostSection>
                    <!-- post- section-main --each -->
                    <ProjectPostSection v-if="postdata.sections" 
                    v-for="(section,n) in postdata.sections"
                    :pindex="n"
                     :title="section.title" :titleInfo="section.titleInfo"
                    :paragraphs="section.paragraphs">
                    </ProjectPostSection>
                </div>
            </div>       
            <!-- FETCHING HANDLE -->
            <div v-else-if="loadingstatus === 'loading'" class="py-5">
                <h1 class="loadingstyle text-center">Please wait</h1>
                <h1 class="loadingstyle text-center">fetching data...</h1>
            </div>
            <div v-else-if="loadingstatus === 'failed'" class="py-5 bg-white">
                <h1 class="loadingstyle text-center">Sorry</h1>
                <h1 class="loadingstyle text-center">something went wrong</h1>
            </div>

</template>
<style lang="css" scoped>
@keyframes blinking {
    from{ opacity: 100%;}
    to{opacity: 40%;}
}
.loadingstyle{
    animation: blinking 1s infinite;
}

a[href^='section']{
        transition: all .4s;
        display: none;
    }

</style>
