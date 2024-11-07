<!-- COMPONENT for page projectpost.vue  -->
<template>
    <section class="bg-white mt-sectionbase px-1 py-2 shadow-sm">
        <!-- section-head -->
        <header class="pt-1 pb-2 ml-2">
            <h2 class="text-xl font-semibold w-fit px-2 
              bg-mainbrand [&>span]:text-gray-700  shadow-inner
              border-b-neutral-400 border-b
             "
            :id="'section'+ pindex">

                <span class="pr-2  ">
                    {{pindex==='overview'?
                    pindex.charAt(0).toUpperCase()+pindex.slice(1)
                    :'#'+pindex }}
                </span>
                <span v-if="title">{{title}}</span>
            </h2>
            <h3 class="bg-mainbrand px-1  sm:px-2 w-fit  " v-if="titleInfo">
                {{titleInfo}}
            </h3>
        </header>
        <!-- section-body -->
        <div class="" v-if="paragraphs && paragraphs.length">
            <p class="mb-1 text-base md:text-lg pl-6 pr-2"
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