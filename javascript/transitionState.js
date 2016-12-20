
// watchers

new Vue({
    el: "#animated-number",
    data: {
        number: 0,
        animatedNumber: 0
    },
    watch: {
        number: function(newValue, oldValue) {
            var vm = this;
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            new TWEEN.Tween({tweeningNumber: oldValue})
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({tweeningNumber: newValue}, 500)
                .onUpdate(function() {
                    vm.animateNumber = this.tweeningNumber.toFixed(0);
                })
                .start();
            animate();
        }
    }
})