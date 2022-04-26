<template>
    

    
<div  class="fixed bottom-0 z-50 py-12 w-full bg-neutral-900  text-left">


    <button @click="$emit('close-modal')" class="absolute right-10 text-white text-3xl"><font-awesome-icon :icon="['fas','xmark']"  /></button>
    <div class="px-10 mx-auto max-w-7xl md:px-16 font-spmono text-sm">
        <div class="max-w-2xl mx-auto mb-5 ">
            <p class="max-w-2xl mx-auto mt-4 text-left text-white  md:mt-6">
                Have a partnership or business inquiry? Please submit a message in the form below and a squad member will get back to you shortly.
            </p>
        </div>

        <form   class="grid max-w-2xl gap-4 mx-auto sm:grid-cols-3"
            netlify
            action="/"
            method="POST"
            name="bussiness">>
            <input type="hidden" name="form-name" value="bussiness" />

            <div>
                <label for="first-name" class="inline-block mb-2 text-sm font-medium text-white sm:text-base">First name: * </label>
                <input name="first-name" required class="w-full px-3 py-2 text-white transition duration-100 border  outline-none bg-transparent focus:ring-1 ring-yellow">
            </div>

            <div>
                <label for="last-name" class="inline-block mb-2 text-sm font-medium text-white sm:text-base">Last name: *</label>
                <input name="last-name" required class="w-full px-3 py-2 text-white transition duration-100 border  outline-none bg-transparent focus:ring-1  ring-yellow">
            </div>

             <div>
                <label for="email" class="inline-block mb-2 text-sm font-medium text-white sm:text-base">Email: *</label>
                <input name="email" class="w-full px-3 py-2 text-white transition duration-100 border  outline-none bg-transparent focus:ring-1 ring-yellow">
            </div>

            <div class="sm:col-span-3">
                <label for="message" class="inline-block mb-2 text-sm font-medium text-white sm:text-base">Message: *</label>
                <textarea name="message" required class="resize-none w-full h-24 px-3 py-2 text-white transition duration-100 border  outline-none bg-transparent focus:ring-1 ring-yellow"></textarea>
            </div>

            <div class="flex items-center justify-end sm:col-span-3">
                <button class="btn-submit" type="submit">SUBMIT</button>
            </div>
        </form>
        <!-- <p class="max-w-3xl mx-auto mt-5 text-xs text-gray-400">
            Please allow up to 24-48 hour response during the weekdays.
        </p> -->
    </div>
</div>


</template>


<script>
export default {

  methods:{

  }
}
</script>
<style scoped>
.btn-submit {
	@apply 	font-poppins
				text-black
				bg-yellow hover:bg-black hover:text-yellow
				hover:shadow-sm shadow-yellow
				border border-transparent rounded-sm 
				inline-flex items-center h-12 px-8
				transition duration-150 ease-in-out
				focus:outline-none 
				



}

</style>