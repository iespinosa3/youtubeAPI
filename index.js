


   
       
var btnCat = document.getElementsByClassName('btn-cat');
for(var bC of btnCat){

        
     bC.addEventListener('click',function(e){


console.log(e.currentTarget.innerHTML)
       searchItems.value = e.currentTarget.innerHTML;

      new XMLHttpRequest();
       })
     
      }
 
 var searchItems = document.getElementById('search-items');



var searchBtn = document.querySelector('.search-btn');
 searchBtn.addEventListener('click',function(){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         
  
         var youTubeData = JSON.parse(xhttp.responseText);
  
         var videoContainer = document.getElementById('video-container')
              videoContainer.innerHTML='';                                 //clear pass results
         console.log(youTubeData.items.length);
  
        
     
        var shortenTitle= "";
         
        
  
    
       
         
      
         for( var i in youTubeData.items){
         
          if(youTubeData.items[i].snippet.title.length > 100){

            shortenTitle =" ... "
          }
         

          var videoItems=  document.createElement('div');
          
        console.log( youTubeData);
      
           videoItems.classList.add('video-items');
           videoContainer.appendChild(videoItems);
             videoItems.innerHTML=` <a href="http://www.youtube.com/watch?v=${youTubeData.items[i].id.videoId}">
             <img class="youTube-thumbnail" src =${youTubeData.items[i].snippet.thumbnails.high.url}></img></a>
                                   <div class ="video-description-container">
                                  <div class ="video-title"> <h4 class ="youTube-title">${youTubeData.items[i].snippet.title.slice(0,100)}${shortenTitle}</h4></div>
                                  <div class ="video-description"> <p class ="youTube-channel">${youTubeData.items[i].snippet.channelTitle}</p></div>
                                  <div class ="video-description  publish-margin"> <p class ="youTube-publish">${new Date(youTubeData.items[i].snippet.publishTime).toLocaleDateString()}</p></div>
                                   </div>
                                   
             ` 
             
              
            

             
             
  
             

         }
      }
  };
  xhttp.open("GET", `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchItems.value}&maxResults=16&key=AIzaSyDyxb27eFNi0Mpp7fdmVXb3bny9aZ4dXUQ`
  , true);
  xhttp.send();

  console.log(searchItems.value);
  searchItems.value="";

  
        })

