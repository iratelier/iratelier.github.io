//공통 ******************************************************/
//디버이스 체크
// var UserAgent = navigator.userAgent;
// if((UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null) && navigator.userAgent.match(/E230|M480|E150|E140|M380|M500|LU8300/) == null){
// 	top.location.href = "/m/index.html";
// }

// function Loading() {
//     var maskHeight = $(document).height();
//     var maskWidth = window.document.body.clientWidth;
//     var mask = '<div id="loading"></div>';
//     var loadingImg = '<img id="loading-image" src="../images/common/img_loader_circle.svg" alt="Loading..." />';

//     // var loadingImg = "";
//     // loadingImg += " <div id='loading-image'>";
//     // loadingImg += " <img src='../images/common/img_loader_circle.svg' style='position:absolute; z-index:9500; text-align:center; display:block; margin-top:300px; margin-left:750px;'/>";
//     // loadingImg += "</div>";

//     $("body").append(mask);

//     $("#loading").css({
//         width: maskWidth,
//         height: maskHeight,
//         opacity: "0.3",
//     });

//     $("#loading").show();

//     $("#loading-image").prepend(loadingImg);
//     $("#loading-image").show();
// }
// function closeLoading() {
//     $("#loading, #loading-image").hide();
//     $("#loading, #loading-image").remove();
// }

// $(function () {
//     Loading();
//     setTimeout("closeLoading()", 1000);
// });

// function closeLoading() {
//     $("#mask, #loadingImg").hide();
//     $("#mask, #loadingImg").remove();
// }
// window.onbeforeunload = function () {
//     $("#loading").show();
// }; //현재 페이지에서 다른 페이지로 넘어갈 때 표시해주는 기능
// $(window).on("load", function () {
//     //페이지가 로드 되면 로딩 화면을 없애주는 것
//     $("#loading").hide();
// });

$(document).ready(function () {
    // 화면에 로딩중 이미지 띄우기
    $.LoadingOverlaySetup({
        background: "rgba(255, 255, 255, 0.95)",
        image: "/resources/images/common/img_loader_circle.svg",
        imageAnimation: "1.5s rotate_right",
        imageColor: "#ffcc00",
        maxSize: 60,
    });

    // $.LoadingOverlay("show");//나중에 주석 해제
});

//현재 페이지에서 다른 페이지로 넘어갈 때 표시해주는 기능
$(window).on("load", function () {
    // 5초후에
    setTimeout(function () {
        $.LoadingOverlay("hide");
    }, 2000);
});

$(document).ready(function () {

    // // 현재 페이지의 경로 이름을 반환하는 함수 선언
    // var pathname = window.location.pathname + document.location.hash;


    // //nav-item 클래스 안에 있는 a 태그를 찾고, for문 기능을 하는 each 함수를 통해 하나씩 순환
    // $(".nav-item").find("a").each(function(){
    //     $(this).toggleClass("active", $(this).attr("href") == pathname);
    // });
    // //this 선택자를 통해 해당 객체를 선택(e)
    // //toggleClass => active
    // //선택된 객체와 pathname이 같은 a 태그의 href 속성을 선택, active 클래스를 토글



    var pathname = window.location.pathname + document.location.hash;
    if(location.pathname != "/") {
        $('nav .nav-item a[href^="/' + location.pathname.split("/")[1] + '"]').addClass("active");
        console.log("AAA")
    } else {
        $("nav .nav-item a:eq(0)").addClass("active");
        console.log("BBB")
    }


});


// function setNavigation() {
//     let current_location = location.pathname.split('/')[1];
//     if (current_location === "") return;
//     let menu_items = document.querySelector("header").getElementsByTagName("a");
//     for (let i = 0, len = menu_items.length; i < len; i++) {
//       if (menu_items[i].getAttribute("href").indexOf(current_location) !== -1) {
//         menu_items[i].className = "active";
//       }
//     }
//   }
//   setNavigation()

// function setActive() {
//   var pathname = document.getElementById("nav").getElementsByTagName("a");
//   for(i = 0;i < pathname.length;i++) {
//     if(document.pathname.href.indexOf(pathname[i].href)>=0) {
//       pathname[i].className = "active";
//     }
//   }
// }
// window.onload = setActive;

