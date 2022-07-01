const app = Vue.createApp({
    data() {
        return {
            appname: 'Hello Aced!',
            ballance: "3,654.00",
            location: "Zanzibar,TZ",
            visitors: 2558,
            billednumber: 344     
        }
    },
    methods: {
        changeOnline() {
            this.visitors = this.visitors + 157;
        }
    }
});



app.mount('#app');