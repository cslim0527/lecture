# Pure CSS Accordion

자바스크립트를 사용하지 않고 pseudo-class와 인접 형제 결합자 (+)를 사용해 아코디언을
만들어 봅시다.

핵심은 pseudo-class를 통해 checked 상태에 접근하여 인접한 태그의 노출 여부를 결정하는데에 있습니다.

### HTML

```html
<div class="wrap">
  <div class="accordion">
    <div class="accordion-item">
      <label for="title-1">인접 형제 결합자란 무엇인가요?</label>
      <input type="checkbox" id="title-1" />
      <div class="description">
        인접 형제 결합자(+)는 앞에서 지정한 요소의 바로 다음에 위치하는 형제
        요소만 선택합니다.
      </div>
    </div>
  </div>
</div>
```

### CSS

```css
.accordion .accordion-item label {
  display: block;
}
.accordion .accordion-item input {
  display: none;
}
.accordion .accordion-item .description {
  display: none;
}

.accordion .accordion-item input:checked + .description {
  display: block;
}
```
