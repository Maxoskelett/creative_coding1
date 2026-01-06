# creative_coding1
Wintersemester 2025/26 Creative Coding 1 MKB 1. Semester

## Ordnerstruktur / Folder Structure

Dieses Repository ist für eure Creative Coding Projekte vorgesehen. Ihr könnt mehrere Ordner aus eurem lokalen Laufwerk (z.B. C:) hier hochladen.

### Empfohlene Ordnerstruktur:
```
creative_coding1/
├── Projekt_01/
├── Projekt_02/
├── Projekt_03/
├── Übung_01/
├── Übung_02/
└── ...
```

## Anleitung: Mehrere Ordner vom C: Laufwerk hochladen

### Voraussetzungen
- Git muss installiert sein ([Git Download](https://git-scm.com/downloads))
- Repository wurde geklont oder geforkt

### Schritt-für-Schritt Anleitung

#### 1. Repository klonen (falls noch nicht geschehen)
```bash
git clone https://github.com/Maxoskelett/creative_coding1.git
cd creative_coding1
```

#### 2. Ordner von C: Laufwerk kopieren
Kopiere deine Projektordner aus deinem C: Laufwerk in das geklonte Repository:
```
C:\MeineProjekte\Projekt_01  →  creative_coding1\Projekt_01
C:\MeineProjekte\Projekt_02  →  creative_coding1\Projekt_02
```

Du kannst dies tun durch:
- Drag & Drop im Windows Explorer
- Kopieren und Einfügen
- Mit dem Befehl `xcopy` oder `robocopy` in der Kommandozeile

#### 3. Änderungen hinzufügen und committen
```bash
# Alle neuen Ordner hinzufügen
git add .

# Änderungen committen
git commit -m "Projekte hinzugefügt: Projekt_01, Projekt_02"
```

#### 4. Zum GitHub Repository hochladen
```bash
git push origin main
```

### Mehrere Ordner auf einmal hochladen

Um mehrere Ordner gleichzeitig hochzuladen:

```bash
# Kopiere alle deine Ordner ins Repository-Verzeichnis
# Dann:
git add Projekt_01/ Projekt_02/ Übung_01/
git commit -m "Mehrere Projekte und Übungen hinzugefügt"
git push origin main
```

### Tipps
- Verwende aussagekräftige Ordnernamen (z.B. "Projekt_01_Interaktive_Grafik")
- Halte jeden Ordner für ein einzelnes Projekt oder eine Übung
- Committe regelmäßig, um deinen Fortschritt zu sichern
- Nutze die `.gitignore` Datei, um temporäre oder unnötige Dateien auszuschließen

### Beispiel-Workflow für neue Projekte
```bash
# 1. Neuen Ordner erstellen oder von C: kopieren
cp -r /c/MeineProjekte/NeuesProjekt ./Projekt_04

# 2. Änderungen hinzufügen
git add Projekt_04/

# 3. Committen mit Beschreibung
git commit -m "Projekt 04: [Projektname] hinzugefügt"

# 4. Hochladen
git push origin main
```

## Hilfe und Support

Bei Problemen:
1. Überprüfe den Status: `git status`
2. Sieh dir die Änderungen an: `git diff`
3. Prüfe die Commit-Historie: `git log --oneline`

Falls Git-Fehler auftreten, stelle sicher dass:
- Du im richtigen Verzeichnis bist (`cd creative_coding1`)
- Du die neueste Version hast (`git pull`)
- Deine Git-Konfiguration korrekt ist (`git config --list`)
