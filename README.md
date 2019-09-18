# Openclassrooms-P3

Concevez une carte interactive de location de vélos

## Énoncé

Vous devez développer une Application simulant la réservation de vélos dans une ville au choix. Ces vélos sont répartis dans de nombreuses stations dans la ville. L'utilisateur doit pouvoir réserver un vélo depuis son navigateur (à condition qu'il reste des vélos disponibles à la station !). La réservation est alors temporairement enregistrée sur le navigateur du visiteur.

Cette application doit notamment, en s'appuyant sur JavaScript, afficher une carte avec la liste des stations de location de vélos disponibles dans la ville. 

## Instructions

- Diaporama

Vous devez afficher en haut de la page un diaporama de photos et de textes expliquant le fonctionnement de l'application. Le diaporama passe automatiquement à la diaporama suivante toutes les 5 secondes, il réagit également au clavier avec les touches gauche et droite pour reculer et avancer manuellement. L’utilisateur peut toutefois choisir de mettre le diaporama en pause. 

- Carte de vélo

En-­dessous du diaporama se trouve une carte affichant en temps réel la liste des stations de location de vélos ainsi que leur disponibilité.  La localisation de toutes les stations de vélos est affichée à l’aide de marqueurs.

La localisation et l'état de chaque station (ouverte, en travaux, combien de vélos et de places sont disponibles, etc.) est fourni via la plateforme OpenData de JC Decaux et s'affiche au click sur un marqueur.

- Réservation d'un vélo

Il doit être possible de réserver un vélo disponible à la station sélectionnée en :

indiquant son nom et son prénom,
signant dans un champ libre implémenté à l’aide de l’API HTML5 Canvas. 
Une fois la réservation validée,  un vélo est marqué comme réservé à cette station.
Pour ce projet, la réservation ne sera pas communiquée à un serveur. Seul le navigateur de l'utilisateur "retiendra" que le vélo a été réservé. Les données de réservation seront stockées dans le navigateur à l’aide de l’API Web Storage et affichées en dessous du panneau. L'état de la réservation (s’il y en a une) est ainsi affiché, avec un décompte dynamique du temps restant avant expiration de la réservation.

Une réservation expire automatiquement au bout de 20 minutes et également lorsque le navigateur web se referme.
Le nom et le prénom sont toutefois conservés par le navigateur pour préremplir le formulaire de réservation lors d'un prochain usage, même si le navigateur a été fermé. 
Il ne peut y avoir qu'une réservation à la fois. Si une nouvelle réservation a lieu, elle remplace la précédente.

## Contraintes techniques

Aucun plugin jQuery (ou autre) ne doit être utilisé pour la logique du diaporama. Vous développerez donc le diaporama en entier vous-mêmes.

Le code JavaScript doit entièrement être conçu en programmation orientée objet.

Le code doit exploiter une API cartographique et l'API temps réel de API JCDecaux. Il doit également utiliser les API Web Storage et Canvas.

## Ressources complémentaires

En plus des cours du parcours, vous pouvez consulter des ressources extérieures pour vous aider. Par exemple, la documentation du Mozilla Developer Network sur l’élément 'canvas'.

## Livrables attendus

Code source complet (HTML, CSS et JavaScript) de l'application et Support de présentation de la soutenance 

## Soutenance

Pour cette soutenance,Dans un premier temps vous vous positionnerez comme un développeur présentant son travail à son CTO, chef de projet ou responsable dans l’entreprise (selon le choix de votre mentor), pendant 15 minutes.

Dans un second temps vous utiliserez votre support de présentation pour présenter le rôle de développeur Front-End pendant 10 minutes.

Enfin,  votre évaluateur reprendra pleinement son rôle de validateur pour un échange Questions/Réponses compris entre 5 et 10 minutes.

## Compétences évaluées

- Récupérer des données de formulaires en utilisant le langage JavaScript

- Faire des requêtes HTTP en langage JavaScript

- Créer des objets simples en JavaScript, contenant des méthodes et des propriétés

- Ecrire un code source lisible
