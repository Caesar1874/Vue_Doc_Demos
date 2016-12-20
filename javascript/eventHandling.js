// 直接在v-on:eventName= " "中绑定代码
var vm1 = new Vue({
    el: "#example-1",
    data: {
        counter: 0
    }
})

// 绑定方法
    // 绑定方法时默认传入参数event
var vm2 = new Vue({
    el: "#example-2",
    data: {
        name: "Qinghe"
    },
    methods: {
        greet: function(event) {
            console.log("Hello " + this.name);
            console.log(event.target.tagName);
        }
    }
})

// 直接调用方法
// vm2.greet();

// 绑定内联语句
var vm3 = new Vue({
    el: "#example-3",
    methods: {
        say: function(message) {
            console.log(message);
        }
    }
})
// 传递dom原生事件对象
    // 因为绑定的语句，所以不会自动传递event参数，
var vm4 = new Vue({
    el: "#example-4",
    methods: {
        warn: function(msg, event) {
            if(event) {
                event.preventDefault();
            }
            alert(msg);
        }
    }
})