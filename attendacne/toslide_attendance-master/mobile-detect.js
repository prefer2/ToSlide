const bottom = document.getElementById("bottom");
const topBtn = document.getElementById("topBtn");

function is_mobile()
   {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                   
         bottom.style.visibility='hidden';
                   
      }
      
      if (typeof window.orientation !== 'undefined') 
      {
          return true;
      }
      
       
      topBtn.style.display='none';
      return true;
            
   }

is_mobile();