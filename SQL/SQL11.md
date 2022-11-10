# **조건으로 탐색하기 (3)**

### 학습 목표
* ORDER BY 구문을 활용할 수 있다.
* DISTINCT 구문을 활용할 수 있다.
* 다중조건에 대해 알 수 있다.

### 학습 목차
* ORDER BY 구문
* DISTINCT 구문
* 조건제어

***

## 01 ORDER BY 구문  
### ORDER BY 구문  
> 쿼리 결과를 주어진 컬럼의 오름차순, 내림차순으로 정렬해 출력

```
SELECT ..  
WHERE …  
ORDER BY column_name,… [ASC | DESC]  
ORDER BY column_no,… [ASC | DESC
```
* 정렬 조건
|연산자|설명|
|---|--|
|ASC|오름차순으로 정렬|
|DESC|내림차순으로 정렬|

### 예시
* 도서를 이름순으로 검색하기
```
SELECT *  
FROM Book  
ORDER BY bookname;  
```

* 도서를 가격순으로 검색하고, 가격이 같으면 이름순으로 검색하기
```
SELECT *  
FROM Book  
ORDER BY price, bookname;  
```

* 오름차순/내림차순
```
SELECT *  
FROM Book  
ORDER BY price DESC, publisher ASC;  

SELECT *  
FROM orders  
ORDER BY orderdate DESC  
```

* 조건식과 정렬 결합 : 판매가격이 1000이상인 결과를 도서번호로 출력
```
SELECT *   
FROM orders  
WHERE saleprice > 1000  
ORDER BY bookid  
```

* 칼럼번호 1번, 3번 순서로 정렬
```
SELECT *  
FROM Book  
ORDER BY 1, 3  
```

## 02. DISTINCT 구문
### DISTINCT 연산자
* 조회된 결과에서 중복된 데이터를 제외하고 출력  
```
SELECT [DISTINCT] 속성이름(들)  
FROM 테이블이름(들)  
…
* 중복제거란 의미
> 범주형 데이터 추출과 유사
> 예) ‘금’, ‘금’, ‘은’을 중복제거하면, ‘금’, ‘은’이란 범주 값만 남음
```

### 예시  
bookstore테이블에서 중복 데이터를 제외해보기  

* 주문 고객목록  
```select distinct custid from orders;```  

* 판매가격 목록  
```SELECT DISTINCT saleprice FROM orders;```  

* 주문이 있는 고객의 숫자  
```SELECT count(DISTINCT custid) FROM orders;```

## 03. 조건제어
### 다중 조건을 제공하는 CASE 구문
* 조회된 결과에서 중복된 데이터 제외하고 출력
* CASE는 내장 함수는 아니며 연산자(Operator)로 분류
```
CASE  
	WHEN 조건  
	THEN '반환 값'  
	WHEN 조건  
	THEN '반환 값'  
	ELSE 'WHEN 조건에 해당 안되는 경우 반환 값'  
END  

- WHEN과 THEN은 한쌍이어야 합니다.  
- WHEN과 THEN은 다수가 존재할 수 있습니다.  
- ELSE가 존재하면 모든 조건에 해당하지 않는 경우에 반환 값을 설정할 수 있습니다.  
- ELSE가 존재하지 않고, 조건에 맞지 않아서 반환 값이 없으면 NULL를 반환합니다  
```

### 조건제어를 위한 IF 구문
* 조건에 따라 분기 -> 참/거짓 두 가지만 있기에 2중 분기

* 형식
> SELECT IF (100>200, '참', '거짓');

IFNULL(수식1, 수식2)
> 수식1이 NULL이 아니면 수식1이 반환, 수식1이 NULL이면 수식2가 반환

### LIMIT문
* SELECT로 받아온 결과의 출력 개수를 제한하고자 할 때, SQL 문장의 제일 마지막에 사용
* ```LIMIT n``` : 첫 번째 행부터 n개를 출력  
* ```LIMIT s, n``` : s번째 행부터 n개를 출력 (s개의 행을 SKIP)
```
SELECT first_name, salary  
FROM employees  
ORDER BY salary DESC  
LIMIT 3;  
```
```
SELECT first_name, salary  
FROM employees  
ORDER BY salary DESC  
LIMIT 10, 3 
```
