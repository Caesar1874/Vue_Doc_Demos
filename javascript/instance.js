// 构造器

// 扩展Vue构造器
var Profile = Vue.extend({
    template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
    data: function() {
        return {
            firstName: "Walter",
            lastName: "White",
            alias: "Heisenberg"
        }
    }
});
// 创建Profile实例，并挂载
new Profile().$mount("#mount-point");


// vue实例会代理data对象中的属性
var data = {a: 1};
var vm = new Vue({
    data: data
});
vm.a === data.a; // true
// 双向实时更新
vm.a = 2;
data.a; // 2
data.a = 3;
vm.a; // 3

// 实例属性和方法
var data = {a: 1};
var vm = new Vue({
    el: "#example",
    data: data
})

// 实例监视的数据对象
vm.$data === data;
// 实例挂载的根dom元素
vm.$el === document.getElementById("example");

// 监视表达式的变化
vm.$watch("a", function(newVal, oldVal) {
    console.log("watch");
})
