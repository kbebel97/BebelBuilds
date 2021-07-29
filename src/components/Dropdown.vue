<template>
    <div class="menu-item" @click="toggle">
        <span class="material-icons" style="color: black; font-size: 100%; padding-right: 8px; cursor: pointer; text-align: center">arrow_drop_down</span>        
        <transition name="fade" appear>   
            <div class="sub-menu" v-if="isOpen">
                <div class="menu-item" v-for="(item, i) in items" :key="i">
                    <div style="padding: 5px; text-align: start" @click="jumpTo(item)">
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
        },
        toggle(){
        if(this.isOpen) {
          return this.hide()
        }
            return this.show()
        },
        show () {
            this.isOpen = true;
                setTimeout(() => document.addEventListener('click',this.hide), 0);
        },
        hide () {
            this.isOpen = false;
            document.removeEventListener('click',this.hide);
        },
    }
}
</script>


<style scoped>
.material-icons{
    color: black;
}
.menu-item{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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
