var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=129cce7b0119047c6837b90fd3ece8f9"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

//현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city) {
    var dataObj;
    var openweatherAPI = url // 위에 만들어놓은 url임

    //ajax라는 함수 속에는 객체를 써준다. 디폴트값이 비동기임 async: true이다.
    //(동기: 한개의 작업이 완료되면 그 다음 작업이 진행됨.)
    $.ajax({
        type: "GET", //서버에 get방식으로 요청을 함.
        url: openweatherAPI,
        dataType: "json", //받아 올 데이터 타입
        async: false, //비동기 안함. 동기로 만들어줌.(결과 데이터를 리턴시키기 위해)
        success: function(data) { //API call이 성공 할 때
            //console.log(data.main.temp)
            //console.log(data.name)
            //console.log(data.weather[0].description)
            
            //console.log(data)
           
            /*
            console.log(data.wind.speed)
            console.log(data.dt)
            console.log(data.weather[0].icon)
            console.log(data)
            */
            dataObj = data

        },
        error: function(request, status, error) { //API call이 실패 할 때
            console.log(request, status, error)
        },
    })
        return dataObj
    }


//지역별 현재 온도 얻어오기
function getCurrentTemp(city) {
    var temp = {};
    var openweatherAPI = url // 위에 만들어놓은 url임

    //ajax라는 함수 속에는 객체를 써준다. 디폴트값이 비동기임 async: true이다.
    //(동기: 한개의 작업이 완료되면 그 다음 작업이 진행됨.)
    $.ajax({
        type: "GET", //서버에 get방식으로 요청을 함.
        url: openweatherAPI += city,
        dataType: "json", //받아 올 데이터 타입
        async: false, //비동기 안함. 동기로 만들어줌.(결과 데이터를 리턴시키기 위해)
        success: function(data) { //API call이 성공 할 때
            temp.celsius = data.main.temp.toFixed(0) //온도
            temp.icon = data.weather[0].icon //아이콘

        },
        error: function(request, status, error) { //API call이 실패 할 때
            console.log(request, status, error)
        },
    })
        console.log(temp)
        return temp
}


