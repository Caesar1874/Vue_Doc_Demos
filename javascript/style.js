// 直接绑定class对象， 通过数据对象改变class中的布尔值动态切换class
var vm1 = new Vue({
    el: "#example-1",
    data: {
        isActive: true,
        isDanger: true
    }
});

// 绑定数据对象中的class对象
var vm2 = new Vue({
    el: "#example-2",
    data: {
        classObj: {
            active: true,
            danger: true
        }
    }
})

// 绑定返回class对象的计算属性
var vm3 = new Vue({
    el: "#example-3",
    data: {
      isActive: true,
      isDanger: false
    },
    computed: {
        classObj: function() {
            return {
                active: this.isActive || this.isDanger,
                danger: this.isActive && this.isDanger
            }
        }
    }
})

// 绑定数组
var vm4 = new Vue({
    el: "#example-4",
    data: {
       activeClass: "active",
        dangerClass: "danger"
    }
})

var vm5 = new Vue({
    el: "#example-5",
    data: {
        isActive: false,
        activeClass: "active",
        dangerClass: "danger"
    }
})

var vm6 = new Vue({
    el: "#example-6",
    data: {
        borderStyle: "5px solid green",
        color: "orange"
    }
})

var vm7 = new Vue({
    el: "#example-7",
    data: {
        styleObj: {
            border: "5px solid lightblue",
            backgroundColor: "red"
        }
    }
})

var vm8 = new Vue({
    el: "#example-8",
    data: {
        baseStyle: {
            border: "5px solid lightblue",
            backgroundColor: "pink"
        },
        overrideStyle: {
            borderRadius: "50%"
        }
    }
})
