
new Vue({
    el: "#container",
    data: {
        active: "home",
        isActive: {
            home: true,
            projects: false,
            services: false,
            contact: false
        }
    },
    methods: {
        makeActive: function(event) {
            var item = event.target.innerHTML.toLowerCase();
            // console.log(item);
            this.active = item;
            for(var key in this.isActive) {
                if(key === item) {
                    this.isActive[key] = true;
                } else {
                    this.isActive[key] = false;
                }
            }
        }
    }
})