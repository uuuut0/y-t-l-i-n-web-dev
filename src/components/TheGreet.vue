<template>
    <div class=" flex flex-wrap bg-neutral-50 ">
        <!-- section-greet -->
          <div class="inline-flex   w-11/12 md:w-5/12 px-10 py-5 box-border 
           mx-auto">
          <!-- greet-icons -->
            <img v-for="n in 3" class="w-1/3 max-w-18 aspect-square select-none"  src="@/assets/images/greet.svg" alt="">
          </div>
          <div class=" w-11/12 md:w-7/12 flex flex-wrap items-center mx-auto py-4">
            <div class="h-fit w-10/12 mx-auto">
              <h3 class="text-2xl leading-relaxed">Hello</h3>
              <p class=" mx-auto bg-mygrey p-4">I am YT Lin
                a frontend web developer.<br>我是YT Lin一名前端工程師，這是我的網頁開發作品整理。
                </p>
              </div>
            <div class="h-fit w-10/12 mx-auto mt-2">
              <h3 class="text-xl leading-relaxed">My skills</h3>
              <div class="mx-auto bg-mygrey p-4">
                <ul class="flex flex-wrap 
                gap-1 [&>li]:border [&>li]:border-zinc-400 [&>li]:px-2
                [&>li]:rounded-full 
                ">
                  <li>Vue.js</li><li>JavaScript</li>
                  <li>HTML</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>Tailwindcss</li>
                  <li>Git</li>
                </ul>
              </div>

              <p class="mx-auto bg-mygrey p-4 mt-2">
                <span class="bg-myyellow font-bold px-2 text-lg">Frontend</span><br>
                熟悉HTML,CSS3，能獨立實現介面需求。擅長Vue3前端框架，及相關套件如Pinia、VueRouter，build tool使用Vite。熟悉RWD處理，能自主建立符合介面需求的使用SCSS。具備Tailwind CSS框架開發經驗。</p>
              <p class="mx-auto bg-mygrey p-4 mt-2">
                <span class="bg-myyellow font-bold px-2 text-lg">Backend</span><br>
                具備PHP開發經驗，理解Restful API概念。熟悉資料庫操作，具備mySQL實務經驗。
              </p>
              <p class="text-xs mt-4 text-slate-600">
                *Icon Courtesy to-greet by Deylotus Creative Design from Noun Project (CC BY 3.0)
              </p>

              </div>
              
          </div>
      </div>
  
</template>