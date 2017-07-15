$(function(){
	// wish.html 滑動選單的開閉按鈕設定, 點擊新增 .active 
	// $('#slideMenuTrigger').on('click', function() {
	// 	$('#sectionFilter').toggleClass("active");
	// });

	// 擷取畫面 https://github.com/niklasvh/html2canvas
	$('#imgGet').click(function (e) {
		// document.body 要擷取畫面的範圍
		html2canvas(document.body).then(function(canvas) {
			// canvas: 回傳的 canvas 截取畫面
			$('#imgCanvas').html(canvas);
			/**
			 * 使用 jQuery 選取 thisImg, thisImg 選取是jQuery 物件, 不是 DOM 物件,
			 * 所以要用 thisImg[0] 選到 jQuery 裡面的 DOM 物件, 才可使用 .toDataURL() 轉換成
			 * HTMLCanvasElement.toDataURL()
			 * https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLCanvasElement/toDataURL
			 */
			var thisImg = $('#imgCanvas canvas');
			var mediumQuality = thisImg[0].toDataURL("image/jpeg");
			localStorage.setItem('transImg', mediumQuality);
		});
	});

	// Ajax 範例
	/*
	$.ajax({
		type: "GET",
		url: "http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/5836cc594e3940d18747de99dc630146.json",
		data: "data",
		dataType: "json",
		success: function (response) {
			// 共用變數
			var animalObject;
			var responseLength = response.length;

			旋轉播放
			var carouselIndicators;
			var carouselInner;
			var carouselRandom;
			for (var i = 0; i < 8; i++) {
				carouselRandom = Math.floor(Math.random() * responseLength) + 1;
				animalObject = response[carouselRandom];
				if (i == 0) {
					carouselIndicators ="<li data-target=\"#carousel-id\" data-slide-to=\"" + i + "\" class=\"active\"></li>";
					carouselInner =
					`
						<div class="item active">
							<img class="center-block img-responsive carouselImg" alt="${animalObject.Variety}" src="${animalObject.ImageName}">;
						</div>
					`;
				} else {
					carouselIndicators ="<li data-target=\"#carousel-id\" data-slide-to=\"" + i + "\" class=\"\"></li>";
					carouselInner =
					`
						<div class="item">
							<img class="center-block img-responsive carouselImg" alt="${animalObject.Variety}" src="${animalObject.ImageName}">;
						</div>
					`;
				}
				$('.carousel-indicators').append(carouselIndicators);
				$('.carousel-inner').append(carouselInner);
			}

			第一區
			var rowFirst;
			var rowFirstRandom;
			for (var i = 0; i < 3; i++) {
				rowFirstRandom = Math.floor(Math.random() * responseLength) + 1;
				animalObject = response[rowFirstRandom];
				rowFirst =
				`
					<div class="col-md-4 portfolio-item">
						<a href="#">
							<img class="img-responsive" src="${animalObject.ImageName}" alt="${animalObject.Variety}">
						</a>
						<h3>
							<a href="#">${animalObject.Name}</a>
						</h3>
						<p>${animalObject.Note}</p>
					</div>
				`;
				$('.row-first').append(rowFirst);
			}

			第二區
			var rowSecond;
			var rowSecondRandom;
			for (var i = 0; i < 4; i++) {
				rowSecondRandom = Math.floor(Math.random() * responseLength) + 1;
				animalObject = response[rowSecondRandom];
				rowSecond =
				`
					<div class="col-md-3 col-sm-6 hero-feature">
						<div class="thumbnail">
							<img src="${animalObject.ImageName}" alt="${animalObject.Variety}">
							<div class="caption">
								<h3>${animalObject.Name}</h3>
								<p>${animalObject.Note}</p>
								<p>
									<a href="#" class="btn btn-primary">Buy Now!</a> <a href="#" class="btn btn-default">More Info</a>
								</p>
							</div>
						</div>
					</div>
				`;
				$('.row-second').append(rowSecond);
			}

			第二區
			var rowThird;
			var rowThirdRandom;
			for (var i = 0; i < 3; i++) {
				rowThirdRandom = Math.floor(Math.random() * responseLength) + 1;
				animalObject = response[rowThirdRandom];
				rowThird =
				`
					<div class="col-sm-4">
						<img class="img-circle img-responsive center-block" src="${animalObject.ImageName}" alt="${animalObject.Variety}">
						<h2>${animalObject.Name}</h2>
						<p>${animalObject.Note}</p>
					</div>
				`;
				$('.row-third').append(rowThird);
			}
		}
	});
	*/
});