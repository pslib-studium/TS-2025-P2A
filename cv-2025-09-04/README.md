# Cvičení 4.9.2025

Příklad použití:

## 1. Stažení repozitáře
Naklonujte repozitář do svého počítače:

```
git clone https://github.com/pslib-studium/TS-2025-P2A.git
````

Poté vstupte do složky:
````
cd TS-2025-P2A/cv-2025-09-04
````
Ve složce cv-2025-09-04 nainstalujte všechny potřebné balíčky:
````
npm install
````
3. Spuštění programu

Máte několik možností:

Spustit přímo pomocí ts-node:
````
npx ts-node index.ts
````
Spustit s podporou automatického restartu při změnách:
````
npm run dev
````
Přeložit TypeScript do JavaScriptu a pak spustit:
````
npm run build
node index.js
````