function showStars(e) {
	// 計算全星的數量
	var star = Math.floor(e / 2);
	// 計算半星的數量
	// var starHalf = Math.ceil(e % 2);
	var starHalf = 0;
	if ((e % 2) !== 0) {
		starHalf = 1;
	}
	// 計算空星的數量
	var starO = 5 - star - starHalf;

	var starString = "";
	// 產生全星
	for (var i = 0; i < star; i++) {
		starString += `<span><i class="fa fa-star" aria-hidden="true"></i></span>`;
	}
	// 產生半星
	for (var i = 0; i < starHalf; i++) {
		starString += `<span><i class="fa fa-star-half-o" aria-hidden="true"></i></span>`;
	}
	// 產生空星
	for (var i = 0; i < starO; i++) {
		starString += `<span><i class="fa fa-star-o" aria-hidden="true"></i></span>`;
	}
	$('#otherMemberScore').append(starString);
}

$(function () {
	scoreCircle(7 * 36);
});


function scoreCircle(e) {
	var w = $('#blockCanvas').width();
	var h = $('#blockCanvas').height();
	console.log("w = " + w + ", h = " + h);
	// 取得繪圖環境
	var scoreCircle = $('#blockCanvas')[0].getContext('2d');
	// 起始數值
	var curPerc = 0;
	// 結束數值
	var endPercent = e;
	
	// 底部灰圈
	scoreCircle.strokeStyle = '#ececec';
    scoreCircle.lineWidth = 10;
    scoreCircle.beginPath();
    scoreCircle.arc(w / 2, h / 2, w / 4, 0, 2 * Math.PI, false);
    scoreCircle.stroke();

	function animate(x){
		// 清空繪圖環境
		// scoreCircle.clearRect(0, 0, w, h)
		// 設定顏色
		scoreCircle.strokeStyle = '#87cefa';
		// 設定線寬跟兩端樣式
		scoreCircle.lineWidth = 10;
		// 開始一條路徑或重製當前的路徑
		scoreCircle.beginPath();
		// 畫圓
		scoreCircle.arc(w / 2, h / 2, w / 4, 0, x * Math.PI / 180, false);
		// 結束
		scoreCircle.stroke();
		// curPerc每次加3
	    curPerc+=3;
	    // 若curPerc沒大於endPercent，繼續執行animate()
	    if (curPerc <= endPercent) {
	        requestAnimationFrame(function () {
	          animate(curPerc);
	        });
	    }
	}
	animate();
}