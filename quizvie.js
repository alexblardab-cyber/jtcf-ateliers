/* ==========================================================================
   JTCF — ATELIER · LE GRAND QUIZ DES RÈGLES DE VIE
   --------------------------------------------------------------------------
   Ce fichier ne contient QUE cet atelier. Pour le modifier, on ne touche à
   rien d'autre. Pour en créer un nouveau : on recopie ce fichier, on change
   l'identifiant de la première ligne et le contenu, puis on ajoute le nom du
   fichier dans la liste de quiz.js.

   Les formats et les champs disponibles sont décrits en tête de quiz.js.
   ========================================================================== */

(function () {
  'use strict';
  var VF = JTCF_QUIZ.VF;     // ['VRAI', 'FAUX']

  JTCF_QUIZ.enregistrer('regles-de-vie',

  /* ---- L'atelier ------------------------------------------------------- */
  {
    titre: 'Le Grand Quiz des Règles de Vie',
    icone: '🤝',
    couleur: '#2C6E9B',
    questions: [

      /* ── MANCHE 1 · VRAI OU FAUX ─────────────────────────────────────── */
      { manche:1, type:'vf', emoji:'⏰',
        enonce:'Un retard de 10 minutes, ce n\'est pas grave, ça ne se voit pas.',
        reponses:VF, bonne:1,
        debat:'Dix minutes, c\'est beaucoup ou pas ?',
        verdict:'Ça se voit toujours.',
        explication:'L\'émargement fait foi. Et 10 minutes sur 20 jours, cela représente une journée entière de formation perdue.',
        regle:'RÈGLE 1 — J\'arrive à l\'heure' },

      { manche:1, type:'vf', emoji:'📞',
        enonce:'Si je suis absent, je dois prévenir même si j\'ai une très bonne raison.',
        reponses:VF, bonne:0,
        debat:'Une bonne raison, ça dispense de prévenir ?',
        verdict:'Exactement.',
        explication:'C\'est le fait de prévenir qui compte, pas la raison. Un justificatif régularise, il ne remplace pas l\'information.',
        regle:'RÈGLE 1 — Et sinon, je préviens avant' },

      { manche:1, type:'vf', emoji:'📱',
        enonce:'Mon téléphone peut rester sur la table s\'il est en mode silencieux.',
        reponses:VF, bonne:1,
        debat:'Silencieux, mais posé devant soi : ça change quoi ?',
        verdict:'Raté !',
        explication:'Même éteint, il capte l\'attention. Rangé dans le sac, on redevient vraiment disponible pour le groupe.',
        regle:'RÈGLE 2 — Je range mon téléphone' },

      { manche:1, type:'vf', emoji:'🙈',
        enonce:'Pendant un travail de groupe, regarder son téléphone sous la table ne pénalise que moi.',
        reponses:VF, bonne:1,
        debat:'Qui paie vraiment l\'addition ?',
        verdict:'Pas tout à fait…',
        explication:'Les autres membres du groupe portent le travail à votre place. Et sous la table, ça se voit toujours.',
        regle:'RÈGLE 2 — Je range mon téléphone' },

      { manche:1, type:'vf', emoji:'🙋',
        enonce:'Quand je n\'ai pas compris une consigne, mieux vaut demander tout de suite.',
        reponses:VF, bonne:0,
        debat:'Qu\'est-ce qui empêche de demander sur le moment ?',
        verdict:'Tout juste !',
        explication:'Mieux vaut une question maintenant qu\'un exercice entier à refaire ensuite.',
        regle:'RÈGLE 7 — Je participe' },

      { manche:1, type:'vf', emoji:'💭',
        enonce:'Poser une question qui paraît bête fait perdre du temps au groupe.',
        reponses:VF, bonne:1,
        debat:'Qui a déjà renoncé à poser une question ?',
        verdict:'Au contraire !',
        explication:'La question que vous posez, trois autres se la posaient sans oser. Elle fait gagner du temps à tout le monde.',
        regle:'RÈGLE 7 — Je participe et j\'aide' },

      { manche:1, type:'vf', emoji:'🤫',
        enonce:'Commenter à voix basse pendant qu\'un collègue présente son travail, ça ne dérange personne.',
        reponses:VF, bonne:1,
        debat:'Et quand c\'est vous qui présentez ?',
        verdict:'Si, beaucoup.',
        explication:'Celui qui présente prend un risque. Les messes basses le déstabilisent et découragent les suivants.',
        regle:'RÈGLE 3 — J\'écoute avant de parler' },

      { manche:1, type:'vf', emoji:'💬',
        enonce:'Bavarder au fond de la salle, ça ne gêne que mes voisins immédiats.',
        reponses:VF, bonne:1,
        debat:'Jusqu\'où porte une conversation à deux ?',
        verdict:'Bien plus loin que ça.',
        explication:'Le bruit de fond oblige le formateur à forcer la voix et couvre les questions des autres. Une conversation à deux peut gêner douze personnes.',
        regle:'RÈGLE 3 — Une seule personne parle à la fois' },

      { manche:1, type:'vf', emoji:'🙊',
        enonce:'Chuchoter la réponse à son voisin pendant une consigne, c\'est de l\'entraide.',
        reponses:VF, bonne:1,
        debat:'Aider, oui — mais à quel moment ?',
        verdict:'Pas à ce moment-là.',
        explication:'Pendant la consigne, ça coupe l\'écoute de deux personnes au lieu d\'une. L\'entraide est précieuse — mais après la consigne, pas pendant.',
        regle:'RÈGLE 3 — J\'écoute avant de parler' },

      { manche:1, type:'vf', emoji:'👥',
        enonce:'Un mot d\'un collègue pour calmer le bavardage vaut souvent mieux qu\'un rappel à l\'ordre du formateur.',
        reponses:VF, bonne:0,
        debat:'Vous le diriez, vous ?',
        verdict:'Tout à fait.',
        explication:'Venant d\'un pair, le rappel passe mieux et n\'interrompt pas la séance. C\'est ce qui distingue un groupe qui s\'autorégule d\'un groupe qu\'il faut tenir.',
        regle:'RÈGLE 7 — Je participe et j\'aide' },

      { manche:1, type:'vf', emoji:'🤝',
        enonce:'Expliquer à quelqu\'un plutôt que lui souffler la réponse, ça aide les deux.',
        reponses:VF, bonne:0,
        debat:'Qui apprend le plus : celui qui explique ou celui qui écoute ?',
        verdict:'Bien vu !',
        explication:'Celui qui explique consolide ce qu\'il sait, celui qui écoute apprend vraiment.',
        regle:'RÈGLE 7 — Je participe et j\'aide' },

      { manche:1, type:'vf', emoji:'📒',
        enonce:'Demander à son voisin de partager son classeur quand on a oublié le sien, c\'est acceptable.',
        reponses:VF, bonne:0,
        debat:'Demander de l\'aide, c\'est avouer une faiblesse ?',
        verdict:'Oui.',
        explication:'L\'oubli arrive. Chercher une solution plutôt que rester bloqué, c\'est exactement le bon réflexe.',
        regle:'RÈGLE 7 — Je participe et j\'aide' },

      { manche:1, type:'vf', emoji:'🤐',
        enonce:'La confidentialité s\'arrête à la porte : en pause, on peut en parler librement.',
        reponses:VF, bonne:1,
        debat:'Qu\'est-ce qu\'on n\'oserait plus dire ici sans cette règle ?',
        verdict:'Surtout pas !',
        explication:'C\'est la règle la plus fragile. Il suffit d\'une confidence répétée en pause pour que le groupe se referme durablement.',
        regle:'RÈGLE 6 — Je garde ce qui se dit ici' },

      { manche:1, type:'vf', emoji:'🧹',
        enonce:'Ranger sa table et jeter ses déchets en partant, c\'est le travail de l\'agent d\'entretien.',
        reponses:VF, bonne:1,
        debat:'C\'est le travail de qui, au juste ?',
        verdict:'Eh non !',
        explication:'L\'agent d\'entretien passe l\'aspirateur et vide les poubelles : il n\'est pas là pour ramasser nos gobelets. On laisse la salle comme on aimerait la trouver.',
        regle:'RÈGLE 5 — Je prends soin du lieu' },

      { manche:1, type:'vf', emoji:'🚰',
        enonce:'Signaler un sanitaire hors d\'usage ou un appareil cassé fait partie des règles de vie.',
        reponses:VF, bonne:0,
        debat:'Pourquoi on ne signale pas, en général ?',
        verdict:'Tout à fait.',
        explication:'Signalé le jour même, c\'est réparé dans la semaine. Signalé par personne, ça dure un mois et tout le monde s\'en plaint.',
        regle:'RÈGLE 5 — Et je signale ce qui est cassé' },

      { manche:1, type:'vf', emoji:'👔',
        enonce:'Les règles de vie s\'appliquent aussi au formateur.',
        reponses:VF, bonne:0,
        debat:'Une règle qui ne vaut que pour certains, ça s\'appelle comment ?',
        verdict:'Évidemment !',
        explication:'Ponctualité, écoute, respect, confidentialité : c\'est réciproque. Une règle qui ne vaut que pour certains n\'est pas une règle.',
        regle:'LES HUIT RÈGLES — pour tout le monde' },

      /* ── MANCHE 2 · QUE FAIS-TU ? ────────────────────────────────────── */
      { manche:2, type:'choix', emoji:'🚌',
        titreCourt:'Le bus était en retard',
        enonce:'Tu arrives avec 20 minutes de retard à cause des transports. Tu es devant la porte de la salle, la session a commencé.',
        reponses:[
          'J\'attends la pause dans le couloir pour ne déranger personne',
          'J\'entre discrètement, je m\'installe, et je vois le formateur à la pause',
          'J\'entre en expliquant à voix haute ce qui s\'est passé'
        ],
        bonne:1, bareme:[60, 150, 90],
        debat:'Qui a choisi quoi — et pourquoi ?',
        verdict:'La deuxième.',
        explication:'Entrer discrètement limite la gêne pour le groupe, et s\'expliquer à la pause respecte le formateur. Attendre dans le couloir fait perdre encore plus de contenu — et le retard reste le même.',
        regle:'RÈGLE 1 — J\'arrive à l\'heure, et sinon je préviens' },

      { manche:2, type:'choix', emoji:'😬',
        titreCourt:'La moquerie qui fait rire',
        enonce:'Un participant fait une remarque moqueuse sur l\'accent d\'un autre. Une partie du groupe rit. La personne visée ne dit rien et baisse les yeux.',
        reponses:[
          'Je ris aussi, pour ne pas créer de malaise dans le groupe',
          'Je ne dis rien, mais je ne ris pas',
          'Je dis simplement : « là, c\'est pas ok »'
        ],
        bonne:2, bareme:[30, 90, 150],
        debat:'Ne pas rire, est-ce que ça suffit ?',
        verdict:'La troisième.',
        explication:'Une phrase courte suffit à faire basculer l\'ambiance. Ne pas rire vaut mieux que rire, mais le silence laisse la personne seule. C\'est presque toujours un témoin qui débloque ce type de situation.',
        regle:'RÈGLE 4 — Je respecte chacun, et je le dis quand ça dérape' },

      { manche:2, type:'choix', emoji:'🌧️',
        titreCourt:'Le décrochage silencieux',
        enonce:'Un problème personnel t\'empêche de te concentrer depuis plusieurs jours. Tu as manqué deux matinées et tu envisages de ne plus venir.',
        reponses:[
          'Je prends sur moi, ça finira bien par passer',
          'Je m\'absente quelques jours, le temps que ça aille mieux',
          'Je vais voir le formateur ou le référent pour en parler'
        ],
        bonne:2, bareme:[60, 40, 150],
        debat:'Qu\'est-ce qui empêche d\'aller en parler ?',
        verdict:'La troisième.',
        explication:'Disparaître transforme un problème passager en rupture de parcours. Le rôle du référent est de chercher des aménagements — encore faut-il qu\'il soit au courant.',
        regle:'RÈGLE 8 — Je préviens quand ça ne va pas' },

      /* ── MANCHE 3 · LA RÈGLE MYSTÈRE ─────────────────────────────────── */
      { manche:3, type:'mystere', emoji:'🔍',
        enonce:'De quelle règle s\'agit-il ?',
        indices:[
          'Elle ne coûte rien.',
          'Elle se voit dès la première seconde.',
          'Sans elle, on rate le début et on gêne tout le monde.'
        ],
        reponses:['La ponctualité', 'Le respect de chacun', 'La confidentialité', 'L\'entraide'],
        bonne:0,
        verdict:'La ponctualité.',
        explication:'C\'est la règle la plus visible du groupe, et la première à se relâcher : les cinq minutes deviennent dix, puis quinze.',
        regle:'RÈGLE 1 — J\'arrive à l\'heure' },

      { manche:3, type:'mystere', emoji:'🔍',
        enonce:'De quelle règle s\'agit-il ?',
        indices:[
          'Elle protège celui qui parle.',
          'Sans elle, plus personne n\'ose rien dire.',
          'Ce qui se dit ici reste ici.'
        ],
        reponses:['L\'écoute', 'La confidentialité', 'La ponctualité', 'Le soin du lieu'],
        bonne:1,
        verdict:'La confidentialité.',
        explication:'La plus fragile des huit : il suffit d\'une confidence répétée en pause pour que le groupe se referme durablement.',
        regle:'RÈGLE 6 — Je garde ce qui se dit ici' },

      { manche:3, type:'mystere', emoji:'🔍',
        enonce:'De quelle règle s\'agit-il ?',
        indices:[
          'Elle tient dans une poche.',
          'Elle capte l\'attention même éteinte.',
          'Rangée, elle rend disponible.'
        ],
        reponses:['Le soin du lieu', 'L\'entraide', 'Le téléphone rangé', 'L\'écoute'],
        bonne:2,
        verdict:'Le téléphone rangé.',
        explication:'Posé sur la table, il reste une sollicitation permanente. Dans le sac, la tentation disparaît d\'elle-même.',
        regle:'RÈGLE 2 — Je range mon téléphone' },

      /* ── MANCHE 4 · ET EN ENTREPRISE ? ───────────────────────────────── */
      { manche:4, type:'vf', emoji:'📄',
        enonce:'En entreprise aussi, les règles sont écrites quelque part.',
        reponses:VF, bonne:0,
        debat:'Où, exactement ?',
        verdict:'Oui.',
        explication:'Contrat de travail, règlement intérieur (obligatoire dès 50 salariés), notes de service, convention collective.',
        regle:'LE PONT AVEC L\'ENTREPRISE' },

      { manche:4, type:'vf', emoji:'💸',
        enonce:'Un employeur peut prélever une amende sur le salaire en cas de faute.',
        reponses:VF, bonne:1,
        debat:'Qui en a déjà entendu parler ?',
        verdict:'Jamais.',
        explication:'Les sanctions pécuniaires sont interdites par le Code du travail. Un employeur ne peut pas toucher au salaire pour punir.',
        regle:'LE PONT AVEC L\'ENTREPRISE' },

      { manche:4, type:'vf', emoji:'👀',
        enonce:'Toutes les règles d\'une entreprise sont écrites.',
        reponses:VF, bonne:1,
        debat:'Comment on devine celles qui ne le sont pas ?',
        verdict:'Loin de là.',
        explication:'Beaucoup sont implicites : horaires réels, tutoiement, pauses, façon de s\'adresser au responsable. On les décode en observant et en demandant.',
        regle:'LE PONT AVEC L\'ENTREPRISE' },

      { manche:4, type:'vf', emoji:'🎯',
        enonce:'Les règles de vie de la formation sont un entraînement pour l\'entreprise.',
        reponses:VF, bonne:0,
        debat:'Vous voyez le lien ?',
        verdict:'C\'est tout l\'enjeu.',
        explication:'Ponctualité, respect, prévenir en cas de problème, prendre soin du matériel : exactement les mêmes attendus.',
        regle:'LE PONT AVEC L\'ENTREPRISE' }

    ],

    /* Le récapitulatif projeté en fin de partie */
    final: {
      titre: 'Les 8 règles de vie du groupe',
      regles: [
        ['⏰', 'J\'arrive à l\'heure', 'Et si je ne peux pas, je préviens avant.'],
        ['📵', 'Je range mon téléphone', 'Sauf en pause, ou si on en a besoin pour travailler.'],
        ['👂', 'J\'écoute avant de parler', 'Une seule personne parle à la fois.'],
        ['🤝', 'Je respecte chacun', 'Le langage, les différences, le droit de se tromper.'],
        ['🧹', 'Je prends soin du lieu', 'Ma table, mes déchets — et je signale ce qui est cassé.'],
        ['🔒', 'Je garde ce qui se dit ici', 'Ce qui se raconte dans la salle reste dans la salle.'],
        ['💪', 'Je participe et j\'aide', 'Expliquer à un autre, c\'est consolider ce qu\'on sait.'],
        ['🗣️', 'Je préviens quand ça ne va pas', 'Plutôt que de décrocher en silence.']
      ],
      mot: 'Ces huit règles ne sont pas là pour contraindre. Elles sont là pour que chacun puisse travailler, se tromper et progresser tranquillement.'
    }
  }
  ,
  /* ---- Ses manches ----------------------------------------------------- */
  {
    1: { titre: 'Vrai ou Faux',       sous: 'Seize affirmations à trancher.' },
    2: { titre: 'Que fais-tu ?',      sous: 'Trois situations, trois réactions possibles.<br>Plusieurs réponses se défendent — on en discute.' },
    3: { titre: 'La règle mystère',   sous: 'Trois indices. Devinez la règle.<br>Plus vous trouvez tôt, plus ça rapporte.' },
    4: { titre: 'Et en entreprise ?', sous: 'Les mêmes règles, avec des conséquences plus lourdes.' }
  }

  );

})();
