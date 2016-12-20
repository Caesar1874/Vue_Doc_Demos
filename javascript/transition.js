// 元素的切换方式
    // v-if
    // v-show
    // 动态组件<component>
    // 组件根元素

// 应用过渡效果的方式
    // css class: name + 默认类
    // css animation library： name + 自定义类
    // js 操纵dom
    // js animation libray： JS hooks

// 过渡单个元素

// <transition>元素 和 类: v-enter, v-leaver, ...
new Vue({
    el: "#transition-single",
    data: {
        show: true
    }
})


// css animation
new Vue({
    el: "#transition-animation",
    data: {
        show: true
    }
})

// 自定义过渡类名: 使用css animation library
new Vue({
    el: "#custom-class",
    data: {
        show: true
    }
})

// JS hooks: 使用js animtion library
new Vue({
    el: "#transition-hook",
    data: {
        show: false
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0;
        },
        enter: function(el, done) {
            Velocity(el, {opacity:1, fontSize: "1.4em"}, {duration: 300});
            Velocity(el, {fontSize: "1em"}, {complete: done});
        },
        leave: function(el, done) {
            Velocity(el, {translateX: "15px", rotateZ: "50deg"}, {duration: 600});
            Velocity(el, {
                rotateZ: "45deg",
                translateY: "30px",
                translateX: "30px",
                opacity: 0
            }, {complete: done});
        }
    }
})



// 两个元素之间的切换： v-if v-else
new Vue({
    el: "#between-element",
    data: {
        show: true
    }
})
// 改写
new Vue({
    el: "#between-element-2",
    data: {
        show: true
    }
})

// 使用v-if进行多个元素之间的切换
new Vue({
    el: "#between-elements",
    data: {
        docState: "edit"
    }
})

// 过渡模式
new Vue({
    el: "#transition-mode",
    data: {
        show: true
    }
})


// 组件之间的切换： <component> and components
new Vue({
    el: "#dynamic-component",
    data: {
        show: true
    },
    methods: {
        view: function() {
            return this.show ? "v-apple" : "v-banana";
        }
    },
    components: {
        "v-apple": {
            template: "<div>I am a apple."
        },
        "v-banana": {
            template: "<div>I am a banana."
        }
    }
})

// list transition
new Vue({
    el: "#list-transition",
    data: {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
    },
    methods: {
        randomIndex: function() {
            return Math.floor(Math.random() * this.items.length);
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++);
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1);
        }

    }
})

// move transition: 改变位置时的过渡
// 动画效果时内置的？
new Vue({
    el: "#flip-list",
    data: {
        items: [1,2,3,4,5,6,7,8,9]
    },
    methods: {
        shuffle: function() {
            this.items = _.shuffle(this.items);
        }
    }
})

// 结合list transition 和 move transition
new Vue({
    el: "#list-complete",
    data: {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
    },
    methods: {
        randomIndex: function() {
            return Math.floor(Math.random * this.items.length);
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++);
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1);
        },
        shuffle: function() {
            this.items = _.shuffle(this.items);
        }
    }
})

// staggering list transition
new Vue({
    el: "#staggered-list",
    data: {
        query: "",
        list: [
            {msg: "Bruce Lee"},
            {msg: "Jackie Chan"},
            {msg: "Chunk Morris"},
            {msg: "Jet Li"},
            {msg: "Kung Fury"}
        ]
    },
    computed: {
        computedList: function() {
            var vm = this;
            return this.list.filter(function(item) {
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
            });
        }
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter: function(el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                Velocity(
                    el,
                    {opacity: 1, height: "1.6em"},
                    {complete: done}
                )
            }, delay)
        },
        leave: function(el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                Velocity(
                    el,
                    {opacity: 0, height: 0},
                    {complete: done}
                )
            }, delay)
        }
    }
})

// appear
// key
// 过渡模式