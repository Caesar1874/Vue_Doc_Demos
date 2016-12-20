
// 文本
var vm1 = new Vue({
    el: "#example-1",
    data: {
        message: "hello"
    }
})

// 多行文本
var vm2 = new Vue({
    el: "#example-2",
    data: {
        message: "lorem lorem lorem"
    }
})

// 单个复选框绑定到布尔值

var vm3 = new Vue({
    el: "#example-3",
    data: {
        checked: false
    }
})

// 多个复选框绑定到一个数组
// 数组元素是复选框的value
var vm4 = new Vue({
    el: "#example-4",
    data: {
        checkedNames: ["Jack"]
    }
})

// 单选按钮绑定到一个变量， 变量的值是单选按钮的value
var vm5 = new Vue({
    el: "#example-5",
    data: {
        picked: "one"
    }
})

// 单选列表绑定到一个变量, 变量值是option的value或内容
var vm6 = new Vue({
    el: "#example-6",
    data: {
        selected: "apple"
    }
})

// 多选列表绑定到一个数组， 数组元素是option的value或内容
var vm7 = new Vue({
    el: "#example-7",
    data: {
        selected: ["apple", "banana"]

    }
})

// 动态渲染option
var vm8 = new Vue({
    el: "#example-8",
    data: {
        selected: "A",
        options: [
            {text: "one", value: "A"},
            {text: "two", value: "B"},
            {text: "three", value: "C"}
        ]
    }
})

// 绑定动态value
// 复选框
var vm9 = new Vue({
    el: "#example-9",
    data: {
        a: "apple",
        b: "banana",
        toggle: ""
    }
})
// 单选按钮
var vm10 = new Vue({
    el: "#example-10",
    data: {
        a: "apple",
        b: "banana",
        pick: ""
    }
})

// 选项列表
var vm11 = new Vue({
    el: "#example-11",
    data: {
        selected: ""
    }
})
// 将选项绑定到数组元素
var vm12 = new Vue({
    el: "#example-12",
    data: {
        selected: "",
        arr: [
            {"msg": "apple"},
            {"msg": "banana"}
        ]
    }
})

// 修饰符
// .lazy
var vm13 = new Vue({
    el: "#example-13",
    data: {
        inputText: "",
    }
})

