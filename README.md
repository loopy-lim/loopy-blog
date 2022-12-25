# loopy-blog

Smilegate 2022 winter dev project

## 목표

- [x] 글 CRUD
- [x] 댓글 CRUD
- [x] UI디자인
- [ ] 관리자 도구
- [ ] traceback
- [ ] RSS
- [ ] 메일 피드백
- [ ] Embed

## 기술 스택

<h3>
  <details>
    <summary>프론트엔드</summary>
      <div markdown="1">

      - Node.js - 18.11.0
      - pnpm
      - React
      - SWR
      - react-router
      - Tailwind
      - react-icon
      - Vite

  </details>
</h3>

<h3>
  <details>
    <summary>백엔드</summary>
    <div markdown="1">

      - Node.js - 18.11.0
      - pnpm
      - Docker
      - Nginx
      - NestJS
      - PostgreSQL
      - MongoDB - for 댓글
      - Redis

  </details>
</h3>

## Run dev mode

```
npm run dev
npm run kill
```

참고로 아직 실제 배포 코드를 짜지 못했습니다.

## 코드 리뷰 할 때 참고 할 것들

### 프로그래밍 스킬

| 주로 썼던것 | 써봤던 것 | 처음 써보는 것 |
|---|---|---|
| Nodejs, vite, github | React, SWR, react-router, Tailwind, react-icon, NestJS, mongodb, redis | pnpm, Docker, Nginx, PostgreSQL |

![아키텍처](https://user-images.githubusercontent.com/45393030/209469832-a055e79f-8db2-4924-877b-d8e60229efdd.png)

![최종 목표](https://user-images.githubusercontent.com/45393030/209469858-614ce543-ae70-4c69-9f57-01a6f129b40a.png)

![DB1](https://user-images.githubusercontent.com/45393030/209470557-03f7d734-9231-499f-9ec1-d554ac420e47.png)

![DB2](https://user-images.githubusercontent.com/45393030/209470566-aaf0aa20-1c6a-4f3c-b39d-8e7a4bf6d211.png)

### Comment

저는 단순 블로그 기능 뿐 아니라, 이 블로그를 저 뿐만이 아닌 다른 사람들도 쓸 수 있기를 바라면서 만들었습니다(그래서 약간의 로그인 기능이 있습니다). 추가로 capacitor.js을 사용하여 모바일에서도 가능하도록 만들고 싶었습니다(pwa로 부족해요). 단, 이렇게 하려고 하니 저의 실력이 매우 부족하다는 것을 알 수 있었습니다. 그리고 아키텍쳐적, 폴더를 구성하는데도 구조가 결함이 있다고 생각합니다. 앞으로 이런 점을 보안해서 계속 개발하고자 합니다.

### 최종 목표

- 서비스 할 수 있는 수준까지 늘리기
- 모바일도 타겟하기
- docker을 통한 배포로 쉬운 CI/CD 노리기
