# **스키마의 생성과 테아블 데이터 탐색하기 (1)**
### 학습 목표
* SQL 언어를 이해 할 수 있다.  
* SQL, DDL, DML 명령을 알 수 있다.  
### 학습 목차
* SHOW 명령  
* DDL 명령 사용하기  
* 제약조건  
* ALTER 문  
* DESCRIBE  
* DML  
***
## 01. SHOW 명령
### 데이터베이스 관련 대부분의 정보를 얻을 수 있다.
## 예시
```SHOW VARIABLES; --variables;``` : 데이터베이스 설정을 확인한다.  
```SHOW variables like 'char_%';``` : 데이터베이스 설정 중에서 "char_"로 시작하는 변수를 확인한다.  

스키마 목록  
```
SHOW DATABASES;  
SHOW TABLES;  
SHOW TABLES FROM lecture;
```  
## SHOW statement
* 어떤 데이터베이스가 있는지 확인
* Database 전체 목록을 출력
* Database 전체 테이블 목록을 출력

## 02. DDL 명령 사용하기
### DDL 명령
* CREATE
> Schema, Table 생성

* ALTER
> Table 속성 변경

* DROP
> Table 제거

### Database 생성을 위한 CREATE명령
```if not exists``` : DB생성시 존재 여부에 따라 쿼리를 진행
```character set``` : 문자의 코드 집합 ex) cp949, euc-kr, utf-8
```USE ~``` : 현재 명령어가 ~라는 Schema에서 동작한다.

### DB, User추가/수정/삭제 시 DCL 명령 활용
> 실습에서 Workbench로 다룸

### Table 관련 명령
* CREATE
> 테이블 구조를 신규 생성

* ALTER
> 테이블 구조를 변경

* RENAME
> 테이블명을 변경

* DROP
> 테이블 구조를 삭제

* TRUNCATE
> 데이터의 모든 내용을 삭제

### CREATE문 Table 관련  
> 테이블 구성, 속성과 속성에 관한 제약 정의, 기본키 및 외래키를 정의하는 명령   

```PRIMARY KET``` : 기본키를 정할 때 사용  
```FOREIGN KEY``` : 외래키를 지정할 때 사용  
```ON UPDATE```와 ```ON DELETE``` : 외래키 속성의 수정과 투플 삭제 시 동작을 나타냄  

### BookLibrary 테이블 생성 예시
```
CREATE TABLE BookLibrary(  
bookid      INTEGER,  
bookname    VARCHAR(20),  
publisher   VARCHAR(20),  
price       INTEGER  
);  
```
### DROP문은 테이블을 삭제하는 명령
* DROP 문은 테이블의 구조와 데이터를 모두 삭제함
> 데이터만 삭제하려면 DELETE 문을 사용함
> ex) DROP TABLE 테이블이름;

## 03. 제약조건
Database 테이블 레벨에서 특정한 규칙을 설정함  
예상치 못한 데이터의 손실이나 일관성을 어기는 데이터의 추가, 변경 등을 예방  

### 종류  
* NOT NULL  
* UNIQUE  
* PRIMARY KEY / FOREIGN KEY  
* CHECK  
* DEFAULT  

### 테이블 생성 시 기본키 지정
```
CREATE TABLE BookLibrary(  
bookid		INTEGER PRIMARY KEY,  
bookname	VARCHAR(20),  
publisher	VARCHAR(20),  
price		INTEGER  
);  
```  
or
```
CREATE TABLE BookLibrary(  
bookid		INTEGER,  
bookname	VARCHAR(20),  
publisher	VARCHAR(20),  
price		INTEGER  
PRIMARY KEY (bookid)  
);  
```
### 복합키 지정
bookid 같은 단일 값을 갖는 속성이 없다면 두 개 이상의 복합 속성으로 사용
```
CREATE TABLE BookLibrary(  
bookname	VARCHAR(20),  
publisher	VARCHAR(20),  
price		INTEGER  
PRIMARY KEY (bookid, publisher)  
);  
```
### 기본 값 지정
두 개의 속성 bookname, publisher 복합키를 지정
> bookname은 NULL 값을 가질 수 없고, publisher는 같은 값이 있으면 안 됨
> price에 값이 입력되지 않을 경우 기본값 10000을 저장함
> 가격은 최소 5000원 이상으로 함
```
CREATE TABLE BookLibrary(  
bookname	VARCHAR(20)	NOT NULL,  
publisher	VARCHAR(20)	UNIQUE,  
price		INTEGER		DEFAULT 10000 CHECK(price > 5000),  
PRIMARY KEY (bookname, publisher)  
);  
```
## 04 ALTER 
> 생성된 테이블의 속성과 속성에 관한 제약을 변경하며, 기본키 및 외래키를 변경함  
> ADD ,DROP은 속성을 추가하거나 제거할 때 사용함  
> MODIFY는 속성의 기본값을 설정하거나 삭제할 때 사용함  
> ADD <제약이름>, DROP <제약이름>은 제약사항을 추가하거나 삭제할 때 사용함  

### ALTER문의 기본 문법
```
ALTER TABLE 테이블이름  
[ADD 속성이름 데이터타입]  
[DROP COLUMN 속성이름]  
[MODIFY 속성이름 데이터타입]  
[MODIFY 속성이름 [NULL | NOT NULL]]  
[ADD PRIMARY KEY(속성이름)]  
[[ADD | DROP] PRIMARY KEY]  
```

### 예시
BookLibrary 테이블에 VARCHAR(30)의 자료형을 가진 inventory 속성을 추가하시오.  
```ALTER TABLE BookLibrary ADD inventory VARCHAR(30);```

BookLibrary 테이블의 inventory 속성의 데이터 타입을 INTEGER형으로 변경하시오.  
```ALTER TABLE BookLibrary MODIFY inventory INTEGER;```

BookLibrary 테이블의 inventory 속성을 삭제하시오.  
```ALTER TABLE BookLibrary DROP COLUMN inventory;```

## 05. DESCRIBE
### DISCRIBE 구문  
현재 스키마 안에 있는 테이블의 구석 출력
```
{EXPLAIN | DESCRIBE | DESC}  
tbl_name[col_name | wild]  
```
## DML
### DML 명령  
* SELECT
> 테이블의 레코드에 대한 질의를 통해 row로 결과를 반환
* INSERT
> 테이블에 새로운 레코드를 삽입
* DELETE
> 테이블의 특정/조건에 맞는 레코드를 삭제
* UPDATE
> 테이블의 레코드의 필드를 갱신

### SELECT문과 FORM절 구문  
MySQL은 찾은 전체 row를 출력하고 마지막에 전체 row수와 쿼리 실행에 걸린 시간을 표시함
```
SELECT [ALL | DISTINCT] 컬럼이름[,] | *  
FORM [dbname.]테이블이름[,]  
[WHERE 검색조건]  
[GROUP BY 속성이름]  
[HAVING 검색조건]  
[ORDER BY 속성이름[ASC | DESC]]  
```
### 단일 컬럼  
SELECT 구문에 하나의 컬럼 이름만 지정  

### 다중 컬럼 지정  
SELECT 구문에 여러 개의 열 이름을 콤마 ","로 나열  
>여러 열을 선택적으로 열 이름을 ','로 구분해서 나열해 사용  
```
SELECT 컬럼이름, 컬럼이름, 컬럼이름  
FROM 테이블이름
```
### 예시  
모든 도서의 이름과 가격을 검색하시오.  
```
SELECT bookname, price  
FROM book;  
```
모든 도서의 가격과 이름을 검색하시오.  
```
SELECT price, bookname  
FROM book;  
```
도서의 도서번호, 도서이름, 출반사, 가격을 출력하시오.  
```
SELECT bookid, bookname, publisher, price  
FROM Book;  
```
```
SELECT *  
FROM Book;  
```
### 주석  
> 쿼리에 주석을 사용해 설명  
> 여러 줄 주석은 /* */ 로 둘러쌈  
> 한줄 주석은 맨 뒤에 "--"  
