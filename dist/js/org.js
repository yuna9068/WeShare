function showData(data) {
	for (var i = 0; i < data.length; i++) {
		var result =
		`<div class="rowOrg">
			<div class="rowUpper">

				<div class="orgImgLayout blockUpper">
					<img class="img-responsive orgImg" src="../dist/img/300x300/20170627_47.png">
				</div>

				<div class="orgMap blockUpper">
					<iframe class="iframeMap" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=${data[i].address}&z=15&output=embed&t='></iframe>
				</div>
			</div>

			<div class="rowLower">

				<div class="orgContact blockLower">
					<div class="orgContactList">
						<ul type="none">
							<li><i class="fa fa-phone" aria-hidden="true"></i>
								<span>02-12345678</span>
							</li><br>
							<li><i class="fa fa-envelope" aria-hidden="true"></i>
								<a href="mailto:orgMail@mail.com">orgMail@mail.com</a>
							</li><br>
							<li><i class="fa fa-home" aria-hidden="true"></i>
								<span>${data[i].address}</span>
							</li><br>
							<li><i class="fa fa-globe" aria-hidden="true"></i>
								<a href="http://www.google.com" target="_blank">http://www.google.com</a>
							</li><br>
						</ul>
						<a href="wish.html" type="button" class="orgGoods btn btn-default" target="_blank">查看募集物資</a>
					</div>
				</div>

				<div class="orgInfo blockLower">
					<div class="orgInfoList">
						<div class="orgName">${data[i].name}</div>
						<ul type="none">
							<li><i class="fa fa-heart" aria-hidden="true"></i>社福類別：
								<span>兒少福利</span>
							</li><br>
							<li><i class="fa fa-heart" aria-hidden="true"></i>社福負責人：
								<span>陳小明</span>
							</li><br>
							<li><i class="fa fa-heart" aria-hidden="true"></i>立案核准字號：
								<span>台內社字第*******號</span>
							</li><br>
							<li><i class="fa fa-heart" aria-hidden="true"></i>勸募許可字號：
								<span>衛部救字第******號</span>
							</li><br>
							<li>
								<span>社福團體簡介資訊_社福團體簡介資訊_社福團體簡介資訊_社福團體簡介資訊_社福團體簡介資訊_社福團體簡介資訊_社福團體簡介資訊</span>
							</li><br>
						</ul>
					</div>
				</div>
			</div>
		</div>`;
		$('#sectionOrgAbout').append(result);
	}
}


// 點下層固定列，翻轉上層翻轉列
function turnPage(e) {
	// $(this).closest('.rowOrg').find('.rowUpper').css('zIndex', 300);
	
	// 如果rowUpper的class有'rotate180'(地圖)，就加上'rotate0'(社福圖片)並移除'rotate180'
	if (e.closest('.rowOrg').find('.rowUpper').hasClass('rotate180')) {
		// $(this).closest('.rowOrg').find('.rowUpper').addClass('rotate0').removeClass('rotate180');
		e.closest('.rowOrg').find('.rowUpper').addClass('rotate0').removeClass('rotate180');
	} else {
		e.closest('.rowOrg').find('.rowUpper').addClass('rotate180').removeClass('rotate0');
	}
}