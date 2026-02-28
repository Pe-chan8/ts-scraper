# ts-scraper

TypeScript + Node.js の **fetch API** でHTMLを取得し、cheerioでDOM解析して要素を抽出する
スクレイピング学習用プロジェクトです。

---

## 技術スタック

- Node.js（v18+ 推奨：fetchが標準で使える）
- TypeScript
- fetch API
- cheerio（DOM解析に使用）

---

## できること

- 指定URLからHTMLを取得（fetch）
- HTMLを解析して要素を抽出（cheerio など）
- 抽出結果を整形して表示（console.log）

---

## 処理フロー

HTTPリクエスト（fetch）  
↓  
HTML取得（response.text）  
↓  
DOM解析（cheerio）  
↓  
要素抽出  
↓  
データ整形  

---

## セットアップ

```bash
npm install
