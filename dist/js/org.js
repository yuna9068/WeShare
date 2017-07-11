// 載入Google Maps
// 原始版本
// function orgMap() {
// 	var area = document.querySelector('.orgMap');
// 	var geocoder= new google.maps.Geocoder();
// 	var orgAddress = "330桃園市桃園區復興路205號";
// 	console.log("orgAddress = " + orgAddress);
// 	geocoder.geocode({'address':orgAddress}, function(results, status){
// 		if(status == google.maps.GeocoderStatus.OK){
// 			var orgPosition = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
// 			var map = new google.maps.Map(area, {
// 				zoom: 15,
// 				center: orgPosition,
// 				mapTypeId: google.maps.MapTypeId.ROADMAP
// 			});

// 			var marker = new google.maps.Marker({
// 				position: orgPosition,
// 				map: map,
// 				icon: '../dist/img/WeShare_icon_s.png',
// 				title: '台灣展翅協會' //滑鼠游標移至position時顯示的文字
// 			});
// 		}
// 	});
// }


// 迴圈版本，直接帶入經緯度
// function orgMap() {
// 	for(var i = 1; i<3;i++){
// 		// 設變數名稱
// 		var areaNum = 'area' + i;

// 		// 取class名稱
// 		var mapId = '.orgMap' + i;

// 		// 設地圖編號
// 		var mapNum = 'map' + i;

// 		// 找到web的class
// 		var areaNum = document.querySelector(mapId);

// 		// 編號i地點的經緯度
// 		var orgPosition = {lat: i*30, lng: i*30};

// 		// 產生編號i的地圖
// 		var mapNum = new google.maps.Map(areaNum, {
// 			center: orgPosition,
// 			zoom:15,
// 			mapTypeId: google.maps.MapTypeId.ROADMAP
// 		});
// 		// 產生編號i的標記
// 		var marker = new google.maps.Marker({
// 			position: orgPosition,
// 			map: mapNum,
// 			icon: '../dist/img/WeShare_icon_s.png',
// 			title: 'test'+i //滑鼠游標移至position時顯示的文字
// 		});
// 	}
// }


// 產生兩筆，直接帶入地址
// function orgMap() {
// 	var area1 = document.querySelector('.orgMap1');
// 	var geocoder1 = new google.maps.Geocoder();
// 	var orgAddress1 = "330桃園市桃園區復興路205號";
// 	console.log("orgAddress1 = " + orgAddress1);
// 	geocoder1.geocode({'address':orgAddress1}, function(results1, status){
// 		if(status == google.maps.GeocoderStatus.OK){
// 			var orgPosition = new google.maps.LatLng(results1[0].geometry.location.lat(), results1[0].geometry.location.lng());
// 			var map = new google.maps.Map(area1, {
// 				zoom: 15,
// 				center: orgPosition,
// 				mapTypeId: google.maps.MapTypeId.ROADMAP
// 			});
// 			var marker = new google.maps.Marker({
// 				position: orgPosition,
// 				map: map,
// 				icon: '../dist/img/WeShare_icon_s.png',
// 				title: '台灣展翅協會' //滑鼠游標移至position時顯示的文字
// 			});
// 		}
// 	});
// 
// 	var area2 = document.querySelector('.orgMap2');
// 	var geocoder2 = new google.maps.Geocoder();
// 	var orgAddress2 = "台北市忠孝東路三段1號";
// 	geocoder2.geocode({'address':orgAddress2}, function(results2, status){
// 		if(status == google.maps.GeocoderStatus.OK){
// 			var orgPosition = new google.maps.LatLng(results2[0].geometry.location.lat(), results2[0].geometry.location.lng());
// 			var map = new google.maps.Map(area2, {
// 				zoom: 15,
// 				center: orgPosition,
// 				mapTypeId: google.maps.MapTypeId.ROADMAP
// 			});
// 			var marker = new google.maps.Marker({
// 				position: orgPosition,
// 				map: map,
// 				icon: '../dist/img/WeShare_icon_s.png',
// 				title: '台北市忠孝東路三段1號' //滑鼠游標移至position時顯示的文字
// 			});
// 		}
// 	});
// }


function orgMap() {
	for(var i = 1; i<3;i++){
		// 設變數名稱
		var areaNum = 'area' + i;

		// 取class名稱
		var mapId = '.orgMap' + i;

		// 設地圖編號
		var mapNum = 'map' + i;

		// 找到web的class
		var areaNum = document.querySelector(mapId);

		// 設變數存經緯度
		var orgPositionNum = 'orgPosition' + i;

		// 設geocoder名稱
		var geocoderNum = 'geocoder' + i;

		var geocoderNum = new google.maps.Geocoder();

		geocoderNum.geocode({'address':"330桃園市桃園區復興路"+ i*100 +"號"}, function(results, status){
			if(status == google.maps.GeocoderStatus.OK){
				console.log("GeocoderStatus.OK"+i);  // 會顯示兩次GeocoderStatus.OK3
				orgPositionNum = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
				console.log("orgPositionNum"+ i +" = " + orgPositionNum);  // 會顯示orgPositionNum3 = (24.991302, 121.31548599999996)及orgPositionNum3 = (24.9899319, 121.31072199999994)
			}
		});

		console.log("mapNum-orgPositionNum = " + orgPositionNum);  // 會顯示mapNum-orgPositionNum = orgPosition1及mapNum-orgPositionNum = orgPosition2，無法顯示地圖
		// 產生編號i的地圖
		var mapNum = new google.maps.Map(areaNum, {
			center: orgPositionNum,
			zoom:15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		// 產生編號i的標記
		var marker = new google.maps.Marker({
			position: orgPositionNum,
			map: mapNum,
			icon: '../dist/img/WeShare_icon_s.png',
			title: 'test'+i //滑鼠游標移至position時顯示的文字
		});
	}
}


// 點下層固定列，翻轉上層翻轉列
function turnPage(e) {
	// $(this).closest('.rowOrg').find('.rowUpper').toggleClass('rotate180');
	e.closest('.rowOrg').find('.rowUpper').toggleClass('rotate180');
	// $(this).closest('.rowOrg').find('.rowUpper').css('zIndex', 300);
}