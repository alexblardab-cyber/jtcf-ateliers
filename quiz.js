/* ==========================================================================
   JTCF — Ateliers : catalogue des quiz
   --------------------------------------------------------------------------
   Reprend la structure du diaporama « Le Grand Quiz des Règles de Vie » :
   des manches, et trois formats de question.

   Formats disponibles (champ « type ») :
     'vf'       vrai ou faux          → deux réponses
     'choix'    que fais-tu ?         → trois propositions, on en discute
     'mystere'  la règle mystère      → trois indices, puis on devine

   Champs d'une question :
     manche       numéro de la manche (1, 2, 3…)
     emoji        l'illustration affichée en grand
     enonce       l'affirmation ou la situation
     reponses     les propositions
     bonne        le numéro de la bonne — ou de la plus solide (0 = la première)
     bareme       facultatif : les points de CHAQUE proposition, quand aucune
                  réponse n'est vraiment fausse (manche « Que fais-tu ? »)
     verdict      la chute, en gras, juste après la révélation
     explication  le développement
     regle        la règle concernée, affichée en bas (facultatif)
     debat        la relance à poser à voix haute avant de révéler
     indices      pour 'mystere' uniquement : les trois indices
   ========================================================================== */

(function (global) {
  'use strict';

  /* ---- Les manches, décrites une fois ---------------------------------- */
  var MANCHES = {
    'regles-de-vie': {
      1: { titre: 'Vrai ou Faux',      sous: 'Seize affirmations à trancher.' },
      2: { titre: 'Que fais-tu ?',     sous: 'Trois situations, trois réactions possibles.<br>Plusieurs réponses se défendent — on en discute.' },
      3: { titre: 'La règle mystère',  sous: 'Trois indices. Devinez la règle.<br>Plus vous trouvez tôt, plus ça rapporte.' },
      4: { titre: 'Et en entreprise ?', sous: 'Les mêmes règles, avec des conséquences plus lourdes.' }
    },
    'arnaques-en-ligne': {
      1: { titre: 'Vrai ou Faux',        sous: 'Huit idées reçues à trancher.' },
      2: { titre: 'Arnaque ou pas ?',    sous: 'Six messages reçus pour de vrai.<br>À vous de dire lesquels sont piégés.' },
      3: { titre: 'Que fais-tu ?',       sous: 'Trois situations qui arrivent vraiment.<br>Aucune réponse n\'est fausse — on en discute.' },
      4: { titre: 'Le piège mystère',    sous: 'Trois indices. Devinez l\'arnaque.<br>Plus vous trouvez tôt, plus ça rapporte.' }
    }
  };

  var VF = ['VRAI', 'FAUX'];
  var AP = ['C\'EST NORMAL', 'C\'EST UNE ARNAQUE'];

  var CATALOGUE = {

    /* ═══ ATELIER — LES RÈGLES DE VIE DU GROUPE ═══════════════════════════ */
    'regles-de-vie': {
      titre: 'Le Grand Quiz des Règles de Vie',
      icone: '🤝',
      couleur: '#2C6E9B',
      questions: [

        /* ── MANCHE 1 · VRAI OU FAUX ───────────────────────────────────── */
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

        /* ── MANCHE 2 · QUE FAIS-TU ? ──────────────────────────────────── */
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

        /* ── MANCHE 3 · LA RÈGLE MYSTÈRE ───────────────────────────────── */
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

        /* ── MANCHE 4 · ET EN ENTREPRISE ? ─────────────────────────────── */
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
    },

    /* ═══ ATELIER — LES ARNAQUES EN LIGNE ════════════════════════════════ */
    'arnaques-en-ligne': {
      titre: 'Les arnaques en ligne',
      icone: '🎣',
      couleur: '#B23A2E',
      questions: [

        /* ── MANCHE 1 · VRAI OU FAUX ───────────────────────────────────── */
        { manche:1, type:'vf', emoji:'🏦',
          enonce:'Ma banque peut m\'appeler et me demander le code à six chiffres reçu par SMS.',
          reponses:VF, bonne:1,
          debat:'Qui a déjà reçu un appel de « sa banque » ?',
          verdict:'Jamais.',
          explication:'Aucun conseiller, aucun service client, aucune administration ne demande ce code. Il ne sert qu\'à valider une opération : le donner, c\'est signer à la place du voleur.',
          regle:'LE CODE À SIX CHIFFRES NE SE DONNE JAMAIS' },

        { manche:1, type:'vf', emoji:'💼',
          enonce:'Un vrai recruteur peut me demander des frais de dossier avant l\'embauche.',
          reponses:VF, bonne:1,
          debat:'Qui a déjà vu passer une offre comme ça ?',
          verdict:'Jamais non plus.',
          explication:'Un recrutement ne coûte rien au candidat. Frais de dossier, de formation, d\'uniforme, de matériel : c\'est toujours une arnaque, et c\'est interdit.',
          regle:'UN EMPLOI NE S\'ACHÈTE PAS' },

        { manche:1, type:'vf', emoji:'🧾',
          enonce:'Donner mon RIB à un employeur qui m\'embauche, c\'est normal.',
          reponses:VF, bonne:0,
          debat:'RIB, carte bancaire : quelle différence ?',
          verdict:'Oui, c\'est normal.',
          explication:'Le RIB sert à vous verser un salaire, il ne permet pas de vous débiter librement. Ce qui ne se donne jamais, c\'est le numéro de carte bancaire, son cryptogramme et les codes reçus par SMS.',
          regle:'LE RIB POUR ÊTRE PAYÉ, JAMAIS LA CARTE' },

        { manche:1, type:'vf', emoji:'📞',
          enonce:'Si le numéro affiché est celui de ma banque, c\'est forcément ma banque.',
          reponses:VF, bonne:1,
          debat:'On peut vraiment falsifier un numéro ?',
          verdict:'Absolument pas.',
          explication:'Falsifier le numéro affiché est devenu facile — on appelle ça l\'usurpation de numéro. Le seul réflexe sûr : raccrocher, puis rappeler soi-même le numéro écrit au dos de sa carte.',
          regle:'ON RACCROCHE, ON RAPPELLE SOI-MÊME' },

        { manche:1, type:'vf', emoji:'✍️',
          enonce:'Une arnaque se repère toujours aux fautes d\'orthographe.',
          reponses:VF, bonne:1,
          debat:'À quoi on les repère, alors ?',
          verdict:'Plus maintenant.',
          explication:'Les messages frauduleux sont désormais écrits dans un français impeccable. Ce qui trahit l\'arnaque, ce n\'est pas la forme : c\'est l\'urgence, la menace, et la demande d\'argent ou de code.',
          regle:'C\'EST L\'URGENCE QUI TRAHIT, PAS L\'ORTHOGRAPHE' },

        { manche:1, type:'vf', emoji:'🔒',
          enonce:'Le cadenas et le « https » garantissent qu\'un site est honnête.',
          reponses:VF, bonne:1,
          debat:'À quoi sert le cadenas, alors ?',
          verdict:'Non.',
          explication:'Le cadenas dit seulement que la connexion est chiffrée — les sites frauduleux en ont un aussi. Ce qu\'il faut lire, c\'est l\'adresse elle-même, caractère par caractère.',
          regle:'ON LIT L\'ADRESSE, PAS LE CADENAS' },

        { manche:1, type:'vf', emoji:'💳',
          enonce:'Si de l\'argent part de mon compte sans que je l\'aie autorisé, ma banque doit me rembourser.',
          reponses:VF, bonne:0,
          debat:'Et si on s\'est fait avoir bêtement ?',
          verdict:'En principe, oui.',
          explication:'Un paiement non autorisé doit être remboursé, sauf négligence grave. D\'où l\'importance de contester par écrit et sans attendre : plus on tarde, plus c\'est difficile.',
          regle:'ON CONTESTE PAR ÉCRIT, TOUT DE SUITE' },

        { manche:1, type:'vf', emoji:'📦',
          enonce:'Recevoir de l\'argent sur mon compte pour le renvoyer ailleurs contre commission, c\'est juste rendre service.',
          reponses:VF, bonne:1,
          debat:'Qui prend le risque dans cette histoire ?',
          verdict:'C\'est un délit.',
          explication:'Cela s\'appelle être « mule bancaire ». L\'argent vient d\'une escroquerie, et c\'est le titulaire du compte qui est poursuivi — compte fermé, fichage, poursuites. Même sans le savoir.',
          regle:'PRÊTER SON COMPTE, C\'EST ÊTRE COMPLICE' },

        /* ── MANCHE 2 · ARNAQUE OU PAS ? ───────────────────────────────── */
        { manche:2, type:'vf', emoji:'📬',
          titreCourt:'Message reçu',
          enonce:'Votre colis est bloqué. Réglez 1,99 € de frais de douane : bit.ly/liv-974',
          reponses:AP, bonne:1,
          debat:'Qu\'est-ce qui cloche en premier ?',
          verdict:'Arnaque.',
          explication:'La petite somme est là pour rassurer — ce qui les intéresse, c\'est le numéro de carte. Et une adresse raccourcie cache toujours sa vraie destination. En cas de doute : on va sur le site du transporteur soi-même.',
          regle:'SIGNALEMENT AU 33700' },

        { manche:2, type:'vf', emoji:'📅',
          titreCourt:'Message reçu',
          enonce:'Bonjour, votre rendez-vous du jeudi 12 à 9 h est confirmé. Votre conseiller France Travail.',
          reponses:AP, bonne:0,
          debat:'Pourquoi celui-là passe ?',
          verdict:'Normal.',
          explication:'Pas de lien, pas d\'urgence, pas un centime demandé, et une information que vous pouvez vérifier vous-même dans votre espace. C\'est exactement à quoi ressemble un vrai message.',
          regle:'NI LIEN, NI URGENCE, NI ARGENT' },

        { manche:2, type:'vf', emoji:'🎁',
          titreCourt:'Message reçu',
          enonce:'Félicitations ! Vous avez été tiré au sort pour un iPhone. Cliquez avant ce soir minuit.',
          reponses:AP, bonne:1,
          debat:'Vous aviez participé à un tirage, vous ?',
          verdict:'Arnaque, évidemment.',
          explication:'On ne gagne pas à un jeu auquel on n\'a pas joué. Le compte à rebours sert à vous empêcher de réfléchir — c\'est la signature de toutes les arnaques.',
          regle:'ON NE GAGNE PAS SANS AVOIR JOUÉ' },

        { manche:2, type:'vf', emoji:'🪪',
          titreCourt:'Message reçu',
          enonce:'Votre candidature est retenue. Envoyez pièce d\'identité recto-verso et RIB pour finaliser avant l\'entretien.',
          reponses:AP, bonne:1,
          debat:'Qu\'est-ce qui sonne faux ici ?',
          verdict:'Arnaque.',
          explication:'Avant l\'entretien, rien ne justifie une pièce d\'identité. Ces documents servent à ouvrir des comptes ou des crédits à votre nom. Ces papiers se remettent à la signature du contrat, en main propre.',
          regle:'LES PAPIERS, À LA SIGNATURE — PAS AVANT' },

        { manche:2, type:'vf', emoji:'🎓',
          titreCourt:'Message reçu',
          enonce:'Vos droits à la formation expirent bientôt. Appelez vite le 08 99 ... pour ne pas les perdre.',
          reponses:AP, bonne:1,
          debat:'Vos droits expirent vraiment ?',
          verdict:'Arnaque.',
          explication:'Le démarchage sur le compte formation est interdit par la loi. Un organisme sérieux ne vous appellera jamais pour ça. Et ces droits ne disparaissent pas du jour au lendemain.',
          regle:'LE DÉMARCHAGE CPF EST INTERDIT' },

        { manche:2, type:'vf', emoji:'💰',
          titreCourt:'Message reçu',
          enonce:'Gagnez 250 € par jour en likant des vidéos depuis chez vous. Écrivez-nous sur WhatsApp.',
          reponses:AP, bonne:1,
          debat:'Pourquoi ça marche si bien, ce genre de message ?',
          verdict:'Arnaque.',
          explication:'On vous fera gagner 20 € au début pour vous mettre en confiance, puis on vous demandera d\'avancer de l\'argent. C\'est aussi ainsi qu\'on recrute des mules bancaires.',
          regle:'TROP BEAU = TOUJOURS FAUX' },

        /* ── MANCHE 3 · QUE FAIS-TU ? ──────────────────────────────────── */
        { manche:3, type:'choix', emoji:'☎️',
          titreCourt:'Le faux conseiller',
          enonce:'Le numéro de votre banque s\'affiche. Un conseiller très aimable vous annonce une tentative de fraude et vous demande de confirmer avec le code reçu par SMS.',
          reponses:[
            'Je donne le code, c\'est ma banque qui appelle',
            'Je refuse de donner le code mais je reste en ligne pour comprendre',
            'Je raccroche, et je rappelle le numéro au dos de ma carte'
          ],
          bonne:2, bareme:[20, 90, 150],
          debat:'Pourquoi c\'est si difficile de raccrocher au nez de quelqu\'un ?',
          verdict:'La troisième.',
          explication:'Rester en ligne, c\'est déjà mieux que donner le code — mais ils sont entraînés à faire craquer. Raccrocher n\'est pas impoli : c\'est le seul geste qui coupe court à coup sûr.',
          regle:'ON RACCROCHE, ON RAPPELLE SOI-MÊME' },

        { manche:3, type:'choix', emoji:'📸',
          titreCourt:'Le chantage à la photo',
          enonce:'Quelqu\'un rencontré en ligne a obtenu une photo intime de vous. Il menace de l\'envoyer à vos contacts si vous ne payez pas 300 € ce soir.',
          reponses:[
            'Je paie, je n\'ai pas le choix',
            'Je supprime tout, je bloque, et je n\'en parle à personne',
            'Je ne paie pas, je bloque, je garde les preuves et je porte plainte'
          ],
          bonne:2, bareme:[20, 70, 150],
          debat:'Qu\'est-ce qui empêche d\'en parler ?',
          verdict:'La troisième.',
          explication:'Payer ne fait jamais cesser le chantage — ça prouve que ça marche, et la demande revient. Ce délit est puni par la loi, et la victime c\'est vous. Les captures d\'écran sont des preuves : on les garde avant de bloquer.',
          regle:'ON NE PAIE JAMAIS UN MAÎTRE CHANTEUR' },

        { manche:3, type:'choix', emoji:'😰',
          titreCourt:'Trop tard',
          enonce:'Vous avez cliqué et saisi votre numéro de carte sur un faux site. Vous vous en rendez compte dix minutes plus tard.',
          reponses:[
            'J\'attends de voir si de l\'argent part vraiment',
            'Je change mes mots de passe et je surveille mon compte',
            'Je fais opposition tout de suite, puis je préviens ma banque par écrit'
          ],
          bonne:2, bareme:[30, 80, 150],
          debat:'Combien de temps on a, à votre avis ?',
          verdict:'La troisième.',
          explication:'Les dix premières minutes comptent plus que tout le reste. Opposition immédiatement, puis un écrit à la banque qui date la contestation. Changer ses mots de passe est utile, mais ça ne bloque pas la carte.',
          regle:'OPPOSITION D\'ABORD, LE RESTE ENSUITE' },

        /* ── MANCHE 4 · LE PIÈGE MYSTÈRE ───────────────────────────────── */
        { manche:4, type:'mystere', emoji:'🔍',
          enonce:'De quelle arnaque s\'agit-il ?',
          indices:[
            'Elle commence par des messages très gentils.',
            'Elle dure des semaines avant qu\'on parle d\'argent.',
            'L\'autre n\'est jamais disponible pour un appel vidéo.'
          ],
          reponses:['L\'arnaque aux sentiments', 'Le faux colis', 'Le faux conseiller bancaire', 'La fausse offre d\'emploi'],
          bonne:0,
          verdict:'L\'arnaque aux sentiments.',
          explication:'La plus longue et la plus coûteuse de toutes. On construit une relation pendant des semaines, puis survient une urgence — un billet d\'avion, une opération, une douane. La honte empêche ensuite d\'en parler, et c\'est ce silence qui fait durer l\'arnaque.',
          regle:'PERSONNE DE SINCÈRE NE DEMANDE D\'ARGENT EN LIGNE' },

        { manche:4, type:'mystere', emoji:'🔍',
          enonce:'De quelle technique s\'agit-il ?',
          indices:[
            'Elle fait passer l\'escroc pour quelqu\'un d\'autre.',
            'Le numéro affiché est vrai, mais pas la personne qui appelle.',
            'C\'est l\'outil préféré des faux conseillers bancaires.'
          ],
          reponses:['Le piratage du téléphone', 'L\'usurpation de numéro', 'Le vol de carte SIM', 'Le faux site'],
          bonne:1,
          verdict:'L\'usurpation de numéro.',
          explication:'Afficher le numéro de son choix est devenu simple. C\'est pour cela que l\'affichage ne prouve plus rien, et que le seul réflexe fiable reste de rappeler soi-même.',
          regle:'UN NUMÉRO AFFICHÉ NE PROUVE RIEN' },

        { manche:4, type:'mystere', emoji:'🔍',
          enonce:'De quel piège s\'agit-il ?',
          indices:[
            'Il promet de l\'argent facile, sans rien faire.',
            'Votre compte sert de boîte aux lettres.',
            'Il fait de vous un complice, même sans le savoir.'
          ],
          reponses:['Le faux crédit', 'L\'arnaque au président', 'La mule bancaire', 'Le faux virement'],
          bonne:2,
          verdict:'La mule bancaire.',
          explication:'On vous propose une commission pour faire transiter de l\'argent. C\'est le produit d\'escroqueries, et c\'est vous que la justice retrouve : compte fermé, fichage bancaire, poursuites. Beaucoup de jeunes y tombent en croyant à un petit boulot.',
          regle:'SON COMPTE NE SE PRÊTE JAMAIS' }

      ],

      final: {
        titre: 'Les réflexes à garder',
        regles: [
          ['⏸️', 'Je ne réponds jamais dans l\'urgence', 'L\'urgence est fabriquée exprès. Dormir dessus ne coûte rien.'],
          ['📞', 'Je rappelle moi-même', 'Le numéro au dos de la carte, jamais celui du message.'],
          ['🔢', 'Je ne donne aucun code', 'Ni code SMS, ni cryptogramme, ni mot de passe. À personne.'],
          ['🔗', 'Je ne clique pas sur les liens', 'Je vais sur le site moi-même, en tapant l\'adresse.'],
          ['🏦', 'Je fais opposition sans attendre', 'Puis je conteste par écrit auprès de ma banque.'],
          ['📱', 'Je signale au 33700', 'Pour les SMS et appels frauduleux — c\'est gratuit.'],
          ['🛡️', 'Je demande de l\'aide', 'cybermalveillance.gouv.fr, ou déposer plainte au commissariat.'],
          ['🗣️', 'Je n\'ai pas honte', 'Ces arnaques sont conçues par des professionnels. En parler protège les autres.']
        ],
        mot: 'Se faire avoir n\'a rien à voir avec l\'intelligence. Ces pièges sont fabriqués pour fonctionner sur tout le monde — la seule vraie protection, c\'est d\'en avoir déjà entendu parler.'
      }
    },

    /* ---- Ateliers à venir -------------------------------------------------
       Recopier le bloc ci-dessus et changer le contenu :
         'gestion-du-stress', 'gestion-des-conflits', 'harcelement',
         'arnaques-en-ligne', 'posture-pro'
       -------------------------------------------------------------------- */

  };

  function liste() {
    return Object.keys(CATALOGUE).map(function (id) {
      var q = CATALOGUE[id];
      return { id: id, titre: q.titre, icone: q.icone, couleur: q.couleur, nb: q.questions.length };
    });
  }

  function get(id) { return CATALOGUE[id] || null; }

  function manche(idQuiz, numero) {
    var m = MANCHES[idQuiz];
    return (m && m[numero]) || null;
  }

  global.JTCF_QUIZ = { CATALOGUE: CATALOGUE, MANCHES: MANCHES, liste: liste, get: get, manche: manche };

})(window);
