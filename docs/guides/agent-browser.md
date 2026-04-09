# agent-browser — Ovládání prohlížeče z CLI

agent-browser je CLI nástroj pro automatizaci prohlížeče, navržený pro AI agenty. Umožňuje otevírat stránky, klikat, vyplňovat formuláře, dělat screenshoty — to vše z příkazové řádky.

Repozitář: https://github.com/vercel-labs/agent-browser

## Instalace

```bash
# 1. Nainstaluj CLI globálně
npm install -g agent-browser

# 2. Stáhni prohlížeč (Chrome se stáhne automaticky)
agent-browser install
```

Alternativy:

```bash
# macOS přes Homebrew
brew install agent-browser
agent-browser install

# Nebo bez globální instalace — jako projektová závislost
npm install agent-browser
agent-browser install
```

## Instalace Skills pro Claude Code

Skills naučí AI agenta používat agent-browser automaticky:

```bash
npx skills add vercel-labs/agent-browser
```

## Jak to funguje

Základní workflow má 3 kroky:

1. **Otevři stránku** — `agent-browser open <url>`
2. **Zjisti co je na stránce** — `agent-browser snapshot -i` (vrátí interaktivní prvky s referencemi jako `@e1`, `@e2`)
3. **Interaguj** — použij reference z kroku 2 (např. `agent-browser click @e1`)

## Základní příkazy

### Navigace

```bash
agent-browser open https://example.com   # Otevři stránku
agent-browser back                        # Zpět
agent-browser forward                     # Vpřed
agent-browser reload                      # Znovu načíst
agent-browser close                       # Zavři prohlížeč
```

### Snapshot — zjisti co je na stránce

```bash
agent-browser snapshot        # Celý strom přístupnosti
agent-browser snapshot -i     # Jen interaktivní prvky (doporučeno)
agent-browser snapshot -c     # Kompaktní výstup
```

### Interakce s prvky

```bash
agent-browser click @e1              # Klikni
agent-browser fill @e2 "text"        # Vymaž a napiš
agent-browser type @e2 "text"        # Piš bez mazání
agent-browser hover @e1              # Najeď myší
agent-browser select @e1 "value"     # Vyber z dropdownu
agent-browser check @e1              # Zaškrtni checkbox
agent-browser press Enter             # Stiskni klávesu
agent-browser scroll down 500         # Scrolluj dolů
```

### Získání informací

```bash
agent-browser get text @e1            # Text prvku
agent-browser get value @e1           # Hodnota inputu
agent-browser get attr @e1 href       # Atribut prvku
agent-browser get title               # Titulek stránky
agent-browser get url                 # Aktuální URL
```

### Screenshoty

```bash
agent-browser screenshot              # Screenshot do stdout
agent-browser screenshot stranka.png  # Ulož do souboru
agent-browser screenshot --full       # Celá stránka (i mimo viewport)
```

### Čekání

```bash
agent-browser wait @e1                # Počkej na prvek
agent-browser wait 2000               # Počkej 2 sekundy
agent-browser wait --text "Hotovo"    # Počkej na text
agent-browser wait --url "**/dashboard"  # Počkej na URL
```

## Příklad: Vyplnění formuláře

```bash
# 1. Otevři formulář
agent-browser open https://example.com/form

# 2. Zjisti co tam je
agent-browser snapshot -i
# Výstup: textbox "Email" [ref=e1], textbox "Heslo" [ref=e2], button "Odeslat" [ref=e3]

# 3. Vyplň a odešli
agent-browser fill @e1 "user@example.com"
agent-browser fill @e2 "heslo123"
agent-browser click @e3

# 4. Zkontroluj výsledek
agent-browser wait --text "Úspěch"
agent-browser screenshot vysledek.png
```

## Headed mód — viditelný prohlížeč

Pokud chceš vidět co agent dělá, přidej `--headed`:

```bash
agent-browser --headed open https://example.com
```

## Tipy

- Po každé navigaci nebo kliknutí znovu spusť `snapshot -i` — reference (`@e1`) se mění
- `snapshot -i` je rychlejší a přehlednější než plný `snapshot`
- Pro ladění použij `agent-browser errors` (chyby stránky) a `agent-browser console` (konzole)
- Pro nahrávání videa: `agent-browser record start demo.webm` → akce → `agent-browser record stop`
