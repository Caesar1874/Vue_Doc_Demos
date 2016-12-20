var vm1 = new Vue({
    el: "#example-1",
    data: {
        message: "Hello"
    },
    computed: {
        reversedMessage: function() {
            return this.message.split("").reverse().join("");
        }
    }
})

// 更新
vm1.message = "goodbye";

// 通过methods选项实现计算属性的功能
var vm2 = new Vue({
    el: "#example-2",
    data: {
        message: "Hello"
    },
    methods: {
        reversedMessage: function() {
            return this.message.split("").reverse().join("");
        }
    }
})

// 通过watch监视数据的变化
var vm3 = new Vue({
    el: "#example-3",
    data: {
        firstName: "Foo",
        lastName: "Bar",
        fullName: "Foo bar"
    },
    watch: {
        firstName: function(val) {
            this.fullName = val + " " + this.lastName;
        },
        lastName: function(val) {
            this.fullName = this.firstName + " " + val;
        }
    }
});
// 更新
vm3.firstName = "Caesar";

// 计算属性监视数据变化
// var vm3 = new Vue({
//     el: "#example-3",
//     data: {
//         firstName: "foo",
//         lastName: "bar"
//     },
//     computed: {
//         fullName: function() {
//             return this.firstName + " " + this.lastName;
//         }
//     }
// });
//
// // 更新
// vm3.lastName = "qinghe";

// 计算属性的setter
var vm4 = new Vue({
    el: "#example-4",
    data: {
        firstName: "foo",
        lastName: "bar"
    },
    computed: {
        fullName: {
            get: function() {
                return this.firstName + " " + this.lastName;
            }
            ,
            set: function(newValue) {
                var names = newValue.split(" ");
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    }
});

// 更新fulleName, firstName和lastName也会更新
vm4.fullName = "Caesar qine"