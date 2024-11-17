### transition

MDN Guide (https://developer.mozilla.org/ko/docs/Web/CSS/transitions)

---

### 설명

엘리먼트의 두 가지 상태 사이에 변화를 줄 수 있습니다.

### 예제 1

```css
div {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: background-color 4s;
}

div:hover {
  background-color: red;
}
```

transition은 엘리먼트의 상태 사이에 변화를 애니메이션 처럼 표현하는 기능으로 위 코드에서는
background-color를 4초 동안 transition을 적용한 내용입니다.

transition의 기본적인 사용 방법은 아래의 방법 하나만 알아두어도 크게 문제가 없지만
MDN 문서를 통해서 각 프로퍼티가 어떤 기능과 의미로 쓰이는지 확인하면 좋다.

```
// 기본 상태 (A Scene)
selector {
    transition: property-name(프로퍼티명) | duration(지속시간) | delay (지연시간)
}

// 변화된 상태 (B Scene)
selector {
    border-radius: 50%; (변화시킬 CSS 속성)
}
```
