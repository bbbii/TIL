# **조인 이해하기 (1)**

### 학습 목표
* JOIN을 이해할 수 있다.  
* 여러 테이블에서 JOIN을 작성할 수 있다.  
* JOIN을 작성하고 살명할 수 있다.

### 학습 목차
* JOIN  
* 외부 JOIN  

***
## 01. JOIN
### 두 개 이상의 테이블에서 SQL 질의  
> 여러 테이블을 결합해 질의해서 결과 집합을 도출해 낸다.  
LEFT JOIN
RIGHT JOUN
(FULL) OUTER JOIN
INNER JOIN

### 조인 다이어그램
* 일반 조인 : 테이블을 ,로 여러개 결합하는 것
* 외부 조인 : OUTER라는 조건으로 JOIN조건을 제시해서 사용하는 형태

|명령|문법|설명|
|--|--|--|
|일반 조인|SELECT <속성들><br>FROM 테이블1, 테이블2<br>WHERE <조인조건> AND <검색조건><br><br>SQL문에서는 주로 동등조인을 사용함.<br>SELECT <속성들><br>FROM 테이블1, INNER JOIN 테이블2 ON <조인조건><br>WHERE <검색조건>|SQL문에서는 주로 동등조인을 사용함.<br>두 가지 문법 중 하나를 사용할 수 있음|
|외부 조인|SELECT <속성들><br>FROM 테이블1 {LEFT, RIGHT, FULL [OUTER]} JOIN<br>테이블2 ON <조인조건>:<br>WHERE <검색조건>|외부조인은 FROM 절에 조인 종류를<br>적고 ON을 이용하여 조인조건을 명시함|

### 일반조인/Inner JOIN
* 기준 테이블과 중복되는 데이터를 추출, SQL문에서는 주로 동등조인을 사용함
```
SELECT <속성들>  
FROM 테이블1, 테이블2  
WHERE <조인조건>AND<검색조건>  
```
```
SELECT <속성들>  
FROM 테이블1 INNER JOIN 테이블2 ON <조인조건>  
WHERE <검색조건>
```

### 예시
* Customer 테이블을 Orders 테이블과 조건 없이 연결해보기
```
SELECT *  
FROM Customer, Orders;
```
> FROM절 뒤에 콤마로 연결

### 일반조건/ 동등조인과 조건
* 조건문과 정렬을 함꼐 사용해 보기
> 고객과 고객의 주문에 관한 데이터를 모두 보이기
```
SELECT *  
FROM	Customer, Orders
WHERE	Customer.custid = Orders.custid;
```
> 고객과 고객의 주문에 관한 데이터를 고객번호 순으로 정렬하여 보이기
```
SELECT *  
FROM	Customer, Orders
WHERE	Customer.custid = Orders.custid;
ORDER BY	Customer.custid;
```

GROUP을 함께 사용할 수 있다.  
> 고객별로 주문한 모든 도서의 총 판매액을 구하고, 고객별로 정렬하시오.
```
SELECT		name, SUM(saleprice)
FROM		Customer, Orders
WHERE		Customer.custid = Orders.custid;
GROUP BY	Customer.name
ORDER BY	Customer.name;
```

## 02. 외부 조인
### 외부조인은 상대 테이블과의 결합된 집합이 된다.
```
SELECT <속성들>  
FROM 테이블1 {LEFT| RIGHT| FULL [OUTER]} JOIN  
	테이블2 ON <조인조건>  
WHERE <검색조건>
```

### 외부조인/FULL OUTER
> 도서를 구매하지 않은 고객을 포함해 고객이름, 주문한 도서의 판매가격을 출력하기
```
SELECT	Customer.name, saleprice  
FROM	Customer LEFT OUTER JOIN Orders
		ON Customer.custid = Orders.custid  
```

### CROSS JOIN
> 상호조인 이라고도 불리며, 테이블의 모든 행들과 조인 대상 테이블의 모든 행을 조인시키는 기능
```
SELECT <속성들>  
FROM 테이블1 CROSS JOIN  
	테이블2 ON <조인조건>  
WHERE <검색조건>  
```

### 예시
> 도서를 구매한 이력이 있는 고객 이름, 판매 도서의 가격을 출력하기
```
SELECT	Customer.username, saleprice  
FROM	Customer CROSS JOIN Orders
		ON Customer.custid = Orders.custid;
```
