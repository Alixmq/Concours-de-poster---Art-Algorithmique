# Concours-de-poster---Art-Algorithmique
Alix Marquer
Fonctionnalités du programme
1. Classe Drop
La classe Drop représente une goutte d’encre qui se déforme et interagit avec d'autres gouttes pour créer un effet visuel le "paper marbling":

Propriétés :

center : centre de la goutte, positionnée en x et y.
r : rayon de la goutte.
sommets : points qui forment le contour de la goutte, calculés pour simuler un cercle divisé en circleDetail segments.
couleur : couleur aléatoire assignée à chaque goutte à partir de la palette définie.

Méthodes :

- tine(x, z, c) : applique une déformation verticale (z) aux sommets de la goutte, dépendant de leur distance horizontale par rapport à un point de référence (x), simulant un effet d'onde.
- marble(other) : ajuste la position de chaque sommet en fonction de la distance à une autre goutte, créant un effet d'attraction ou de fusion entre les gouttes.
- show() : dessine la goutte sur la toile, utilisant sa couleur et son contour défini par les sommets.

2. Fonctions principales
- setup(): initialise le canevas et génère un ensemble de gouttes d'encre (drops) avec des positions, tailles et couleurs aléatoires.
- addInk(x, y, r): crée une nouvelle goutte d'encre et ajuste ses interactions avec les gouttes déjà présentes, appliquant des déformations pour simuler un mélange progressif.
- tineLine(xl, z, c): déforme aléatoirement certaines gouttes sur une ligne verticale, simulant un effet de propagation.
- draw(): rafraîchit le canevas en arrière-plan et affiche les gouttes avec leurs déformations actuelles.

Interaction utilisateur
Click souris : en cliquant, l’utilisateur peut introduire une onde de déformation supplémentaire (via tineLine) sur les gouttes à l’endroit du curseur.

Palette de couleurs
Le programme utilise une palette de quatre couleurs douces pour les gouttes d'encre, apportant une harmonie visuelle. Les couleurs sont tirées aléatoirement pour chaque goutte, créant un effet visuel cohérent.

Une partie ASCII Art a aussi été ajoutée en utilisant ascii_magic dans le notebook.

Explications :
Réflexion sur l’avenir de l’art et de l’autonomie créative : Avec la montée de l’intelligence artificielle, ce poster représente un futur où les machines possèdent une forme d'autonomie créative. Le robot en train de dessiner manuellement avec un crayon symbolise une vision où les machines adoptent, imitent, voire surpassent l’humain dans des domaines autrefois exclusifs, comme l’art. Le programmeur, créant à distance, symbolise quant à lui, la disparition progressive de l’humain de certains processus créatifs.
