<template>

<div class="form-container">
    <form @submit.prevent="sendEmail">
        <h1>Contact Us!</h1>
        <h2 v-if="success" style="color: green">{{success_message}}</h2>
        <h2 v-if="error">{{error_message}}</h2>
        <input type="text" v-model="name"  placeholder="Name">
        <input type="text" v-model="email" placeholder="Email">
        <input type="text" v-model="phone" placeholder="Phone">
        <input type="password" name="website" style="display: none" ref="avoid-spam" autocomplete="off">
        <textarea v-model="desc" placeholder="Description (optional)"></textarea>
        <button class="btn btn-outline-primary" :disabled="isDisabled" style="font-size: 1.5rem; font-family: 'Roboto Condensed', sans-serif;" type="submit">Submit</button>
    </form>
</div>
</template>
<script>
export default {
    data(){
        return {
            name: '',
            email: '',
            phone: null,
            desc: '',
            error: false,
            error_message: '',
            success: false,
            success_message: '',
            isDisabled: false
        }
    },
    created(){
        if(sessionStorage.getItem("BBsubmitContact")!=null){
            if(Math.abs(new Date()  - Date.parse(sessionStorage.getItem("BBsubmitContact")))/1000 < 600){
                this.isDisabled = true;
            } else {
                sessionStorage.removeItem("BBsubmitContact")
            }
        }
    },
    methods : {
        sendEmail(){
            if(this.name == ''){
                this.error_message = 'Must give a name'
                this.error = true;
                return;
            }
            if(this.phone == ''){
                this.error_message = 'Must give a phone number'
                this.error = true;
                return;
            }
            if(this.email == ''){
                this.error_message = 'Must give an email address'
                this.error = true; 
                return;
            }
            if(this.$refs["avoid-spam"].value != ''){
                this.success_message = "Contact information successfully sent!"
                this.success = true;
                return
            }

            this.error = false;
            this.error_message = '';
            this.isDisabled = true;
            fetch('https://qbpkxukzz7.execute-api.us-east-1.amazonaws.com/send_email/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    desc: this.desc
                    }),
                }).then(response => {
                    console.log(response)
                    if(response.ok) {
                        this.name = ''
                        this.email = ''
                        this.phone = ''
                        this.desc = ''
                        sessionStorage.setItem("BBsubmitContact", new Date())
                        this.success_message = "Contact information successfully sent!"
                        this.success = true;
                        this.isDisabled = true
                    } else {
                        throw new Error('Could not save data!')
                    }
                })
                .catch(error => {
                this.isDisabled = false;
                console.log(error)
                this.error_message = error.error_message
                this.error = true;
            })
        }
    }
}

</script>

<style scoped>
    

    .form-container{
        height: calc(100% - 68px); background-image: linear-gradient(to left, #F58F43 , white); display: flex; justify-content: center; align-items: center;
    }
    form {
        display: flex; flex-direction: column; width: 500px; background: white; border: black solid 1px; row-gap: 10px; padding: 10px;
    }
    input{
        font-size: 2rem;
        height: 3rem;
        font-family: 'Roboto Condensed', sans-serif;
    }
    h1{
        font-family: 'Roboto Condensed', sans-serif;  font-size: 2rem;
    }
    h2 {
        font-family: 'Roboto Condensed', sans-serif;  font-size: 1.5rem; color: red; 
    }
    textarea{
        font-size: 2rem;
        height: 10rem;
        font-family: 'Roboto Condensed', sans-serif;
    }

@media screen and (max-width: 480px){
    form{
        width: 100%;
        border: 0;
        background: transparent;
        height: 100%;
    }
    .form-container{
        padding: 0;
        align-items: flex-start;
        justify-content: start;
    }
    textarea{
        flex-grow: 1;
        height: 100%;
    }

    
}
</style>
