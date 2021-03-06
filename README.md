# javascript-w3-todo

스프린트 3-4주차 웹 프로젝트 - 할일관리

## 진행사항

### 1일차 (9/14)

- [x] express로 API서버 개발환경 구축
- [x] nodemon, eslint, env 설치
- [x] NCP 서버 생성 및 SQL설치
- [x] workbench로 로컬에서 SQL 원격접속

### 2일차 (9/15)

- [x] sftp로 NCP에 서버 자동 배포
- [x] webpack, babel 공부
- [x] webpack, babel 이용하여 Front 개발환경 구축
- [x] Front에서 간단한 KanbanBoard 컴포넌트 구현
- [x] Server에서 간단한 service 함수 구현
- [x] cors 설정 후 API서버와 통신

### 3일차 (9/16)

- [x] DB 설계
- [x] API 설계
- [x] 로그인 API 구현
- [ ] 서버 통합테스트 진행중

### 4일차 (9/17)

- [x] /board GET API
- [x] /board POST API
- [x] /board PUST API
- [x] /board DELETE API
- [x] /board/all DELETE API
- [x] /card GET API
- [x] /card POST API
- [x] /card PUT API
- [x] /card DELETE API
- [ ] 서버 통합테스트 진행중

## DB

![db](https://user-images.githubusercontent.com/52442237/93344069-36eed680-f86c-11ea-968c-e11b78ee3bc8.png)

## Integration Test (jest)

![integrationTests](https://user-images.githubusercontent.com/52442237/93548530-59830b80-f9a2-11ea-86de-7a47274be4fb.png)

## APIs

### /signIn

- POST(로그인)
  - req : userId, userPassword
  - res : setCookie

### /boards

- GET(모든 보드 가져오기)
  - req: -
  - res: boards
- POST(새 보드 등록)
  - req: boardTitle
  - res: boardId
- PUT(보드 제목 변경)
  - req: boardTitle
  - res: 200 true
- DELETE(보드 삭제)
  - req: boardId
  - res: 200 true

### /cards

- GET(모든 카드 가져오기)
  - req: -
  - res: cards
- /new POST(새 카드 등록)
  - req: boardId, cardContent
  - res: cardId
- POST(카드 이동)
  - req: cardId, boardId, cardContent
  - res: 200 true
- PUT(카드 내용 수정)
  - req: cardId, cardContent
  - res: card
- DELETE(카드 삭제)
  - req: cardId, boardId
  - res: 200 true

### /actions

- GET(모든 액션 가져오기)
  - req: -
  - res: actions
