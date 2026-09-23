/* ==========================================================================
   JTCF — ATELIER · LE STRESS, MODE D'EMPLOI
   --------------------------------------------------------------------------
   Parti pris : on travaille les RÉFLEXES, jamais le vécu de chacun.
   Aucune question ne demande à qui que ce soit de se raconter, et aucune
   réponse ne juge une façon de réagir. L'atelier se termine sur un repère
   clair : quand ça dure et que ça déborde, on en parle à un professionnel.

   Les formats et les champs disponibles sont décrits en tête de quiz.js.
   ========================================================================== */

(function () {
  'use strict';
  var VF = JTCF_QUIZ.VF;
  var AA = ['ÇA AIDE', 'ÇA AGGRAVE'];

  JTCF_QUIZ.enregistrer('stress',

  /* ---- L'atelier ------------------------------------------------------- */
  {
    titre: 'Le stress, mode d\'emploi',
    icone: '🌬️',
    couleur: '#2C6E9B',
    questions: [

      /* ── MANCHE 1 · VRAI OU FAUX ─────────────────────────────────────── */
      { manche:1, type:'vf', emoji:'⚡',
        enonce:'Le stress est toujours une mauvaise chose.',
        reponses:VF, bonne:1,
        debat:'Qui a déjà été meilleur sous pression ?',
        verdict:'Non.',
        explication:'À petite dose et sur un temps court, il réveille : on est plus attentif, plus réactif. C\'est quand il s\'installe et ne redescend plus qu\'il devient un problème.',
        regle:'COURT, IL RÉVEILLE — LONG, IL ÉPUISE' },

      { manche:1, type:'vf', emoji:'😴',
        enonce:'Bien dormir la veille compte plus que réviser jusqu\'à deux heures du matin.',
        reponses:VF, bonne:0,
        debat:'Vous feriez quoi, la veille d\'un examen ?',
        verdict:'Oui.',
        explication:'Une nuit écourtée réduit la mémoire, l\'attention et la patience — exactement ce dont on a besoin le lendemain. Les deux dernières heures de révision rapportent presque toujours moins que deux heures de sommeil.',
        regle:'LA VEILLE, ON DORT' },

      { manche:1, type:'vf', emoji:'🌬️',
        enonce:'Respirer lentement, en allongeant l\'expiration, calme le corps en quelques minutes.',
        reponses:VF, bonne:0,
        debat:'Qui a déjà essayé, et ça a marché ?',
        verdict:'Oui.',
        explication:'Une expiration plus longue que l\'inspiration fait redescendre le rythme cardiaque. Ça ne règle pas le problème, mais ça rend la tête à nouveau disponible pour y réfléchir. Et ça se fait partout, sans que personne ne le voie.',
        regle:'J\'EXPIRE PLUS LONGTEMPS QUE J\'INSPIRE' },

      { manche:1, type:'vf', emoji:'💬',
        enonce:'Quand on est stressé, mieux vaut ne pas en parler pour ne pas y penser.',
        reponses:VF, bonne:1,
        debat:'En parler, ça amplifie ou ça allège ?',
        verdict:'Faux.',
        explication:'Mettre des mots réduit la charge, et souvent la personne en face relativise ce qui paraissait énorme. Le garder pour soi ne le fait pas disparaître : ça le fait tourner en boucle.',
        regle:'CE QUI EST DIT PÈSE MOINS LOURD' },

      { manche:1, type:'vf', emoji:'☕',
        enonce:'Un bon café aide à gérer le stress.',
        reponses:VF, bonne:1,
        debat:'Combien de cafés un jour d\'examen ?',
        verdict:'Plutôt le contraire.',
        explication:'La caféine accélère le cœur et accentue exactement les sensations désagréables du stress. Elle réveille, mais elle n\'apaise pas — et enchaîner les boissons énergisantes avant une épreuve est la pire idée du lot.',
        regle:'LA CAFÉINE RÉVEILLE, ELLE N\'APAISE PAS' },

      { manche:1, type:'vf', emoji:'🚶',
        enonce:'Bouger un peu — marcher, monter un escalier — fait retomber la tension.',
        reponses:VF, bonne:0,
        debat:'Dix minutes de marche, ça vous paraît sérieux ?',
        verdict:'Oui.',
        explication:'Le corps est préparé à agir : lui donner à faire quelque chose évacue ce trop-plein. Dix minutes de marche avant un entretien valent mieux que dix minutes à tourner en rond dans une salle d\'attente.',
        regle:'LE CORPS A BESOIN DE BOUGER' },

      { manche:1, type:'vf', emoji:'🎒',
        enonce:'Préparer ses affaires et repérer le trajet à l\'avance réduit vraiment le stress.',
        reponses:VF, bonne:0,
        debat:'Qu\'est-ce qui stresse le plus : l\'épreuve, ou le trajet ?',
        verdict:'Oui, beaucoup.',
        explication:'Une grande partie du stress d\'un jour important ne vient pas de l\'épreuve, mais de tout ce qui l\'entoure : le bus, le parking, le document oublié. Tout ce qui est réglé la veille est autant de moins à porter.',
        regle:'CE QUI EST PRÊT NE STRESSE PLUS' },

      { manche:1, type:'vf', emoji:'🩺',
        enonce:'Si le stress dure des semaines et empêche de dormir, il faut juste attendre que ça passe.',
        reponses:VF, bonne:1,
        debat:'À partir de quand on va voir quelqu\'un ?',
        verdict:'Non.',
        explication:'Un stress ponctuel se gère avec les réflexes de cet atelier. Quand ça s\'installe sur plusieurs semaines et que le sommeil ou l\'appétit en pâtissent, ce n\'est plus une question de technique : on en parle à son médecin, et au centre.',
        regle:'QUAND ÇA DURE, ON EN PARLE' },

      /* ── MANCHE 2 · ÇA AIDE OU ÇA AGGRAVE ? ──────────────────────────── */
      { manche:2, type:'vf', emoji:'🎒',
        titreCourt:'Le réflexe',
        enonce:'Préparer ses affaires et ses documents la veille au soir.',
        reponses:AA, bonne:0,
        debat:'Ça prend combien de temps, franchement ?',
        verdict:'Ça aide.',
        explication:'Dix minutes la veille contre une heure de panique le matin. C\'est le meilleur rapport effort/résultat de toute la liste.',
        regle:'DIX MINUTES LA VEILLE' },

      { manche:2, type:'vf', emoji:'📱',
        titreCourt:'Le réflexe',
        enonce:'Rester sur son téléphone jusqu\'à s\'endormir dessus.',
        reponses:AA, bonne:1,
        debat:'Qui fait ça la veille d\'un jour important ?',
        verdict:'Ça aggrave.',
        explication:'L\'écran retarde l\'endormissement et le fil d\'actualité relance la tête au moment où elle devrait se calmer. Poser le téléphone loin du lit est l\'un des gestes les plus efficaces, et l\'un des plus difficiles.',
        regle:'LE TÉLÉPHONE DORT AILLEURS' },

      { manche:2, type:'vf', emoji:'📝',
        titreCourt:'Le réflexe',
        enonce:'Écrire sur un papier tout ce qui inquiète, sans trier.',
        reponses:AA, bonne:0,
        debat:'Ça paraît simpliste — pourquoi ça marche ?',
        verdict:'Ça aide.',
        explication:'Tant que c\'est dans la tête, ça tourne et ça grossit. Sur le papier, la liste s\'avère presque toujours plus courte qu\'elle ne paraissait, et on voit enfin par quoi commencer.',
        regle:'CE QUI EST ÉCRIT ARRÊTE DE TOURNER' },

      { manche:2, type:'vf', emoji:'🚨',
        titreCourt:'Le réflexe',
        enonce:'Se répéter « il ne faut surtout pas que je rate ».',
        reponses:AA, bonne:1,
        debat:'On se dit quoi, alors ?',
        verdict:'Ça aggrave.',
        explication:'Cette phrase fixe l\'attention sur la catastrophe au lieu de la tâche. « Qu\'est-ce que je fais en premier ? » occupe la tête bien plus utilement.',
        regle:'JE PENSE À LA TÂCHE, PAS AU RATAGE' },

      { manche:2, type:'vf', emoji:'🚶',
        titreCourt:'Le réflexe',
        enonce:'Marcher dix minutes dehors avant un entretien.',
        reponses:AA, bonne:0,
        debat:'Arriver pile à l\'heure ou arriver en avance et marcher ?',
        verdict:'Ça aide.',
        explication:'On arrive avec le corps apaisé plutôt qu\'avec vingt minutes d\'attente à ressasser. Et ça règle du même coup le risque de retard.',
        regle:'ARRIVER EN AVANCE, ET MARCHER' },

      { manche:2, type:'vf', emoji:'🥤',
        titreCourt:'Le réflexe',
        enonce:'Enchaîner cafés et boissons énergisantes pour tenir.',
        reponses:AA, bonne:1,
        debat:'Ça tient combien de temps, ce carburant ?',
        verdict:'Ça aggrave.',
        explication:'Cœur qui s\'emballe, mains moites, sommeil décalé le soir : exactement les symptômes qu\'on cherchait à éviter. De l\'eau et un vrai repas font bien mieux le travail.',
        regle:'DE L\'EAU, ET UN VRAI REPAS' },

      /* ── MANCHE 3 · QUE FAIS-TU ? ────────────────────────────────────── */
      { manche:3, type:'choix', emoji:'💓',
        titreCourt:'Vingt minutes avant',
        enonce:'Votre entretien est dans vingt minutes. Le cœur s\'emballe, les idées s\'embrouillent.',
        reponses:[
          'Je relis mes notes en boucle jusqu\'au dernier moment',
          'Je sors marcher un peu et je respire lentement',
          'Je relis une fois mes trois points clés, puis je sors respirer'
        ],
        bonne:2, bareme:[50, 120, 150],
        debat:'Relire encore, ça apporte quoi à ce stade ?',
        verdict:'La troisième.',
        explication:'À vingt minutes, on n\'apprend plus rien : relire en boucle ne fait qu\'alimenter l\'angoisse. Mais un dernier coup d\'œil rassure. Trois points, puis de l\'air : on arrive posé et on a ses repères.',
        regle:'TROIS POINTS, PUIS DE L\'AIR' },

      { manche:3, type:'choix', emoji:'🌪️',
        titreCourt:'Tout en même temps',
        enonce:'Un dossier à rendre, un examen blanc, des soucis à la maison. Tout paraît urgent en même temps.',
        reponses:[
          'Je m\'y mets à fond sur tout, je verrai bien',
          'Je fais d\'abord le plus facile, pour me lancer',
          'J\'écris tout, je repère ce qui a une vraie date, et je commence par là'
        ],
        bonne:2, bareme:[40, 110, 150],
        debat:'Urgent et important, c\'est pareil ?',
        verdict:'La troisième.',
        explication:'Commencer par le plus facile n\'est pas idiot : ça débloque. Mais tout mélanger épuise sans rien avancer. Écrire, puis repérer ce qui a une vraie échéance, transforme une montagne en trois choses à faire.',
        regle:'J\'ÉCRIS, JE TRIE, JE COMMENCE' },

      { manche:3, type:'choix', emoji:'🤝',
        titreCourt:'Tu es témoin',
        enonce:'Quelqu\'un du groupe est visiblement à bout depuis plusieurs jours. Vous n\'êtes pas très proches.',
        reponses:[
          'Je ne dis rien, ça ne me regarde pas',
          'Je lui donne des conseils pour qu\'il s\'organise mieux',
          'Je lui demande simplement comment il va, sans insister s\'il ne veut pas en parler'
        ],
        bonne:2, bareme:[40, 80, 150],
        debat:'Qu\'est-ce qu\'on aimerait qu\'on nous dise, à sa place ?',
        verdict:'La troisième.',
        explication:'Une question simple, sans insistance, suffit souvent. Les conseils d\'organisation arrivent trop tôt et donnent l\'impression qu\'on n\'a pas été entendu. Et si la situation vous inquiète, vous pouvez en parler au formateur ou au CIP.',
        regle:'DEMANDER SUFFIT — CONSEILLER PEUT ATTENDRE' },

      /* ── MANCHE 4 · LE MYSTÈRE ───────────────────────────────────────── */
      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De quoi parle-t-on ?',
        indices:[
          'Il arrive avant l\'événement, pas pendant.',
          'Il accélère le cœur et coupe l\'appétit.',
          'Bien dosé, il rend plus vif le jour J.'
        ],
        reponses:['L\'épuisement', 'Le trac', 'La fatigue', 'La colère'],
        bonne:1,
        verdict:'Le trac.',
        explication:'Presque tout le monde l\'a, y compris les gens très expérimentés. Il n\'annonce pas un échec : il annonce que l\'événement compte. Savoir ça suffit déjà à le rendre moins inquiétant.',
        regle:'LE TRAC N\'ANNONCE PAS L\'ÉCHEC' },

      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De quoi parle-t-on ?',
        indices:[
          'Elle ne coûte rien et ne se voit pas.',
          'Elle se fait assis, debout, n\'importe où.',
          'Le secret tient dans une expiration plus longue.'
        ],
        reponses:['La respiration', 'La marche', 'La méditation', 'La pause'],
        bonne:0,
        verdict:'La respiration.',
        explication:'Quelques cycles suffisent à faire redescendre le rythme cardiaque. On peut le faire en salle d\'attente, dans le bus, juste avant d\'entrer — personne ne le remarque.',
        regle:'PARTOUT, ET INVISIBLE' },

      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De quoi parle-t-on ?',
        indices:[
          'Elle vide la tête sur le papier.',
          'Elle transforme une montagne en étapes.',
          'Elle montre ce qui est vraiment urgent — et ce qui ne l\'est pas.'
        ],
        reponses:['La pause', 'La liste', 'La discussion', 'L\'agenda'],
        bonne:1,
        verdict:'La liste.',
        explication:'Le plus bête des outils, et l\'un des plus efficaces. Tant que tout reste dans la tête, tout a la même taille et tout paraît urgent. Sur le papier, les proportions reviennent.',
        regle:'SUR LE PAPIER, ÇA REPREND SA TAILLE' }

    ],

    final: {
      titre: 'Ce qu\'on retient',
      regles: [
        ['⚡', 'Le stress n\'est pas l\'ennemi', 'Court, il réveille. Long, il épuise — c\'est la durée qui compte.'],
        ['🌬️', 'J\'expire plus longtemps', 'Quelques cycles suffisent, partout, sans que ça se voie.'],
        ['🚶', 'Je bouge un peu', 'Dix minutes de marche valent mieux que dix minutes à ressasser.'],
        ['📝', 'J\'écris ce qui tourne', 'Sur le papier, la liste est toujours plus courte que dans la tête.'],
        ['🎒', 'Je prépare la veille', 'Tout ce qui est prêt est autant de moins à porter.'],
        ['😴', 'Je dors', 'Deux heures de sommeil rapportent plus que deux heures de révision.'],
        ['💬', 'J\'en parle', 'Ce qui est dit pèse moins lourd. Et souvent, l\'autre relativise.'],
        ['🩺', 'Si ça dure, je consulte', 'Plusieurs semaines, le sommeil ou l\'appétit touchés : médecin, et le centre.']
      ],
      mot: 'Personne ne réagit pareil, et il n\'y a pas de bonne façon de stresser. Ces réflexes ne servent pas à ne plus rien ressentir — ils servent à garder la tête assez claire pour agir. Et quand ça dépasse, demander de l\'aide fait partie des réflexes.'
    }
  }
  ,
  /* ---- Ses manches ----------------------------------------------------- */
  {
    1: { titre: 'Vrai ou Faux',            sous: 'Huit idées reçues à trancher.' },
    2: { titre: 'Ça aide ou ça aggrave ?', sous: 'Six réflexes très courants.<br>Tous ne se valent pas.' },
    3: { titre: 'Que fais-tu ?',           sous: 'Trois situations.<br>Aucune réponse n\'est fausse — on en discute.' },
    4: { titre: 'Le mystère',              sous: 'Trois indices. Devinez de quoi on parle.<br>Plus vous trouvez tôt, plus ça rapporte.' }
  }

  );

})();
