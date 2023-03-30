import React, {useEffect} from 'react'
import $ from 'jquery'

export default function Preloader() {
    useEffect(() => {
        $(window).on('load', function () {
          $(".loader").fadeOut();
          $("#preloder").delay(200).fadeOut("slow");
        });
    
        // Cleanup function to remove event listener
        return () => {
          $(window).off('load');
        };
      }, []);
  return (
    <div id="preloder">
    <div class="loader"></div>
    </div>
  )
}
