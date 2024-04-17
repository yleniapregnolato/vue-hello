const { createApp } = Vue;

createApp({
    data() {
        return {
            greeting: "",
            imgName: "https://i.etsystatic.com/7239025/r/il/b6c475/3373986585/il_1588xN.3373986585_jepv.jpg",
            phrasecolor: "green"

        }
    },
    methods: {
        color: function () {
            if (this.phrasecolor === "green") {
                this.phrasecolor = "";
            } else {
                this.phrasecolor = "green";
            } 
        }
    }
    
}).mount('#app');