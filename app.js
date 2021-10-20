$(document).ready(function(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var long;
        var lat;
        
        long = position.coords.longitude;
        lat = position.coords.latitude;
   
      // API URL to get our geolocation
        var api = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat +
  "&lon=" + long + "&appid=f4ff18571901ef76c8a86b4e833f1935";
        
      
      $.getJSON(api, function(data){
        
        var fTemp;  //fahrenheit temp
        var cTemp;  //celsius temp
        var temp;  // kelvin temp
        var tempSwitch = true;
        
        var weatherType = data.weather[0].description;
        temp = data.main.temp;
        var city = data.name;
        var weatherIcon = data.weather[0].icon;
        
        //get weather icons from openweathermap site
        var iconSrc = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
        
        //converts temp from kelvin to fahrenheit
        fTemp = (temp*(9/5)-459.67).toFixed(1);
        
        //converts temp to celsius
        cTemp = (temp-273).toFixed(1);
        
        //data to output
        $("#city").html(city);
        $("#weatherType").html(weatherType);
        $("#fTemp").html(fTemp + " &#8457;");
        $("#weatherIcon").html("<img src=' " + iconSrc + "'>");
        
        
        //toggle between Fahrenheit and Celsius
        $("#fTemp").click(function(){
          if(tempSwitch===false){
            $("#fTemp").html(fTemp + " &#8457;");
            
            tempSwitch=true;
          } else {
            $("#fTemp").html(cTemp + " &#8451;");
            tempSwitch=false;
          };
          
          //have the background change with the weather conditions
         // if (fTemp > 80) {
            
         // }
         // else if (fTemp > 70) {
         // }
          
        });     
        });
      });
    };
  });