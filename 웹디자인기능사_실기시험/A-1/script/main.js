/* 3주차 수업 시작 */

console.log("[load]");
// javascript 만든 라이브러리가 jQuery 이다.
// $ === 제이쿼리
// $(selector)
// 태그 선택자, 클래스 선택자, 아이디 선택자, 가상 선택자

// 클래스 logo 를 갖는 엘리먼트를 선택했다.
$(".logo");

$(() => {
  //  1. 버튼을 제이쿼리로 가져오기
  //  2. 버튼을 클릭했을때 작성하기
  $(".btn-notice").click(function () {
    alert("공지사항 버튼을 눌렀습니다!");
    $(".notice").addClass("show");
    $(".galary").removeClass("show");
  });

  $(".btn-galary").click(function () {
    alert("갤러리 버튼을 눌렀습니다!");
    $(".galary").addClass("show");
    $(".notice").removeClass("show");
  });
});

/*
    슬라이드 이미지에 show 라는 클래스를 3초마다 넘겨주는 역할이 필요하다.

    - 매 3초마다 실행되는 어떠한 기능 필요하다.
    - show 라는 클래스가 붙어 있으면 없애는 기능이 필요하다.
    - show 라는 클래스를 새롭게 붙이는 기능이 필요하다.
*/

/* 3주차 수업 끝 */

/* 4주차 수업 시작 */

// *.js 파일에서 따옴표 안에 들어간 내용은 문자열(string)이다.
// 따옴표가 없는 네이밍은 변수(variable)이다.

$(() => {
  // 제이쿼리에서 CSS 선택자를 통해 DOM(Document Object Model = HTML 요소) 접근하는 방법
  // $('.slide-1')

  // 슬라이드1번 요소에 클래스 show를 추가해라 -> 제이쿼리객체.addClass(클래스명)
  // 타켓.행동();
  // 카멜 케이스 (camel case): 네이밍 첫 문자는 소문자로 시작하지만 다음 단어들부터 시작하는 첫 알파벳은 대문자로 연결한다.
  // 추가된 클래스를 지우는법 -> removeClass(클래스명)
  // $('.slide-1').addClass('show');

  // $('.slide-1').removeClass('show');
  // $('.slide-2').addClass('show');

  // $('.slide-2').removeClass('show');
  // $('.slide-3').addClass('show');

  // $('.slide-3').removeClass('show');
  // $('.slide-1').addClass('show');

  // setInterval() -> 함수 안에 들어간 콜백 함수를 지정한 delay 만큼 지연하여 계속적으로 실행한다.

  // 변수를 선언한다.
  // var, let, const
  // let 재 할당이 가능하다.
  // const 재 할당이 불가능이다.$

  // let 변수명 = 데이터;
  let number = 1;
  console.log(number);

  setInterval(() => {
    // console.log('[현재 넘버값]', number);
    $(".slide-" + (number + 1)).addClass("show");
    $(".slide-" + number).removeClass("show");
    number = number + 1;

    // 만약에 number가 3을 넘어 간다면, 다시 1로 재할당이 필요하다.

    // if문 (조건문)
    if (number > 3) {
      // console.log('[조건문 실행]', number);
      $(".slide-" + 1).addClass("show");
      $(".slide-" + 3).removeClass("show");
      number = 1;
      // 조건을 만족(true | 참일때) 할때의 실행 구문
    }
  }, 1000);
});
/* 4주차 수업 끝 */
