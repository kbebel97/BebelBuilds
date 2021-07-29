<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet">
  </head>
  <div id="nav" class="row" style="margin: 0;" :style="displayBorder">
    <div class="col-4 link pc"><router-link to="/" style="display: flex; align-items: center; text-decoration: none;"><div style="font-size: xx-large; font-weight: bold">Bebel Builds&nbsp;</div><span class="material-icons" style="font-size: 3rem">roofing</span></router-link></div>
    <div class="col-2 link pc" style="justify-content: center"><router-link to="/">Home</router-link></div>
    <div class="col-2 link pc" style="justify-content: center"><router-link to="/Services">Services</router-link></div>
    <div class="col-2 link pc" style="justify-content: center"><router-link to="/Gallery">Gallery</router-link></div>
    <div class="col-2 link pc" style="justify-content: center"><router-link to="/Contact">Contact</router-link></div>
    <div class="col-10 link smart-device"><router-link to="/" style="display: flex; align-items: center; z-index: 4; text-decoration: none "><span class="material-icons" style="font-size: 3rem">roofing</span></router-link></div>
    <div class="col-2 smart-device" style="justify-content: flex-end; align-items: center; text-decoration: none; z-index: 4"><span class="material-icons" style="font-size: 3rem; cursor: pointer" @click.stop="toggle">menu</span></div>
  </div>
  <div id="smart-device-menu" style="position: relative">
    <transition name="link-fade">
      <div v-if="isOpen" style="position: absolute; background: white; width: 100%; font-family: 'Amiri', serif; font-size: x-large; border-bottom: 1px solid black; z-index: 2" id="nav">
        <router-link v-for="(link, index) in links" :key="link" :data-index="index" :to="link" style="color: black">
          <div v-if="link === '/'">Home</div>
          <div v-if="link === '/Services'">Services</div>
          <div v-if="link === '/Gallery'">Gallery</div>
          <div v-if="link === '/Contact'">Contact</div>
        </router-link>
      </div>
    </transition>
  </div>
  <router-view v-slot="{Component}">
    <transition :name="transition" mode="out-in" style="overflow-x: hidden;">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
<script>
export default {
  data(){
    return{
      isOpen: false,
      links: ["/","/Services", "/Gallery", "/Contact"],
      transition: 'route'
    }
  },
  watch: {
    $route(to, from){
      switch(to.path){
        case "/Contact": {
          this.transition = 'route'
          break;
        }
        case "/Gallery": {
          switch(from.path){
            case "/Contact": {
              this.transition = 'route-right'
              break;
            }
            case "/Services": {
              this.transition = 'route'
              break;
            }
            case "/": {
              this.transition = 'route'
              break;
            }
          }
          break;
        }
        case "/Services" : {
          switch(from.path){
            case "/": {
              this.transition = 'route'
              break;
            }
            case "/Gallery": {
              this.transition = 'route-right'
              break;
            }
            case "/Contact": {
              this.transition = 'route-right'
              break;
            }
          }
          break;
        }
        case "/": {
          this.transition = 'route-right'
          break;
        }

      }
    }
  },
  methods: {
    toggle(){
      if(this.isOpen) {
        return this.hide()
      }
      return this.show()
      // this.isOpen = !this.isOpen
    },
    show () {
      this.isOpen = true;
      setTimeout(() => document.addEventListener('click',this.hide), 0);
    },
    hide () {
        this.isOpen = false;
        document.removeEventListener('click',this.hide);
    },
    eventHandler(){
      this.isOpen = false
    }
  },
  computed: {
    displayBorder(){
      return !this.isOpen ? { outline: '1px solid black'} : { outline: 'none'}
    }
  },
  created(){
    window.addEventListener("resize", this.eventHandler)
  }
}
</script>


<style>

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* padding: 5px 0px 5px 0px; */
  height: fit-content;
  background: white;
  /* border-bottom: 1px black solid; */
}

#nav div.link{
  display: flex; justify-content: flex-start; align-items: center; padding: 10px;
}

#nav a {
  font-family: 'Amiri', serif;
  font-size: x-large;
  color: black;
}

#nav a:hover,
#nav a.router-link-exact-active {
  font-weight: bold;
}

#nav a.router-link{
  font-family: 'Amiri', serif;
  font-size: x-large;
}

#nav div.pc {
  display: flex;
}
#nav div.smart-device{
  display: none;
}
#smart-device-menu{
  display: none;
}

.link-fade-enter-from {
  opacity: 0;
  transform: translateY(-108px);
  /* background-color: transparent; */
}

.link-fade-enter-active {
  transition: all .3s ease-out;
}

.link-fade-leave-from,
.link-fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
  /* background-color: white; */
}

.link-fade-leave-active {
  transition: all .3s ease-in;
}

.link-fade-leave-to {
  opacity: 0;
  transform: translateY(-108px);
}

/* Route transition */
.route-enter-from {
  opacity: 0;
  transform:translateX(100px)
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px)
}

.route-leave-active {
  transition: all .3s ease-in;
}

/* Route right transition */
.route-right-enter-from {
  opacity: 0;
  transform:translateX(-100px)
}

.route-right-enter-active {
  transition: all 0.3s ease-out;
}

.route-right-leave-to {
  opacity: 0;
  transform: translateX(100px)
}

.route-right-leave-active {
  transition: all .3s ease-in;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 992px) {
  #nav div.pc {
    display: none;
  }
  #nav div.smart-device{
    display: flex; align-items: center; justify-content: flex-start
  }
  #smart-device-menu{
    display: block;
  }
}

</style>
