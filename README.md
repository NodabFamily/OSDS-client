# OSDS-client

`Online space for family`

`Design Requirement` - [Figma](https://www.figma.com/file/YPYVdfvVAJl4h1hV3njDoC/%EC%82%AC%EB%9E%91%EC%9D%84-%EC%82%AC%EC%9E%90---%EC%98%A4%EC%88%9C%EB%8F%84%EC%88%9C?node-id=0%3A1&t=OjMhn2N5qClUPuoI-0)

`Period` : 22.07.28 ~ 22.08.19

## 👨‍👩‍👧‍👦 Participants 👨‍👩‍👧‍👦


| name                                    | 역할                      |
| ----------------------------------------- | --------------------------- |
| [unanchoi](https://github.com/unanchoi) | Develop / Review / Deploy |
| [euije](https://github.com/euije)       | Develop                   |

## 의제

### 주어진 과제

- 학습 기간이 짧아, 숙련도가 높지 않은 React로 디자인 요구 사항을 구현해야 함
- 매주 1회 오프라인 회의 때, 밀도 높은 소통이 이루어져야 함
- 유저 디바이스에 따른 반응형 웹을 설계해야 함
- S3 Image hosting, 그룹 초대 코드, 로그인/로그아웃, CRUD 등 기능적 구현의 경험 부족


### 집중한 것

- 기술
  - `styled-components(CSS-in-JS)`라이브러리를 통해 semantic한 Dom구조를 작성
  - `flex-box`를 통해 반응형 컴포넌트 설계
- 소통
  - 상세한 Pull-Request (#5, #6 등) 작성을 통해 개발이 어느 정도 진행 되었는지 공유

### Lesson & Learn

- '개발' 이라는 과정이 생각보다 리소스가 큰 행위이다.
  - '린 스타트업'의 필요성 - 작은 단위의 Working한 가설을 빠르게 들고 오는게 팀원들의 불확실성을 줄여, 개발의 원동력을 줄 수 있다.
- 리더는 팀원을 지속적인 동기부여를 넣어줄 의무가 있다.
  - 개개인 근본 '욕구'에 대한 이해 필요성 - 각자 프로젝트를 통해 얻고 싶은 것이 다르기 때문에(창업, 개발 경험, 스펙, 친구 만들기, ...) 개인이 이루고 싶은 목표(내적 동기)를 달성할 수 있는 역할을 부여해야 한다.
  - 가시적인 성과 달성의 필요성 - 팀원들은 눈에 보이는 성과가 없으면 열정과 동기를 잃어버릴 수 있다. 경진대회와 수상 등을 통해 우리가 틀리지 않다, 잘하고 있다는 (외적) 동기를 불어 넣어야 한다.
- 혼자 프로그래밍 하는 과정은 외롭다.
  - 내가 작성하는 코드가 효과적인가, 놓치고 있는 것은 없나 하는 의문이 들 수 있다. 페어 프로그래밍, 스터디 등과 외로움을 덜어줄 수 있는 방법을 사용해야 한다.

### 한계점

- 기술

  - [데이터 스키마](https://www.erdcloud.com/d/sRoWKh9c2A5EcYWWb)에 대한 부족한 이해로 field(column)명을 통일 시키지 못함.
  - font-size에 대한 상대 단위를 rem/em으로 작성하지 못함.
  - 페이지 별로 Container가 필요할 때마다 정의하여, 코드의 재사용성이 떨어짐.
  - CORS, Cookie, Session에 대한 기본 지식이 없어 배포 및 백엔드와의 통신에 어려움을 겪음.
  - Props 및 State 관리에 대한 이해 없이 컴포넌트 설계함.
  - Branch 전략을 복잡한 Git-Flow로 사용하여 Branch 사용에 혼동이 있었음
- 소통

  - 원활한 프로젝트 진행을 위해 Kanban Board를 도입하였으나, 온보딩이 부족하여 팀원들의 프로세스 이해도가 떨어졌음
  - 기획 - 디자인 - 개발 - 배포 - 피드백 cycle의 길이가 길어 일정이 미뤄지는 경우 존재.


### 다음 단계

- 키워드 : Typescript, Component, Github-flow, EC2, CI/CD


## 🖥 Implementation

### 1. Run Server

```
glt clone https://github.com/NodabFamily/OSDS-client.git

yarn start

or

npm run start
```

## 🗒 Commit Convention


| 제목     | 내용                                       |
| ---------- | -------------------------------------------- |
| feat     | 기능 추가                                  |
| fix      | 버그 수정                                  |
| refactor | 기능 개선 및 코드 좋은 방향으로 개선       |
| docs     | 문서 관리                                  |
| style    | 코드 스타일 변경, 코드 깔끔하게 관리       |
| chore    | 기본 세팅 및 settings.py 관련, 패키지 관리 |

## Deploy


| Site                                          |
| ----------------------------------------------- |
| [github-page](http://www.osds-client.kro.kr/) |
