/* ==========================================================================
   JTCF — ATELIER · GÉRER UN DÉSACCORD
   --------------------------------------------------------------------------
   Parti pris : le désaccord n'est pas le problème, il est même utile.
   Ce qui abîme un groupe, c'est ce qu'on en fait — et surtout ce qu'on
   n'en dit pas. On travaille la différence entre discuter et s'affronter.

   Les formats et les champs disponibles sont décrits en tête de quiz.js.
   ========================================================================== */

(function () {
  'use strict';
  var VF = JTCF_QUIZ.VF;
  var DC = ['UN DÉSACCORD', 'UN CONFLIT'];

  JTCF_QUIZ.enregistrer('conflits',

  /* ---- L'atelier ------------------------------------------------------- */
  {
    titre: 'Gérer un désaccord',
    icone: '⚡',
    couleur: '#C05621',
    questions: [

      /* ── MANCHE 1 · VRAI OU FAUX ─────────────────────────────────────── */
      { manche:1, type:'vf', emoji:'🕊️',
        enonce:'Un bon groupe est un groupe où personne n\'est jamais en désaccord.',
        reponses:VF, bonne:1,
        debat:'Un groupe toujours d\'accord, ça vous paraît sain ?',
        verdict:'Au contraire.',
        explication:'Un groupe où personne ne dit jamais rien n\'est pas un groupe apaisé : c\'est un groupe où plus personne n\'ose. Le désaccord exprimé est le signe qu\'on se sent en sécurité.',
        regle:'LE DÉSACCORD N\'EST PAS LE PROBLÈME' },

      { manche:1, type:'vf', emoji:'⏳',
        enonce:'Dire tout de suite ce qui ne va pas, c\'est chercher le conflit.',
        reponses:VF, bonne:1,
        debat:'Attendre, ça arrange quoi ?',
        verdict:'C\'est plutôt l\'inverse.',
        explication:'Ce qu\'on garde grossit. Dit le jour même, c\'est une remarque. Dit trois semaines plus tard, avec tout ce qui s\'est accumulé entre-temps, c\'est une explosion.',
        regle:'TÔT, C\'EST PETIT — TARD, C\'EST GROS' },

      { manche:1, type:'vf', emoji:'📢',
        enonce:'Quand l\'autre hausse le ton, il faut hausser le ton aussi pour ne pas se laisser faire.',
        reponses:VF, bonne:1,
        debat:'Baisser d\'un ton, c\'est perdre ?',
        verdict:'Non.',
        explication:'Deux voix qui montent, personne n\'écoute plus. Baisser d\'un ton oblige l\'autre à baisser aussi pour être entendu. Ce n\'est pas céder, c\'est reprendre la main sur la conversation.',
        regle:'BAISSER D\'UN TON N\'EST PAS CÉDER' },

      { manche:1, type:'vf', emoji:'🙋',
        enonce:'Parler de ce que je ressens plutôt que d\'accuser l\'autre change la suite de la conversation.',
        reponses:VF, bonne:0,
        debat:'« Tu me coupes toujours » ou « je n\'arrive pas à finir » : ça change quoi ?',
        verdict:'Oui, énormément.',
        explication:'« Tu es… » appelle une défense. « Moi, je… » appelle une réponse. On ne peut pas contester ce que quelqu\'un ressent — on peut contester ce qu\'il affirme de vous.',
        regle:'JE DIS L\'EFFET, PAS LE DÉFAUT' },

      { manche:1, type:'vf', emoji:'🏆',
        enonce:'Si j\'ai raison, il suffit de le prouver pour que le conflit s\'arrête.',
        reponses:VF, bonne:1,
        debat:'Avoir raison et régler la situation : c\'est la même chose ?',
        verdict:'Malheureusement non.',
        explication:'Un conflit n\'est presque jamais une question de faits. Gagner la démonstration en humiliant l\'autre, c\'est gagner la bataille et perdre la relation — et souvent relancer les hostilités.',
        regle:'AVOIR RAISON NE SUFFIT PAS' },

      { manche:1, type:'vf', emoji:'🌀',
        enonce:'Un conflit peut naître d\'un simple malentendu.',
        reponses:VF, bonne:0,
        debat:'Vous avez un exemple en tête ?',
        verdict:'Très souvent, oui.',
        explication:'Un message mal lu, un ton mal interprété, une phrase rapportée de travers. D\'où la question qui désamorce le plus : « qu\'est-ce que tu as voulu dire, exactement ? »',
        regle:'ON VÉRIFIE AVANT DE CONCLURE' },

      { manche:1, type:'vf', emoji:'🤝',
        enonce:'Faire appel à quelqu\'un pour aider à débloquer, c\'est un aveu de faiblesse.',
        reponses:VF, bonne:1,
        debat:'Demander de l\'aide, ça vous coûte ?',
        verdict:'Non.',
        explication:'Un tiers ne vient pas donner raison à quelqu\'un : il rend la parole possible quand elle ne l\'est plus. Y faire appel tôt évite souvent d\'avoir à trancher plus tard.',
        regle:'LE TIERS N\'ARBITRE PAS, IL OUVRE' },

      { manche:1, type:'vf', emoji:'🚪',
        enonce:'Mieux vaut régler un désaccord à deux, en privé, avant d\'en parler devant tout le monde.',
        reponses:VF, bonne:0,
        debat:'Devant les autres, qu\'est-ce qui change ?',
        verdict:'Oui.',
        explication:'Devant un public, chacun défend son image autant que son point de vue, et reculer devient impossible. En tête-à-tête, on peut changer d\'avis sans perdre la face.',
        regle:'EN PRIVÉ, ON PEUT ENCORE CHANGER D\'AVIS' },

      /* ── MANCHE 2 · DÉSACCORD OU CONFLIT ? ───────────────────────────── */
      { manche:2, type:'vf', emoji:'🗂️',
        titreCourt:'La scène',
        enonce:'Deux personnes ne sont pas d\'accord sur la méthode. Elles en discutent dix minutes, puis tranchent.',
        reponses:DC, bonne:0,
        debat:'Qu\'est-ce qui fait que ça reste sain ?',
        verdict:'Un désaccord.',
        explication:'On parle du sujet, on décide, on continue. C\'est même comme ça qu\'une équipe trouve de meilleures solutions qu\'une personne seule.',
        regle:'ON PARLE DU SUJET' },

      { manche:2, type:'vf', emoji:'🧊',
        titreCourt:'La scène',
        enonce:'Depuis la semaine dernière, ils ne s\'adressent plus la parole et se répondent par petites piques.',
        reponses:DC, bonne:1,
        debat:'À quel moment ça a basculé, à votre avis ?',
        verdict:'Un conflit.',
        explication:'Le sujet a disparu, il ne reste que la relation. Le silence et l\'ironie sont les deux signes les plus fiables : quand ils apparaissent, on ne discute plus, on s\'affronte.',
        regle:'SILENCE ET IRONIE : SIGNAUX D\'ALERTE' },

      { manche:2, type:'vf', emoji:'✋',
        titreCourt:'La scène',
        enonce:'Quelqu\'un dit en réunion : « je ne suis pas d\'accord, et voilà pourquoi ».',
        reponses:DC, bonne:0,
        debat:'Ça vous met mal à l\'aise, ce genre de phrase ?',
        verdict:'Un désaccord.',
        explication:'C\'est exactement ce qu\'on veut entendre. La personne annonce sa position et l\'argumente : c\'est discutable, donc réglable.',
        regle:'UN AVIS ARGUMENTÉ EST UN CADEAU' },

      { manche:2, type:'vf', emoji:'🗣️',
        titreCourt:'La scène',
        enonce:'L\'un raconte aux autres ce que l\'autre a dit — en déformant un peu.',
        reponses:DC, bonne:1,
        debat:'Pourquoi on fait ça, en général ?',
        verdict:'Un conflit.',
        explication:'Chercher des alliés plutôt que la personne concernée, c\'est ce qui transforme un différend à deux en ambiance pourrie à douze. Et la déformation est presque toujours involontaire.',
        regle:'ON PARLE À LA PERSONNE, PAS D\'ELLE' },

      { manche:2, type:'vf', emoji:'🤷',
        titreCourt:'La scène',
        enonce:'Ils se sont dit les choses franchement, ne sont toujours pas d\'accord, et continuent à travailler ensemble.',
        reponses:DC, bonne:0,
        debat:'On est obligés de finir d\'accord ?',
        verdict:'Un désaccord — et il peut le rester.',
        explication:'Se mettre d\'accord n\'est pas l\'objectif. Pouvoir ne pas être d\'accord et continuer à travailler ensemble, c\'est la définition même d\'une équipe adulte.',
        regle:'ON PEUT RESTER EN DÉSACCORD' },

      { manche:2, type:'vf', emoji:'🎯',
        titreCourt:'La scène',
        enonce:'On ne parle plus du sujet de départ. On parle de la personne.',
        reponses:DC, bonne:1,
        debat:'C\'est quoi, le signe le plus net ?',
        verdict:'Un conflit.',
        explication:'C\'est LE basculement. Tant qu\'on parle du problème, ça se règle. Dès qu\'on parle de « comment il est », il n\'y a plus rien à résoudre — seulement quelqu\'un à défendre ou à attaquer.',
        regle:'LE SUJET, PAS LA PERSONNE' },

      /* ── MANCHE 3 · QUE FAIS-TU ? ────────────────────────────────────── */
      { manche:3, type:'choix', emoji:'😤',
        titreCourt:'La remarque vexante',
        enonce:'En plein groupe, quelqu\'un lâche sur votre travail une remarque qui vous blesse. Le groupe entend.',
        reponses:[
          'Je réponds du tac au tac, sur le même ton',
          'Je ne dis rien sur le moment, et je lui en parle à la pause',
          'Je réponds calmement tout de suite : « là, je ne suis pas d\'accord, on en reparle »'
        ],
        bonne:2, bareme:[40, 120, 150],
        debat:'Qu\'est-ce qui est le plus dur : répondre, ou attendre ?',
        verdict:'La troisième — la deuxième est très bien aussi.',
        explication:'Poser une limite courte devant le groupe sans embrayer sur la dispute, c\'est le meilleur des deux : la remarque ne reste pas sans réponse, et l\'explication se fait au calme. Le tac au tac, lui, lance la spirale.',
        regle:'POSER LA LIMITE, REPORTER LA DISCUSSION' },

      { manche:3, type:'choix', emoji:'👥',
        titreCourt:'Le binôme qui ne suit pas',
        enonce:'Vous travaillez à deux sur un dossier. Depuis le début, vous faites presque tout. Le rendu est dans trois jours.',
        reponses:[
          'Je fais tout, ce sera plus vite fait, et je le dirai après',
          'Je vais voir le formateur pour signaler que je porte le travail seul',
          'Je lui en parle directement et on se répartit ce qui reste'
        ],
        bonne:2, bareme:[50, 100, 150],
        debat:'Pourquoi on préfère souvent tout faire soi-même ?',
        verdict:'La troisième.',
        explication:'Beaucoup de « il ne fait rien » sont en fait des « il ne sait pas par où commencer ». Une répartition explicite règle la moitié des cas. Si ça ne suffit pas, le formateur intervient — mais après, pas avant.',
        regle:'LA PERSONNE D\'ABORD, LE TIERS ENSUITE' },

      { manche:3, type:'choix', emoji:'🔥',
        titreCourt:'Tu es témoin',
        enonce:'Deux personnes du groupe montent le ton et ça s\'envenime. Tout le monde regarde.',
        reponses:[
          'Je ne m\'en mêle pas, ce n\'est pas mon affaire',
          'Je prends parti pour celui que je trouve dans son droit',
          'Je coupe court et je propose une pause : « on reprend ça au calme »'
        ],
        bonne:2, bareme:[60, 30, 150],
        debat:'Prendre parti, ça aide vraiment quelqu\'un ?',
        verdict:'La troisième.',
        explication:'Prendre parti transforme un différend à deux en camp contre camp. Proposer une pause n\'est pas fuir : c\'est donner à chacun le temps de redescendre, ce que ni l\'un ni l\'autre ne peut faire seul devant un public.',
        regle:'UNE PAUSE VAUT MIEUX QU\'UN ARBITRE' },

      /* ── MANCHE 4 · LE MYSTÈRE ───────────────────────────────────────── */
      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De quoi parle-t-on ?',
        indices:[
          'Elle transforme un reproche en information.',
          'Elle commence toujours par « je ».',
          'Elle dit l\'effet ressenti, jamais le défaut de l\'autre.'
        ],
        reponses:['L\'ironie', 'Le compromis', 'La formule en « je »', 'Le silence'],
        bonne:2,
        verdict:'La formule en « je ».',
        explication:'« Tu me coupes tout le temps » se conteste. « Je n\'arrive pas à finir mes phrases » ne se conteste pas. C\'est le même constat, mais l\'un ferme la conversation et l\'autre l\'ouvre.',
        regle:'JE DIS CE QUE ÇA ME FAIT' },

      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De qui parle-t-on ?',
        indices:[
          'Il n\'a pas d\'avis sur le fond.',
          'Il ne donne raison à personne.',
          'Son rôle est de rendre la parole possible.'
        ],
        reponses:['Le chef', 'Le tiers médiateur', 'Le témoin', 'Le délégué'],
        bonne:1,
        verdict:'Le tiers médiateur.',
        explication:'C\'est ce qui le distingue d\'un arbitre : il ne tranche pas, il organise. Formateur, CIP, référent — leur force est justement de n\'être dans aucun camp.',
        regle:'IL N\'ARBITRE PAS, IL ORGANISE' },

      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De quoi parle-t-on ?',
        indices:[
          'Il ne coûte rien sur le moment.',
          'Il fait grossir exactement ce qu\'il évite.',
          'Il finit presque toujours par ressortir, au pire moment.'
        ],
        reponses:['Le compromis', 'Le non-dit', 'Le malentendu', 'Le reproche'],
        bonne:1,
        verdict:'Le non-dit.',
        explication:'C\'est le carburant de tous les conflits durables. Ce qui n\'a pas été dit le jour où c\'était petit ressort trois mois plus tard, avec les intérêts — et sur un sujet qui n\'a souvent rien à voir.',
        regle:'CE QU\'ON GARDE, ÇA GROSSIT' }

    ],

    final: {
      titre: 'Ce qu\'on retient',
      regles: [
        ['💬', 'Le désaccord est utile', 'Un groupe où personne ne dit rien n\'est pas un groupe apaisé.'],
        ['⏱️', 'Tôt, c\'est petit', 'Dit le jour même, c\'est une remarque. Trois semaines après, une explosion.'],
        ['🙋', 'Je parle en « je »', 'L\'effet que ça me fait, pas ce que l\'autre est.'],
        ['🎯', 'Le sujet, pas la personne', 'Dès qu\'on parle de « comment il est », il n\'y a plus rien à régler.'],
        ['🔉', 'Je baisse d\'un ton', 'L\'autre est obligé de baisser aussi pour être entendu.'],
        ['🚪', 'En privé d\'abord', 'Devant un public, personne ne peut changer d\'avis.'],
        ['❓', 'Je vérifie avant de conclure', '« Qu\'est-ce que tu as voulu dire, exactement ? »'],
        ['🤝', 'Un tiers, ce n\'est pas perdre', 'Formateur, CIP, référent : ils ouvrent la parole, ils n\'arbitrent pas.']
      ],
      mot: 'On n\'est pas obligés de finir d\'accord. Pouvoir ne pas l\'être et continuer à travailler ensemble, c\'est exactement ce qu\'on attend de vous en entreprise — et c\'est ce qui s\'apprend ici.'
    }
  }
  ,
  /* ---- Ses manches ----------------------------------------------------- */
  {
    1: { titre: 'Vrai ou Faux',           sous: 'Huit idées reçues à trancher.' },
    2: { titre: 'Désaccord ou conflit ?', sous: 'Six scènes.<br>À vous de dire où passe la frontière.' },
    3: { titre: 'Que fais-tu ?',          sous: 'Trois situations.<br>Aucune réponse n\'est fausse — on en discute.' },
    4: { titre: 'Le mystère',             sous: 'Trois indices. Devinez de quoi on parle.<br>Plus vous trouvez tôt, plus ça rapporte.' }
  }

  );

})();
