# JS-360-miniapp
Mini APP en javascript

# Information

- Une mini-app minimaliste fait entièrement de A à Z.
- Utilisation de CDN pour VueJS
- Elle affiche un tableau qui contient les données stockées dans un JSON.
- On peux y consulter un produit en détail en cliquant sur la ligne.

# Utilisation

Essai en ligne en utilisant ce lien : https://falaxir.fr/JS-360-miniapp/

Voici l'interface : (Elle pourrais subir des modifications)

![alt text](https://github.com/Falaxir/JS-360-miniapp/blob/master/Example-app.png?raw=true)

- On peux y effectuer une recherche d'un nom en particulier.
- Ainsi que trier les résultats par ordre de prix croissant/décroissant
- Cliquer sur une ligne ou une case du produit affiche la liste détaillée
- Bouton pour acceder au dernier produit consulté

# Languages :

- VueJS (2.6.11)
- Javascript
- jquery (3.5.1)

# Objectifs :

## Obligatoire

- Affiche une liste, puis une page pour chaque Item.

- Afficher une liste des items avec un filtre par prix/croissant/décroissant et une recherche par nom de produit.

- Stocke le JSON en asset dans l’architecture de l’appli elle-même.

- Localstorage pour se souvenir de la dernière fiche consultée.
 
- 2 pages : une vue liste et une vue détail produit, d’une recherche et d’un filtre par prix.

## Optionel

- L'application doit etre facilement modifiable (pour ajouter de nouvelles données avec de nouvelles colones, nouvelles lignes, ...)
- Séparer le travail dans plusieurs fonctions clefs (Eviter les fonctions trop longues et pas claires)
- Commenter les fonctions pour savoir quel tache est faite pour cette fonction.
- Application Légère et simple (d'ou l'utilisation de CDN)

# Roadmap

Liste des étapes :

- Consultation des enjeux techniques (quel language spécifique à utiliser, ...)
- Test spécifiques des fonctions essentielles (obtenir le JSON, Tableau)
- Ajout d'une interface basique (Tableau, puis barre de recherche, puis filtre prix)
- Lier les interfaces et les assembler pour former un site.
- Netoyage du code, ajout de l'aide pour modification du code.
- Amélioration de l'interface.

# Edition

Utiliser de préférence `Visual Studio Code` avec l'extension `Live Server` pour le serveur WEB

# Ajouter une colonne :

Pour ajouter une colonne, suivez les instructions :

- Ajouter dans le fichier `list.json` le titre de la nouvelle colonne du tableau
- Ajouter dans la variable `Table_Title` le titre de la nouvelle colonne
- Ajouter dans la fonction `get_product_page` le titre de la nouvelle colonne (ex : `+ "&newcol=" + value.newcol`)
- Ajouter dans le fichier `product.html` ajouter une `div` avec le nom de la nouvelle colonne (Editer le fichier `product.css` pour editer le style)
- Ajouter dans la fonction `title_get_product` le titre de la nouvelle colonne et le nom de votre `div` (défini précédament)

# Ce qui n'est pas présent actuellement mais en cours de développement :

- Les animations
- Ameliorer l'interface
- Agrandir l'interface si l'ecran est plus grand que celle-ci