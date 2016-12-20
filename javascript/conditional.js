
// 条件渲染
var vm1 = new Vue({
    el: "#example-1",
    data: {
        isRendering: true
    }
})
vm1.isRendering = false;

// // template: 有问题
// var vm2 = new Vue({
//     el: "#example-2",
//     data: {
//         isRendering: true
//     }
// })

var vm3 = new Vue({
    el: "#example-3",
    data: {
        isRender: false
    }
})

var vm4 = new Vue({
    el: "#example-4",
    data: {
        isRender: true
    }
})