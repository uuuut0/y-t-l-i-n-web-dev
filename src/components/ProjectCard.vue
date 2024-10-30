<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({

       pindex:{type:String},
       title:{type:String},
       content:{type:String},
       tags:{type:Array},

})
const router = useRouter();
function goToPost(param){
    router.push({path:'/projectpost/'+param})
}
</script>

<template>

    <div class="grid grid-rows-[auto_1fr_auto]
      transition-all h-full " @click="goToPost(pindex)">
        <!-- card-title -->
        <div class="w-full flex flex-wrap content-between
        relative bg-mygrey">
            <div class="h-fit  w-full z-10">
                <h3 class=" text-neutral-800 py-1 px-2 md:px-4 text-lg
                border-b-4 border-myyellow-700 
                 leading-normal md:leading-loose">
                    {{title}}
                </h3>
            </div>
            <div class="w-full h-full absolute opacity-80">
                <!-- image insert-here -->
            </div>
            <!-- <ul class="h-fit flex flex-wrap 
            gap-x-1 sm:gap-x-2 gap-y-1 
            justify-end 
            ml-auto md:max-w-[80%] z-10 py-2 mr-2
            [&>li]:border [&>li]:rounded-full [&>li]:border-zinc-400 
            [&>li]:px-2 w-fit text-sm sm:text-sm"
            v-if="tags">
                <li class="" v-for="(n,i) in tags" :key="i" >{{n}}</li>
            </ul> -->
        </div>
        <!-- card-tags -->
        <div class="w-full flex-grow bg-mygrey flex flex-col justify-end px-2 pt-2">
            <ul class=" flex flex-wrap h-fit
                gap-x-1 sm:gap-x-2 gap-y-1 
                justify-end
                ml-auto z-10 py-2
                [&>li]:border [&>li]:rounded-full [&>li]:border-zinc-400 
                [&>li]:px-2 text-sm sm:text-sm"
                v-if="tags">
                    <li class="" v-for="(n,i) in tags" :key="i" >{{n}}</li>
            </ul>
        </div>
        <!-- card-content -->
        <div class="w-full flex-grow-0 h-24 xl:h-32  tofade hover:tofade-on transition-all bg-tilt" >
            <p class=" w-full lg:w-8/12 max-h-32 pt-6 px-2 md:px-cardpaddingbase " >
                {{ content }}
            </p>
        </div>
    
    </div>

    
</template>