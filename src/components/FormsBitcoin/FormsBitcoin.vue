<template lang="">
    <div  
      class="
       bg-white
       container
    ">
    <form>
          <input 
                v-model="name"
                placeholder="name"  
            />
            <input
                v-model="surname"
                placeholder="surname"
            />
            <input 
                v-model="age"  
                placeholder="age"
            />
            <input 
                v-model="email"  
                placeholder="email"
            />
               <input 
                v-model="address"  
                placeholder="address"
            />
            <button @click="getDataHanling">Submit</button>
    </form>

    </div>
</template>
<script>
export default {
    name: 'FormsBitcoin',
    components: {
    },
    data(){
        return {
            name: '',
            surname: '',
            age: '',
            email: '',
            address: '',
        }
    },
    mounted(){
        if (localStorage.name) { this.name = localStorage.name; }
        if(localStorage.surname){ this.surname = localStorage.surname}
        if(localStorage.age){ this.age = localStorage.age}
        if(localStorage.email){ this.email = localStorage.email}
        if(localStorage.address){ this.address = localStorage.address}
    },
    methods: {
        getDataHanling(e){
            e.preventDefault();
            localStorage.name = this.name;
            localStorage.surname = this.surname;
            localStorage.age = this.age;
            localStorage.email = this.email;
            localStorage.address = this.address;
        }
    },
    /* watch: {
        name(newName){
            localStorage.name = newName;
        },
        surname(newSurname){
            localStorage.surname = newSurname;
        },
        age(newAge){
            localStorage.age = newAge;
        },
        email(newEmail){
            localStorage.email = newEmail;
        },
        address(newAddress){
            localStorage.address = newAddress;
        }
    } */
    
}
</script>
<style scoped>
    .container{
        padding: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        min-width: 100%;
    }
    input{
        display: flex;
        margin: 1em;
        width: 50em;
        min-width: 100%;
        text-transform: capitalize;
        padding: 1em;;
        gap: 4;
    }
    button{
        background: #000;
        color: #fff;
        border: none;
        width: 100%;
        padding: 1em;
        font-size: 18px;
        cursor: pointer;
    }
</style>