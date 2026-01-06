# Quick Reference: Ordner vom C: Laufwerk hochladen

## Schnellstart (für Windows)

### 1. Repository klonen (einmalig)
```cmd
git clone https://github.com/Maxoskelett/creative_coding1.git
cd creative_coding1
```

### 2. Ordner kopieren
Öffne zwei Fenster im Windows Explorer:
- **Fenster 1**: Dein C: Laufwerk (z.B. `C:\MeineProjekte\`)
- **Fenster 2**: Dein geklontes Repository (z.B. `C:\Users\DeinName\creative_coding1\`)

Ziehe deine Ordner per Drag & Drop von Fenster 1 nach Fenster 2.

### 3. Hochladen
```cmd
git add .
git commit -m "Meine Projekte hinzugefügt"
git push
```

## Häufige Kommandos

### Status prüfen
```cmd
git status
```

### Spezifische Ordner hinzufügen
```cmd
git add Projekt_01/
git add Projekt_02/
git commit -m "Projekt 1 und 2 hinzugefügt"
git push
```

### Neueste Version vom Server holen
```cmd
git pull
```

### Änderungen ansehen
```cmd
git diff
```

## Beispiel-Kommandozeile Session
```cmd
C:\> cd creative_coding1
C:\creative_coding1> git status
C:\creative_coding1> git add Projekt_01/
C:\creative_coding1> git commit -m "Projekt 1: Erste interaktive Grafik"
C:\creative_coding1> git push
```

## Problembehebung

### "Permission denied" Fehler
→ Stelle sicher, dass du bei GitHub angemeldet bist

### "Repository not found" Fehler
→ Prüfe die URL: `git remote -v`

### Merge-Konflikte
```cmd
git pull
# Konflikte lösen
git add .
git commit -m "Konflikte gelöst"
git push
```

## Windows-spezifische Tipps

### Ordner per Kommandozeile kopieren
```cmd
xcopy C:\MeineProjekte\Projekt_01 creative_coding1\Projekt_01\ /E /I
```

### Mit robocopy (schneller für große Ordner)
```cmd
robocopy C:\MeineProjekte\Projekt_01 creative_coding1\Projekt_01 /E
```

### Pfade mit Leerzeichen
Verwende Anführungszeichen:
```cmd
xcopy "C:\Meine Projekte\Projekt 01" "creative_coding1\Projekt_01\" /E /I
```
