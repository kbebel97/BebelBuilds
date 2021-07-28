<template>
  <div id="gallery-container">
    <!-- Kitchen Carousel -->
    <div class="carousel">
      <div v-for="(kitchenImage, index) in kitchenImages" :key="kitchenImage" class="carousel-slide">
        <h1>Kitchen</h1>
        <transition :name="direction">
          <div v-show="kitchenSlide === index" class="image-container">
            <img :src="kitchenImages[index].img"/>
            <button @click="next('kitchen')" class="next" style="top: 50%;">
              <span class="material-icons" style="color: white; font-size: 3rem">arrow_forward_ios</span>
              </button>
            <button @click="prev('kitchen')" class="prev" style="top: 50%;">
              <span class="material-icons" style="transform: rotateZ(180deg); color: white; font-size: 3rem">arrow_forward_ios</span>
            </button>
          </div>
        </transition>
      </div>
    </div>
    <hr class="rounded">
    <!-- Bathroom Carousel -->
    <div class="carousel">
      <div v-for="(bathroomImage, index) in bathroomImages" :key="bathroomImage" class="carousel-slide">
        <h1>Bathroom</h1>
        <transition :name="direction">
          <div v-show="bathroomSlide === index" class="image-container">
            <div style="display: inline-block; position: relative">
              <label class="image-label" v-if="index == 14">&nbsp;Before&nbsp;</label>
              <label class="image-label" v-if="index == 15">&nbsp;After&nbsp;</label>
              <img :src="bathroomImages[index].img"/>
            </div>
            <button @click="next('bathroom')" class="next" style="top: 50%;">
              <span class="material-icons" style="color: white; font-size: 3rem">arrow_forward_ios</span>
              </button>
            <button @click="prev('bathroom')" class="prev" style="top: 50%;">
              <span class="material-icons" style="transform: rotateZ(180deg); color: white; font-size: 3rem">arrow_forward_ios</span>
            </button>
          </div>
        </transition>
      </div>
    </div>
    <!-- <hr class="solid"> -->
    <!-- Bedroom Carousel -->
    <!-- <div class="carousel">
      <div v-for="(bedroomImage, index) in bedroomImages" :key="bedroomImage" class="carousel-slide">
        <h1>Bedroom</h1>
        <transition :name="direction">
          <div v-show="bedroomSlide === index" style="position: relative; height: 100%; width: 100%">
            <img :src="bedroomImages[index].img"/>
            <button @click="next('bedroom')" class="next" style="top: 50%;">
              <span class="material-icons" style="color: white; font-size: 3rem">arrow_forward_ios</span>
              </button>
            <button @click="prev('bedroom')" class="prev" style="top: 50%;">
              <span class="material-icons" style="transform: rotateZ(180deg); color: white; font-size: 3rem">arrow_forward_ios</span>
            </button>
          </div>
        </transition>
      </div>
    </div> -->
  </div>
</template>
<script>
  let bathroom = require("../../public/bathroom.json")
  export default {
    data(){
      return {
        bathroomJson: bathroom,

        bathroomImagesMobile: [],
        bedroomImagesMobile: [],
        kitchenImagesMobile: [],

        kitchenImagesDesktop: [],
        kitchenImagesDuel: [], 
        bathroomImagesDesktop: [],
        bedroomImagesDesktop: [],

        kitchenImages:  [],
        bathroomImages: [],
        bedroomImages: [],
        hallwayImages: [],

        kitchenSlide: 0,
        bedroomSlide: 0,
        hallwaySlide: 0,
        bathroomSlide: 0,

        direction: 'left'
      }
    },
    created(){
      //Mobile
      for(let i = 0; i < new Array(6).length; i++){
        this.kitchenImagesMobile.push({img: require(`@/assets/images/kitchen_mobile/kitchen_${i + 1}.jpg`)})
      }
      for(let i = 0; i < new Array(16).length; i++){
        this.bathroomImagesMobile.push({img: require(`@/assets/images/bathroom_mobile/bathroom_${i + 1}.jpg`)})
      }
      //Desktop
      for(let i = 0; i < new Array(16).length; i++){
        this.bathroomImagesDesktop.push({img: require(`@/assets/images/bathroom/bathroom_${i + 1}.jpg`)})
      }
      for(let i = 0; i < new Array(9).length; i++){
        this.kitchenImagesDesktop.push({img: require(`@/assets/images/kitchen/kitchen_${i + 1}.jpg`)})
      }
      for(let i = 0; i < new Array(1).length; i++){
        this.bedroomImagesDesktop.push({img: require(`@/assets/images/bedroom/bedroom_${i + 1}.jpg`)})
      }       

      if(window.innerWidth < 480){
        this.kitchenImages = this.kitchenImagesMobile
        this.bathroomImages = this.bathroomImagesMobile
        this.bedroomImages = this.bedroomImagesMobile
      } else {
        this.kitchenImages = this.kitchenImagesDesktop
        this.bathroomImages = this.bathroomImagesDesktop
        this.bedroomImages = this.bedroomImagesDesktop
      }
      window.addEventListener("resize", this.eventHandler)
    }, 
    methods: {
      eventHandler(){
        if(window.innerWidth < 480){
          this.kitchenImages = this.kitchenImagesMobile
          this.bathroomImages = this.bathroomImagesMobile
          this.bedroomImages = this.bedroomImagesMobile 
          this.kitchenSlide = 0;
          this.bedroomSlide = 0;
          this.bathroomSlide = 0;
        } 
        else { 
          this.kitchenImages = this.kitchenImagesDesktop
          this.bathroomImages = this.bathroomImagesDesktop
          this.bedroomImages = this.bedroomImagesDesktop
        }   
      },
      next(slide){
        this.direction = "left";
        switch(slide) {
          case "kitchen": {
            if(this.kitchenSlide >= this.kitchenSlidesLen - 1)
              this.kitchenSlide = 0; 
            else 
              this.kitchenSlide++;
            break;
          }
          case "bathroom": {
            if(this.bathroomSlide >= this.bathroomSlidesLen - 1)
              this.bathroomSlide = 0; 
            else 
              this.bathroomSlide++;
            break;
          }
          case "bedroom": {
            if(this.bedroomSlide >= this.bedroomSlidesLen - 1)
              this.bedroomSlide = 0; 
            else 
              this.bedroomSlide++;
            break;
          }
          case "hallway": {
            if(this.hallwaySlide >= this.hallwaySlidesLen - 1)
              this.hallwaySlide = 0; 
            else 
              this.hallwaySlide++;
            break;
          }
        }
      },
      prev(slide){
        this.direction = "right";
        switch(slide) {
          case "kitchen": {
            if(this.kitchenSlide <= 0)
              this.kitchenSlide = this.kitchenSlidesLen - 1; 
            else 
              this.kitchenSlide--;
            break;
          }
          case "bathroom": {
            if(this.bathroomSlide <= 0)
              this.bathroomSlide = this.bathroomSlidesLen - 1; 
            else 
              this.bathroomSlide--;
            break;
          }
          case "bedroom": {
            if(this.bedroomSlide <= 0)
              this.bedroomSlide = this.bedroomSlidesLen - 1; 
            else 
              this.bedroomSlide--;
            break;
          }
          case "hallway": {
            if(this.hallwaySlide <= 0)
              this.hallwaySlide = this.hallwaySlidesLen - 1; 
            else 
              this.hallwaySlide--;
            break;
          }
        }
      }
    },
    computed : {
      kitchenSlidesLen(){
        return this.kitchenImages.length
      },
      bathroomSlidesLen(){
        return this.bathroomImages.length
      },
      hallwaySlidesLen(){
        return this.hallwayImages.length
      },
      bedroomSlidesLen(){
        return this.bedroomImages.length
      }
    },

  }

</script>
<style scoped>
   hr {
    border: 0;
    clear:both;
    display: flex;               
    background-color:white;
    height: 1px;
    width: 100%;
    }
  #gallery-container{
    height: calc(100% - 68px); background-image: linear-gradient(#F58F43 , white); padding: 1%; border-top: black solid 1px;
  }
  /* hr.rounded {
  border-top: 3px solid gray;
  border-radius: 5px;
  } */
  .next {
      right: 2%
  }
  .prev {
      left: 2%
  }
  button:focus, button:hover {
    outline: 0;
    cursor: pointer;
    background: transparent;
  }
  h1 {
    position: absolute; 
    bottom: top; 
    font-family: 'Roboto Condensed', sans-serif; 
    font-size: xx-large; 
    font-style: bold; 
    font-weight: 300; 
    margin: 8px; 
    padding: 10px; 
    background: black; 
    color: white; 
    border-radius: 10px;
    z-index: 1;
  }
  button{
    border: none;
    outline: 0;
    cursor: pointer;
    position: absolute; 
    z-index: 1;
    background: transparent;
  }

  .image-label{
    position: absolute; z-index:4; right: 0; font-family: 'Roboto Condensed', sans-serif; font-size: xx-large; color: white; background: black; border-bottom-left-radius: 10px;
  }

  img{
    object-fit: scale-down;
    height: 100%;
    width: 100%;
    filter: drop-shadow(0px 0px 1px rgba(0,0,0,.3))
          drop-shadow(0px 0px 10px rgba(0,0,0,.3));
  }

  .left-enter-active {
      opacity: 1;
      animation: leftInAnimation 1s ease-in-out;
  }
  .left-leave-active {
      animation: leftOutAnimation 1s ease-in-out;
  }
  @keyframes leftInAnimation {
      from { transform: translateX(100%);}
      to { transform: translateX(0);}
  }

  @keyframes leftOutAnimation {
      from { transform: translateX(0)}
      to { transform: translateX(-100%) }
  }

  .right-enter-active {
      animation: rightInAnimation 1s ease-in-out;
  }
  .right-leave-active {
      animation: rightOutAnimation 1s ease-in-out;
  }
  @keyframes rightInAnimation {
      from { transform: translateX(-100%)}
      to { transform: translateX(0) }
  }

  @keyframes rightOutAnimation {
      from { transform: translateX(0)}
      to { transform: translateX(100%) }
  }

  .image-container{ position: relative; height: 100%; width: 100%; padding-left: 2%; padding-right: 2%; display: flex; justify-content: center; align-items: center; }
  .carousel-slide{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
  .carousel{ position: relative; width: 100%; height: 100%; overflow: hidden; }

  @media only screen and (max-width: 479px){ 
      #gallery-container{
        padding: 0;
      }
    }

</style>
