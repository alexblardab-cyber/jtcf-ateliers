/* ==========================================================================
   JTCF — ATELIER · LA POSTURE PROFESSIONNELLE
   --------------------------------------------------------------------------
   Parti pris : la posture ne se récite pas, elle se décode. Beaucoup de
   règles en entreprise ne sont écrites nulle part — et elles changent d'une
   boîte à l'autre. L'atelier apprend à les repérer, pas à les réciter.

   Les formats et les champs disponibles sont décrits en tête de quiz.js.
   ========================================================================== */

(function () {
  'use strict';
  var VF = JTCF_QUIZ.VF;
  var PC = ['ÇA PASSE', 'ÇA COINCE'];

  JTCF_QUIZ.enregistrer('posture',

  /* ---- L'atelier ------------------------------------------------------- */
  {
    titre: 'La posture professionnelle',
    icone: '👔',
    couleur: '#2F6F4E',
    questions: [

      /* ── MANCHE 1 · VRAI OU FAUX ─────────────────────────────────────── */
      { manche:1, type:'vf', emoji:'👀',
        enonce:'Le premier jour, mieux vaut observer avant de proposer.',
        reponses:VF, bonne:0,
        debat:'Observer, c\'est manquer d\'initiative ?',
        verdict:'Oui.',
        explication:'Chaque entreprise a ses habitudes, et elles ne sont écrites nulle part. Observer une semaine avant de proposer, ce n\'est pas de la timidité : c\'est ce qui rend vos propositions pertinentes.',
        regle:'ON OBSERVE AVANT DE PROPOSER' },

      { manche:1, type:'vf', emoji:'⏰',
        enonce:'Arriver cinq minutes avant, c\'est arriver à l\'heure.',
        reponses:VF, bonne:0,
        debat:'Cinq minutes, ça sert à quoi concrètement ?',
        verdict:'Exactement.',
        explication:'À l\'heure, c\'est être prêt à commencer à l\'heure — pas franchir la porte. Ces cinq minutes servent à poser ses affaires, dire bonjour et démarrer sans courir.',
        regle:'À L\'HEURE = PRÊT À L\'HEURE' },

      { manche:1, type:'vf', emoji:'🤷',
        enonce:'Dire « je ne sais pas » devant son tuteur, c\'est se dévaloriser.',
        reponses:VF, bonne:1,
        debat:'Qu\'est-ce qui est pire : ne pas savoir, ou faire semblant ?',
        verdict:'Faux, et c\'est même l\'inverse.',
        explication:'« Je ne sais pas, montrez-moi » rassure un tuteur. Faire semblant coûte du travail à refaire, et se voit toujours. Un stagiaire n\'est pas censé savoir : il est là pour apprendre.',
        regle:'« JE NE SAIS PAS, MONTREZ-MOI »' },

      { manche:1, type:'vf', emoji:'👕',
        enonce:'La tenue est un détail : seul le travail compte.',
        reponses:VF, bonne:1,
        debat:'Une tenue, ça dit quoi avant qu\'on ait parlé ?',
        verdict:'Pas tout à fait.',
        explication:'Le travail compte le plus, mais la tenue parle avant vous. Elle n\'a pas à être chère ni identique pour tous : elle doit être adaptée au métier. En cas de doute, on observe l\'équipe — ou on demande.',
        regle:'ADAPTÉE AU MÉTIER, PAS CHÈRE' },

      { manche:1, type:'vf', emoji:'🙂',
        enonce:'On peut tutoyer dès que tout le monde se tutoie autour de soi.',
        reponses:VF, bonne:1,
        debat:'Qui fait le premier pas, d\'habitude ?',
        verdict:'Presque.',
        explication:'On vouvoie, et on attend qu\'on vous propose le tutoiement — c\'est la personne la plus ancienne ou la plus haute qui l\'ouvre. Passer au tu sans y être invité met souvent mal à l\'aise sans que personne ne le dise.',
        regle:'ON ATTEND QU\'ON NOUS LE PROPOSE' },

      { manche:1, type:'vf', emoji:'❓',
        enonce:'Un stagiaire n\'a pas à poser de questions : il doit exécuter.',
        reponses:VF, bonne:1,
        debat:'Trop de questions, ça existe ?',
        verdict:'Faux.',
        explication:'Les questions sont attendues — c\'est le signe qu\'on cherche à bien faire. L\'astuce est de les regrouper plutôt que d\'interrompre dix fois : on note, et on demande en une fois.',
        regle:'ON NOTE, PUIS ON DEMANDE EN UNE FOIS' },

      { manche:1, type:'vf', emoji:'🚀',
        enonce:'Prendre une initiative sans prévenir est toujours apprécié.',
        reponses:VF, bonne:1,
        debat:'Initiative ou prévenir : les deux sont possibles ?',
        verdict:'Pas toujours.',
        explication:'L\'initiative est appréciée quand elle est annoncée : « j\'ai vu ça, je peux m\'en occuper ? ». Faite dans son coin, elle peut défaire le travail d\'un autre ou engager l\'entreprise sans qu\'elle le sache.',
        regle:'J\'ANNONCE, PUIS JE FAIS' },

      { manche:1, type:'vf', emoji:'📵',
        enonce:'Ce que je publie sur mes réseaux n\'a rien à voir avec mon entreprise.',
        reponses:VF, bonne:1,
        debat:'Où s\'arrête la vie privée, à votre avis ?',
        verdict:'Faux.',
        explication:'Vos opinions personnelles vous appartiennent. Mais publier une photo de l\'atelier, des collègues reconnaissables, un client ou une information interne engage l\'entreprise — et vous. On demande avant.',
        regle:'ON DEMANDE AVANT DE PUBLIER' },

      /* ── MANCHE 2 · ÇA PASSE OU ÇA COINCE ? ──────────────────────────── */
      { manche:2, type:'vf', emoji:'🔁',
        titreCourt:'La scène',
        enonce:'Vous n\'avez pas tout compris à la consigne. Vous la redites avec vos mots pour vérifier.',
        reponses:PC, bonne:0,
        debat:'Reformuler, ça fait bête ou ça fait sérieux ?',
        verdict:'Ça passe — et très bien.',
        explication:'Reformuler coûte trois secondes et évite des heures de travail à refaire. C\'est le réflexe que les tuteurs citent le plus souvent quand on leur demande ce qui fait un bon stagiaire.',
        regle:'REFORMULER EST UN RÉFLEXE DE PRO' },

      { manche:2, type:'vf', emoji:'🎧',
        titreCourt:'La scène',
        enonce:'Vous arrivez le matin, téléphone à la main et un écouteur dans l\'oreille.',
        reponses:PC, bonne:1,
        debat:'Un seul écouteur, ça change quelque chose ?',
        verdict:'Ça coince.',
        explication:'Rien de grave en soi, mais ça dit « je ne suis pas encore là ». L\'arrivée est le moment le plus regardé de la journée. Écouteur rangé, bonjour à la cantonade : c\'est gratuit et ça change l\'image.',
        regle:'L\'ARRIVÉE EST TRÈS REGARDÉE' },

      { manche:2, type:'vf', emoji:'✋',
        titreCourt:'La scène',
        enonce:'Vous avez fini votre tâche. Vous allez demander ce que vous pouvez faire.',
        reponses:PC, bonne:0,
        debat:'Attendre qu\'on vienne vous chercher, ça se voit ?',
        verdict:'Ça passe.',
        explication:'C\'est même ce qui distingue le plus un stagiaire dont on se souvient. Attendre sans rien dire est presque toujours interprété comme un manque d\'envie — même quand ce n\'en est pas.',
        regle:'FINI ? JE VAIS DEMANDER' },

      { manche:2, type:'vf', emoji:'🙊',
        titreCourt:'La scène',
        enonce:'Votre tuteur donne une information inexacte à un client. Vous le corrigez devant lui.',
        reponses:PC, bonne:1,
        debat:'Et si l\'information est vraiment fausse ?',
        verdict:'Ça coince.',
        explication:'Le fond est juste, la forme casse tout. Devant un client, on ne contredit pas : on attend, et on le dit après, en tête-à-tête. Sauf risque immédiat pour la sécurité — là, on parle tout de suite.',
        regle:'JAMAIS DEVANT LE CLIENT' },

      { manche:2, type:'vf', emoji:'📅',
        titreCourt:'La scène',
        enonce:'Vous prévenez la veille que vous serez absent une matinée pour un rendez-vous.',
        reponses:PC, bonne:0,
        debat:'Combien de temps avant, idéalement ?',
        verdict:'Ça passe.',
        explication:'Prévenir, c\'est le minimum, et le plus tôt est toujours le mieux. Vous n\'avez pas à détailler le motif : dire qu\'il s\'agit d\'un rendez-vous suffit.',
        regle:'PRÉVENIR TÔT, SANS TOUT DÉTAILLER' },

      { manche:2, type:'vf', emoji:'📸',
        titreCourt:'La scène',
        enonce:'Vous postez une story depuis l\'atelier, avec des collègues reconnaissables derrière vous.',
        reponses:PC, bonne:1,
        debat:'Qui doit dire oui, dans cette histoire ?',
        verdict:'Ça coince.',
        explication:'Chacun a un droit sur son image, et l\'entreprise sur ses locaux. Ce n\'est pas de la méfiance : c\'est qu\'un collègue peut avoir de très bonnes raisons de ne pas apparaître. On demande — à eux et à l\'entreprise.',
        regle:'LE DROIT À L\'IMAGE VAUT POUR TOUS' },

      /* ── MANCHE 3 · QUE FAIS-TU ? ────────────────────────────────────── */
      { manche:3, type:'choix', emoji:'😬',
        titreCourt:'L\'erreur',
        enonce:'Vous vous rendez compte que vous avez fait une erreur ce matin. Personne ne l\'a encore vue.',
        reponses:[
          'J\'attends : ça passera peut-être inaperçu',
          'J\'essaie de la rattraper seul avant que ça se voie',
          'Je le dis tout de suite, avec ce que je propose pour réparer'
        ],
        bonne:2, bareme:[20, 90, 150],
        debat:'Qu\'est-ce qui fait le plus peur : l\'erreur, ou de l\'avouer ?',
        verdict:'La troisième.',
        explication:'Une erreur annoncée est un incident. Une erreur découverte est un problème de confiance. Et arriver avec une proposition de réparation change complètement la conversation — c\'est ce qui fait passer de « stagiaire » à « collègue ».',
        regle:'J\'ANNONCE, ET JE PROPOSE UNE SOLUTION' },

      { manche:3, type:'choix', emoji:'🧰',
        titreCourt:'La tâche inconnue',
        enonce:'On vous confie quelque chose que vous ne savez pas faire. La personne est déjà repartie.',
        reponses:[
          'Je me lance, on verra bien',
          'Je cherche sur internet et je fais au mieux',
          'Je note mes questions et je vais la voir dès qu\'elle est disponible'
        ],
        bonne:2, bareme:[40, 100, 150],
        debat:'Chercher seul, jusqu\'où ?',
        verdict:'La troisième.',
        explication:'Chercher par soi-même est une bonne réaction — le piège est de ne jamais vérifier. Le vrai réflexe professionnel est de faire les deux : je cherche, puis je fais valider avant de m\'engager trop loin.',
        regle:'JE CHERCHE, PUIS JE FAIS VALIDER' },

      { manche:3, type:'choix', emoji:'⚖️',
        titreCourt:'La remarque injuste',
        enonce:'On vous reproche devant l\'équipe quelque chose dont vous n\'êtes pas responsable.',
        reponses:[
          'Je me tais, je suis stagiaire, ce n\'est pas à moi de discuter',
          'Je me défends tout de suite devant tout le monde',
          'Je prends la remarque sans discuter, et je demande à en reparler après'
        ],
        bonne:2, bareme:[50, 70, 150],
        debat:'Se taire sur le moment, est-ce que c\'est accepter ?',
        verdict:'La troisième.',
        explication:'Ne rien dire du tout laisse l\'erreur s\'installer. Se défendre devant l\'équipe fait perdre la face à l\'autre, et il se braque. Demander à en reparler au calme permet de rétablir les faits sans affrontement — et c\'est très bien vu.',
        regle:'JE NE SUBIS PAS, ET JE N\'AFFRONTE PAS' },

      /* ── MANCHE 4 · LE MYSTÈRE ───────────────────────────────────────── */
      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De quoi parle-t-on ?',
        indices:[
          'Elle ne s\'apprend dans aucun cours.',
          'Elle se juge en trois jours.',
          'Elle dit simplement : on peut compter sur vous.'
        ],
        reponses:['L\'expérience', 'Le diplôme', 'La fiabilité', 'La motivation'],
        bonne:2,
        verdict:'La fiabilité.',
        explication:'C\'est ce que les tuteurs citent en premier, loin devant les compétences techniques. Être là, à l\'heure, faire ce qu\'on a dit qu\'on ferait : ça ne demande aucun talent particulier, et ça décide souvent d\'une embauche.',
        regle:'FAIRE CE QU\'ON A DIT QU\'ON FERAIT' },

      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De quoi parle-t-on ?',
        indices:[
          'Elle coûte trois secondes.',
          'Elle évite des heures de travail à refaire.',
          'Elle commence souvent par « si j\'ai bien compris… ».'
        ],
        reponses:['La reformulation', 'La prise de notes', 'L\'initiative', 'La politesse'],
        bonne:0,
        verdict:'La reformulation.',
        explication:'Le meilleur rapport effort/résultat de toute la vie professionnelle. Elle vérifie la consigne, montre qu\'on a écouté, et donne à l\'autre l\'occasion de préciser ce qu\'il avait oublié de dire.',
        regle:'« SI J\'AI BIEN COMPRIS… »' },

      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De quoi parle-t-on ?',
        indices:[
          'Elle est partout et n\'est écrite nulle part.',
          'On la devine en observant, ou en demandant.',
          'Elle change d\'une entreprise à l\'autre.'
        ],
        reponses:['La convention collective', 'La règle implicite', 'La fiche de poste', 'La hiérarchie'],
        bonne:1,
        verdict:'La règle implicite.',
        explication:'Les pauses, le tutoiement, qui salue qui, ce qui se dit en réunion et ce qui se dit après : rien de tout cela n\'est écrit. C\'est ce qui déstabilise le plus au début — et personne ne pense à vous l\'expliquer, parce que pour eux c\'est évident.',
        regle:'DANS LE DOUTE, ON DEMANDE' }

    ],

    final: {
      titre: 'Ce qu\'on retient',
      regles: [
        ['⏰', 'À l\'heure = prêt à l\'heure', 'Cinq minutes avant, pour démarrer sans courir.'],
        ['👀', 'J\'observe avant de proposer', 'Chaque entreprise a ses habitudes, et elles ne sont pas écrites.'],
        ['🔁', 'Je reformule', '« Si j\'ai bien compris… » — trois secondes, des heures gagnées.'],
        ['🤷', 'Je dis quand je ne sais pas', 'Faire semblant se voit toujours. Demander rassure.'],
        ['🚀', 'J\'annonce, puis je fais', 'L\'initiative est appréciée quand elle est dite.'],
        ['😬', 'J\'annonce mes erreurs', 'Une erreur dite est un incident. Découverte, c\'est la confiance qui casse.'],
        ['🙊', 'Jamais devant le client', 'Le désaccord se dit après, en tête-à-tête.'],
        ['📸', 'Je demande avant de publier', 'Locaux, collègues, clients : chacun a son mot à dire.']
      ],
      mot: 'Aucune de ces règles ne demande un talent particulier. Elles demandent juste d\'être attentif aux autres — et c\'est exactement ce qu\'on appelle être professionnel.'
    }
  }
  ,
  /* ---- Ses manches ----------------------------------------------------- */
  {
    1: { titre: 'Vrai ou Faux',           sous: 'Huit idées reçues à trancher.' },
    2: { titre: 'Ça passe ou ça coince ?', sous: 'Six scènes en entreprise.<br>À vous de dire ce qui passe.' },
    3: { titre: 'Que fais-tu ?',          sous: 'Trois situations vécues en stage.<br>Aucune réponse n\'est fausse — on en discute.' },
    4: { titre: 'Le mystère',             sous: 'Trois indices. Devinez de quoi on parle.<br>Plus vous trouvez tôt, plus ça rapporte.' }
  }

  );

})();
