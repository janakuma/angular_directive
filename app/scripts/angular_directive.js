var myApp = angular.module('myApp', []);
myApp
.controller('ctrlView', function($scope){
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
	};

	$scope.playList_info = [
		{
			banner : 'thum-game-00.jpg',
			title : 'The International 2016',
			desc : '누가 승자의 자리를 차지할까요? 세계 최고의 팀들이  The International 에서 펼치는 혈투를 직접 확인하세요.',
			price : '17,002,122'
		},
		{
			banner : 'thum-game-02.jpg',
			title : 'The International 2016',
			desc : '누가 승자의 자리를 차지할까요? 세계 최고의 팀들이  The International 에서 펼치는 혈투를 직접 확인하세요.',
			price : '17,002,122'
		},
		{
			banner : 'thum-game-02.jpg',
			title : 'The International 2016',
			desc : '누가 승자의 자리를 차지할까요? 세계 최고의 팀들이  The International 에서 펼치는 혈투를 직접 확인하세요.',
			price : '17,002,122'
		}
	];

	$scope.addItem = function(tx) {
		$scope.playList_info.push({
			banner : 'thum-game-01.jpg',
			title : tx,
			desc : '누가 승자의 자리를 차지할까요?',
			price : '17,002,122'
		});


		ngular.element('.effeckt-list').eq(-1).css('display', 'block')


	}
})
.directive('playlist', function($timeout) {
	var list_unit = '';
		list_unit += '<ul class="effeckt-list" data-effeckt-type="{{effectName}}">';
		list_unit += '	<li ng-repeat="item in itemList">';
		list_unit += '		<div class="inner">';
		list_unit += '			<dl>';
		list_unit += '				<dt>';
		list_unit += '					<figure class="thum">';
		list_unit += '						<img src="images/{{item.banner}}" alt="">';
		list_unit += '					</figure>';
		list_unit += '				</dt>';
		list_unit += '				<dd>';
		list_unit += '					<h3>{{item.title}}</h3>';
		list_unit += '					<p>{{item.desc}}</p>';
		list_unit += '				</dd>';
		list_unit += '			</dl>';
		list_unit += '			<span class="currency">';
		list_unit += '				<var><i>${{item.price}} USD</i>총상금</var>';
		list_unit += '				<button><img src="images/btn/btn-gameView.jpg" alt="보기"></button>';
		list_unit += '			</span>';
		list_unit += '		</div>';
		list_unit += '	</li>';
		list_unit += '</ul>';

	return {
		restrict: 'EA',
		template: list_unit,
		scope: {
			itemList: '=',
			effectName: '='
		},
		link: function(scope, elem, attrs) {

			$timeout(function() {
				$('.list li').css('display', 'none')
				TweenMax.staggerTo('.list li', 0.8, {display: 'block'}, 0.1)
			})
		}
	}
})


