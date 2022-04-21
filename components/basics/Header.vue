<template>
  <header
    :class="`bg-black ${scrollY < 1 ? 'sm:bg-transparent' : ''}  flex justify-center items-baseline fixed px-3 py-3 w-full z-50`"
  >
    <ConnectModal/>

    <div class="flex justify-between items-center w-full sm:w-11/12">
      <BasicsLogo/>
      <!-- Desktop nav -->
      <nav class="hidden lg:flex">
        <ul class="flex text-white items-center font-spmono">
          <li class="mr-8">
            <a class="text-lg xl:text-2xl" href="/#presentation">Presentation</a>
          </li>
          <li class="mr-8">
            <a class="text-lg xl:text-2xl" href="/#our-artist">Our Artist</a>
          </li>
          <li class="mr-8">
            <a class="text-lg xl:text-2xl" href="/#team-section">Our Team</a>
          </li>
          <li class="mr-8">
            <a class="text-lg xl:text-2xl" href="/#roadmap-section">Road Map</a>
          </li>
    
          <li>
            <a class="text-lg xl:text-2xl" href="/whitelist">Whitelist</a>
          </li>
        </ul>
      </nav>
      <ConnectButton/>
      <!-- Mobile menu -->
      <div class="flex lg:hidden justify-end ml-3">
        <button 
          class="text-white z-20 "
          @click="toggleNavigator"
        >
                   <font-awesome-icon :icon="['fas','bars']" v-if="!isNavigatorOpen" />
                   <font-awesome-icon :icon="['fas','xmark']" v-else />


        </button>
        <transition name="scale">
          <nav
            v-if="isNavigatorOpen"
            class="mobile-navigator flex absolute top-0 left-0 w-screen h-screen p-5 rounded-lg z-10 items-center justify-center text-3xl"
            :class="{
              'scale-in': isNavigatorOpen,
              'scale-out': !isNavigatorOpen,
            }"
          >
            <ul class="flex flex-col text-white text-center">
              <li class="mb-3">
                <a href="/#presentation">Presentation</a>
              </li>
              <li class="mb-3">
                <a href="/#presentation-section">The Protocol</a>
              </li>
          
              <li class="mb-3">
                <a href="/#roadmap-section">Our Artist</a>
              </li>
                  <li class="mb-3">
                <a href="/#roadmap-section">Road Map</a>
              </li>
              <li class="mb-3">
                <a href="/#team-section">Our Team</a>
              </li>
              <!-- <li class="mb-3">
                <a href="/#faq-section">FAQ</a>
              </li>
              <li>
                <a href="/whitelist">Whitelist</a>
              </li> -->
              <div class="flex flex-row justify-center space-x-8">
                <li class="mt-8">
                <a href="https://twitter.com/AbductionSquad" target="_blank" >
                   <font-awesome-icon :icon="['fab','twitter']" />
                </a>
              </li>
              <li class="mt-8">
                <a href="https://discord.com/invite/abductionsquad" target="_blank">
                   <font-awesome-icon :icon="['fab','discord']" />
                </a>
              </li>
              </div>
            </ul>
          </nav>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderComponent',
  data() {
    return {
      isNavigatorOpen: false,
      scrollY: 0
    }
  },
  computed: {},
  mounted(){
    window.addEventListener('scroll', (e) => {
      this.scrollY = window.scrollY
    })
  },
  methods: {
    toggleNavigator() {
      this.isNavigatorOpen = !this.isNavigatorOpen
    },
  },
}
</script>

<style scoped>
  @keyframes scaleIn {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scaleOut {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0);
      opacity: 0;
    }
  }

  .mobile-navigator {
    transform-origin: top right;
    background-color: #111827ee;
  }

  .scale-enter-active {
    animation: scaleIn 0.3s ease-in;
  }
  .scale-leave-active {
    animation: scaleOut 0.3s ease-in;
  }
</style>
