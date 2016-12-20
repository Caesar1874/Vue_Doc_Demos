
// 列表渲染
var vm1 = new Vue({
    el: "#example-1",
    data: {
        items: [
            {message: "foo"},
            {message: "bar"},
            {message: "Foo"}
        ]
    }
})

// 参数和作用域
var vm2 = new Vue({
    el: "#example-2",
    data: {
        parentMessage: "parent",
        items: [
            {message: "zero"},
            {message: "one"},
            {message: "two"}
        ]
    }
})

// 渲染多个元素
var vm3 = new Vue({
    el: "#example-3",
    data: {
        items: [
            {msg: "foo"},
            {msg: "bar"}
        ]
    }
})

// 迭代对象
var vm4 = new Vue({
    el: "#example-4",
    data : {
        obj: {
            firstName: "John",
            lastName: "Doe",
            age: 30
        }
    }
})

// 多个参数
var vm5 = new Vue({
    el: "#example-5",
    data: {
        obj: {
            firstName: "John",
            lastName: "Doe",
            age: 30
        }
    }
})

// 整数迭代
var vm6 = new Vue({
    el: "#example-6"
})

// 组件

// 数组更新
// 变化方法
// 追加
vm2.items.push({message: "qinghe"});
// 弹出
vm2.items.pop();
// 头部插入
vm2.items.unshift({message: "caesar"});
// 头部删除
vm2.items.shift();
// 替换
vm2.items.splice(1, 1, {message: "caesar"});
// 排序
vm2.items.sort();
// 反向
vm2.items.reverse();

// 设置数组元素
Vue.set(vm2.items, 1, {message: "qinghe"})
vm2.items.splice(1, 1, {message: "caesar"})
// 改变数组长度
vm2.items.splice(2);

// 过滤或排序
// 计算属性过滤
var vm7 = new Vue({
    el: "#example-7",
    data: {
        numbers: [1, 2, 3, 4, 5, 6]
    },
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function(num) {
                return num % 2 === 0;
            })
        }
    }
})

// methods方法过滤
var vm8 = new Vue({
    el: "#example-8",
    data: {
        numbers: [1, 2, 3, 4, 5, 6]
    },
    methods: {
        even: function(numbers) {
           return numbers.filter(function(num) {
               return num % 2 === 0;
           })
        }
    }
})
// even中不传入numbers， 直接是所有this.numbers也是可以的
