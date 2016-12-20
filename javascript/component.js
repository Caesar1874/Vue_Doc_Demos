// 注册全局组件
Vue.component("my-component", {
    template: "<div>a custom component</div>"
});
// 创建根实例
new Vue({
    el: "#example",
});

// 注册局部组件
Vue.component("my-component", {
    template: "<div>a custom component</div>"
});

new Vue({
    el: "#example-1",
    // 局部组件
    components: {
        "local-component": {
            template: "<div>a local component</div>"
        }
    }
});


// 组件从的data应该是函数
Vue.component("component-1", {
    template: "<span>component-1</span>",
    data: {
        message: "hello"
        // 会渲染并发出警告
    }
})
new Vue({
    el: "#example-2"
})

Vue.component("simple-counter", {
    template: "<button v-on:click='counter+=1'>{{counter}}</button>",
    data: function(){
        return {counter: 0}
        // 此处如果返回引用对象变量组件将相互影响
    }
})
new Vue({
    el: "#example-3"
})

// 使用props传递数据
Vue.component("child", {
    props: ["myMessage"],
    template: "<span>{{myMessage}}</span>",
});
new Vue({
    el: "#example-4",
})

// 动态绑定props到父组件的数据
Vue.component("child", {
    template: "<span>{{myMessage}}</span>", //注意camelCase和kebab-case
    props: ["my-message"]
});
new Vue({
    el: "#example-5",
    data: {
        parentMsg: ""
    }
})