
var vm1 = new Vue({
    el: "#example-1",
    data: {
        fruit: {
            apple: "1"
        }
    }
})
// 响应式的
vm1.fruit.apple = "qing";
// 非响应式的
    // banana是可以渲染的，带不能实时更新
vm1.fruit.banana = "caesar";
// 使用vue.set()s
Vue.set(vm1.fruit, "cherry", "hanibal");
