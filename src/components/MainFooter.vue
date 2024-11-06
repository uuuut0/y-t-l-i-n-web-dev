<script setup>
    import { onMounted,ref } from 'vue';

    const gotop = ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
   }
   const showBtn = ref(false)

    onMounted(() => {
        window.onscroll = function() {
           if (window.scrollY >= 100) {
            showBtn.value =true
        } else {
            showBtn.value =false
            }
        };
    });
</script>
<template>

    <div class="sticky bottom-0 ml-auto mt-1 size-fit
    transition-opacity z-30 p-2"
    >
        <div class="bg-slate-700 p-2 size-12 transition-opacity rounded-full"
        :class="{'opacity-100':showBtn,'opacity-0':!showBtn}">
            <img class="size-full rounded-full transition-transform hover:bg-red"
            :class="{'translate-y-0':showBtn,'opacity-100':showBtn,
            'translate-y-full':!showBtn,'opacity-0':!showBtn}" @click="gotop()" 
            src="@/assets/images/arrowup.svg" alt="gotop-icon">
        </div>

    </div> 

    <div class="py-4 
    container mx-auto select-none z-30">
        <div class="bg-mainbrand">
            <div class="w-fit ml-auto px-3 text-zinc-600"  >
                <p>Developed and designed by YT Lin :)</p>
            </div>
            <div class="border-t border-neutral-400 mt-1"></div>

        </div>

    </div>

</template>
