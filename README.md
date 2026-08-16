React / TypeScript / Vite で構成を整理・実装したWebサイトです。
React Routerによるページ分割、役割ごとのコンポーネントに整理、モーダルUIもコンポーネント化を行っています。

# デザインからReactへの実装

デザインデータには、Figma Communityで公開されている以下のテンプレートを利用しました。
[School Sound - simple website template for beginners for school](https://www.figma.com/community/file/1012561224815784091/school-sound-simple-website-template-for-beginners-for-school?q_id=7d1da0e5-b03b-4059-9004-efdfdf35891e)

・Figma Make でコード生成、そのコードをリファクタリング
・React Routerを用いたページ単位の構成整理
・画面を役割・責務ごとのコンポーネントに分離
・モーダルなどのUIも独立したコンポーネントとして実装

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
