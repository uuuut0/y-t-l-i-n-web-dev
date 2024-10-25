<script setup>

import ProjectPostSection from '@/components/ProjectPostSection.vue';
import { onMounted, ref } from 'vue';
const postdata = ref(null)

const getpostdata = async()=>{
    await new Promise((resolve)=> setTimeout(resolve,1000));
    postdata.value = {
    intro:{
        title:{},
        titleInfo:{},
        link:{deployed:{},code:{}},
        sectionsTitle:{1:'fetching的資料處理',2:'SCSS系統 style設計過程與決策',3:'section3',4:'section4'}
    },
    overview:{
        titleInfo:'this is for overview titleinfo',
        paragraphs:['Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum','A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur']
    },
    sections:{
   1: {title:'fetching的資料處理',titleInfo:'官方頻道所有，分享影片連結，未經授權不得任意下載、上傳、截圖，進行商業行為或做其他利用。',paragraphs:[
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words'
   ]},
   2: {title:'SCSS系統 style設計過程與決策',paragraphs:[
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    'section12,written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
   ]},
   3: {title:'SCSS系統 style設計過程與決策',paragraphs:[
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of G'
   ]},
   4: {title:'SCSS系統 style設計過程與決策',paragraphs:[
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of G'
   ]}
   
}
}
}
// onMounted(async()=>{
// await getpostdata()}
// )

postdata.value= {
    intro:{
        title:{},
        titleInfo:{},
        link:{deployed:{},code:{}},
        sectionsTitle:{1:'fetching的資料處理',2:'SCSS系統 style設計過程與決策',3:'section3',4:'section4'}
    },
    overview:{
        titleInfo:'this is for overview titleinfo',
        paragraphs:['Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum','A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur']
    },
    sections:{
   1: {title:'fetching的資料處理',titleInfo:'官方頻道所有，分享影片連結，未經授權不得任意下載、上傳、截圖，進行商業行為或做其他利用。',paragraphs:[
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words'
   ]},
   2: {title:'SCSS系統 style設計過程與決策',paragraphs:[
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    'section12,written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
   ]},
   3: {title:'SCSS系統 style設計過程與決策',paragraphs:[
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of G'
   ]},
   4: {title:'SCSS系統 style設計過程與決策',paragraphs:[
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of G'
   ]}
   
}
}
</script>

<template>

            <div class="container mx-auto " v-if="postdata">

                <section class="flex flex-col  md:flex-row ">
                    <div class="bg-red-50 flex flex-wrap content-end">
                        <div class=" h-fit w-full py-8 px-2 ">
                            <h1 class="text-xl leading-loose mb-2">travel service website</h1>
                            <div class="md:w-11/12 ml-auto">
                            <p>bootcamp group project</p>
                            <p> - frontend: SPA built with Vue, backend: PHP, database with mySQL</p>
                            <p>deployed-website, source code -github</p>
                        </div>
                        </div>
                    </div>
                    <div class="bg-slate-500  min-h-48 max-h-56 w-full md:w-11/12 overflow-x-scroll">
                        <img class="w-full object-cover object-left-top tofade" src="@/assets/images/wireframe.png" alt="">
                    </div>
                </section>
                <div class="bg-stone-100 px-4 ">
                    <section class="mt-sectionbase bg-white px-1 py-4" >
                        <h2 class="text-2xl">project details</h2>
                        <p>*group project , below listed my contributed in development</p>
            
                        <div class="bg-slate-200 w-fit p-2 my-4 ">
                            <ul class="[&>li]:w-fit 
                                [&>li]:border-b [&>li]:border-neutral-400
                                " >
                                <li >
                                    <a href="#sectionoverview">Overview</a>
                                </li>
                                <li v-if="postdata.intro"
                                 v-for="(title,n) in postdata.intro.sectionsTitle">
                                 <a :href="'#section'+n" class="">#{{title}}</a>
                                </li>
                            </ul>
                        </div>
                    </section>
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

            <div v-else class="">
                <h1 class="loadingstyle text-center">Please wait</h1>
                <h1 class="loadingstyle text-center">fetching data...</h1>
            </div>

</template>
<style lang="css" scoped>
@keyframes blinking {
    from{ opacity: 100%;}
    to{opacity: 20%;}
}
.loadingstyle{
    animation: blinking .8s infinite;
}
.tofade{
    mask: linear-gradient(250deg,
            #ffffff 20%,
            #ffffffd6 50%,
            #ffffff 70%,

            transparent);
}
a[href^='section']{
        transition: all .4s;
        display: none;
    }

</style>
