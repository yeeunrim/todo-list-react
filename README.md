<br>

# 📋 To-do-List With React <br>&nbsp;

<br>

### 01. 프로젝트 설명
#### 개요
- 사용자가 해야 할 일을 추가해 일과 생활을 관리할 수 있는 APP

#### 개발환경
- Language : HTML, CSS, JavaScript
- Framework : React v18.3.1
- Library : Ant-Design, React-icon, uuid, react-datetime

#### 주요 기능
##### &nbsp;&nbsp; 현재 날짜
-  Date() 함수를 통해 날짜값을 동적으로 표현
##### &nbsp;&nbsp; 목록 CRUD
- useState, useEffect를 활용해 목록 CRUD 기능 구현
##### &nbsp;&nbsp; 목록 필터링
- 총 3가지 필터링 기능 구현 | 진행중, 기간지남, 완료
- 드롭다운으로 해당 필터링에 맞는 배열로 상태 변경
## &nbsp;
<br>

### 02. 프로젝트 실행 
#### 개발 환경 설정
##### &nbsp;&nbsp; (1) 리액트 환경 설정
- `npm install create-react-app`으로 create-react-app을 설치<br>
##### &nbsp;&nbsp; (2) 프로젝트 설정 
- `create-react-app $ProjectName`으로 프로젝트 생성<br>
- `cd $ProjectName`으로 생성된 프로젝트 폴더로 이동<br>
##### &nbsp;&nbsp; (3) 프로젝트 코드 다운로드
- `git clone https://github.com/yeeunrim/todo-list-react.git`을 CMD창에 입력해, 코드 다운로드
##### &nbsp;&nbsp; (4) 라이브러리 설치
- `npm install react-dom` npm 명령어를 사용해 react-dom 라이브러리 설치<br>
- `npm install react-icons` npm 명령어를 사용해 react-icons 라이브러리 설치<br>
- `npm install antd` npm 명령어를 사용해 ant-design 라이브러리 설치<br>
- `npm install uuid` npm 명령어를 사용해 uuid 라이브러리 설치<br>
- `npm install react-datetime` npm 명령어를 사용해 react-datetime 라이브러리 설치<br>
##### &nbsp;&nbsp; (5) 프로젝트 실행 및 배포
- `npm start` 개발 모드로 애플리케이션을 실행하기 위해 명령어 사용<br>
##### &nbsp;&nbsp; (6) 참고
- (1), (2)을 제외 후, (3)부터 바로 진행해도 상관없음
- 프로젝트 실행에 앞서, Node.js와 npm 설치를 통해 환경설정이 완료되어 있어야 함
- [Node.js 다운로드](https://nodejs.org/en)
## &nbsp;
<br>

### 03. 주요 컴포넌트
#### (1) Main.jsx
#####  설명
- 애플리케이션의 핵심적인 로직과 레이아웃을 관리
- 사용자가 할 일을 관리할 수 있는 화면과 새로운 할 일을 추가하거나 필터링할 수 있는 기능 제공
##### 사용 이유
- 모든 하위 컴포넌트 통합
- 상태 관리(useState)를 통해 주요 기능을 중앙에서 처리
- 전체 애플리케이션의 흐름을 제어

#### (2) Header.jsx
##### 설명
- 페이지의 상단에 위치한 타이틀을 표시
- 사용자가 New 화면에서 돌아올 때는 타이틀이 동적으로 변경
##### 사용 이유
- 사용자가 현재 어떤 페이지에 있는지를 명확히 알 수 있음
- 동적으로 타이틀을 변경할 수 있는 구조

#### (3) DropDown.jsx
##### 설명
- 할 일을 필터링하는 드롭다운 메뉴를 제공
- 사용자가 필터링 옵션 선택 가능
##### 사용 이유
- 할 일 목록을 '진행중', '기간지남', '완료' 상태로 필터링하여 보여주는 기능을 제공
- 사용자가 쉽게 목록을 탐색할 수 있도록 하는 것

#### (4) Form.jsx
##### 설명
- 사용자가 새로운 할 일을 추가할 때 데이터를 입력할 수 있는 폼 제공
- 제출 시 이 데이터를 상위 컴포넌트로 전달하여 새로운 할 일로 저장
##### 사용 이유
- 사용자가 직관적으로 할 일을 입력할 수 있는 폼을 제공
- 상태 관리(useState)를 사용해 입력 값을 추적하고 제출 후, 폼을 초기화하는 로직을 구현하기 위해 사용

#### (5) ToDoList.jsx
##### 설명
- 사용자가 추가한 할 일 목록 중 필터링된 목록을 동적으로 렌더링
- 할 일의 완료 여부를 관리하는 컴포넌트
##### 사용 이유
- 사용자의 할 일 목록을 필터링해서 보여주기 위해 사용
- 필터 상태에 따라 적절한 하위 컴포넌트인 'Ongoing', 'Missed', 'Completed'로 렌더링
- 할 일 목록을 체계적으로 관리하기 위한 목적

#### (6) List.jsx
##### 설명
- 할 일 목록을 렌더링하여 화면에 보여주는 역할
- 각각의 할 일 항목에 대한 제목, 내용, 마감일을 표시
- 체크박스를 통해 할 일 완료 상태를 관리
##### 사용 이유
- 할 일 목록을 직관적이고 명확하게 사용자에게 보여주기 위해 사용
- 체크박스를 제공하여 할 일의 상태(완료 여부)를 쉽게 변경
## &nbsp;
<br>

### 04. 다운로드
- [Todo-List_프로젝트_설명서.pdf](https://github.com/user-attachments/files/16930342/todolist_manual.pdf) <br>&nbsp;
