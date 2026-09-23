/* ==========================================================================
   JTCF — ATELIER · RECONNAÎTRE LE HARCÈLEMENT
   --------------------------------------------------------------------------
   Parti pris pédagogique : l'atelier s'adresse aux TÉMOINS.
   Personne n'a à raconter son vécu pour jouer, et aucune situation n'est
   décrite de façon crue. On travaille la reconnaissance et le réflexe,
   pas l'émotion.

   Les formats et les champs disponibles sont décrits en tête de quiz.js.
   ========================================================================== */

(function () {
  'use strict';
  var VF = JTCF_QUIZ.VF;
  var HP = ['CE N\'EN EST PAS', 'C\'EST DU HARCÈLEMENT'];

  JTCF_QUIZ.enregistrer('harcelement',

  /* ---- L'atelier ------------------------------------------------------- */
  {
    titre: 'Reconnaître le harcèlement',
    icone: '🛡️',
    couleur: '#6b46c1',
    questions: [

      /* ── MANCHE 1 · VRAI OU FAUX ─────────────────────────────────────── */
      { manche:1, type:'vf', emoji:'🎭',
        enonce:'Pour qu\'il y ait harcèlement, il faut que l\'auteur ait voulu faire du mal.',
        reponses:VF, bonne:1,
        debat:'« C\'était pour rire » — ça change quelque chose ?',
        verdict:'Non.',
        explication:'La loi regarde les effets, pas les intentions. Des agissements qui dégradent les conditions de vie ou de travail de quelqu\'un sont du harcèlement, même si celui qui les commet dit n\'avoir jamais voulu ça.',
        regle:'C\'EST L\'EFFET QUI COMPTE, PAS L\'INTENTION' },

      { manche:1, type:'vf', emoji:'😅',
        enonce:'Si la personne rit avec les autres, c\'est que ça ne la dérange pas.',
        reponses:VF, bonne:1,
        debat:'Pourquoi on rit, parfois, quand on n\'a pas envie de rire ?',
        verdict:'Pas du tout.',
        explication:'Rire est souvent une protection : c\'est ce qui coûte le moins cher sur le moment. Beaucoup de victimes racontent avoir ri pendant des mois avant de craquer.',
        regle:'UN RIRE N\'EST PAS UN ACCORD' },

      { manche:1, type:'vf', emoji:'☝️',
        enonce:'Une seule parole ou un seul geste ne peut jamais être du harcèlement.',
        reponses:VF, bonne:1,
        debat:'Une fois, ça suffit ou pas ?',
        verdict:'Faux, et c\'est important.',
        explication:'Le harcèlement moral suppose des faits répétés. Mais en matière sexuelle, une seule pression grave — par exemple pour obtenir quelque chose en échange — suffit à constituer l\'infraction.',
        regle:'UNE SEULE PRESSION GRAVE SUFFIT' },

      { manche:1, type:'vf', emoji:'👥',
        enonce:'Le harcèlement peut venir d\'un collègue, pas seulement d\'un supérieur.',
        reponses:VF, bonne:0,
        debat:'Entre collègues, on dit quoi ?',
        verdict:'Oui.',
        explication:'Aucune position hiérarchique n\'est requise. Un collègue, un groupe, un client, un stagiaire : l\'auteur peut être n\'importe qui. La hiérarchie est seulement une circonstance qui aggrave.',
        regle:'N\'IMPORTE QUI PEUT EN ÊTRE L\'AUTEUR' },

      { manche:1, type:'vf', emoji:'📲',
        enonce:'Sur les réseaux, si chacun n\'a envoyé qu\'un seul message, il n\'y a pas harcèlement.',
        reponses:VF, bonne:1,
        debat:'Un message chacun, à trente : ça fait quoi, au bout ?',
        verdict:'Faux.',
        explication:'La loi vise précisément ce cas : quand plusieurs personnes s\'y mettent, même une fois chacune, l\'ensemble est un harcèlement. Chacun reste responsable de son propre message.',
        regle:'UN MESSAGE CHACUN RESTE UN HARCÈLEMENT' },

      { manche:1, type:'vf', emoji:'🗣️',
        enonce:'Un salarié qui signale un harcèlement peut être sanctionné pour l\'avoir dit.',
        reponses:VF, bonne:1,
        debat:'Qu\'est-ce qui fait le plus peur : la situation, ou d\'en parler ?',
        verdict:'Non, la loi l\'interdit.',
        explication:'Le salarié qui signale ou témoigne de bonne foi est protégé : aucune sanction, aucun licenciement ne peut reposer là-dessus. C\'est précisément parce que la peur existe que cette protection a été écrite.',
        regle:'SIGNALER EST PROTÉGÉ PAR LA LOI' },

      { manche:1, type:'vf', emoji:'🏢',
        enonce:'L\'employeur est obligé d\'agir dès qu\'il est informé.',
        reponses:VF, bonne:0,
        debat:'Et s\'il ne fait rien ?',
        verdict:'Oui.',
        explication:'L\'employeur a une obligation de prévention et de protection. Informé, il doit enquêter et faire cesser les faits. Ne rien faire engage sa propre responsabilité, même s\'il n\'est pas l\'auteur.',
        regle:'INFORMÉ, L\'EMPLOYEUR DOIT AGIR' },

      { manche:1, type:'vf', emoji:'🙊',
        enonce:'Le témoin qui ne dit rien n\'a aucun rôle dans l\'histoire.',
        reponses:VF, bonne:1,
        debat:'Qu\'est-ce que le silence dit à la victime ?',
        verdict:'Si, un rôle énorme.',
        explication:'Le silence du groupe est ce qui installe le harcèlement : il signale à l\'auteur que c\'est toléré, et à la victime qu\'elle est seule. C\'est presque toujours un témoin qui fait basculer la situation.',
        regle:'LE TÉMOIN EST LE LEVIER PRINCIPAL' },

      /* ── MANCHE 2 · HARCÈLEMENT OU PAS ? ─────────────────────────────── */
      { manche:2, type:'vf', emoji:'📝',
        titreCourt:'La situation',
        enonce:'Un formateur reprend sèchement un travail mal fait, devant le groupe. Une fois.',
        reponses:HP, bonne:0,
        debat:'Maladroit, ou grave ?',
        verdict:'Ce n\'en est pas.',
        explication:'Une remarque isolée sur le travail, même maladroite et mal placée, reste une critique professionnelle. Cela peut se discuter avec lui — ce n\'est pas du harcèlement.',
        regle:'UNE CRITIQUE N\'EST PAS UN HARCÈLEMENT' },

      { manche:2, type:'vf', emoji:'🗯️',
        titreCourt:'La situation',
        enonce:'Depuis trois semaines, deux personnes imitent l\'accent de quelqu\'un à chaque fois qu\'il prend la parole.',
        reponses:HP, bonne:1,
        debat:'À partir de quand ça bascule ?',
        verdict:'C\'en est.',
        explication:'Répété, visant la même personne, et de plus en plus dissuasif : au bout de trois semaines, cette personne ne prend plus la parole. C\'est exactement l\'effet que la loi vise.',
        regle:'RÉPÉTÉ, CIBLÉ, ISOLANT' },

      { manche:2, type:'vf', emoji:'☕',
        titreCourt:'La situation',
        enonce:'Un collègue vous demande une fois si vous êtes libre samedi. Vous dites non. Il n\'en reparle plus.',
        reponses:HP, bonne:0,
        debat:'Où est la limite ?',
        verdict:'Ce n\'en est pas.',
        explication:'Une invitation qui s\'arrête au premier non est une invitation. Ce qui bascule, c\'est l\'insistance après un refus — ou le fait de lier la réponse à autre chose.',
        regle:'UN NON ENTENDU, C\'EST UN NON RESPECTÉ' },

      { manche:2, type:'vf', emoji:'📄',
        titreCourt:'La situation',
        enonce:'Votre responsable laisse entendre que votre contrat sera renouvelé si vous êtes « plus sympa » avec lui.',
        reponses:HP, bonne:1,
        debat:'Et si ça n\'est dit qu\'une seule fois ?',
        verdict:'C\'en est, dès la première fois.',
        explication:'Lier un avantage à une faveur, c\'est la pression grave que la loi punit même sans répétition. L\'autorité du responsable est en plus une circonstance aggravante.',
        regle:'MÊME UNE SEULE FOIS, C\'EST UNE INFRACTION' },

      { manche:2, type:'vf', emoji:'📱',
        titreCourt:'La situation',
        enonce:'Une photo de vous est détournée en image drôle dans le groupe de la promo. Chacun ajoute son commentaire.',
        reponses:HP, bonne:1,
        debat:'Qui est responsable, dans ce groupe ?',
        verdict:'C\'en est.',
        explication:'Chacun s\'est dit qu\'il ne faisait qu\'ajouter un mot. Mis bout à bout, c\'est un harcèlement, et chacun répond de son message. Publier ou rediffuser compte autant qu\'avoir commencé.',
        regle:'RELAYER, C\'EST PARTICIPER' },

      { manche:2, type:'vf', emoji:'🎯',
        titreCourt:'La situation',
        enonce:'Votre tuteur vous confie des tâches difficiles, vous reprend souvent, et attend la même chose de tout le monde.',
        reponses:HP, bonne:0,
        debat:'Exigeant ou malveillant : à quoi on fait la différence ?',
        verdict:'Ce n\'en est pas.',
        explication:'Exiger n\'est pas harceler. Ce qui distingue les deux, c\'est le ciblage et l\'humiliation : les mêmes exigences pour tous, avec des attentes claires, c\'est de l\'encadrement — même quand c\'est dur.',
        regle:'EXIGEANT N\'EST PAS MALVEILLANT' },

      /* ── MANCHE 3 · QUE FAIS-TU ? ────────────────────────────────────── */
      { manche:3, type:'choix', emoji:'👀',
        titreCourt:'Tu es témoin',
        enonce:'Depuis quelques jours, le groupe a trouvé un surnom moqueur pour quelqu\'un de la promo. Ça fait rire. La personne concernée s\'assoit de plus en plus au fond.',
        reponses:[
          'Je ne participe pas, mais je ne dis rien non plus',
          'Je vais voir la personne à la pause pour lui dire que je trouve ça nul',
          'Je le dis au groupe sur le moment : « on arrête, ça fait plus rire personne »'
        ],
        bonne:2, bareme:[50, 110, 150],
        debat:'Qu\'est-ce qui vous empêcherait de le dire à voix haute ?',
        verdict:'La troisième — mais la deuxième vaut déjà beaucoup.',
        explication:'Aller voir la personne rompt son isolement, et c\'est déjà énorme. Le dire devant le groupe fait en plus basculer la norme : le premier qui parle autorise tous les autres à ne plus rire.',
        regle:'LE PREMIER QUI PARLE LIBÈRE LES AUTRES' },

      { manche:3, type:'choix', emoji:'💬',
        titreCourt:'Tu es témoin',
        enonce:'Dans le groupe WhatsApp de la promo, les messages sur une même personne s\'enchaînent depuis hier soir. Tu n\'as rien envoyé.',
        reponses:[
          'Je quitte le groupe, je ne veux pas être mêlé à ça',
          'Je fais des captures d\'écran et j\'en parle au formateur ou au référent',
          'J\'écris dans le groupe que ça suffit'
        ],
        bonne:1, bareme:[40, 150, 120],
        debat:'Pourquoi les captures d\'écran comptent autant ?',
        verdict:'La deuxième.',
        explication:'Écrire « ça suffit » est utile et courageux, mais les messages disparaissent vite. Les captures font la différence entre « il paraît que » et des faits. Quitter le groupe protège vous seul, et laisse la personne dedans.',
        regle:'ON GARDE LES PREUVES AVANT TOUT' },

      { manche:3, type:'choix', emoji:'🏢',
        titreCourt:'Tu es en entreprise',
        enonce:'Un collègue vous met mal à l\'aise par des remarques répétées sur votre physique. Vous êtes en stage, et vous avez besoin de cette évaluation.',
        reponses:[
          'Je laisse passer, mon stage se termine bientôt',
          'J\'en parle à mon tuteur ou au référent de l\'entreprise',
          'J\'appelle mon CIP ou mon formateur au centre'
        ],
        bonne:2, bareme:[40, 130, 150],
        debat:'Qui est le plus facile à appeler, et pourquoi ?',
        verdict:'La troisième — et la deuxième si vous le sentez.',
        explication:'Le centre est extérieur à l\'entreprise : il peut intervenir sans que vous ayez à affronter seul la situation, et votre évaluation n\'est pas entre les mains de la personne concernée. Ne rien dire, en revanche, laisse la place au suivant.',
        regle:'LE CENTRE EST LÀ POUR ÇA' },

      /* ── MANCHE 4 · LE MYSTÈRE ───────────────────────────────────────── */
      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De quoi parle-t-on ?',
        indices:[
          'Il ne laisse aucune marque visible.',
          'Il s\'installe lentement, par petites touches.',
          'Son but n\'est pas de frapper, mais d\'isoler.'
        ],
        reponses:['Un conflit ponctuel', 'Le harcèlement moral', 'Une exigence professionnelle', 'Un désaccord d\'équipe'],
        bonne:1,
        verdict:'Le harcèlement moral.',
        explication:'C\'est ce qui le rend si difficile à prouver : pris un par un, les faits paraissent minuscules. C\'est leur accumulation qui fait le dossier — d\'où l\'importance de noter les dates.',
        regle:'ON NOTE LES DATES, DÈS LE DÉBUT' },

      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De quoi parle-t-on ?',
        indices:[
          'Il ne s\'arrête pas à la sortie du centre.',
          'Il suit la personne jusque dans sa chambre.',
          'Un écran suffit à le faire entrer chez elle.'
        ],
        reponses:['Le cyberharcèlement', 'La rumeur', 'L\'exclusion du groupe', 'La moquerie'],
        bonne:0,
        verdict:'Le cyberharcèlement.',
        explication:'C\'est ce qui le rend plus lourd que le reste : il n\'y a plus de porte à fermer, plus d\'heure où ça s\'arrête. Le 3018 peut faire retirer rapidement les contenus en ligne.',
        regle:'LE 3018 FAIT RETIRER LES CONTENUS' },

      { manche:4, type:'mystere', emoji:'🔍',
        enonce:'De qui parle-t-on ?',
        indices:[
          'Il n\'est ni victime, ni auteur.',
          'Son silence pèse plus lourd qu\'il ne le croit.',
          'C\'est presque toujours lui qui fait basculer la situation.'
        ],
        reponses:['Le formateur', 'L\'employeur', 'Le témoin', 'Le référent'],
        bonne:2,
        verdict:'Le témoin.',
        explication:'C\'est tout le sens de cet atelier. Le harcèlement a besoin d\'un public pour tenir. Quand le public cesse de rire, il s\'arrête presque toujours — et cela ne demande ni courage héroïque ni grand discours.',
        regle:'PAS DE PUBLIC, PAS DE HARCÈLEMENT' }

    ],

    final: {
      titre: 'Ce qu\'on retient',
      regles: [
        ['🎯', 'C\'est l\'effet qui compte', 'Pas l\'intention, et pas « c\'était pour rire ».'],
        ['😅', 'Un rire n\'est pas un accord', 'Souvent, c\'est ce qui coûte le moins cher sur le moment.'],
        ['☝️', 'Une seule fois peut suffire', 'Quand il y a pression grave, la répétition n\'est pas exigée.'],
        ['📱', 'Relayer, c\'est participer', 'Un message chacun, à trente, reste un harcèlement.'],
        ['📸', 'On garde les preuves', 'Captures d\'écran et dates, avant que ça disparaisse.'],
        ['🗣️', 'Signaler est protégé', 'Personne ne peut être sanctionné pour l\'avoir dit de bonne foi.'],
        ['🛡️', 'Le 3018', 'Gratuit, anonyme, 7j/7 de 9h à 23h — harcèlement et cyberharcèlement.'],
        ['🤝', 'Le témoin fait basculer', 'Une phrase courte suffit : « là, c\'est pas ok ».']
      ],
      mot: 'Le harcèlement tient parce qu\'il a un public. On ne demande à personne d\'être héroïque — juste de ne plus rire, et de le dire une fois. C\'est presque toujours ce qui arrête tout.'
    }
  }
  ,
  /* ---- Ses manches ----------------------------------------------------- */
  {
    1: { titre: 'Vrai ou Faux',            sous: 'Huit idées reçues à trancher.' },
    2: { titre: 'Harcèlement ou pas ?',    sous: 'Six situations.<br>À vous de dire où passe la limite.' },
    3: { titre: 'Que fais-tu ?',           sous: 'Trois fois, vous êtes témoin.<br>Aucune réponse n\'est fausse — on en discute.' },
    4: { titre: 'Le mystère',              sous: 'Trois indices. Devinez de quoi on parle.<br>Plus vous trouvez tôt, plus ça rapporte.' }
  }

  );

})();
