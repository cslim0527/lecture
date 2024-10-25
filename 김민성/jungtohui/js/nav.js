// 헤더 메뉴에 마우스를 올렸을때 했을때 mega-menu 가 노출됨
$(".nav-menu li a").mouseenter(function () {
  $(".mega-menu").show();
});

// 헤더 오른쪽 메뉴에 마우스를 올렸을때 했을때 mega-menu 가 숨겨짐
$(".h-right a").mouseenter(function () {
  $(".mega-menu").hide();
});

// 헤더 로고에 마우스를 올렸을때 했을때 mega-menu 가 숨겨짐
$(".h-left").mouseenter(function () {
  $(".mega-menu").hide();
});

// 메가메뉴에서 마우스가 빠져 나갔을때 mega-menu 가 숨겨짐
$(".mega-menu").mouseleave(function () {
  $(".mega-menu").hide();
});

// 메가메뉴 하위에 메뉴들에 마우스를 hover 했을때 헤더 메뉴에 active 를 부여함
$(".depth a").hover(
  function () {
    // depth 변수는 현재 hover 한 아이템의 순서를 찾는 정보
    const depth = $(this).closest(".depth").data("depth");

    // 아이템의 순서를 찾아 헤더 메뉴에 active 를 부여함
    $(".nav-menu li").eq(depth).addClass("active");
  },
  function () {
    const depth = $(this).closest(".depth").data("depth");
    $(".nav-menu li").eq(depth).removeClass("active");
  }
);
