// 2.7分 2星 1半星 2空星
// 3.0分 3星 0半星 2空星
// 3.5分 3星 1半星 1空星
// 3.9分 3星 1半星 1空星
// 4.0分 4星 0半星 1空星
// 4.2分 4星 1半星 0空星

function starSetArry(starScore) {
	var starTotal = 5;
	var starArry = [];
	var starString = "";
	// 0: 空星, 1: 半星, 2: 實星
	for (var i = 0; i < starTotal; i++) {
		if (starScore >= 1) {
			starScore = starScore - 1;
			starArry[i] = 2;
			starString += `<span><i class="fa fa-star" aria-hidden="true"></i></span>`;
		} else if (0 < starScore && starScore < 1) {
			starScore = starScore - starScore;
			starArry[i] = 1;
			starString += `<span><i class="fa fa-star-half-o" aria-hidden="true"></i></span>`;
		} else if (starScore == 0) {
			starArry[i] = 0;
			starString += `<span><i class="fa fa-star-o" aria-hidden="true"></i></span>`;
		}
	}
	console.log(starArry);
}

$(function () {
	var $ppc = $('.progress-pie-chart'),
		percent = parseInt($ppc.data('percent')),
		deg = 360 * percent / 100;
	if (percent > 50) {
		$ppc.addClass('gt-50');
	}
	$('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
	$('.ppc-percents span').html(percent + '%');
});