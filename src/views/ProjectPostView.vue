<script setup>

import ProjectPostSection from '@/components/ProjectPostSection.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const postdata = ref(null)
const loadingstatus = ref('loading')
// const getpostdata = async()=>{
//     await new Promise((resolve)=> setTimeout(resolve,2000));
//     loadingstatus.value = ref('loaded')
//     postdata.value = {
//     intro:{
//         title:{},
//         titleInfo:{},
//         link:{deployed:{},code:{}},
//         sectionsTitle:{1:'fetching的資料處理',2:'SCSS系統 style設計過程與決策',3:'section3',4:'section4'}
//     },
//     overview:{
//         titleInfo:'this is for overview titleinfo',
//         paragraphs:['Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum','A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur']
//     },
//     sections:{
//    1: {title:'fetching的資料處理',titleInfo:'官方頻道所有，分享影片連結，未經授權不得任意下載、上傳、截圖，進行商業行為或做其他利用。',paragraphs:[
//     'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words'
//    ]},
//    2: {title:'SCSS系統 style設計過程與決策',paragraphs:[
//     'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
//     'section12,written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
//    ]},
//    3: {title:'SCSS系統 style設計過程與決策',paragraphs:[
//     'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of G'
//    ]},
//    4: {title:'SCSS系統 style設計過程與決策',paragraphs:[
//     'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of G'
//    ]}
   
// }
// }
// }
const fetchpost = async(param)=>{
    try{
        loadingstatus.value = 'loading';
        const response = await fetch('/post'+param+'.json');
        postdata.value = await response.json()
        await new Promise((resolve)=> setTimeout(resolve,2000));
        loadingstatus.value = 'loaded'
    }catch(error){
        await new Promise((resolve)=> setTimeout(resolve,2000));
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
                <section class="flex flex-col bg-white  md:flex-row">
                    <!-- card -->
                    <div class="flex flex-wrap content-end ">
                        <div class=" h-fit w-full shadow-sm">
                            <!-- head-title -->
                            <div class=" bg-mygrey px-2">
                                <h1 class="text-xl leading-loose pl-5">
                                    {{postdata.intro.title}}
                                </h1>
                            </div>
                            <!-- body-content -->
                            <div class="pl-8 pr-2 py-4 ">
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
                    <div class="bg-slate-500  min-h-48 max-h-80 w-full md:w-11/12 overflow-x-scroll">
                        <img class="w-full object-cover object-left-top tofade" src="@/assets/images/wireframe.png" alt="">
                    </div>
                </section>
                <div class="pl-6 mb-sectionbase 
                [&>section]:max-w-screen-xl [&>section]:mx-auto">
                    <!-- post-intro -->
                    <section class="mt-sectionbase bg-white px-2 py-4 shadow-sm
                    " >
                        <h2 class="text-2xl">Project Details</h2>
                        <p v-if="postdata.intro.projectDetails.titleInfo">
                            {{postdata.intro.projectDetails.titleInfo}}
                        </p>
                        <div v-if="postdata.intro.projectDetails.paragraphs"
                         class="pt-2 border-t border-neutral-300">
                            <p v-for="(p,n) in postdata.intro.projectDetails.paragraphs" :key="n" class="mb-1 mr-auto">
                            {{p}}
                            </p> 
                        </div>
                        <!-- section links -->
                        <div class="w-fit px-2 py-2 ml-1 my-4 bg-tilt">
                            <ul class="[&>li]:w-fit 
                                [&>li_a]:border-b [&>li_a:hover]:border-b-2
                                 [&>li_a]:border-yellow-600
                                 [&>li_a]:transition-all
                                [&>li]:text-base [&>li]:mb-1 lg:[&>li]:mb-2
                                " >
                                <li>
                                    <a href="#sectionoverview">Overview</a>
                                </li>
                                <li v-if="postdata.intro.sectionsTitle"
                                 v-for="(title,n) in postdata.intro.sectionsTitle">
                                 <a :href="'#section'+n" class="">#{{title}}</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <!-- post-sections -->
                    <ProjectPostSection v-if="postdata.overview" 
                     :pindex="'overview'" :titleInfo="postdata.overview.titleInfo"
                    :paragraphs="postdata.overview.paragraphs">
                    </ProjectPostSection>
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
