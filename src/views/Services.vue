<template>
    <div id="services-container">
        <div style="display: flex; flex-direction: column; width: 100%">
            <h1>Kitchen</h1>
            <h3>
                <ul>
                    <li v-for="service in kitchenServices" :key="service">
                        {{service}}
                    </li>
                </ul>
            </h3>
            <div class="hr-container">
                <hr>
            </div>
            <h1>Bathroom</h1>
            <h3>    
                <ul>
                    <li v-for="service in bathroomServices" :key="service">{{service}}</li>
                </ul>
            </h3>
            <div class="hr-container">
                <hr>
            </div>
            <h1>General</h1>
            <h3>
                <ul>
                    <li v-for="service in GeneralServices" :key="service">{{service}}</li>
                </ul>
            </h3>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            kitchenServices: [
                "Removal & Installation of cabinets",
                "Tiles installation & replacement: floor & wall",
                "Backsplash",
                "Appliance installation",
                "Sink & faucet installation",
                "Painting"
            ],
            bathroomServices: [
                "Tiles installation & replacement: wall & floor",
                "Installation of vanity",
                "Installation of medicine cabinet",
                "Toilet replacement",
                "Bathtub replacement",
                "Bathtub reglazing",
                "Steam pipe cleaning and painting"
            ],
            GeneralServices : [
                "Complete demolition",
                "Sheetrock and drywall",
                "Door installation",
                "Closet installation and rebuilding",
                "Baseboards & moldings",
                "Plastering & sanding",
                "Sanding & restaining hardwood floors",
                "Hardwood floor repairs & installation"
            ]
        }
    }
}
</script>
<style scoped>
    hr {
    border: 0;
    clear:both;
    display:block;               
    background-color:white;
    height: 1px;
    width: 100%;
    }
    .hr-container{
        width: 100%;
    }

    #services-container {
            height: calc(100% - 68px); background-image: linear-gradient(to top right, black,white); padding: 1%; border-top: black solid 1px; display: flex; width: 100%;
    }
    h1{
        font-family: 'Roboto Condensed', sans-serif; 
        font-style: bold; 
        font-size: 3rem;
        text-align: start;
        color: white
    }
    h3{
        font-family: 'Roboto Condensed', sans-serif; color: white
    }
    li {
        text-align: start;
        list-style-type: square;
    }

    @media only screen and (max-width: 479px){ 
      h1{
          text-align: center;
      }
    }
</style>