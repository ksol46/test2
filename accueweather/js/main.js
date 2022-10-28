var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];    
                  
//foreach
$(".temp").each(function(i){
    var temp = getCurrentTemp(cityList[i]);
    var iconURL = "https://openweathermap.org/img/wn/";
    $(this).text(temp.celsius + "℃");
    $(this).prev().children().attr("src", iconURL + temp.icon + ".png");
});

$(".location").on({
    "click" : function() {
        var q = $(this).children(".q").attr("id")
        //q에 도시이름이 들어가면 그거에 대한 새로운 주소를 생선한다.
        var redirectURL = "pages/weather_location.html?q" + q
        location.href = redirectURL
    }


})