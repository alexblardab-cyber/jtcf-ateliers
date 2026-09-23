/* ==========================================================================
   JTCF — ATELIER · LES ARNAQUES EN LIGNE
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
  var AP = JTCF_QUIZ.AP;     // ['C'EST NORMAL', 'C'EST UNE ARNAQUE']

  JTCF_QUIZ.enregistrer('arnaques-en-ligne',

  /* ---- L'atelier ------------------------------------------------------- */
  {
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
    }

  ,
  /* ---- Ses manches ----------------------------------------------------- */
  {
      1: { titre: 'Vrai ou Faux',        sous: 'Huit idées reçues à trancher.' },
      2: { titre: 'Arnaque ou pas ?',    sous: 'Six messages reçus pour de vrai.<br>À vous de dire lesquels sont piégés.' },
      3: { titre: 'Que fais-tu ?',       sous: 'Trois situations qui arrivent vraiment.<br>Aucune réponse n\'est fausse — on en discute.' },
      4: { titre: 'Le piège mystère',    sous: 'Trois indices. Devinez l\'arnaque.<br>Plus vous trouvez tôt, plus ça rapporte.' }
  }

  );

})();
