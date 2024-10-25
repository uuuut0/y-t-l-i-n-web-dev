<template>
  <Suspense>
    <template #default>
      {{ sometext }}
    </template>
    <template #fallback>
      <div>Loading...</div> <!-- 當內容加載中時顯示 -->
      {{ sometext }}
    </template>
  </Suspense>
</template>

<script setup>
import {onMounted, ref } from 'vue';
const sometext = ref('cat')


const getShow = async () => {
  await new Promise((resolve)=>setTimeout(resolve,3000));
  sometext.value = 'loaded done'
  
}
onMounted(async () => {
  await getShow()
})
</script>