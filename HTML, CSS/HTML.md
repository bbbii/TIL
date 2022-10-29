HTML & Internet

준비물 : 웹 브라우저, HTML코드 작성 프로그램(편집 프로그램 == 에디터)
메모장은 원래 코드를 작성하는 용도가 아니기때문에 ATOM(아톰)을 사용.
ATOM 22.12.15 서비스 종료 -> VSCode로 공부

내 컴퓨터에 있는 웹페이지를 열려면 브라우저에서 ctrl+O
VSCode에 작성하고 저장하면

<문법>
    <>안에 태그, 뒤쪽 태그는</>로 구분
    <strong> ~ </strong> : 진하게
    <u> ~ </u> underline: 밑줄
    <br> ~ </br> 줄바꿈 : 단락을 표기하기 떄문에 닫지 않는다.
    <p> ~ </p> 단락
    * 단락 태그가 좀 더 정보로서 유의미하다.
    <p>태그의 단점 : 정해진 만큼밖에 띄울 수 없기 때문에 시각적 자유도가 떨어진다
    ! CSS태그를 사용하여 시각적으로 정교하게 제어 가능하다.
    ex) <p style="margin-top:40px;">

    <속성>
        이미지 <img>태그 같은 경우, 태그만으로는 정보가 부족하기 때문에
        이미지의 주소와 크기 등과 같은 정보를 불러오기 위해
        태그 뒤에 <img src="coding.jpg" width="100">과 같이 속성을 추가한다.
    
    <목차>
    <ol> </ol> Ordered List: 앞에 차례로 숫자가 붙는 목록
    <ul> </ul> Unordered List: 숫자 없이 구분되는 목록
    
    <title> </title> : 제목을 표시할 수 있는 태그
    <meta charset="utf-8"> : 이 웹페이지를 열때는 utf-8로 읽으라는 명령

    <웹 페이지의 기본구조>
    본문을 설명하는 태그들은 <head> </head> 태그로 묶는것으로 약속
    본문 내용은 <body> </body> 태그로 묶어준다.
    위의 두 태그는 <html> </html> 태그로 묶고
    가장 상단에 관용적으로 '이 문서는 html이다'를 표시하기 위해 <!doctype html>을 작성한다.
    ex)
        <!doctype html>
        <html>
            <head>
                본문설명
            </head>
            <body>
                본문내용
            </body>
        </html>
    
    <a> </a> anchor: 하이퍼링크
    <a href="링크" target="_blank" title="설명">
        href = hyperlink reference : 해당 주소로 하이퍼링크
        target="_blank" : 새 탭으로 띄우고 싶을 때 사용
        title="설명" : 링크에 마우스를 오버했을때 툴팁 띄우기

<웹호스팅>
파일 업로드 > 웹 호스팅 업체에서 웹 호스팅에 설치되어있는 웹 서버 활성화 > 도메인 이름 부여
> 방문자가 도메인 이름 입력 > 웹 서버가 주소를 읽고 소스코드 전송


-tip
웹 사이트가 어떤 코드로 만들어졌는지 보고 싶다면 오른쪽 클릭 후 페이지 소스

-참고사이트
https://www.advancedwebranking.com/
https://unsplash.com/
