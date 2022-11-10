# **집계 이해하기 (3)**

### 학습 목표
* 내장함수에서 집계형 함수에 대해서 이해 할 수 있다.  
* 숫자형/날짜형/범위형 집계에 대해 알 수 있다.  
* 데이터의 집계에 대해서 설명할 수 있다.

### 학습 목차
* 다양한 집계함수

***
## 01. 수치형 다양한 집계함수
### 집계함수
|내장함수|설명|
|----|--|
|SUM(속성이름)|속성 값들을 합계를 낸다|
|AVG(속성이름)|속성 값들의 평균을 낸다|
|COUNT({속성이름] or *})|속성 혹은 모든 행의 개수를 센다|
|MAX(속성이름)|속성 값들 중 최대값을 산출한다|
|MIN(속성이름)|속성 값들 중 최소값을 산출한다|
|POWER(X, Y)|X 값의 Y제곱을 계산한다|
> 위 같이 값의 합, 평균, 개수, 최대, 최소 값에 대한 함수를 "집계함수"라 호칭함

### 수치형 집계함수
|내장함수|설명|
|----|--|
|ABS(숫자)|숫자 절대값 출력|
|CEILING(숫자)|숫자보다 크거나 같은 최소 정수 값|
|FLOOR(숫자)|숫자 값 보다 작은 정수 중 가장 큰 수<br>실수는 무조건 버림, 음수일 경우는 제외|
|ROUND(숫자,자릿수)|숫자를 소수점 이하 자릿수에서 반올림(자릿수는 양수,0,음수)|
|GREATEST(숫자1,숫자2,...)|주어진 수 중 제일 큰 수 리턴|
|LEAST(숫자1,숫자2,...)|주어진 수 중 제일 작은 수 리턴|

### 예시 : 숫자 집계 함수
```
mysql> SELECT CEILING(30.75);
31
mysql> SELECT CEILING(40.25);
41

mysql> SELECT GREATEST(29, -100, 34, 8, 25);
34
mysql> SELECT GREATEST("windows.com", "microsoft.com", "apple.com");
windows.com

mysql> USE BOOKSTORE;
SELECT SUM(PRICE)/COUNT(PRICE) 평균 FROM BOOK;
```

### 기간 집계함수
|기간 함수|설명|
|----|--|
|DAYOFYEAR(날짜)|일년을 기준으로 날짜까지의 날짜 수|
|DAYOFWEEK(날짜)|요일(1: 일~7: 토) 반환|
|WEEKOFYEAR(날짜)|날짜의 주 수(0~53) 를 반환한다. WEEK(date,3) 호환|
|YEARWEEK(날짜[, mode])|주 범위 0~53 를 반환한다. mode(0~7)로 주 지정|
|MONTHNAME(날짜)|월의 영문(January ~December) 반환|
|WEEK(날짜[,mode])|일년 중 몇 번째 주|
|QUARTER(날짜)|날짜가 4분기 중에서 몇 분기인지를 반환|
|DATE_FORMAT(날짜,format)|dt 속성를 날짜형식 format으로 반환|

* mode 값  

|Mode|First day of week|Range|Week 1 is the first week…|
|----|----|----|----|
|0|Sunday|0-53|With a Sunday in this year|
|1|Monday|0-53|With 4 or more days this year|
|2|Sunday|1-53|With a Sunday in this year|
|3|Monday|1-53|With 4 or more days this year|
|4|Sunday|0-53|With 4 or more days this year|
|5|Monday|0-53|With a Monday in this year|
|6|Sunday|1-53|With 4 or more days this year|
|7|Monday|1-53|With a Monday in this year|

### 예시 : 날짜 집계 함수
```
mysql> SELECT WEEKOFYEAR('2021-01-01'); -- 2020년의 53주.
53
mysql> SELECT WEEKOFYEAR('2021-01-05');
1
mysql> SELECT WEEKOFYEAR('2021-02-01');
5
mysql> SELECT WEEKOFYEAR('2021-12-31');
52

mysql> SELECT DAYOFYEAR("2021-01-01");
1
mysql> SELECT DAYOFYEAR("2021-06-15");
2
mysql> SELECT DAYOFYEAR("2021-12-31");
365
```

* 주별 주문일자에 대한 최대, 최소 판매액으로 집계하기
```
mysql> SELECT YEARWEEK(orderdate), MIN(saleprice), 
MAX(saleprice)
	-> FROM orders
	-> GROUP BY YEARWEEK(orderdate);
+---------------------+----------------+----------------+
| YEARWEEK(orderdate) | MIN(saleprice) | MAX(saleprice) |
+---------------------+----------------+----------------+
|              202105 |           7500 |          44000 |
|              202106 |          15000 |          32000 |
+---------------------+----------------+----------------+
```

### View와 집계 함수
* 반복적, 지속적, 주기적 쿼리를 View로 생성해서 단순한 SELECT 만으로 집계 결과를 얻고자 함
* 예시 : 주별로 판매액의 최소, 최대 값을 알아보기
```
CREATE OR REPLACE VIEW v_Weekly(Weekly, Date, MIN, MAX)
AS SELECT YEARWEEK(orderdate) Weekly, orderdate 'Date', 
	MIN(saleprice) MIN, MAX(saleprice) MAX
FROM Orders
GROUP BY YEARWEEK(orderdate);
```

```
SELECT * FROM v_Weekly;
```

* 예시 : 전체 주문에서 요일별 주문 수량
```
CREATE OR REPLACE VIEW v_weekday(요일, 수량)
AS SELECT
	CASE DAYOFWEEK(orderdate)
		WHEN 1 THEN "Sun"
		WHEN 2 THEN "Mon"
		WHEN 3 THEN "Tue"
		WHEN 4 THEN "Wed"
		WHEN 5 THEN "Thu"
		WHEN 6 THEN "Fri"
		WHEN 7 THEN "Sat"
	END AS 요일,
	count(orderid) AS 수량
FROM Orders;
```

```
SELECT * FROM v_Weekly;
```
