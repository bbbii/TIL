# 스키마의 생성과 테아블 데이터 탐색하기 (3)
    ### 학습 목표
        > DML 명령으로 레코드를 관리할 수 있다.
        > DDL 명령으로 스키마/테이블 관리를 알 수 있다.
    ### 학습 목차
        > INSERT, UPDATE & DELETE
        > Schema와 Table구문
***
## 01 INSERT, UPDATE & DELETE
    INSERT 문은 테이블에 새로운 레코드(튜플)을 삽입하는 명령
    ### INSERT문의 기본 문법
    ```
    INSERT INTO 테이블이름[(속성리스트)]
    VALUES (값리스트);
    ```
    ### 예시
    ```
    INSERT INTO Book(bookid, bookname, publisher, price)
    VALUES (11, '스포츠 의학', '한솔의학서적', 90000);
    ```
    ### UPDATE문은 특정 속성 값을 수정하는 명령
    ```
    UPDATE 테이블이름
    SET 속성이름1 = 값1 [, 속성이름2 = 값2, ...]
    [WHERE <검색조건>];
    ```
    ### SQL_SAFE_UPDATES를 활성화하고 Update를 수행해보자
    MySQL의 글로벌 환경변수 SET SQL_SAFE_UPDATES를 통해 해지 가능
## Schema와 Table 구문
    ### Schema를 건너 SQL명령을 수행할 수 있다.
    대부분의 SQL 구문은 Schema를 "."로 지정해 작성할 수 있다.
    ex) bookstore.book, lecture.pet
    ### 예시
    ```
    SELECT [ALL | DISTINCT] 컬럼이름[,] | *
    FROM [schema_name.]테이블이름[,]
    ```
    ```
    SHOW
    FROM [schema_name.]테이블이름[,]
    ```
    ```
    {DESCRIBE | DESC}
    [schema_name.]테이블이름[col_name | wild]
    ```
