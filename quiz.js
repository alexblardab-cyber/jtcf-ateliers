/* ==========================================================================
   JTCF — Ateliers : catalogue des quiz
   --------------------------------------------------------------------------
   Un seul fichier contient toutes les questions. Pour ajouter un atelier,
   on recopie un bloc et on change le contenu — rien d'autre à toucher.

   Chaque question a :
     enonce       la question posée
     reponses     quatre propositions
     bonne        le numéro de la bonne (0 = la première)
     explication  ce qui s'affiche après le débat
     debat        la question à poser à voix haute pour lancer la discussion
                  (facultatif — s'affiche sur l'écran projeté)
   ========================================================================== */

(function (global) {
  'use strict';

  var CATALOGUE = {

    /* ---- Atelier 1 : les règles de vie du groupe ------------------------ */
    'regles-de-vie': {
      titre: 'Les règles de vie du groupe',
      icone: '🤝',
      couleur: '#2C6E9B',
      questions: [

        { enonce: 'Vous allez arriver avec vingt minutes de retard. Que faites-vous ?',
          reponses: [
            'Je préviens avant, dès que je le sais',
            'J\'arrive et j\'explique en entrant',
            'Je ne dis rien, vingt minutes ce n\'est pas grand-chose',
            'J\'envoie un message le soir même'
          ],
          bonne: 0,
          debat: 'Prévenir, ça change quoi pour les autres ?',
          explication: 'Prévenir avant, c\'est la règle. Ce n\'est pas le retard qui pose problème — ça arrive à tout le monde — c\'est le silence. Un message de trente secondes évite que le groupe vous attende et que le formateur s\'inquiète.' },

        { enonce: 'Votre téléphone vibre pendant un atelier. C\'est votre employeur.',
          reponses: [
            'Je réponds discrètement à ma place',
            'Je sors de la salle et je rappelle',
            'Je regarde qui c\'est, je rappelle à la pause',
            'Je réponds, c\'est le travail, c\'est prioritaire'
          ],
          bonne: 2,
          debat: 'Où est la limite entre « urgent » et « ça peut attendre » ?',
          explication: 'Le téléphone reste rangé. Un appel vraiment urgent se rappelle à la pause, ou on sort sans déranger. La difficulté n\'est pas la règle, c\'est de tenir la différence entre ce qui est urgent et ce qui nous démange.' },

        { enonce: 'Quelqu\'un dit quelque chose qui vous paraît complètement faux.',
          reponses: [
            'Je le coupe tout de suite, sinon j\'oublie',
            'Je le laisse finir, puis je donne mon avis',
            'Je souffle et je lève les yeux au ciel',
            'Je le dis à mon voisin à voix basse'
          ],
          bonne: 1,
          debat: 'Couper la parole, c\'est du dynamisme ou du manque de respect ?',
          explication: 'Écouter avant de parler. Laisser finir ne veut pas dire être d\'accord — au contraire, on répond mieux quand on a tout entendu. Les conversations parallèles, elles, attendent la pause.' },

        { enonce: 'Dans le groupe, « je respecte chacun », ça veut dire quoi ?',
          reponses: [
            'Je suis d\'accord avec tout le monde',
            'Je garde mes opinions pour moi',
            'Je peux ne pas être d\'accord, sans viser la personne',
            'J\'évite de parler aux gens que je n\'aime pas'
          ],
          bonne: 2,
          debat: 'Attaquer une idée ou attaquer quelqu\'un : qui voit la différence ?',
          explication: 'Respecter n\'est pas être d\'accord. On peut contredire une idée fermement et rester correct avec la personne. La ligne à ne pas franchir, c\'est quand le désaccord devient une attaque personnelle.' },

        { enonce: 'Vous trouvez une chaise cassée en salle.',
          reponses: [
            'Je la pousse dans un coin, ce n\'est pas moi',
            'Je le signale au formateur',
            'Je m\'assois ailleurs et je n\'en parle pas',
            'Je préviens seulement si quelqu\'un me demande'
          ],
          bonne: 1,
          debat: 'Signaler un problème qu\'on n\'a pas causé, pourquoi on ne le fait pas ?',
          explication: 'Prendre soin du lieu, ce n\'est pas seulement ne rien casser. C\'est aussi signaler. Le suivant qui s\'assoit dessus, ce sera peut-être vous.' },

        { enonce: 'Un participant raconte une situation personnelle difficile pendant l\'atelier.',
          reponses: [
            'Ça reste dans la salle',
            'J\'en parle à mes proches, ils ne le connaissent pas',
            'Je peux en parler aux autres du groupe',
            'Je le raconte si on me pose la question'
          ],
          bonne: 0,
          debat: 'Sans confidentialité, qu\'est-ce qu\'on n\'oserait plus dire ici ?',
          explication: 'Ce qui se dit ici reste ici. Sans cette règle, plus personne ne prend le risque de parler vraiment — et l\'atelier devient une salle où l\'on récite ce qu\'il faut dire.' },

        { enonce: 'Vous avez fini votre exercice, votre voisin est bloqué.',
          reponses: [
            'Je lui donne mes réponses',
            'Je ne fais rien, chacun son travail',
            'Je lui explique là où il coince',
            'J\'attends qu\'il demande au formateur'
          ],
          bonne: 2,
          debat: 'Aider ou donner la réponse : qu\'est-ce qui l\'aide vraiment ?',
          explication: 'Participer et aider fait partie des règles. Mais donner ses réponses n\'aide personne — expliquer, oui. Et celui qui explique est souvent celui qui apprend le plus.' },

        { enonce: 'Depuis quelques jours ça ne va pas, vous décrochez en silence.',
          reponses: [
            'Je tiens, ça va passer tout seul',
            'Je le dis au formateur ou au CIP',
            'Je m\'absente le temps que ça aille mieux',
            'J\'en parle uniquement si on me le demande'
          ],
          bonne: 1,
          debat: 'Qu\'est-ce qui empêche de le dire ?',
          explication: 'Prévenir quand ça ne va pas, plutôt que de décrocher en silence. Le dire tôt, c\'est ce qui permet d\'ajuster quelque chose. Le dire trop tard, c\'est souvent après l\'abandon.' },

        { enonce: 'À quoi servent les règles de vie du groupe ?',
          reponses: [
            'À sanctionner ceux qui débordent',
            'À protéger la formation et ceux qui la suivent',
            'À faire plaisir à la direction',
            'À remplacer le règlement intérieur'
          ],
          bonne: 1,
          debat: 'Une règle qui ne protège personne, elle sert à quoi ?',
          explication: 'Les règles ne sont pas là pour punir mais pour que le groupe fonctionne. Chacune protège quelque chose : le temps de tous, la parole de chacun, la confiance.' },

        { enonce: 'Une règle du groupe vous paraît injuste. Que faites-vous ?',
          reponses: [
            'Je ne l\'applique pas, elle est injuste',
            'Je l\'applique en râlant',
            'Je la discute avec le groupe et le formateur',
            'Je me tais, ça ne sert à rien'
          ],
          bonne: 2,
          debat: 'Les règles d\'ici, elles viennent d\'où ?',
          explication: 'Les règles se discutent — c\'est même le but de cet atelier. Ce qui ne se fait pas, c\'est de les ignorer sans rien dire. Une règle expliquée et acceptée se tient toute seule.' }

      ]
    }

    /* ---- Ateliers à venir -------------------------------------------------
       Recopier le bloc ci-dessus et changer le contenu :

       'gestion-du-stress':   { titre:'Gérer son stress',        icone:'😮‍💨', ... }
       'gestion-des-conflits':{ titre:'Gérer un conflit',        icone:'⚡',  ... }
       'harcelement':         { titre:'Reconnaître le harcèlement', icone:'🛡️', ... }
       'arnaques-en-ligne':   { titre:'Les arnaques en ligne',   icone:'🎣', ... }
       'posture-pro':         { titre:'La posture professionnelle', icone:'👔', ... }
       -------------------------------------------------------------------- */

  };

  function liste() {
    return Object.keys(CATALOGUE).map(function (id) {
      var q = CATALOGUE[id];
      return { id: id, titre: q.titre, icone: q.icone, couleur: q.couleur, nb: q.questions.length };
    });
  }

  function get(id) { return CATALOGUE[id] || null; }

  global.JTCF_QUIZ = { CATALOGUE: CATALOGUE, liste: liste, get: get };

})(window);
