# **조인 이해하기 (3)**

### 학습 목표
* 집합연산자와 JOIN 사용을 이해 할 수 있다.  
* 다중행 집합연산을 이해 할 수 있다.  
* 다양한 집합연산 작성하고 설명할 수 있다  
### 학습 목차
* 집합 연산자  
* 다중행 연산자
***
## 01. 집합 연산자
### 집합 연산자
* 집합 연산자는 두 개의 SELECT문의 결과에 대해 합집합, 교집합, 차집합을 구하는 연산자이다.  
* 결합하는 SELECT문의 결과는 열의 수나 각각의 데이터형이 똑같아야 한다.  

|연산자|설명|
|---|--|
|Table1 UNION Table2|Table1과 Table2의 합집합|
|Table1 MINUS Table2|Table1과 Table2의 차집합|
|Table1 INTERSECT Table2|Table1과 Table2의 교집합|

> MySQL에는 MINUS, INTERSECT연산자 지원이 안되고 IN과 NOT IN 연산자로 구현할 수 있다.

### 합집합 UNION
* SELECT문을 UNION으로 연결하면 중복되는 데이터를 정리한 후 가져온다.
> 도서 주문에서 대한민국 거주인 고객의 이름과 고객의 이름을 출력하기
```
SELECT username  
FROM Customer  
WHERE address LIKE '대한민국%'  

UNION 

SELECT username  
FROM Customer  
WHERE custid IN (SELECT custid FROM Orders)
```
### MINUS 연산자
* MySQL에는 MINUS, INTERSECT 연산자를 지원하지 않는다.  
* MINUS 를 NOT IN 서브쿼리로 사용 가능하다
> 대한민국 거주 고객의 이름에서 도서를 주문 고객의 이름 제외하고 출력
```
SELECT username  
FROM Customer  
WHERE address LIKE '대한민국%' AND   
	name NOT IN (SELECT username  
		FROM Customer  
		WHERE custid IN (SELECT custid FROM Orders));
```
### INTERSECT 연산자
* MySQL에는 MINUS, INTERSECT 연산자 지원하지 않는다.  
* INTERSECT 를 IN 서브쿼리로 사용 가능하다
> 대한민국 거주 고객 중 도서를 주문한 고객의 이름을 보이시오
```
SELECT	username  
FROM	Customer  
WHERE address LIKE '대한민국%' AND   
	name <span style="color:red">IN</span> (SELECT username  
	FROM Customer  
	WHERE custid IN (SELECT custid FROM Orders));
```
## 02. 다중행 연산자
### 다중행 연산자 소개
* 다중 행 연산자는 하나 이상의 값을 필요로한다.  
* 메인쿼리와 서브쿼리 사이의 다중행 반환 값에 대한 비교를 수행한다.  
* 비교연산자(<,>,=,<>) 와 결합해 사용  
```
SELECT	username, address
FROM	Customer AS c
WHERE	<다중행연산자> 비교구문 (SELECT *
		FROM Orders od
		WHERE c.custid = od.custid);
```

### 다중행 연산자 소개
|연산자|설명|
|---|--|
|IN|서브쿼리 반환 값에서 연산 조건에 해당하는 값이 있으면 참이다.|
|ANY, SOME|서브쿼리 반환 값에서 조건과 각각의 값을 비교하여 하나 이상을 만족하면 참이다.|
|ALL|값을 서브쿼리에 의해 리턴되는 모든 값과 조건값을 비교하여 모든 값을 만족해야만 참이다.|
|EXISTS|서브쿼리 반환 결과 중에서 메인 쿼리 비교 조건이 만족하는 값이 하나라도 있으면 참이다.|

> ANY : OR 개념과 유사, ALL : AND 개념과 유사

### IN 연산자
* 서브쿼리가 리턴하는 행 중에서 어느 하나라도 만족하는 경우에 결과를 반환한다.
> 주문 테이블에 25000 이상 주문한 고객의 이름, 주소와 책 제목을 출력하기
```
SELECT	cs.username, cs.address, b.bookname
FROM	Customer cs, Book b
WHERE cs.custid IN (SELECT custid
		FROM Orders
		WHERE saleprice > 40000);
```

### 다중행 연산자 : IN
```
SELECT	cs.username, cs.address, b.bookname
FROM	Customer cs, Book b
WHERE cs.custid IN (SELECT custid
		FROM Orders
		WHERE saleprice > 40000);
```

### ALL 연산자
* ALL 연산자는 서브쿼리에 의해 반환되는 모든 값과 메인쿼리와 조건값을 비교하여 모든 값을 만족해야만 참이다.
> 주문 테이블에 주문이 있는 모든 고객의 이름과 주소를 조회하기
```
SELECT bookname, publisher, price FROM BOOK 
WHERE price > ALL(
		SELECT saleprice
		FROM orders
		WHERE orderdate < '2021-02-03');
```

### 다중행 연산자 : ALL
```
SELECT bookname, publisher, price FROM BOOK 
WHERE price > ALL (
		SELECT saleprice
		FROM orders
		WHERE orderdate < '2021-02-03');
```

### EXISTS 연산자
* 양쪽 쿼리 SELECT 조건에 맞는 튜플이 존재하면 결과에 포함시킨다.  
* 서브쿼리의 어떤 행이 조건에 만족하면 참이 된다.
> 주문이 있는 고객의 이름, 주소 정보를 출력하기
```
SELECT	username, address
FROM	Customer cs
WHERE EXISTS (SELECT *
		FROM Orders od
		WHERE cs.custid =od.custid);
```

### ANY 연산자
* ANY는 "어떤 값과 일치한다" 라는 의미의 연산자이다.  
* 서브쿼리에 의해 구해진 값 중 아무 값과 비교하고 싶은 경우에 사용한다.
> 주문 테이블에 주문 가격이 5000에서 20000사이 도서의 이름, 가격을 조회하기
```
SELECT bookname, price 
FROM book
WHERE price = ANY (SELECT saleprice
		FROM orders 
		WHERE saleprice between 5000 and 20000);
```

### 다중행 연산자 : ANY
```
SELECT bookname, price 
FROM book
WHERE orders 
	price = ANY (SELECT saleprice
		FROM WHERE saleprice between 5000 and 20000);
```
