Figma Make で生成したデザインをベースに、React / TypeScript / Vite で構成を整理・実装したWebサイトです。
Figma由来のレイアウトを維持しつつ、React Routerによるページ分割、コンポーネント整理、モーダル表示などを追加しています。

## Demo

[▶ Live Demo](https://hottah.github.io/school-sound-make/)

## Features

- React + TypeScript
- Vite
- React Router
- Tailwind CSS
- ページ単位のルーティング
- 共通Navigation / Footer
- Sectionコンポーネント化
- Lightbox / Modal表示
- ページごとのスタイル切り替え
- Google Fonts / Montserrat

## Pages

- Home
- Product
- Courses
- Contact

## Sections

`section` ディレクトリには、ページ内で利用する比較的大きなUI単位を配置しています。

例：

- Hero
- Packages
- Video
- Team
- Testimonials

Sectionは通常のページ内表示だけでなく、必要に応じてLightbox内でも利用しています。

## Project Structure

```text
src/
├─ assets/
├─ components/
│  ├─ Navigation.tsx
│  ├─ Footer.tsx
│  ├─ SiteLayout.tsx
│  └─ Lightbox.tsx
│
├─ section/
│  ├─ Hero.tsx
│  ├─ Packages.tsx
│  ├─ Video.tsx
│  ├─ Team.tsx
│  └─ Testimonials.tsx
│
├─ pages/
│  ├─ HomePage.tsx
│  ├─ ProductPage.tsx
│  ├─ CoursesPage.tsx
│  └─ ...
│
├─ styles/
│  └─ index.css
│
├─ App.tsx
└─ main.tsx
