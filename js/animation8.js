function myFunction(){document.getElementsByTagName("header");var e=document.getElementById("myLinks");"block"===e.style.display?(e.style.display="none",document.body.style.overflow="auto"):(e.style.display="block",document.body.style.overflow="hidden")}function openNav(){"0%"===document.getElementById("myLinks").style.width||""===document.getElementById("myLinks").style.width?(document.getElementById("myLinks").style.width="100%",document.body.style.overflow="hidden"):(document.getElementById("myLinks").style.width="0%",document.body.style.overflow="auto")}function kontaktsklanjanje(){document.getElementById("myLinks").style.width="0%",document.getElementById("nesto").classList.toggle("change"),document.body.style.overflow="auto"}function hamburgerX(e){e.classList.toggle("change")}$(document).ready(function(){$("body").backgroundSlideshow({transitionDuration:3e3,fixed:!0,images:["img/Str2.jpg","img/enterijer2.jpg"]})});