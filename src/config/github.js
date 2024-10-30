export const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// Speficic repositories to fetch
export const GITHUB_REPOS = [
  {
    owner: "MatthieuLa",
    repo: "OCP3",
    customInfo: {
      title: "Booki, agence de voyage",
      context: "Formation OpenClassrooms intégrateur web - Projet 3",
      technologies: ["HTML", "CSS"],
      features: [
        "Implémenter une interface responsive avec HTML et CSS",
        "Installer un environnement de développement front-end",
        "Intégrer du contenu conformément à une maquette avec HTML et CSS",
      ],
    },
  },
  {
    owner: "MatthieuLa",
    repo: "OCP4",
    customInfo: {
      title: "Ohmyfood, menus de restaurants gastronomiques",
      context: "Formation OpenClassrooms intégrateur web - Projet 4",
      technologies: ["HTML", "SASS"],
      features: [
        "Intégrer une maquette en mobile-first",
        "Mettre en œuvre des animations CSS",
        "Versionner son projet avec Git et Github",
      ],
    },
  },
  {
    owner: "MatthieuLa",
    repo: "OCP6",
    customInfo: {
      title: "Portfolio de Sophie Bluel",
      context: "Formation OpenClassrooms intégrateur web - Projet 6",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Gérer les événements utilisateurs avec JavaScript",
        "Manipuler les éléments du DOM avec JavaScript",
        "Récupérer les données utilisateurs dans le JavaScript via des formulaires",
      ],
    },
  },
  {
    owner: "MatthieuLa",
    repo: "OCP7",
    customInfo: {
      title: "Kasa, location d'appartements",
      context: "Formation OpenClassrooms intégrateur web - Projet 7",
      technologies: ["HTML", "SASS", "React + Vite"],
      features: [
        "Initialiser une application avec Create React App",
        "Configurer la navigation entre les pages de l'application avec React Router",
        "Développer des éléments de l'interface d'un site web grâce à des composants React",
        "Mettre en œuvre des animations CSS",
        "Développer une interface web avec Sass",
      ],
    },
  },
  {
    owner: "MatthieuLa",
    repo: "OCP9",
    customInfo: {
      title: "Site onepage 724 events à débugger",
      context: "Formation OpenClassrooms intégrateur web - Projet 9",
      technologies: ["React dev tools", "Tests unitaires"],
      features: [
        "Débugger un site web grâce aux Chrome DevTools",
        "Rédiger un cahier de recette pour tester un site",
      ],
    },
  },
  {
    owner: "MatthieuLa",
    repo: "OCP10",
    customInfo: {
      title: "Argent Bank, implétation front-end",
      context: "Formation OpenClassrooms intégrateur web - Projet 10",
      technologies: ["React + Redux", "Swagger"],
      features: [
        "Afficher les données du back end sur l'interface via des appels API",
        "Configurer des routes API pour la communication client / serveur",
        "Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front",
      ],
    },
  },
];
