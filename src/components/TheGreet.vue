<template>
    <div class=" flex flex-wrap ">
        <!-- section-greet -->
          <div class="inline-flex   w-11/12 md:w-5/12 px-10 py-5 box-border 
           mx-auto">
          <!-- greet-icons -->
            <img v-for="n in 3" class="w-1/3 max-w-18 aspect-square select-none"  src="@/assets/images/greet.svg" alt="">
          </div>
          <div class=" w-11/12 md:w-7/12 flex flex-wrap items-center mx-auto py-4">
            <div class="h-fit w-10/12 mx-auto">
              <h3 class="text-2xl leading-relaxed">Hello my friend</h3>
              <p class=" mx-auto bg-tilt p-4 rounded-md">I am Y.T. Lin <br>
                a frontend web developer.
                and this is my portfolio for projects i worked on.
                </p>
              </div>
            <div class="h-fit w-10/12 mx-auto mt-2">
              <h3 class="text-xl leading-relaxed">My skills</h3>
              <div class="mx-auto bg-tilt p-4 rounded-md">
                <ul class="flex flex-wrap 
                gap-1 [&>li]:bg-neutral-100 [&>li]:px-1
                ">
                  <li>Vue.js</li><li>JavaScript</li>
                  <li>HTML</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>Tailwindcss</li>
                </ul>
                <!-- <p class="">
                  Vue.js,JavaScript,HTML5,CSS,SCSS,Tailwindcss
                </p> -->
              </div>

              <p class="mx-auto bg-tilt p-4 rounded-md mt-2">
                Basic knowledge and hands-on experinces:
                mySQL, PHP
              </p>
              <p class="text-xs mt-4 text-slate-600">
                *Icon Courtesy to-greet by Deylotus Creative Design from Noun Project (CC BY 3.0)
              </p>

              </div>
              
          </div>
      </div>
  
</template>