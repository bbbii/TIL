# 조건으로 탐색하기 (1)

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


