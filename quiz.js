/* ==========================================================================
   JTCF — Ateliers : le moteur et la liste des ateliers
   --------------------------------------------------------------------------
   Ce fichier ne contient AUCUNE question. Chaque atelier vit dans son propre
   fichier et s'inscrit tout seul ici.

   ► POUR AJOUTER UN ATELIER — deux gestes, rien d'autre :
       1. déposer son fichier sur GitHub
       2. ajouter son nom dans la liste FICHIERS ci-dessous
     Les ateliers déjà en place ne sont jamais touchés.

   ► NOMS DE FICHIERS : huit caractères maximum avant le point.
     Au-delà, Windows les raccourcit de lui-même en ATELIE~1.JS au
     téléchargement, et le fichier devient introuvable une fois déposé.

   --------------------------------------------------------------------------
   FORMATS DE QUESTION (champ « type »)
     'vf'       vrai ou faux          → deux réponses
     'choix'    que fais-tu ?         → trois propositions, on en discute
     'mystere'  la devinette          → trois indices, puis on devine

   CHAMPS D'UNE QUESTION
     manche       numéro de la manche (1, 2, 3…)
     emoji        l'illustration affichée en grand
     enonce       l'affirmation ou la situation
     reponses     les propositions
     bonne        le numéro de la bonne — ou de la plus solide (0 = la première)
     bareme       facultatif : les points de CHAQUE proposition, quand aucune
                  réponse n'est vraiment fausse (manche « Que fais-tu ? »)
     verdict      la chute, en gras, juste après la révélation
     explication  le développement
     regle        le rappel affiché en bas (facultatif)
     debat        la relance à poser à voix haute avant de révéler
     titreCourt   un intitulé de situation affiché au-dessus (facultatif)
     indices      pour 'mystere' uniquement : les trois indices
   ========================================================================== */

(function (global) {
  'use strict';

  /* ══ LA LISTE DES ATELIERS ══════════════════════════════════════════════
     L'ordre ici est l'ordre de la liste déroulante au lancement.            */
  var FICHIERS = [
    'quizvie.js',     // 🤝  Le Grand Quiz des Règles de Vie
    'quizarna.js'     // 🎣  Les arnaques en ligne
  ];

  /* ---- Rien à modifier en dessous --------------------------------------- */

  var CATALOGUE = {};
  var MANCHES = {};
  var ORDRE = [];      // l'ordre d'arrivée, donc celui de la liste ci-dessus

  // Chaque fichier d'atelier appelle cette fonction pour s'inscrire.
  // Le nom du fichier n'a aucune importance : c'est l'identifiant qui compte.
  function enregistrer(id, atelier, manches) {
    if (!CATALOGUE[id]) ORDRE.push(id);
    CATALOGUE[id] = atelier;
    MANCHES[id] = manches || {};
  }

  function liste() {
    return ORDRE.map(function (id) {
      var q = CATALOGUE[id];
      return { id: id, titre: q.titre, icone: q.icone, couleur: q.couleur, nb: q.questions.length };
    });
  }

  function get(id) { return CATALOGUE[id] || null; }

  function manche(idQuiz, numero) {
    var m = MANCHES[idQuiz];
    return (m && m[numero]) || null;
  }

  global.JTCF_QUIZ = {
    CATALOGUE: CATALOGUE,
    MANCHES: MANCHES,
    VF: ['VRAI', 'FAUX'],
    AP: ['C\'EST NORMAL', 'C\'EST UNE ARNAQUE'],
    enregistrer: enregistrer,
    liste: liste,
    get: get,
    manche: manche,
    pret: null
  };

  /* ---- Chargement des fichiers d'atelier --------------------------------
     Un atelier absent ou mal écrit n'empêche pas les autres de fonctionner :
     on le saute et on continue. Mieux vaut un atelier manquant qu'une salle
     devant un écran noir.                                                   */
  global.JTCF_QUIZ.pret = new Promise(function (fini) {
    var restants = FICHIERS.length;
    if (!restants) return fini();
    FICHIERS.forEach(function (f) {
      var s = document.createElement('script');
      s.src = f;
      s.onload = s.onerror = function () { if (--restants === 0) fini(); };
      document.head.appendChild(s);
    });
  });

})(window);
