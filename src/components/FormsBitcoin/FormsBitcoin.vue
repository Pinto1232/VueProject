<template lang="">
  <q-section >
    <div :class="mode ? 'bg-primary' : 'bg-grey-1'">
       <div class="mx-10" >
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

       <div class="py-10" >
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
                <button class="mx-auto" @click="getDataHanling">Submit</button>
         </form>

       </div>
    </div>
  </q-section>
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
    computed: {
        mode: function () {
        return this.$q.dark.isActive;
        },
  },
    
}
</script>
<style scoped>
    .container{
        align-items: center;
    }
    input{
        max-width: 33%;
        min-width: 98%;
        text-transform: capitalize;
        padding: 1em;
        margin: 1em;
    }
    button{
        background: #000;
        color: #fff;
        border: none;
        min-width: 97.5%;
        padding: 1em;
        font-size: 18px;
        cursor: pointer;
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        input{
            margin: 1em;
        }
    }
</style>