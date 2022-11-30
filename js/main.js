const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: [],
            counter: 0,
        }
    },
    methods: {

    },

    mounted () {
       
        for(let i=0; i<10;i++) {
            
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail" )
            .then((resp) => {

              console.log("L'email generata random dal server è: " + resp.data.response);
    
              this.emailList.push(resp.data.response);
    
              this.counter++;
            });
        
        }

    }

}).mount('#app')
