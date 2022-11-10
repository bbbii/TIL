# **집계 이해하기 (1)**

### 학습 목표
* View에 대해서 이해 할 수 있다.  
* View 생성/수정/삭제에 대해 알 수 있다.  
* 인라인뷰와 뷰에 대해서 설명할 수 있다.

### 학습 목차
* View 이해하고 사용하기

***
## 01. View 이해하고 사용하기
### 뷰(View)
* 하나 이상의 테이블을 결합하여 만든 가상의 테이블
* SELECT와 조건구문 등을 통해서 쿼리로서 가상의 테이블로 생성한다.

### 뷰의 특징
* 원본 테이블의 레코드 값에 따라 뷰의 레코드도 같이 변화가 일어남  
* 기존 테이블 변경없이 새로운 데이터 구조를 사용할 수 있음  
* 특정 레코드에 대한 노출이 필요한 경우 장점이 있음

### 뷰의 단점
* 뷰에 독립적인 인덱스 생성이 어려움  
* 한번 생성된 뷰의 속성 변경이 안됨  
> ALTER VIEW문을 사용할 수 없다. 즉, 뷰의 정의를 변경할 수 없다.  
* 삽입, 삭제, 갱신 연산에 많은 제약이 따름
> 테이블의 기본키를 포함한 속성의 뷰에서 삽입, 삭제, 갱신, 연산이 가능하다.

### 뷰의 장점
* 편리성 및 재사용성  
> 자주 사용되는 복잡한 질의를 뷰로 미리 정의해 놓을 수 있다.  
> 반복적이고 복잡한 질의를 간단히 뷰로 작성해 일반 쿼리로 사용한다.  
> 사용자가 요구에 맞게 가공하여 뷰로 사용할 수 있다.
* 보안
> 사용자별로 필요한 데이터만 선별하여 보여줄 수 있다.  
> 민감 정보 질의의 경우 뷰로 내용을 암호화해서 제공 할 수 있다. 
* 논리적 독립성
> 미리 정의된 뷰를 일반 테이블처럼 사용할 수 있다.  
> 원본 테이블의 구조가 변해도 응용에 영향을 주지 않도록 하는 논리적 독립성을 제공한다.

### 뷰의 편리함
* 예를 들어 테이블에서 집계함수, 다중조건을 사용하는 SQL질의를 사용할 때
> 이 SQL질의가 자주 사용하고, 집계를 하는데 사용한다면  
> 이런 SELECT문에는 여러 가지 절이나 연산자를 사용하고 있다면, 매번 같은 코드를 작성하는  
> 번거로움이 있다. 이런 경우 View 를 작성해 두고, 단순한 SELECT문을 사용하면 된다.

### 예시 : CREATE VIEW 구문 사용
```
CREATE VIEW v_orders
AS SELECT ordered, 0.custid, usrname, O.bookid, saleprice, orderdate
	FROM ustomer C, Orders O, Book B
	WHERE C.custid = O.custid and B.bookid = O.bookid;
```

### CREATE VIEW 구문
```
CREATE VIEW view_name [(column_list)]
	AS SELECT구문
	[WITH [CASCADED | LOCAL] CHECK OPTION]
```
> SELECT 구문 : Join, Subquery 및 제약사항을 포함한 쿼리

### 예시 : CREATE VIEW 구문
```
CREATE VIEW 뷰 이름
AS SELECT username, sum(price) sum, max(price) max
	FROM Orders WHERE team = 'A'
```

### CREATE OF REPLAE VIEW 구문
```
CREATE OR REPLACE VIEW view_name [(column_list)]
	AS SELECT구문
	[WITH [CASCADED | LOCAL] CHECK OPTION]
```
> CREATE 구문으로 view_name에 따라서 새로운 뷰로 생성된다.

```
CREATE OR REPLACE VIEW v_someorder(custid, username, address)
AS SELECT C.custid, username, address
	FROM Customer C, Orders O, Book B
	WHERE B.price > 20000;
```

### DROP VIEW 구문
* CREATE 구문으로 view_name에 따라서 새로운 뷰로 생성된다.
```
DROP VIEW view_name;
```
