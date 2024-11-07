<script setup>
import { ref } from 'vue';

const emailparts=['giok','yt','lin','@','gmail','.com']
</script>

<template>
    <div class="bg-myyellow-700
    [&>*]:px-4 ">
        <h2 class="text-2xl border-b border-neutral-400 leading-loose">Get in touch with YT Lin -></h2>
        <div class="py-4 grid grid-cols-1 gap-y-4 ">
            <div class="py-4 px-3 mx-auto bg-mainbrand shadow-inner w-fit
            [&>p]:text-lg [&>p]:text-zinc-700
            [&>p>span]:mr-4">
                <p class="content-conactinfo">
                    <span>EMAIL</span> 
                    <span>{{emailparts.join('')}}</span>
                </p>
                <p class="content-conactinfo">
                    <span>Github</span>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/uuuut0" class="border-b-2 border-yellow-600 text-gray-500" >uuuut0</a>
                </p>
            </div>
            <div class="[&>p]:mb-1 [&>p]:px-2 [&>p]:text-base px-8  mx-auto ">
                <p>目前專注於前端網頁開發，有意尋找相關職位。若您有合適的職缺或開發合作機會，歡迎透過電子郵件進一步聯繫，提供相關資訊。謝謝。</p>
                <p>For more details, including my CV,please contact me via email and provide relevant job info.thx for your time :)
                </p>

            </div>

        </div>
    </div>


</template>