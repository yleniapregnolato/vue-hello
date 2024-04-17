const { createApp } = Vue;

createApp({
    data() {
        return {
            greeting: "Hello world",
            imgName: "https://i.etsystatic.com/7239025/r/il/b6c475/3373986585/il_1588xN.3373986585_jepv.jpg"
        }
    }
}).mount('#app');