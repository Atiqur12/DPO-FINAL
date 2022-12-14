import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-document-three',
  templateUrl: './document-three.component.html',
  styleUrls: ['./document-three.component.css']
})
export class DocumentThreeComponent  {

  constructor() { }


  title = 'frontend';
  download() {
    const doc = new jsPDF();
    let ans = Array.from(document.querySelectorAll(".questions .form-control")).map((item: any) => item.value)

    let text: string = `


                 CONDITIONS GÉNÉRALES D'UTILISATION    ${ans[0]}

     ARTICLE 1. INFORMATIONS LÉGALE
     En vertu de l'article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique,
     il est précisé dans cet article l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
     ${ans[0]} est édité par :
     ${ans[1]} dont le siège siège social est situé à l'adresse suivante :
     ${ans[2]}, et immatriculée au  ${ans[3]}.
     Téléphone :  ${ans[4]} / Adresse e-mail :  ${ans[5]}.
     Le directeur de publication est : ${ans[6]}.
     ${ans[0]} est hébergé par :
     ${ans[7]} dont le siège est situé à l'adresse ci-après :
     ${ans[8]}
     Numéro de téléphone : ${ans[9]}
     ARTICLE 2. PRÉSENTATION DE LA PLATEFORME NUMÉRIQUE
     ${ans[0]} a pour objet :
     ${ans[10]}

     ARTICLE 3. CONTACT
     Pour toute question ou demande d'information concernant la plateforme numérique,
     ou tout signalement de contenu ou d'activités illicites,
     l'utilisateur peut contacter l'éditeur à l'adresse e-mail suivante:
     ${ans[11]} ou adresser un courrier recommandé avec accusé de réception à :
     ${ans[3]}


     ARTICLE 4. ACCEPTATION DES CONDITIONS D'UTILISATION
     L'accès et l'utilisation du site sont soumis à l'acceptation et au respect des présentes Conditions Générales
     d'Utilisation.L'éditeur se réserve le droit de modifier, à tout moment et sans préavis, le site et des services ainsi
     que les présentes CGU,notamment pour s'adapter aux évolutions du site par la mise à disposition de nouvelles
     fonctionnalités ou
     la suppression ou la modification de fonctionnalités existantes.
     Il est donc conseillé à l'utilisateur de se référer avant toute navigation à la dernière version des CGU,
     accessible à tout moment sur le site.
     En cas de désaccord avec les CGU, aucun usage du site ne saurait être effectué par l'utilisateur.

     ARTICLE 5. ACCÈS ET NAVIGATION
     ${ans[12]==="yes"?"L'accès au site et son utilisation sont réservés aux personnes âgées au minimum de 15 ans L'éditeur \n sera en droit de demander une justification de l'âge de l'utilisateur, et ce par tout moyen.":""}
     L'éditeur met en œuvre les solutions techniques à sa disposition pour permettre l'accès au site 24 heures sur 24,
     7 jours sur 7. Il pourra néanmoins à tout moment suspendre,
     limiter ou interrompre l'accès au site ou à certaines pages de celui-ci afin de procéder à des mises à jours,
     des modifications de son contenu ou tout autre action jugée nécessaire au bon fonctionnement du site.
     Les présentes CGU s'appliquent, en tant que de besoin, à toute déclinaison ou
     extension du site sur les réseaux sociaux et/ou communautaires existants ou à venir.
     ARTICLE 6. GESTION DE LA PLATEFORME NUMÉRIQUE
     Pour la bonne gestion du site, l'éditeur pourra à tout moment :
     Suspendre, interrompre ou limiter l'accès à tout ou partie du site, réserver l'accès au site, ou à certaines parties
     du site, à une catégorie déterminée d'internaute ;
     Supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec
     les lois nationales ou internationales,
     ou avec les règles de la Nétiquette ;
     Suspendre la plateforme afin de procéder à des mises à jour`


     doc.setFontSize(10);

     doc.text(text, 20, 20);


doc.addPage();
let textTwo:string=`


${ans[14]===""?"ARTICLE 7. SERVICES RÉSERVÉS AUX UTILISATEURS INSCRITS":""}


     1. INSCRIPTION
     L'accès à certains services et notamment à tous les services payants, est conditionné par l'inscription de l'utilisateur.
     L'inscription et l'accès aux services de la plateforme sont réservés exclusivement aux personnes physiques capables,
     ayant rempli et validé le formulaire d'inscription disponible en ligne sur ${ans[0]}, ainsi que les présentes
     Conditions Générales d'Utilisation.
     Lors de son inscription, l'utilisateur s'engage à fournir des informations exactes, sincères et
     à jour sur sa personne et son état civil.
     L'utilisateur devra en outre procéder à une vérification régulière des données le concernant afin d'en conserver
     l'exactitude.L'utilisateur doit ainsi fournir impérativement une adresse e-mail valide,
     sur laquelle le site lui adressera une confirmation de son inscription à ses services.
     Une adresse de messagerie électronique ne peut être utilisée plusieurs fois pour s'inscrire aux services.
     Toute communication réalisée par ${ans[0]} et ses partenaires est en conséquence réputée avoir été réceptionnée
     et lue par l'utilisateur.
     Ce dernier s'engage donc à consulter régulièrement les messages reçus sur cette adresse e-mail et à répondre
     dans un délai raisonnable si cela est nécessaire.
     Une seule inscription aux services du site est admise par personne physique.
     L'utilisateur se voit attribuer un identifiant lui permettant d'accéder à un espace dont l'accès lui est
     réservé (ci-après "Espace personnel"),
     en complément de la saisie de son mot de passe.





     ${ans[15]===""?"L'identifiant et le mot de passe sont modifiables en ligne par l'utilisateur dans son Espace personnel. \n Le mot de passe est personnel et confidentiel,l'utilisateur s'engage ainsi à ne pas le communiquer à des tiers.":""}

     ${ans[0]} se réserve en tout état de cause la possibilité de refuser une demande d'inscription aux services en
     cas de non-respect par l'utilisateur des dispositions des présentes Conditions Générales d'Utilisati


     2. DÉSINSCRIPTION

     L'utilisateur régulièrement inscrit pourra à tout moment demander sa désinscription en se rendant sur la page
     dédiée dans son Espace personnel.
      ${ans[16]===""?"Toute désinscription du site sera effective après que l'utilisateur ait rempli le formulaire prévu à cet effet,dans le délai suivant : 1 mois.":""}\n\n

      ${ans[17]===""?"3. SUPPRESSION DE L'ESPACE PERSONNEL À L'INITIATIVE DE L'ÉDITEUR  \n \n Il est porté à la connaissance de l'utilisateur que l'éditeur se réserve le droit de supprimer l'espace personnel de tout Utilisateur qui contreviendrait \n aux présentes conditions d'utilisation et de vente,  \n et plus particulièrement dans les cas suivants :  Si l'utilisateur fait une utilisation illicite de la plateforme ;   \n Si l'utilisateur, lors de la création de son espace personnel, transmet volontairement des informations erronées sur la plateforme ; \n Si l'utilisateur n'a pas été actif sur son espace personnel depuis au moins un an.  \n Dans le cas où l'éditeur déciderait de supprimer l'espace personnel de l'utilisateur pour l'une de ces raisons,  \n celle-ci ne saurait constituer un dommage pour l'utilisateur dont le compte a été supprimé. \n Cette suppression ne saurait constituer une renonciation aux poursuites judiciaires que l'éditeur pourrait entreprendre à  \nl'égard de l'utilisateur étant contrevenu à ces règles. ":""}
     3. SUPPRESSION DE L'ESPACE PERSONNEL À L'INITIATIVE DE L'ÉDITEUR
     Il est porté à la connaissance de l'utilisateur que l'éditeur se réserve le droit de supprimer
     l'espace personnel de tout Utilisateur qui contreviendrait aux présentes conditions d'utilisation et de vente,
     et plus particulièrement dans les cas suivants :
     Si l'utilisateur fait une utilisation illicite de la plateforme ;
     Si l'utilisateur, lors de la création de son espace personnel, transmet volontairement des
     informations erronées sur la plateforme ;
     Si l'utilisateur n'a pas été actif sur son espace personnel depuis au moins un an.
     Dans le cas où l'éditeur déciderait de supprimer l'espace personnel de l'utilisateur pour l'une de ces raisons,
     celle-ci ne saurait constituer un dommage pour l'utilisateur dont le compte a été supprimé.
     Cette suppression ne saurait constituer une renonciation aux poursuites judiciaires que
     l'éditeur pourrait entreprendre à l'égard de l'utilisateur étant contrevenu à ces règles`



     doc.setFontSize(10);

     doc.text(textTwo, 20, 20);


doc.addPage();
let textThree:string=`
     ARTICLE 8. RESPONSABILITÉS
     L'éditeur n'est responsable que du contenu qu'il a lui-même édité. L'éditeur n'est pas responsable :
     En cas de problématiques ou défaillances techniques, informatiques ou de compatibilité du site avec un
     matériel ou logiciel quel qu'il soit ;
     Des dommages directs ou indirects, matériels ou immatériels, prévisibles ou imprévisibles résultant de
     l'utilisation ou des difficultés d'utilisation du site ou de ses services ;
     Des caractéristiques intrinsèques de l'Internet, notamment celles relatives au manque de fiabilité et au
     défaut de sécurisation des informations y circulant
     Des contenus ou activités illicites utilisant son site et ce, sans qu'il en ait pris dûment connaissance
     au sens de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique et
     la Loi n°2004-801 du 6 août 2004 relative à la protection des personnes physiques à l'égard de traitement
     de données à caractère personnel.
     Par ailleurs, le site ne saurait garantir l'exactitude, la complétude, et l'actualité des informations
     qui y sont diffusées

     L'utilisateur est responsable :
     De la protection de son matériel et de ses données ;
     De l'utilisation qu'il fait du site ou de ses services ;
     S'il ne respecte ni la lettre, ni l'esprit des présentes CGU.

     ARTICLE 9. LIENS HYPERTEXTES
     Le site peut contenir des liens hypertextes pointant vers d'autres sites internet sur
     lesquels ${ans[0]} n'exerce pas de contrôle. Malgré les vérifications préalables et régulières réalisés
     par l'éditeur, celui-ci décline tout responsabilité quant aux contenus qu'il est possible de trouver sur ces sites.
     L'éditeur autorise la mise en place de liens hypertextes vers toute page ou document de son site sous réserve que
     la mise en place de ces liens ne soit pas réalisée à des fins commerciales ou publicitaires.
     En outre, l'information préalable de l'éditeur du site est nécessaire avant toute mise en place de lien hypertexte.
     Sont exclus de cette autorisation les sites diffusant des informations à caractère illicite, violent,
     polémique, pornographique, xénophobe ou pouvant porter atteinte à la sensibilité du plus grand nombre.
     Enfin, MonSiteInternet se réserve le droit de faire supprimer à tout moment un lien hypertexte pointant
     vers son site, si le site l'estime non conforme à sa politique éditoriale.

     ARTICLE 10 : CONFIDENTIALITÉ
     En plus des présentes Conditions Générales, le site dispose d'une politique de confidentialité qui décrit
     la manière dont les données à caractère personnel sont traitées lorsque l'utilisateur se rend sur le site,
     ainsi que la manière dont les cookies
     sont utilisés.
     En naviguant sur le site, l'utilisateur déclare avoir également pris connaissance de la politique de
     confidentialité susmentionnée.

     ARTICLE 11. PROPRIÉTÉ INTELLECTUELLE
     La structuration du site mais aussi les textes, graphiques, images, photographies, sons, vidéos
     et applications informatiques qui le composent sont la propriété de l'éditeur et sont protégés comme
     tels par les lois en vigueur au titre de la propriété intellectuelle.
     Toute représentation, reproduction, adaptation ou exploitation partielle ou totale des contenus,
     marques déposées et services proposés par le site, par quelque procédé que ce soit,
     sans l'autorisation préalable, expresse et écrite de l'éditeur, est strictement interdite
     et serait susceptible de constituer une contrefaçon au sens des articles L. 335-2 et suivants du Code de
     la propriété intellectuelle. Et ce, à l'exception des éléments expressément désignés comme libres
     de droits sur le site.
     L'accès au site ne vaut pas reconnaissance d'un droit et, de manière générale, ne confère aucun
     droit de propriété intellectuelle relatif à un élément du site, lesquels restent la propriété exclusive de l'éditeur.
     Il est interdit à l'utilisateur d'introduire des données sur le site qui modifieraient ou qui seraient
     susceptibles d'en modifier le contenu ou l'apparence.

     ARTICLE 12. LOI APPLICABLE ET JURIDICTION COMPÉTENTE
     Les présentes Conditions Générales d'Utilisation sont régies par la loi française. En cas de différend
     et à défaut d'accord amiable, le litige sera porté devant les tribunaux français
     aux règles de compétence en vigueur`


     doc.setFontSize(10);

     doc.text(textThree, 20, 20);


doc.addPage();
let textFour:string=`
     ${ans[18]===""?"II. CONDITIONS GÉNÉRALES DE VENTE":""}
     PREAMBULE
     Le site est édité par le vendeur, MSI S.A.S, dont le siège social est situé à
     l'adresse suivante : 13 rue Gambetta, 75012 Paris, et immatriculée au RCS 123456789.
     ${ans[19]===""?"Numéro individuel d'identification intracommunautaire du vendeur : ":""}
     ${ans[20]}


     ${ans[21]===""?"L'activité du vendeur est soumise au régime réglementé suivant :":""}
     ${ans[22]}
     Les dispositions suivantes ont pour objet de définir les conditions générales de vente sur ${ans[0]}

     Les présentes conditions générales de vente (ci-après "CGV") définissent les droits
     et obligations contractuels du vendeur et de son client dans le cadre d'une vente à
     distance et par voie électronique de biens et produits.
     Les CGV régissent exclusivement la relation entre le vendeur et le client.
     Les CGV expriment l'intégralité des obligations des parties. Le client est réputé les
     accepter sans réserve, faute de quoi sa commande ne sera pas validée.
     En cas de doute sur l'une des conditions de vente,
     les usages en vigueur dans le secteur de la vente à distance par des sociétés dont le siège social
     est en France et le Code de la consommation s'appliquent.
     Le vendeur se réserve le droit de modifier ponctuellement les CGV.
     Les modifications seront applicables dès leur mise en ligne.


     ARTICLE 1. CATALOGUE OU BOUTIQUE EN LIGNE
     Par l'intermédiaire du site, le vendeur fournit au client un catalogue ou une boutique en
     ligne présentant avec exactitude les produits vendus, sans que les photographies aient une valeur contractuelle.
     Les produits sont décrits et présentés avec la plus grande exactitude possible. Toutefois,
     en cas d'erreurs ou omissions dans la présentation, la responsabilité du vendeur ne pourra être engagée de ce fait.
     Les produits sont proposés dans la limite des stocks disponibles.
     Les prix et les taxes afférentes à la vente des produits sont précisés dans le catalogue ou la boutique en ligne.

     ARTICLE 2. PRIX
     Le vendeur se réserve le droit de modifier ses prix à tout moment en les publiant en ligne.
     Seuls s'appliqueront les tarifs en vigueur indiqués au moment de la commande, sous réserve de disponibilité des
     produits à cette date.Les prix sont indiqués en euros (hors taxes et toutes taxes comprises) et ne tiennent pas
     compte des frais de livraison, lesquels sont facturés en supplément. Les frais de livraison sont indiqués avant
     validation de la commande par le client. Les prix tiennent compte des taxes applicables au jour de la commande
     et tout changement du taux de ces taxes sera automatiquement répercuté sur le prix des produits du catalogue ou
     de la boutique en ligne. Si une ou plusieurs taxes ou contributions, notamment environnementales, venaient à être
     créées ou modifiées, en hausse comme en baisse, ce changement pourra être répercuté sur le prix de vente
     des produits. Le montant total de la commande (toutes taxes comprises) et frais de livraison inclus,
     est indiqué avant validation finale du bon de commande. Le paiement de la totalité du prix doit être réalisé lors
    de la commande.

     ARTICLE 3. COMMANDE EN LIGNE
     Le client a la possibilité de remplir un bon de commande en ligne, au moyen d'un formulaire électronique.
     En remplissant le formulaire électronique, le client accepte le prix et la description des produits.
     Le client devra accepter en cliquant à l'endroit indiqué, les présentes conditions générales de vente,
     pour que sa commande soit validée.
     Le client devra donner une adresse de courrier électronique et une adresse de livraison valides
     et reconnaît par les présentes conditions générales de vente que tout échange avec le vendeur pourra
     intervenir au moyen de cette adresse.


     Le client devra aussi choisir le mode de livraison et valider le mode de paiement.
     Le vendeur se réserve le droit de bloquer la commande du client en cas de défaut de paiement,
     d'adresse erronée ou de tout autre problème sur le compte du client et ce,
     jusqu'à résolution du problème.
     ARTICLE 4. CONFIRMATION ET PAIEMENT DE LA COMMANDE
     Il s'agit d'une commande avec obligation de paiement, ce qui signifie que la passation de
     la commande implique un règlement du client.`


     doc.setFontSize(10);
     doc.text(textFour, 20, 20);
     doc.addPage();

     let textFive:string=`1. PAIEMENT

     Le client effectue le paiement au moment de la validation finale de la commande
     bancaire.Le client garantit au vendeur qu'il dispose des autorisations nécessaires
     pour utiliser ce mode de paiement et reconnaît que les informations données à cet
     effet valent preuve de son consentement à la vente comme à l'exigibilité des sommes dues au titre de la commande.
     En cas de contestation ou d'utilisation frauduleuse de la carte bancaire sans utilisation physique
     de la carte bancaire (utilisation du numéro de la carte bancaire), toute personne peut contester
     dans les 70 jours à partir de la date de l'opération en transmettant une réclamation selon les modalités suivantes,
     afin que le vendeur prenne à sa charge les coûts de la vente et restitue la somme contestée :

     ${ans[23]}
     Toute contestation non effectuée dans les règles définies ci-dessus et dans les délais impartis
     ne pourra être prise en compte et dégagera le vendeur de toute responsabilité.
     Le vendeur a mis en place une procédure de vérification des commandes et des moyens de paiement
     destinée à le garantir raisonnablement contre toute utilisation frauduleuse d'un moyen de paiement,
     y compris en demandant au client des données d'identification.
     En cas de refus d'autorisation de paiement par carte bancaire de la part des organismes accrédités
     ou en cas de non-paiement, le vendeur se réserve le droit de suspendre ou d'annuler la commande et sa livraison.
     Le vendeur se réserve également le droit de refuser une commande émanant d'un acheteur qui n'aurait
     pas réglé totalement ou partiellement une commande précédente ou avec lequel un litige de paiement serait en cours

     2. CONFIRMATIO
     Dès réception de la validation de l'achat et du paiement par le client, le vendeur transmet à ce dernier,
     sur l'adresse électronique qu'il a précisée, confirmation de la réception du bon de commande et
     un exemplaire du contrat à imprimer.
     Le vendeur est tenu d'adresser une facture au client lors de la livraison.
     client peut demander l'envoi de la facture à une autre adresse que celle de livraison
     en adressant une demande à cet effet au service client (voir coordonnées ci-dessous) avant la livraison.
     cas d'indisponibilité d'un produit, le vendeur tiendra le client informé par courrier électronique dans
     les meilleurs délais afin d'annuler la commande de ce produit et rembourser le prix afférent,
     le reste de la commande demeurant ferme et définitif.
     Le client peut toujours faire valoir son droit de rétractation dans les 14 jours à
     compter du moment où l'information concernant l'indisponibilité du produit lui a été adressée.
     Pour toute question relative au suivi d'une commande, le client pourra contacter le service client aux coordonnées
     suivantes :
      ${ans[24]}

     ARTICLE 5. SIGNATURE ÉLECTRONIQUE
     Conformément aux dispositions de la Loi n° 2000-230 du 13 mars 2000,
     la fourniture en ligne du numéro de carte bancaire de l'acheteur et la validation
     finale de la commande valent preuve de l'accord du client, de l'exigibilité des sommes dues au titre du bon de
     commande,
     signature et acceptation expresse de toutes les opérations effectuées.

     ARTICLE 6. PREUVE DE LA TRANSACTION
     Les communications, commandes et paiements intervenus entre le client et le vendeur pourront être prouvés grâce
     aux registres informatisés,conservés dans les systèmes informatiques du vendeur dans des conditions raisonnables
     de sécurité. Les bons de commandes et factures sont archivés sur un support fiable et durable considéré, notamment,
     comme un moyen de preuve.

     ARTICLE 7. MODE DE PAIEMENT
     L'ensemble des modes de paiement mis à la disposition du client sont listés sur le
     site du vendeur. Le client garantit au vendeur qu'il dispose des autorisations éventuellement nécessaires pour utiliser
     le mode de paiement choisi par lui,lors de la passation de commande.

     ARTICLE 8. LIVRAISON
     La livraison n'est faite qu'après confirmation du paiement par l'organisme bancaire du vendeur.
     Les produits sont livrés à l'adresse indiquée par le client sur le formulaire en ligne valant bon de commande, le client
     devant veiller à son exactitude. Tout colis renvoyé au vendeur à cause d'une adresse de livraison erronée ou
     incomplètesera réexpédié aux frais du client. Sauf en cas de force majeure, la livraison intervient, selon
     le mode choisi par le client,dans les délais suivants :`
     doc.setFontSize(10);

     doc.text(textFive, 20, 20);
     doc.addPage();
     let textSix:string=`1. PAIEMENT

     ${ans[26]}

     1. RETARD DE LIVRAISON ET DÉNONCIATION

     En cas de retard de livraison, le vendeur en informera le client, lequel peut dénoncer le contrat et demander à être
     remboursé dans les 14 jours à compter de cette dénonciation.Le remboursement total du produit et des frais de
     livraison, ou de réexpédition le cas échéant, est alors effectué. Cette dénonciation du contrat doit être adressée selon
     les modalités suivantes : Lundi au vendredi 9H à 17H30
     Toute dénonciation non effectuée dans les règles définies ci-dessus et dans les délais impartis ne pourra être prise
     en compte et dégagera le vendeur de toute responsabilité vis-à-vis du client.

     2. VÉRIFICATION DE LA COMMANDE
     Si au moment de la livraison, l'emballage d'origine est abîmé, déchiré, ouvert, le client doit alors vérifier l'état
     des produits. S'ils ont été endommagés,l'acheteur doit impérativement refuser le colis et noter une réserve sur le bon
     de livraison. Le client doit indiquer sur le bon de livraison, et sous forme manuscrite, toute anomalie concernant la
     livraison. La vérification des produits est considérée comme effectuée dès lors que le client, ou une personne
     autorisée par lui,a signé le bon de livraison. Le client devra, le cas échéant, informer le vendeur
     de ses réserves selon les modalités suivantes : Lundi au vendredi 9H à 17H30

     Toute réserve non effectuée dans les règles définies ci-dessus et dans les délais impartis ne pourra être prise en
     compte et dégagera le vendeur de toute responsabilité vis-à-vis du client. A la réception de la réclamation, le vendeur
     attribuera unnuméro d'échange du ou des produit(s) concerné(s) et le communiquera par courrier électronique au
     client.

     3. ERREUR DE LIVRAISON
     En cas d'erreur de livraison et/ou de non-conformité des produits par rapport aux indications figurant sur le bon de
     commande,le client formule sa réclamationnauprès du vendeur le jour même de la livraison ou au plus tard le premier
     jour ouvré suivant la livraison.La réclamation pourra être faite selon les modalités suivantes :
     Lundi au vendredi 9H à 17H30.Toute réclamation non effectuée dans les règles définies ci-dessus et dans les délais
     impartis ne pourra être prise en compte et dégagera le vendeur de toute responsabilité vis-à-vis du client.`

     doc.setFontSize(10);
     doc.text(textSix, 20, 20);
     doc.addPage();

     let textSeven:string=`

     4. RETOUR DE COMMANDE
     Le produit à échanger ou à rembourser devra être retourné au vendeur dans son ensemble et dans son emballage
     d'origine, selon les modalités suivantes : ${ans[27]} Toute réclamation ou retour non effectué dans les
     règles définies ci-dessus et dans les délais impartis ne pourra être pris en compte et dégagera le vendeur
     de toute responsabilité vis-à-vis du client.
     Tout produit à échanger ou à rembourser devra être retourné au vendeur dans son ensemble et dans son emballage
     d'origine. Les frais de retour sont à la charge du   ${ans[28]}.

    ARTICLE 9. GARANTIES DES PRODUITS
    Le vendeur est garant de la conformité des produits au contrat.
    Le client peut formuler une demande au titre de la garantie légale de conformité, conformément aux
    dispositions des articles L. 211-4 du Code de la consommation, ou au titre de la garantie des vices
    des articles 1641 et suivants du Code civil.${ans[29]==="yes"?" Il est indiqué au client que le vendeur n'est pas le producteur de la totalité des produits \n présentés au sens de la Loi n° 98-389 du 19 mai 1998 relative à la responsabilité du fait des produits défectueux.":""   }

    1. GARANTIE DE CONFORMITÉ

    Le client dispose d'un délai de 2 ans à compter de la délivrance du produit pour mettre en oeuvre la garantie
    légale de conformité.A ce titre, il peut choisir entre la réparation ou le remplacement du bien, dans les
    conditions prévues à l'article L. 211-9 du Code de la consommation.Le client n'est pas tenu de rapporter la
    preuve de l'existence d'un défaut de conformité, dans les 6 mois (24 mois à compter du 18 mars 2016,
    sauf pour les biens d'occasion) suivant la date de délivrance du produit.

    2. GARANTIE DES VICES
    Le client, s'il met en œuvre la garantie des vices prévue aux articles 1641 et suivants du Code civil,
    pourra choisir entre la résolution de la vente ou une réduction du prix,et ce conformément à l'article 1644 du Code civil.


   ${ans[30]==="yes"?" 3. GARANTIE COMMERCIALELe vendeur offre au client une garantie commerciale couvrant la conformité des produits et assurant en cas de non-conformité le remboursement du prix d'achat,  \n  le remplacement ou la réparation du produit, pendant la durée suivante : 3 mois.  \n Cette garantie ne couvre pas les défauts occasionnés du fait d'une utilisation anormale ou fautive ou résultant d'une cause étrangère aux qualités intrinsèques desproduits. \n Cette garantie n'est pas exclusive de l'application des garanties prévues aux 9.1 et 9.2.":""}
    ARTICLE 10. INDISPONIBILITÉ DES PRODUITS ET REMBOURSEMENT
    En cas d'indisponibilité d'un produit commandé, le client en sera informé par courrier électronique.
    Le client aura la possibilité d'annuler sa commande et aura ainsi le choix entre le remboursement des sommes par
    lui versées dans les 30 jours au plus tard de leur versement, ou à l'échange du produit.

    ARTICLE 11. DROIT DE RÉTRACTATION
    Le client peut faire valoir son droit de rétractation et de retour du produit dans un délai de 14 jours ouvrables suivant la
    livraison.Le client fera valoir son droit de rétractation en contactant le service client : Lundi au vendredi 9H à 17H30
    Après avoir communiqué sa décision de se rétracter, le client dispose alors de 14 jours pour renvoyer ou restituer les
    biens.


    Toute rétractation ou retour non effectué dans les règles définies ci-dessus et dans les délais impartis ne pourra être
    pris en compte et dégagera le vendeur de toute responsabilité vis-à-vis du client.
    Le client pourra demander l'échange ou le remboursement du produit retourné, sans pénalité,à l'exception des frais de
    retour qui restent à sa charge.\n${ans[31]==="yes"?" Néanmoins, en cas d'échange, des frais de livraison peuvent être à nouveau facturés au client.":""}
    Le retour ou l'échange du produit ne pourra être accepté que pour les produits dans leur ensemble, intacts et dans leur état d'origine,
    en particulier avec un emballage complet, intact et en état de vente.
    Certains produits, en raison de leur qualité intrinsèque, ne pourront pas être soumis au droit de rétractation et ne
    pourront pas être remboursés,notamment mais pas exclusivement, les produits visés par l'article L. 121-21-8 du Code
    de la consommation à savoir :
    tout produit sur-mesure ;
    tout produit ne pouvant pas par nature être réexpédié ;
    tout produit périssable ;
    tout produit vidéo ;
    tout produit de presse...
    Le vendeur devra rembourser le client de la totalité des sommes versées, y compris les frais de livraison, d
    ans les 14 jours de la récupération des biens ou de la transmission d'une preuve de l'expédition de ces biens.

    `
    doc.setFontSize(10);
    doc.text(textSeven,20, 20);
    doc.addPage();
    let textEight:string=`
    ARTICLE 12. FORCE MAJEURE
    Les parties seront exonérées de leurs obligations, dans le cas où une circonstance constitutive d'un cas de
    force majeure tel que défini par l'article 1218 du code civil,empêcherait leur exécution.
    Les obligations des parties seront suspendues.La partie qui invoque une telle circonstance,
    devra en avertir l'autre partie immédiatement, à sa survenance et à sa disparition.
    Sont considérés comme des cas de force majeure tous faits ou circonstances irrésistibles et imprévisibles,
    inévitables et qui ne pourront être empêchés par ces dernières,malgré tous les efforts raisonnablement possibles,
    définis comme tel par la jurisprudence française et notamment, le blocage des moyens de transports ou
    d'approvisionnements,tremblements de terre, incendies, tempêtes, inondations, foudre, et l'arrêt des réseaux
    de télécommunication. Si le cas de force majeur a une durée supérieure à trois mois, les présentes conditions
    générales pourront être résiliées par la partie lésée.

    ARTICLE 13. NULLITÉ PARTIELLE
    Si une ou plusieurs stipulations des présentes conditions générales de vente venait à être déclarée nulle par
    application de la loi,d'un règlement ou d'une décision définitived'une juridiction française, les autres
    stipulations garderont toute leur force et leur portée.

    ARTICLE 14. LOI APPLICABLE ET JURIDICTION COMPÉTENTE
    Le vendeur est installé en France d'une manière stable et durable pour exercer effectivement son activité,
    quel que soit, s'agissant d'une personne morale, le lieu d'implantation de son siège social.
    Aussi, les présentes CGV sont soumises à l'application du droit français,
    à l'exclusion des dispositions de la Convention de Vienne.
    En cas de litige ou de réclamation, le client s'adressera en priorité au vendeur pour obtenir une solution amiable.
    A défaut d'accord amiable, le client, s'il contracte en tant que consommateur, pourra engager une procédure devant la
    juridiction de son choix et s'il contracte en tant que professionnel, pourra engager une procédure devant le tribunal
    du lieu du siège social du vendeur.
       `
    doc.setFontSize(10)
    doc.text(textEight, 20, 20);
    doc.save('a4.pdf');
  }
}






