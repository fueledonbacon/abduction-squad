<template>


<!-- Section 1 -->
<footer class="text-center bg-black py-12">
<div class="flex flex-col items-center justify-center px-5 py-20 mx-auto max-w-7xl md:px-0">
        <div class="relative">
            <h1 class="relative text-1xl font-black text-white">
              GET <span class="text-yellow">ABDUCTED</span>
            </h1>
        </div>

        <div class="hidden  flex-col justify-center w-full mt-5 space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row lg:mt-8">
            <input type="text" class="border-0 border-b border-yellow container inline-block h-12 px-3 overflow-visible text-base font-semibold text-gray-700 bg-transparent  border-solid rounded-sm sm:max-w-xs lg:max-w-sm focus:outline-none cursor-text md:text-left focus:ring-2" placeholder="Your email address">
            <PillButton> SUBMIT             <font-awesome-icon :icon="['fas','chevron-right']"  /> </PillButton>
        </div>
        
				<div class="flex justify-center space-x-6 my-6 text-white text-2xl md:mt-4">
          <a href="https://twitter.com/AbductionSquad">
            <font-awesome-icon :icon="['fab','twitter']"  />
          </a>
            <a href="https://discord.com/invite/abductionsquad">
            <font-awesome-icon :icon="['fab','discord']"  />
          </a>
        </div>
        
      <div class="w-full md:w-4/12 px-4 mx-auto text-center text-white">
        <div class="text-sm text-blueGray-500 font-semibold py-1"> Copyright © 2022 </div>
      </div>

    </div>
</footer>


</template>
<script>
export default {
  
}
</script>