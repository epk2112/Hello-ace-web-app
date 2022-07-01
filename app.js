const app = Vue.createApp({
    data() {
        return {
            appname: 'Hello Ace Investing',
            ballance: "5,000.00",
            location: "Mwanza,TZ",
            visitors: 2558,
            billednumber: 344     
        }
    },
    methods: {
        changeOnline() {
            this.visitors = this.visitors + 159;
        }
    }
});



app.mount('#app');