<template>


<!-- Section 1 -->
<footer class="text-center bg-black py-12">
  <transition name="scale">
  
    <FormsSubscriptionForm v-if="showForm"  @close-modal="showForm=!showForm" />
  </transition>
<div class="flex flex-col items-center justify-center px-5  mx-auto max-w-7xl md:px-0">
        <div class="relative">
            <h1 class="relative text-1xl font-black text-white">
              GET <span class="text-yellow">ABDUCTED</span>
            </h1>
        </div>

        <div class="flex-col justify-center w-2/3 mt-5 space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row lg:mt-8">
            <form    
            netlify
            action="/"
            method="POST"
            name="subscribers">
            <input type="hidden" name="form-name" value="subscribers" />

            <input name="email" type="email" class="border-0 border-b border-yellow container inline-block h-12 px-3 overflow-visible text-sm font-spmono  bg-transparent  border-solid rounded-sm sm:max-w-xs lg:max-w-sm focus:outline-none cursor-text md:text-left focus:ring-2 text-white" placeholder="Your email address">
               <button type="submit" class="btn-submit hover:shadow-md hover:shadow-yellow shadow-inner w-full justify-center mt-2 md:w-1/5  "> SUBMIT             <font-awesome-icon :icon="['fas','chevron-right']"  /> </button>
            </form>
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
        <button @click="showForm=!showForm" class="pointer text-sm text-blueGray-500 font-semibold py-1"> <span class="text-yellow">PARTNERSHIP & BUSINESS</span> INQUIRIES </button>
      </div>

    </div>
</footer>


</template>

<script>
export default {
  data() {
    return {
      showForm: false
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.btn-submit {
	@apply 
				font-poppins
				text-black
				bg-yellow hover:bg-black hover:text-yellow
	hover:shadow-md hover:shadow-yellow shadow-inner
				border border-transparent rounded-sm 
				inline-flex items-center h-12 px-8
				transition duration-150 ease-in-out
				focus:outline-none 
				



}

</style>