### 들어가기전에..

우리가 사용하는 언어(html, css, javascript 등등)는 기계(브라우저)가 이해하기 위해 개발된
언어이고, 내가 만들고자하는 화면을 기계가 이해 할 수 있는 언어방식으로 명령을 내리기 위해서 공부합니다.

따라서, 기계가 이해하는 방식으로 명령을 내리기 전에 영어를 배우고 사용하듯이 html, css, javascript 를 읽고 다시 우리말로 해석하는것도 가능해야 합니다.

때문에 아래 내용에서 코드를 제시하고 해석하는 방법을 잘 확인하시고 내가 작성 할 코드가
한글로 표현하면 어떻게 해석되어야 하는지 최대한 자세하게 표현하는 방법을 연습하세요.

---

### Selector (선택자)

MDN Guide (https://developer.mozilla.org/ko/docs/Web/CSS/CSS_selectors)

---

### 설명

CSS 선택자는 스타일을 적용 할 대상을 지정하기 위해 사용됩니다.
태그 선택자, 아이디 선택자, 클래스 선택자 등 여러 선택자를 지정하는 방법이 있습니다.
보통은 태그 선택자 또는 클래스 선택자를 가장 많이 사용하게 됩니다.

---

### 예제 1

```css
div {
  background-color: yellow;
}
```

위 코드는 적용된 html 문서 중 모든 div 에 background-color 를 yellow 로 지정합니다.

<br>

```html
<div class="box">나는 박스 입니다.</div>
```

위 코드는 class 의 값이 box 인 div 태그 입니다.
div 태그이지만 모든 div 태그에 스타일을 주는것이 아닌 box라는 클래스를 갖는 태그에만
스타일을 지정하고 싶다면, 다음과 같이 클래스 선택자를 지정하여 특정 요소에만 스타일을 부여 할 수 있습니다.

```css
.box {
  background-color: red;
}
```

<br>

---

### 예제 2

```css
div.btn-group button {
  background-color: yellow;
}
```

위 코드는 class가 btn-group 인 div 의 하위 요소인 button 태그에 background-color 를 yellow 로 지정합니다. 보통 div 선택자는 생략하여 아래와 같이 표기 할 수 있습니다.

```css
.btn-group button {
  background-color: yellow;
}
```

그렇다면 위 CSS가 적용될 html 의 구조는 어떻게 마크업(Mark Up)되어 있을까요?

```html
<div class="btn-group">
  <button>버튼</button>
</div>
```

정답은 위 코드처럼 btn-group 이라는 클래스를 갖고있는 div 요소 아래 button 태그가 작성되어있습니다.

<br>

---

### 문제 1

그렇다면 아래의 코드에서 background-color 가 yellow 인 버튼은 몇개 일까요?

```html
<div class="btn-group">
  <button>회원가입</button>
  <p>이 영역은 버튼이 모여있는 그룹입니다.</p>
  <ul>
    <li>
      <button>메시지</button>
      <button>알림</button>
      <button>로그아웃</button>
    </li>
  </ul>
</div>
```

<br>

---

### 문제 2

다음을 css를 읽고 html 구조를 작성하세요.

```css
.modal.open {
  display: block;
}
```

<br>

---

### 문제 3

다음을 html을 파악하고, 대메뉴 요소의 텍스트 컬러만 red 컬러로 지정하는
css 를 작성하세요.

```html
<ul>
  <li>
    <span>대메뉴-1</span>
    <ul>
      <li>
        <span>서브메뉴-1</span>
      </li>
    </ul>
  </li>
  <li>
    <span>대메뉴-2</span>
    <ul>
      <li>
        <span>서브메뉴-1</span>
      </li>
    </ul>
  </li>
  <li>
    <span>대메뉴-3</span>
    <ul>
      <li>
        <span>서브메뉴-1</span>
      </li>
    </ul>
  </li>
</ul>
```

<br>

---
