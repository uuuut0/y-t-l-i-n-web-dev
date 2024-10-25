<!-- COMPONENT for page projectpost.vue  -->
<template>
    <section class="bg-stone-50 mt-sectionbase px-1 border-l-2">
        <header class="py-3">
            <h2 class="text-xl font-semibold  bg-lime-100 w-fit px-2"
            :id="'section'+ pindex">
                <span class=" mr-2 ">
                    #{{ pindex?pindex:'' }}
                </span>
                <span v-if="title">{{title}}</span>
            </h2>
            <p v-if="titleInfo">{{ titleInfo}}
            </p>
        </header>
        <div class="" v-if="paragraphs && paragraphs.length">
            <p class="mb-3 text-lg w-4/5" v-for="(paragraph, n) in paragraphs" :key="n">
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