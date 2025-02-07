# Concours-de-poster---Art-Algorithmique

# 💧 Simulation de Marbrure d'Encre 🎨

## 🌟 Présentation
Projet de simulation d'effet de marbrure sur papier avec une classe `Drop` créant des gouttes d'encre dynamiques et interactives.

## 🔬 Classe : Drop

### 📍 Propriétés
- `center` : Coordonnées (x, y) du centre de la goutte
- `r` : Rayon de la goutte
- `sommets` : Points définissant le contour de la goutte
- `couleur` : Couleur aléatoire de la palette

### 🛠 Méthodes
- `tine(x, z, c)` : Déformation verticale des vertex
- `marble(other)` : Ajustement des positions selon la proximité des gouttes
- `show()` : Rendu de la goutte sur le canevas

## 🚀 Fonctions Principales
- `setup()` : Initialisation du canevas
- `addInk(x, y, r)` : Création et gestion des interactions de gouttes
- `tineLine(xl, z, c)` : Déformations aléatoires sur ligne verticale
- `draw()` : Actualisation et affichage des gouttes

## 🖱️ Interaction Utilisateur
- Clic Souris : Onde de déformation au point de clic

## 🎨 Palette de Couleurs
Quatre couleurs douces pour une harmonie visuelle.

## 🌈 Fonctionnalités Bonus
- Art ASCII avec `ascii_magic`

## 🔗 Dépendances
- Processing 
- ascii_magic
Alix Marquer
