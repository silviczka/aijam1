# Update AGENTS.md

> **Skill verze:** Tento prompt je dostupný jako Claude Code skill — spusť `/update-docs` v Claude Code.
> Skill soubor: `.claude/skills/update-docs/SKILL.md`

Prompt pro AI agenta, který analyzuje codebase a vygeneruje/aktualizuje soubor `AGENTS.md`.

---

## Prompt

```
Analyzuj tento repozitář a vytvoř (nebo aktualizuj) soubor AGENTS.md v kořenovém adresáři projektu.

AGENTS.md je univerzální dokumentační soubor pro AI kódovací agenty (Claude Code, GitHub Copilot, Cursor, Gemini CLI, Windsurf aj.). Slouží jako "README pro agenty" — stručný, přesný a akční.

## Postup analýzy

Postupuj krok po kroku:

1. **Prozkoumej strukturu** — projdi adresářový strom, identifikuj entry pointy, konfigurační soubory a klíčové moduly
2. **Zjisti tech stack** — přečti package.json, tsconfig, vite.config, eslint.config a další konfigurační soubory; zapiš přesné verze
3. **Porozuměj architektuře** — sleduj datový tok od entry pointu přes komponenty po výstup; identifikuj vzory a návrhová rozhodnutí
4. **Zdokumentuj příkazy** — ověř všechny npm scripty a zapiš je včetně toho, co přesně dělají
5. **Zapiš konvence** — zjisti coding style z ESLint konfigurace, TypeScript nastavení a existujícího kódu
6. **Sestav výstup** — slouč zjištění do výsledného AGENTS.md

## Požadované sekce

Výstupní AGENTS.md musí obsahovat tyto sekce (v tomto pořadí):

### 1. Přehled projektu
- Jedna věta popisující účel projektu
- Tech stack s přesnými verzemi (např. "React 19.2, TypeScript 6, Vite 8")
- Typ aplikace (SPA, SSR, API, knihovna...)

### 2. Příkazy
- Tabulka se všemi dostupnými npm scripty
- Formát: `příkaz` | co dělá | kdy použít

### 3. Struktura projektu
- Strom klíčových adresářů a souborů (max 15-20 položek)
- U každé položky krátký popis účelu

### 4. Architektura
- Tok dat od entry pointu po renderování
- Klíčová návrhová rozhodnutí (proč NE routing, proč NE state management...)
- Vzory použité v kódu

### 5. Konvence
- TypeScript pravidla (strict mode, import type...)
- CSS přístup (framework, custom properties, nesting...)
- Jeden krátký code snippet jako ukázka preferovaného stylu

### 6. Hranice
Tři úrovně:
- ✅ Vždy dělej (povinné kroky před commitem, testy...)
- ⚠️ Nejdřív se zeptej (změny konfigurace, nové závislosti...)
- 🚫 Nikdy nedělej (commitování secrets, mazání vendor souborů...)

## Pravidla pro výstup

- Maximálně 120 řádků — stručnost je priorita
- Žádné duplicity s existujícím CLAUDE.md — AGENTS.md doplňuje, nenahrazuje
- Pokud CLAUDE.md existuje, přečti ho a vynech informace, které už obsahuje
- Pouze fakta zjištěná z kódu — žádné domněnky ani vymyšlené informace
- Předpoklady označ jako "Poznámka:"
- Používej absolutní cesty relativně ke kořenu repozitáře (src/main.tsx, ne ./src/main.tsx)
- Piš anglicky (AGENTS.md je určen pro mezinárodní AI agenty)

## Aktualizace CLAUDE.md

Po vytvoření/aktualizaci AGENTS.md zkontroluj CLAUDE.md a zajisti, že na začátku (před první sekcí) obsahuje referenci:

@AGENTS.md

Tato @ reference zajistí, že Claude Code automaticky načte obsah AGENTS.md jako součást kontextu.
```

## Použití

Tento prompt vlož do AI agenta s přístupem k repozitáři. Agent by měl mít možnost číst soubory a zapisovat do `AGENTS.md`.

Doporučené spuštění v Claude Code:
```bash
# Zkopíruj prompt výše a vlož ho jako instrukci
```

## Kdy aktualizovat

- Po přidání nové závislosti nebo nástroje
- Po změně architektury (přidání routeru, state managementu...)
- Po úpravě build pipeline nebo deployment procesu
- Po změně konvencí (nová ESLint pravidla, TypeScript konfigurace...)
