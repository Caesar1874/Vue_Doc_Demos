
////声明式渲染

// 绑定dom文本到数据
var app = new Vue({
    el: "#app",
    data: {
        message: "hello vue.js"
    }
})
// 更改message页面将实时更新
app.message = "hello qinghe"

// 通过 v-bind:attrName = value  指令绑定dom属性到数据
var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "you loaded this page on " + new Date()
    }
})
// 实时更新
app2.message = "something else"

// 通过v-if = boolean 条件语句，绑定dom元素到数据
var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})
// 切换元素的显示
app3.seen = false

// 通过 v-for= "ele in arr" 绑定文本到数组
var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            {text: "learn js"},
            {text: "learn vue"},
            {text: "build something"}
        ]
    }
})

app4.todos.push({text: "new item"})

// v-on:eventName = listener 绑定事件监听器
var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "hello vue"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split("").reverse().join("")
        }
    }
})

// v-modal: 双向绑定 绑定表单输入与dom文本
var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "hello vue"
    }
})

///// 组件

// 定义名为todo-item的组件
Vue.component("todo-item", {
    template: "<li>This is a todo</li>"
})
// 在#app-7中使用
var app7 = new Vue({
    el: "#app-7"
})

// 从父作用域向子组件传递数据
Vue.component("todo-item", {
    props: ["todo"],
    template: "<li>{{todo.text}}</li>"
})
var app8 = new Vue({
    el: "#app-8",
    data: {
        todos: [
            {text: "learn js"},
            {text: "learn vue"},
            {text: "build something"}
        ]
    }
})
