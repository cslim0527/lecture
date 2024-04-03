$(function () {
  /* 슬라이스 구현 시작 */
  let slideIndex = 1;
  const $clonedSlide = $(".slide-item").first().clone();
  const maxLength = $(".slide-item").length;
  $(".slide-list").append($clonedSlide);

  function sliding() {
    if (slideIndex > maxLength) {
      $(".slide-list").css("left", 0);
      slideIndex = 1;
    }

    $(".slide-list").animate({ left: slideIndex * -1200 }, 1000);

    slideIndex++;
  }

  setInterval(sliding, 3000);
  /* 슬라이스 구현 끝 */

  /*  메뉴 구현 시작 */
  $(".main-menu").mouseover(function () {
    $(".sub-menu").stop().slideDown();
  });

  $(".main-menu").mouseout(function () {
    $(".sub-menu").stop().slideUp();
  });
  /* 메뉴 구현 끝 */

  /* 탭 구현 시작 */
  $(".btn-tab").click(function () {
    $(".btn-tab").removeClass("active");
    $(this).addClass("active");

    const currentIndex = $(this).index();
    $(".tab-content").hide();
    $(".tab-content").eq(currentIndex).show();
  });
  /* 탭 구현 끝 */

  /* 모달 구현 시작 */
  $(".tab-content.notice li:first-child").click(function () {
    $(".modal").addClass("open");
  });

  $(".btn-modal-close").click(function () {
    $(".modal").removeClass("open");
  });
  /* 모달 구현 끝 */
});
