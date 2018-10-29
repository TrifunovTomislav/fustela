 
'use strict';
 var map;
   document.addEventListener('DOMContentLoaded', drawMap);
    
     function drawMap() {
        var location = new google.maps.LatLng (44.864573, 20.584345);
        var mapOptions = {
            center : location,
            zoom : 14,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            draggable : true
        };
         
       
      map = new google.maps.Map(document.getElementById('my-map'), mapOptions);
         
          var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Lorem ipsum'
  });
         
         var popUpContent = 'Lorem ipsum dolor sit amet';
         
         var infowindow = new google.maps.InfoWindow({
              content:popUpContent,
              maxWidth: 270
  });
         google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
         
         
 }

  