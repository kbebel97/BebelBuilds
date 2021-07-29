<template>
  <div id="home-container">
    <div id="home">
      <h1>
      Bebel Builds 
      </h1>
      <h3>Licensed and Insured Residential Contractor</h3>
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
          <h4>
          <div class="icon">
            <span class="material-icons" style="font-size: xx-large">
              email&nbsp;
            </span>
          </div>
          <div class="text">
            {{email}}
          </div>
        </h4>
        <h4>       
          <div class="icon">
            <span class="material-icons" style="font-size: xx-large">
              phone&nbsp;
            </span>
          </div>
          <div class="text">
            {{phone}}
          </div>
        </h4>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      email: "bebelbuilds@gmail.com",
      phone: "(917) 224-5521"
    }
  }
}
</script>
<style scoped>
h1{
  color: white
}
h3{
  font-weight: bold; color: white
}
h4 {
  display: flex; width: 80%; color: white
}
.icon {
flex: 1; text-align: center
}

.text {
flex: 1.5; text-align: start; 
}
#home-container{
height: calc(100% - 68px); display: flex; justify-content: center; align-items: center; flex-direction: column; background-image: linear-gradient(to bottom right, black, white);
}
#home {
  width: fit-content; font-family: 'Roboto Condensed', sans-serif;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 992px) {
  #home{
    width: 100%;
  }
  h4 {
    flex-direction: column;
  }
  .icon{
    text-align: center;
  }
  .text{
    text-align: center;
  }
}
</style>