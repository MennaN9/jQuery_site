
$(document).ready(function () {

let aboutOffset =  $("#about").offset().top;

$(window).scroll(function () {
    let wScroll= $(window).scrollTop();//
    if(wScroll > aboutOffset-20)
    {
      $("#main-nav").css("backgroundColor","rgba(0,0,0,0.8)");
      $("#main-nav").css("padding","0px 60px");
      $("#btnUp").fadeIn(500);
    }
    else
    {
      $("#main-nav").css("backgroundColor","transparent");
      $("#main-nav").css("padding","0px 0px");
      $("#btnUp").fadeOut(500);

    }
  })


  $("#btnUp").click(function(){

      $("html,body").animate({scrollTop:0} , 2000);
  });

  $("a[href^='#']").click(function (eventInfo) {

      let aHref =   $(eventInfo.target).attr("href");  //#home
     let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset} , 2000);

    })


    let sideBar = $("#sideBar");
    let colorBoxWidth = $(".color-box").innerWidth();
    sideBar.css("left" ,`-${colorBoxWidth}`);

$("#sideBarToggle").click(function () { 
  

    //$(".color-box").toggle(500);

    if(sideBar.css("left") == "0px")
    {
      sideBar.animate({left:`-${colorBoxWidth}`},1000)
    }
    else
    {
      sideBar.animate({left:`0px`},1000)

    }

 });

 let colorItems = $(".color-item");
 for (let i = 0; i < colorItems.length; i++) {
   
    let r = Math.round( Math.random() * 255) ;
    let g = Math.round( Math.random() * 255) ;
    let b = Math.round( Math.random() * 255) ;
      colorItems.eq(i).css("backgroundColor",`rgb(${r},${g},${b})`);
   
 }

 colorItems.click(function (e) {

     let bgColor =  $(e.target).css("backgroundColor");
     $("p,h2,h1").css("color",bgColor);
   })

//  Math.pow(2,3);
//  Math.min(2,7);
//  Math.max(13,10);
//  Math.sin(90);
//  Math.round(2.5);
//  Math.floor(2.9);
//  Math.ceil()


// window.onload = function () {

//   //$("#loading").fadeOut(1000);


  
// let fullDate  = new Date();
// console.log('window loaded');
// console.log(`seconds ${fullDate.getSeconds() } and miliSecons ${fullDate.getMilliseconds()}`);

//   }


//   let fullDate  = new Date();
// console.log('document ready');
// console.log(`seconds ${fullDate.getSeconds() } and miliSecons ${fullDate.getMilliseconds()}`);

    $("#loading").fadeOut(100 , function () { 

      $("body").css("overflow","auto")
     });
  })