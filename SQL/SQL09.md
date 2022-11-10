# **조건으로 탐색하기 (1)**

### 학습 목표
```
> WHERE 조건 구문을 활용할 수 있다.
> WHERE 조건과 패터매칭을 할 수 있다.
> NULL과 LIMIT을 활용할 수 있다.
```

### 학습 목차
```
> WHERE 조건 구문
> WHERE 조건과 패턴매칭
> NULL/LIMIT
```
***

## 01 WHERE 조건 구문  
조건에 따른 테이블, 컬럼의 속성을 출력
### WHERE 구문
> 테이블 질의 시 조건을 지정함: 질의 결과에 필터를 검

```
SELECT [ALL┃DISTINCT] 속성이름(들)
FROM 테이블이름(들)
[WHERE 검색조건(들) [LIKE 필터] ]
[GROUP BY 속성이름]
[HAVING 검색조건(들)]
[ORDER BY 속성이름 [ASC┃DESC]
```

### WHERE 구문에서 사용 가능한 술어 구문
> 비교, 조건 등의 연산을 사용하거나 복합문으로 사용 가능   
|술어|연산자|예|
|------|---|---|
|비교|=, <>, <, <=, >, >=|price < 20000|
|범위|BETWEEN|price BETWEEN 10000 AND 20000|
|집합|IN, NOT IN|price IN (10000, 20000, 30000)|
|패턴|LIKE|bookname LIKE '철학의 역사'|
|NULL|IS NULL, IS NOT NULL|price IS NULL|
|복합조건|AND, OR, NOT|(price < 20000) AND (bookname LIKE '철학의 역사'|

### WHERE절 예
* Shopper 테이블

|name|zip_code|address|total|
|------|---|---|---|
|강동원|120-011|서울시 종로구...|10000|
|이소라|600-816|부산시 중구...|12000|
|정우성|340-020|서울시 구로구...|30000|
|라미란|120-011|서울시 종로구...|29000|

우편번호가 340-011인 사람을 출력하시오.
```
SELECT name FROM shopper WHERE zip_code = '304-021';
```

주문액이 20000에서 30000 인 사람을 출력하시오.
```
SELECT name FROM shopper WHERE total BETWEEN 20000 AND 30000;
```

주문액이 20000 이상인 사람을 출력하시오.
```
SELECT name FROM shopper WHERE total >= 20000;
```

## 02. WHERE 조건과 패턴매칭
### LIKE 절
* 쿼리 결과가 LIKE에 일치하는 결과만을 제공한다.
```
SELECT .. WHERE ...  
LIKE '[연산기호]문자열[연산기호]'
```

### LIKE절에 아래 연산기호를 사용하면 일치하는 조건 지정 가능
* 아래 기호는 "와일드카드" 문자열이라고도 한다.

|연산자|기능|예|설명|
|---|--|-|--|
|%|여러 문자와 일치하는 패턴|%학%|철학, 대학 등 ‘학’이 포함된 문자열|
|_|한 문자와 일치하는 패턴|_학|대학, 산학 등 ‘학’ 앞에 임의의 한 문자가 들어간 문자열|
|[ ]|1개의 문자와 일치|'[0-9]%'|0-9 사이 숫자로 시작하는 문자열|
|[^]|1개의 문자와 불일치|'[^0-9]%'|0-9 사이 숫자로 시작하지 않는 문자열|

### 예시
* '철학의 역사'를 출간한 출판사를 검색하시오
```
SELECT bookname, publisher  
FROM Book  
WHERE bookname LIKE '철학의 역사';
```

* 도서이름에 '파이썬’이 포함된 출판사를 검색하시오.
```
SELECT bookname, publisher  
FROM Book  
WHERE bookname LIKE '%파이썬%';
```

## 03. NULL/LIMIT  
레코드는 있지만 컬럼의 값이 없다는 의미

### NULL 값이란
* 아직 지정되지 않은 값  
* NULL값은 '0', '(빈 문자)', '(공백)' 등과 다른 특별한 값  
* NULL값은 비교 연산자로 비교가 불가능함  
* NULL값의 연산을 수행하면 결과 역시 NULL값으로 변환됨  

### 집계 함수를 사용할 때 주의할 점
* 'NULL+숫자'연산의 결과는 NULL  
* 집계 함수 계산 시 NULL이 포함된 행은 집계에서 빠짐  
* 해당되는 행이 하나도 없을 경우 SUM, AVG함수의 결과는 NULL이 되며, COUNT함수의 결과는 0

### 예시
* NULL인 문자열 결합

```
SELECT CONCAT("전화번호: ", phone )
FROM customer;
```
