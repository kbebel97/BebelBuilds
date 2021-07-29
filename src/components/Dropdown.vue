<template>
    <div class="menu-item" @click="isOpen=!isOpen">
        <span class="material-icons" style="color: black; font-size: fit-content; padding-right: 8px; cursor: pointer;">arrow_drop_down</span>        
        <transition name="fade" appear>   
            <div class="sub-menu" v-if="isOpen">
                <div class="menu-item" v-for="(item, i) in items" :key="i">
                    <div style="padding: 5px" @click="jumpTo(item)">
                    <a @click.prevent href="">{{item.title}}</a>   
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ['title', 'items'],
    name: 'dropdown',
    data(){
        return{
            isOpen: false
        }
    },
    methods: {
        jumpTo(slide){
            this.$emit('changeslide', slide)
        }
    }
}
</script>


<style scoped>
.material-icons{
    color: black;
}
.menu-item{
    position: relative;
}

.menu-item .sub-menu{
    position: absolute;
    background-color: white;
    right: 0%;
    top: 100%;
    border-bottom-left-radius: 10px;
}

.fade-enter-active,
.fade-leave-active{
    transition: all .3s ease-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
a{
    font-size: 3vh;
    color: black
}
</style>
