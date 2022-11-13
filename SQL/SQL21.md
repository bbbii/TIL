# **분석과 통계 사용하기 (1)**

### 학습 목표
* 수치형 데이터의 대표값을 이해할 수 있다
* 중심경향에 대해 이해할 수 있다.
* 데이터 분포를 이해할 수 있다.

### 학습 목차
* 기본통계

***
## 01. 기본통계
### 기술통계(Descriptive statics)
* 대표값
> 데이터 계수 : count  
> 최댓값/최솟값 구하기 : MAX/MIN 함수  
> 합/평균 : SUM/AVERAGE 함수  
> RANK 함수  

* 주기적 통계
> 일간, 주간, 월간 지표 확인

### 대표값
* 중심경향성
> 데이터의 중심이 어디인지를 나타내는 중심 경향성(Central tendency) 지표  
> 어떻게 분포되었는지 파악하는 중심경향  
> 대부분 데이터 값을 데이터 위치의 개수로 나눈 평균을 사용할 수 있음  
> 평균을 통해서 각 지표가 전체 지표 중에서 어느 위치인지를 파악하기 좋음  

* 대표값 파악
> 산술평균: 보통 평균(mean)은 관측치의 총합을 관측치의 개수로 나누어 구함  
> 기하평균: 관측치 수의 곱을 관측치의 제곱근을 취해서 산술하는 평균값  
> 중앙값(중위수, Median): 데이터에서 가장 가운데 위치한 값  

### 대표값 함수 사용
* 수치 집계함수

|내장 함수|설명|
|----|--|
|SUM(속성이름)|속성 값들의 합계를 낸다|
|AVG(속성이름)|속성 값들의 평균을 낸다|

* 문자열 함수

|문자열 함수|설명|
|-----|--|
|FORMAT(X, D)|X 형식 '#,###,###.##' D자리수로 맞춘다|

### 예시
* 고객의 전체 주문횟수, 합계, 평균, 최소/최대 구매액 조회
> COUNT, SUM, AVERAGE, MIN, MAX, FORMAT 함수

```
SELECT C.USERNAME, COUNT(*) 주문횟수, 
	FORMAT(SUM(SALEPRICE),0) 합계, 
	FORMAT(AVG(SALEPRICE), 1) 평균, 
	MAX(SALEPRICE), MIN(SALEPRICE)
FROM ORDERS O
LEFT JOIN CUSTOMER C
ON O.CUSTID = C.CUSTID
GROUP BY 1;
```
|이름|주문량|합계|평균|최대|최소|
|--|---|--|--|--|--|
|박지성|3|66,500|22,166.7|44000|7500|
|김연아|2|40,000|20,000.0|32000|8000|
|장미란|4|78,000|19,500.0|32000|8000|
|추신수|3|61,500|20,500.0|23500|18000|
|박보영|2|67,500|33,750.0|44000|23500|

* 년도별 주문량, 주문합계, 평균, 최대 및 최소 값을 계산하기
>  COUNT, SUM, AVERAGE, MIN, MAX, FORMAT 함수

```
SELECT YEAR(ORDERDATE) 년도, COUNT(*) 주문량, 
	FORMAT(SUM(SALEPRICE),0) 합계, 
	FORMAT(AVG(SALEPRICE), 1) 평균, 
	MAX(SALEPRICE), MIN(SALEPRICE)
FROM ORDERS O
LEFT JOIN CUSTOMER C
ON O.CUSTID = C.CUSTID
GROUP BY 1;
```
|년도|주문량|합계|평균|최대|최소|
|--|---|--|--|--|--|
|2021|10|202,500|20,250.0|44000|7500|
|2020|6|166,000|27,666.7|44000|20000|

### 데이터의 분포
* 분산: variance
* 표준편차 : standard deviation
* 사분위수 : quartile
* 분산(Variance)은 개별 요소들이 평균과 얼마나 떨어져 있는지 알 수 있음
* 편차(Deviation)는 개별 값과 평균의 차이임

### 데이터의 분포에 대한 함수 사용
* STD, STDDEV, VARIANCE 함수

|내장함수|설명|
|----|--|
|STD(expr)|expr의 표준편차를 반환|
|VARIANCE(expr)|expr의 분산을 반환|

```
SELECT SUM(SALEPRICE) 합계, 
	FORMAT(AVG(SALEPRICE), 1) 평균, 
	MAX(SALEPRICE) 최대, MIN(SALEPRICE) 최소,
		FORMAT(VARIANCE(SALEPRICE),1) 분산,
		FORMAT(STD(SALEPRICE),1) 표준편차
FROM ORDERS;
```
