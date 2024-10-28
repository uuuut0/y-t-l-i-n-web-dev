<!-- COMPONENT for page projectpost.vue  -->
<template>
    <section class="bg-white mt-sectionbase px-1 py-2 shadow-sm">
        <header class="pt-1 pb-2 ml-2">
            <h2 class="text-xl font-semibold w-fit px-2 
              bg-mainbrand [&>span]:font-semibold  shadow-inner
             "
            :id="'section'+ pindex">

                <span class=" mr-2 ">
                    {{pindex==='overview'?
                    pindex.charAt(0).toUpperCase()+pindex.slice(1)
                    :'#'+pindex }}
                </span>
                <span v-if="title">{{title}}</span>
            </h2>
            <h3 class="pl-2 pr-1 sm:pr-4 mt-1" v-if="titleInfo">
                {{titleInfo}}
            </h3>
        </header>
        <div class="" v-if="paragraphs && paragraphs.length">
            <p class="mb-2 text-lg pl-4 pr-2"
             v-for="(paragraph, n) in paragraphs" :key="n">
                {{ paragraph }}
            </p>
        </div>
    </section>
</template>
<script setup>
    const props = defineProps({
       
            pindex:{type:String},
            title:{type:String},
            titleInfo:{type:String},
            paragraphs:{type:Array},
 
    })
</script>