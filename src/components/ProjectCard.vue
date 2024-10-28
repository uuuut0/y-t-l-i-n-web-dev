<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({

       pindex:{type:String},
       title:{type:String},
       content:{type:String},
       tag:{type:Array},

})
const router = useRouter();
function goToPost(param){
    router.push({path:'/projectpost/'+param})
}
</script>

<template>
    <div class="
      transition-all " @click="goToPost(pindex)">
        <!-- card-head -->
        <div class="min-h-32 flex flex-wrap content-between
        relative bg-mygrey">
            <div class="h-fit  w-full z-10">
                <h3 class="px-2 md:px-4 text-lg leading-normal md:leading-loose">{{title}}</h3>
            </div>
            <div class="w-full h-full absolute opacity-80">
                <!-- image insert-here -->
            </div>
            <ul class="h-fit flex flex-wrap 
            gap-x-1 sm:gap-x-2 gap-y-1 
            sm:justify-end 
            ml-auto md:max-w-[80%] z-10 py-2 mr-2
            [&>li]:border [&>li]:rounded-full [&>li]:border-zinc-400 
            [&>li]:px-2 w-fit text-xs sm:text-sm">
                <li class="" >Vue.js</li>
                <li class="" >Vue.js</li>
                <li class="" >Vue.js</li>
                <li class="" >SCSS</li>
        </ul>
        </div>
        <!-- card-body -->
        <div class="min-h-16 xl:min-h-32  tofade hover:tofade-on transition-all bg-tilt" >
            <p class=" w-full lg:w-8/12 max-h-32 pt-6 px-2 md:px-cardpaddingbase " >
                使用@font-face為每個字體變體定義對應的 font-weight。在Tailwind中使用字體粗細類別（如 font-light, font-semibold, font-bold）來應用不同的字重。3.確保你的字體檔案路徑正確，且檔案格式如 .woff2 和 .ttf 能夠覆蓋常見的瀏覽器相容性。
            </p>
        </div>
    
    </div>
</template>