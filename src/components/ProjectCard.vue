<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function goToPost(){
    router.push({path:'/projectpost'})
}
</script>

<template>
    <div class="md:hover:shadow-md transition-all bg-mygrey" @click="goToPost">
        <!-- card-head -->
        <div class="min-h-32 flex flex-wrap content-between
        relative ">
            <div class="h-fit  w-full z-10">
                <h3 class="md:px-4 text-lg">tag-website</h3>
            </div>
            <div class="w-full h-full absolute opacity-80">
                <!-- image insert-here -->
            </div>
            <div class="h-fit flex flex-wrap gap-x-2 gap-y-1 justify-end ml-auto md:max-w-[80%] z-10 py-2">
                <div class="border-2 border-zinc-400 px-2 w-fit text-xs md:text-sm " >Vue.js</div>
                <div class="border-2 border-zinc-400 px-2 w-fit text-xs md:text-sm " >Vue.js</div>
                <div class="border-2 border-zinc-400 px-2 w-fit text-xs md:text-sm " >Vue.js</div>
                <div class="border-2 border-zinc-400 px-2 w-fit text-xs md:text-sm" >SCSS</div>

    
            </div>
        </div>
            <!-- card-body -->
        <div class="min-h-16 xl:min-h-32  tofade bg-tilt-100" >
            <p class=" w-full lg:w-8/12 max-h-32 pt-6 px-2 md:px-cardpaddingbase " >使用@font-face為每個字體變體定義對應的 font-weight。在Tailwind中使用字體粗細類別（如 font-light, font-semibold, font-bold）來應用不同的字重。3.確保你的字體檔案路徑正確，且檔案格式如 .woff2 和 .ttf 能夠覆蓋常見的瀏覽器相容性。</p>
        </div>
    
    </div>
</template>
<style scoped>
    .tofade{
        mask: linear-gradient(180deg,
                #ffffff 76%,
                #ffffff55 97%,
                transparent);
    }
    .cardtitle{
        background-color: #9e9191;
        height: 200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        align-content: center;
    }
    .cardtitle .head{
        width: 90%;
        height: fit-content;
        border: 1px solid #000;
    }
    .cardtitle .tags{
        height: 40px;
        width: 100%;

        border: 1px solid #000;
    }
</style>