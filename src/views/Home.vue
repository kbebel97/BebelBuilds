<template>
  <div id="home-container">
    <div id="home">
      <h1>
      Bebel Builds 
      </h1>
      <h2>Licensed and Insured Residential Contractor</h2>
      <h3>Servicing the New York City area</h3>
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
          <h4>
          <div class="icon">
            <a href="mailto:bebelbuilds@gmail.com">
            <span class="material-icons" style="font-size: xx-large">
              email&nbsp;
            </span>
            </a>
          </div>
          <div class="text">
            {{email}}
          </div>
        </h4>
        <h4>       
          <div class="icon">
            <a href="tel:9172245521">
            <span class="material-icons" style="font-size: xx-large">
              phone&nbsp;
            </span>
            </a>
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
h3{
  color: white; font-style: italic;
}
a{
  color: white;
}
a:hover{
  color: black;
}
h1{
  color: white
}
h2{
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