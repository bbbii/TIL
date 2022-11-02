# git
#### git의 사용방법을 익히자.
****
## 초기 설정
```
git config --global user.name "사용자 이름"   
git config --global user.email "사용자 이메일"
```
가장 처음, 위의 명령어를 입력해 git 사용자의 이름과 이메일을 변경해준다.   
초기 1회만 설정하면 된다.
****
## vim
```git commit```을 입력해 vim을 실행하면 추가로 단축키를 입력해야 편집할 수 있게 된다.
>- 입력 : i(insert)  
>- 저장 : :w(write)  
>- 종료 : :q(quit)  
> :wq 로 저장과 종료를 동시에 할 수 있다.
****
파일을 편집해도 git은 파일을 버전 관리하지 않는다.
```> 추적(관리)명령어 git add ./파일명 -> committed```


vim 파일이름 > 편집 > git status 로 modified확인 > git add 로 추적 > 
status로 확인했을때 untracked가 뜬다면 버전관리를 하고 있지 않다는 뜻, add 해줘야 한다.
****
## 명령어 정리
- ```pwd``` 현재 위치를 보여준다.
- ```cd Documents``` Documents 폴더로 이동한다.
- ```mkdir (폴더명)``` 새 프로젝트 퐆더를 만든다.
- ```git init``` 현재 디렉토리의 버전을 관리한다.
- ```ls -al``` 현재 목록의 파일을 보여준다.
- ```vim test.txt``` test.txt 라는 파일을 생성(편집)한다.
- ```git status``` 프로젝트 폴더의 상태 확인한다.
- ```git commit``` 
- ```git log``` 편집 로그를 확인한다.
   - Author : 이름, 이메일   
   - Date : 수정 날짜   
- ```git log -p``` 로그에서 출력되는 버전 간의 차이점을 출력하고 싶을 때 
- ```git diff '버전 id'..'버전 id2'```버전 간의 차이를 비교한다.
- ```git diff``` git add하기 전과 add한 후의 파일 내용을 비교한다.
- ```git reset --hard "버전 id"``` 버전 id로 되돌아간다.
- ```git revert "버전 id"``` 버전 id의 commit 을 취소한 내용을 새로운 버전으로 만든다.

stage area : commit 대기상태   
repository : commit 된 파일의 저장소
