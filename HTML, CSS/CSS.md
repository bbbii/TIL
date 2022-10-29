CSS

CSS를 사용하는 이유?
> 새로 배워야 하지만 그로 인해 얻을 수 있는 효과가 폭발적이기 때문.
> html로 제작하는 것 보다 효율적이다.

<CSS의 문법>
html에서 어디서부터 어디까지가 CSS인지 웹 사이트에게 전달하기 위한 방법
1. <style>과 같은 태그 사용
    태그를 사용하는 경우 어디에 효과를 적용하는지 설명할 수 없기 때문에
    a{}와 같은 범위 필요
        선택자(selector) > 누구에게 줄 것인가?
        효과(디컬러레이션) > 효과

2. 속성 변경
    html 태그 내에 직접 작성하기(태그에 효과를 주기) 때문에 선택자를 사용할 필요가 없다.
    코드 내에서 특정 부분에만 효과를 주는 데 유용

무엇을 바꿀지 생각하고 잘 검색하기

선택자의 우선순위
    #id > .class > 태그
    같은 선택자에서는 가장 나중의 명령이 적용된다
why? > 효율의 문제. 구체적인 것이 포괄적인 것 보다 우선순위가 높다

<box model>
block level element : 화면 전체를 사용하는 태그
inline element : 자기 자신의 크기만큼을 사용하는 태그
display로 크기를 자유롭게 바꿀 수 있다.

    padding: 
    > content와 border 사이의 간격 부여

    margin:
    > border 사이의 간격 부여

    * 안쪽은 padding 바깥쪽은 margin

    width:
    > 박스의 너비 조절

    height:
    > 박스의 높이 조절

<grid, article, div, span>
웹 페이지의 레이아웃을 효율적으로 편집하기 위해 사용

div, span : 의미 없이 단지 디자인의 의미로만 사용하는 태그
div 는 block, span은 inline

<반응형 웹>
화면의 크기에 따라서 웹페이지의 각 요소들이 반응하여 동작하는 웹
    <미디어 쿼리>
    @media(){} : CSS에서의 if문 같은 느낌, 조건에 따라 display 등으로 화면을 제어할 수 있다.

<link>
CSS파일을 따로 생성해서 불러올 수 있도록 만드는 태그

-tip
개발자 도구 > 오른쪽 클릭 - 검사 - style
    tag가 어떤 CSS의 영향을 받고 있는지 확인할 수 있다

중복을 줄이는 방법
    , 사용
        h1 {}
        a {}
        -> h1, a {}

    border-width: 5px;
    border-color: red;
    border-style: solid;
    -> border: 5px solid red; 순서는 상관 없음

주석처리
    <!--
        내용
    -->
