$(function(){
    $.ajax({
        type: "GET",
        url: "http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/5836cc594e3940d18747de99dc630146.json",
        data: "data",
        dataType: "json",
        success: function (response) {
            // console.log(response);
            // console.log(response[0].ImageName);
            response.forEach(function(value, index) {
                var image = document.createElement('img');
                image.src = response[index].ImageName;
                image.style.maxHeight = '300px';
                $('#sectionSlider').html(image);
            });
        }
    });
});