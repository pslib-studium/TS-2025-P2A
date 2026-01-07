# TypeScript konzolová aplikace (šablona PSLIB)

Šablona pro **konzolovou aplikaci v TypeScriptu** – připravené skripty, hot-reload přes `tsx`, Prettier a ladění ve VS Code.

---

## Jak založit nový projekt

> Potřebujete **Node.js 18+**.

### Doporučený způsob vytvoření projektu
```
npm create @pslib/ts-console@latest moje-app
```
nebo pro automatickou instalaci závislostí
```
npm create @pslib/ts-console@latest moje-app -- --install
```
### První spuštění
```
cd moje-app
npm install
npm run dev
```

## Běžné příkazy

### Vývoj (hot-reload v terminálu)
```
npm run dev
```
### Jednorázové spuštění testů
```
npm test
```
### Spuštění testů s watch režimem
```
npm run test:watch
```
### Formátování (Prettier)
```
npm run format
```
## Překlad do Javascriptu 

Překlad proběhne do složky *dist/*
```
npm run build
```
Následné spuštění přeložené verze
```
npm start
```

## Ladění ve VS Code

### Hot-Reload
1. V terminálu spustíme *npm run dev:debug* (spustí app s Node inspectorem na portu 9229)
2. Ve VS Code stiskněte F5 a vyberte Attach (tsx).

### Jednorázové spuštění
1. F5 a vybereme jednu z předpřipravených konfigurací:
    - Run (ts-node) – spouští přímo .ts.
    - Run (compiled JS) – před spuštěním přeloží do dist/ a pustí .js.
Breakpointy fungují v obou režimech.

