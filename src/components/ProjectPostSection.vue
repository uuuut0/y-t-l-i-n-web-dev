<!-- COMPONENT for page projectpost.vue  -->
<template>
    <section class="bg-stone-50 mt-sectionbase px-1 border-l-2">
        <header class="py-3">
            <h2 class="text-xl font-semibold w-fit px-2
             [&>span]:text-orange-700"
            :id="'section'+ pindex">

                <span class=" mr-2 ">
                    {{pindex==='overview'?
                    pindex.charAt(0).toUpperCase()+pindex.slice(1)
                    :'#'+pindex }}
                </span>
                <span v-if="title">{{title}}</span>
            </h2>
            <p class="px-2" v-if="titleInfo">{{ titleInfo}}</p>
        </header>
        <div class="" v-if="paragraphs && paragraphs.length">
            <p class="mb-3 text-lg pl-4 max-w-screen-md " v-for="(paragraph, n) in paragraphs" :key="n">
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