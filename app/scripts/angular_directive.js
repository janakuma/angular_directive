var myApp = angular.module('myApp', []);
myApp.controller('ctrlView', function($scope){
	$scope.tween = {
		easing: Back.easeOut.config(1.7),
		scaleUp : function(event) {
			TweenMax.to(event.currentTarget, 0.6, {
				scale: '1.2',
				ease: this.easing
			})
		},
		scaleDown : function() {
			TweenMax.to(event.currentTarget, 0.4, {
				scale: '1',
				ease: this.easing
			})
		},
		scaleShow : function(target_tag) {
			TweenMax.fromTo(target_tag, 0.4,
				{display: 'block', opacity: '0', scale: '0.4'},
				{display: 'block', opacity: '1', scale: '1', ease: this.easing}
			)
		},
		scaleHide : function(target_tag) {
			TweenMax.fromTo(target_tag, 0.4,
				{display: 'block', opacity: '1', scale: '1'},
				{display: 'none', opacity: '0', scale: '0.4'}
			)
		},
		rotateUp : function(event) {
			TweenMax.to(event.currentTarget, 0.6, {
				rotation: '360',
				ease: this.easing
			})
		},
		rotateDown : function() {
			TweenMax.to(event.currentTarget, 0.4, {
				rotation: '0',
				ease: this.easing
			})
		},
		rotateYUp : function(event) {
			TweenMax.to(event.currentTarget, 0.6, {
				rotationY: '360',
				ease: this.easing
			})
		},
		rotateYDown : function() {
			TweenMax.to(event.currentTarget, 0.4, {
				rotationY: '0',
				ease: this.easing
			})
		}
	}
})
