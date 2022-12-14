# **DBMS의 설치와 SQL 이해 (3)**
### 학습 목표
* Database와 Schema 를 이해 할 수 있다.  
* Schema 와 Table을 알 수 있다.  
* SQL 언어의 구조를 설명할 수 있다.  
### 학습 목차
* DB와 Schema  
* SQL 언어  
***
## 01. DB와 Schema
### Schema
Table을 저장하는 공간
> 물리적 공간 : DBMS에 저장되는 공간  
> 논리적 공간 : 저장 공간의 영역  

## Schema 내부에 Table이 존재한다.
### Table
> 데이터베이스는 테이블 기반으로 구성된다.  
> 테이블은 하나 이상의 열로 구성  

## 관계형 DBMS에서 Table의 개념
RDBMS의 가장 기본적이고 중요한 구성  
관계대수에 의해 데이터를 효율적으로 저장하기 위한 구조  
Entity Relation에 의해  
> 불필요한 공간의 낭비를 줄이고 데이터의 저장 효율성 보장  
테이블의 관게(Relation)  
> 기본 키(Primary Key)와 외래 키(Foreign Key)를 사용해 관계를 맺어줌  
>> 두 테이블을 부모와 자식의 관계로 묶어줌  
>> SQL의 JOIN기능 이용  

## ERD(Entity Relation Diagram)로 분석 및 모델링
Schema 단위에 논리 모델의 결과물 Table 사용  
### Table(테이블)
> 테이블 : DBMS의 기본 저장구조. 한 개 이상의 column 과 0개 이상의 row로 구성  
> 열(column) : 특정 데이터 타입 및 크기를 가진 구조  
> 행(row) : column들의 값의 조합으로 레코드라고 불리며 제약사항이 적용됨  
> Field : row와 column의 교차점으로 Field는 데이터를 포함할 수 있고, 없을 때는 NULL 값을 가지고 있다 함  

02. SQL 언어
핵심 개념
> SQL 언어 개념  
> DML  
> DDM  

## SQL과 Query
> 관계형 데이터베이스를 사용할 때 RDBMS에게 보내는 요청을 쿼리(Query)라고 함

## SQL 특징
> 독립성  
> 이식성  
> 표준이 계속 발전 중  
> 대화식 언어  
> 분산형 클라이언트/서버 구조  
> 모든 DBMS의 SQL문이 완벽하게 동일하지 않음  

## SQL 명령어
데이터 정의어와 데이터 조작어의 주요 명령어  

DML(Data Manipulation Language)  
> 데이터 조작어로 검색 및 수정 기능 제공  
DDL(Data Definition Language)  
> 데이터 구조를 생성, 변경, 삭제 등의 기능을 제공  
DCL(Data Control Language)  
> 데이터에 대한 권한 관리 및 트랜잭션 제어  

## SQL 주요 기능
데이터 검색  
> 관계형 데이터베이스에서 특정 데이터를 가져올 수 있음  
데이터 조작(추가/삭제/수정)  
> 기존의 테이블에 새로운 데이터를 추가, 특정 데이터를 삭제할 수 있음  
> 또한 이미 있는 데이터를 수정할 수도 있음  
데이터베이스나 테이블 작성  
> 새로운 데이터베이스나 테이블을 작성할 수 있음  

## Query 작성 규칙
1. 원칙적으로 로마자로 기술
2. 주석 및 ''안에서 한글을 쓸 수 있음
3. '를 표시할 때는 "로 함
4. 주석은 /*와 /*로 둘러쌈
5. 예약어
