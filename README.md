# Horizon 공통 UI 모노레포

이 레포지토리는 Horizon 프로젝트의 UI 및 디자인 시스템을 포함한 모노레포입니다.
공통 UI 컴포넌트, 스토리북 문서화 등을 한 곳에서 관리합니다.

---

## 패키지 구조

```text
horizon-shared-ui/
├── packages/
│   ├── ui/              # 공통 UI 컴포넌트 라이브러리 (@horizon/ui)
│   └── design-system/   # 디자인 시스템(폰트, 컬러)
├── package.json
├── tsconfig.json
├── 엄청많은설정들...
└── README.md
```

---

## 시작하기

### 1. 의존성 설치치

```bash
pnpm install
```

### 2. UI 패키지 빌드 (아직 세팅 X)

```bash
pnpm --filter @horizon/ui build
```

### 3. Storybook 실행

```bash
pnpm --filter @horizon/ui storybook
```

## 주요 패키지 설명

- **@horizon/design-system:** 폰트, 컬러 등 디자인 시스템
- **@horizon/ui:** 공통으로 사용하는 React UI 컴포넌트

---

## 만든 이

| 이름   | GitHub ID                                      | 역할/설명               |
| ------ | ---------------------------------------------- | ----------------------- |
| 황준혁 | [@justn-hyeok](https://github.com/justn-hyeok) | 프로젝트 리드, 퍼블리싱 |
| 진은성 | [@Jin-venus](https://github.com/Jin-venus)     | 디자인                  |
