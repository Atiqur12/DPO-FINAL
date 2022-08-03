import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'quiz-root',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent {
  title = 'frontend';
  download() {
    const doc = new jsPDF();
    doc.setFont("Times New Roman");
    doc.setFontSize(10)

    let ans = Array.from(document.querySelectorAll(".questions .form-control")).map((item: any) => item.value)
    doc.text(' POLITIQUE DE CONFIDENTIALITE ', 20, 20 )

    let text: string = `
    DU SITE : ${ans[1]}


    ARTICLE 1 : PRÉAMBULE
    Cette politique de confidentialité s'applique au site :${ans[1]}


    La présente politique de confidentialité a pour but d'exposer aux utilisateurs du site :

    La manière dont sont collectées et traitées leurs données à caractère personnel. Doivent être considérées comme données
     personnelles toutes les données étant susceptibles d'identifier un utilisateur. Il s'agit notamment du prénom et du nom,
     de l'âge, de l'adresse postale, l'adresse mail, la localisation de l'utilisateur ou encore son adresse IP ;
    Quels sont les droits des utilisateurs concernant ces données ;
    Qui est responsable du traitement des données à caractère personnel collectées et traitées ;
    A qui ces données sont transmises ;
    Eventuellement, la politique du site en matière de fichiers "cookies".
    Cette politique de confidentialité complète les mentions légales et les Conditions Générales d'Utilisation
    que les utilisateurs peuvent consulter à l'adresse ci-après :
     ${ans[1]}


   ARTICLE 2 : PRINCIPES GÉNÉRAUX EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DE DONNÉES
    Conformément aux dispositions de l'article 5 du Règlement européen 2016/679, la collecte et le traitement des
    Conformément aux dispositions de l'article 5 du Règlement européen 2016/679, la collecte et le traitement des
     Licéité, loyauté et transparence :

     les données ne peuvent être collectées et traitées qu'avec le consentement de l'utilisateur propriétaire des données.
     A chaque fois que des données à caractère personnel seront collectées, il sera indiqué à l'utilisateur que ses données
     sont collectées, et pour quelles raisons ses données sont collectées ;
     Finalités limitées : la collecte et le traitement des données sont exécutés pour répondre à un ou plusieurs objectifs
     déterminés dans les présentes conditions générales d'utilisation ;
     Minimisation de la collecte et du traitement des données : seules les données nécessaires à la bonne exécution des
     objectifs poursuivis par le site sont collectées ;
     Conservation des données réduites dans le temps : les données sont conservées pour une durée limitée, dont l'utilisateur
     est informé. Lorsque cette information ne peut pas être communiquée, l'utilisateur est informé des critères utilisés
     pour déterminer la durée de conservation ;
     Intégrité et confidentialité des données collectées et traitées : le responsable du traitement des données s'engage à
     garantir l'intégrité et la confidentialité des données collectées.
     Afin d'être licites, et ce conformément aux exigences de l'article 6 du règlement européen 2016/679, la collecte et le
      traitement des données à caractère personnel ne pourront intervenir que s'ils respectent au moins l'une des conditions
     ci-après énumérées :
     L'utilisateur a expressément consenti au traitement ;
     Le traitement est nécessaire à la bonne exécution d'un contrat ;
     Le traitement répond à une obligation légale ;

     Le traitement s'explique par une nécessité liée à la sauvegarde des intérêts vitaux de la personne concernée ou
     d'une autre personne physique ;
     Le traitement peut s'expliquer par une nécessité liée à l'exécution d'une mission d'intérêt public ou qui relève de
     l'exercice de l'autorité publique ;

     Le traitement et la collecte des données à caractère personnel sont nécessaires aux fins des intérêts légitimes et
      privés poursuivis par le responsable du traitement ou par un tiers.

     ARTICLE 3 : DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET
     TRAITÉES DANS LE CADRE DE LA NAVIGATION SUR LE SITE
     A. DONNÉES COLLECTÉES ET TRAITÉES ET MODE DE COLLECTE

     Les données à caractère personnel collectées sur le site ${ans[2]}
     sont les suivantes :
     Ces données sont collectées lorsque l'utilisateur effectue l'une des opérations suivantes sur le site :
             ${ans[3]}
        ${ans[4]==="yes"?"Par ailleurs, lors d'un paiement sur le site, il sera conservé dans   les systèmes informatiques de l'éditeur du site  \n  une preuve de la transaction comprenant le bon de commande et la facture.":"" }

        `


        doc.setFontSize(10);

        doc.text(text, 20, 20);

 doc.addPage();
let textTwo:string=

       `


B. DURÉE DE CONSERVATION DES DONNÉES PERSONNELLES

Le responsable de traitement ne conservera vos Données personnelles que pendant la durée nécessaire aux fins énoncées
dans la présente Politique de confidentialité.
Nous conserverons et utiliserons vos Données personnelles dans la mesure nécessaire pour nous conformer à nos
obligations légales (par exemple, si nous sommes tenus de conserver vos données pour nous conformer aux lois
applicables),
résoudre les litiges et appliquer nos accords et politiques juridiques.
Pour ce faire, nous disposons en interne d’une politique de conservation de données en base active, en
archivage intermédiaire et en archivage, conformément à la réglementation européenne sur la protection
des données personnelles.

La Société conservera également les Données d'utilisation à des fins d'analyse interne.
Les Données d'utilisation sont généralement conservées pendant une période plus courte, sauf si ces données sont
utilisées pour renforcer la sécurité ou améliorer la fonctionnalité de notre Service,
ou si nous sommes légalement obligés de conserver ces données pendant des périodes plus longues.

C. FINALITÉS DES TRAITEMENTS

Vous déclarez donner votre consentement à la Société pour utiliser les Données personnelles aux fins suivantes :
Pour fournir et maintenir notre Service, y compris pour surveiller et améliorer l'utilisation de notre Service.
${ans[5]==="yes"?"Pour gérer votre Compte : pour gérer votre inscription en tant qu'Utilisateur du Service. Les Données Personnelles \n que vous fournissez peuvent vous donner accès à différentes fonctionnalités du Service \nqui vous sont accessibles en tant qu'utilisateur enregistré.":"" }

        Vous contacter : Vous contacter par courriel, appels téléphoniques,
        SMS ou autres formes équivalentes de communication électronique,
        telles que les notifications push d'une application mobile concernant les mises à jour ou les communications
        informatives liées aux fonctionnalités,
        produits ou services contractuels, y compris les mises à jour de sécurité, lorsque cela est nécessaire ou
        raisonnable pour leur mise en œuvre.
${ans[6]==="yes"?"Vous fournir des nouvelles, des offres spéciales et des informations générales sur d'autres biens, services et événements \n que nous proposons et qui sont similaires à ceux que vous avez déjà achetés ou sur lesquels vous vous êtes renseigné, \n à moins que vous n'ayez choisi de ne pas recevoir ces informations.":""}
        Gérer vos demandes : Pour assister et gérer les demandes que vous nous adressez.
        Pour les transferts d'entreprise : Nous pouvons utiliser vos informations pour évaluer ou mener une fusion,
         un désinvestissement, une restructuration, une réorganisation, une dissolution ou toute autre vente ou
         transfert de tout ou partie de Nos actifs,
        que ce soit dans le cadre d'une poursuite d'activité ou d'une faillite, d'une liquidation ou d'une procédure
        similaire, dans laquelle les Données personnelles que nous détenons sur les Utilisateurs de nos Services font
         partie des actifs transférés.
        À d'autres fins : Nous pouvons utiliser vos informations à d'autres fins, telles que l'analyse des données,
        l'identification des tendances d'utilisation, la détermination de l'efficacité de nos campagnes promotionnelles
         et de nos activités de marketing.

Les traitements de données effectués sont fondés sur les bases légales suivantes :
selon les cas le consentement de l'utilisateur, l'exécution de contrat, l'obligation légale.

D. TRANSFERT DES DONNÉES PERSONNELLES

Vos informations, y compris les Données personnelles, sont traitées dans les bureaux d'exploitation de la Société et dans
tout autre lieu où se trouvent les parties impliquées dans le traitement.
Nous garantissons que ces informations seront toujours transférées à - et maintenues sur - des ordinateurs situés dans
l’Union européenne où notamment le niveau de protection de vos données personnelles est adéquat du fait de la réglementation
européenne sur la protection des données à caractère personnel.
Votre consentement à la présente politique de confidentialité, suivi de votre soumission de ces informations, représente votre
accord à ce transfert.
La Société prendra toutes les mesures raisonnablement nécessaires pour s'assurer que vos Données personnelles soient traitées
en toute sécurité et conformément à la présente politique de confidentialité et aucun transfert de vos 2 contrôles adéquats
en place,y compris la sécurité de vos Données et autres informations personnelles.
En raison de collaborations telles que celles avec des Prestataires de services informatiques,
notamment en ce qui concerne les services qui impliquent l'envoi d'e-mails, la maintenance, la réparation ou la sécurisation
de systèmes informatiques, vos Données personnelles peuvent être connues des employés d'un Prestataire de services dans un
pays situé en dehors de l'Union européenne.
S'il n'existe pas dans ce pays un niveau de protection des données comparable à celui de l'Union européenne et que,
par conséquent, il n'existe pas de "décision d'adéquation" de la Commission européenne concernant ce pays,
nous protégerons vos intérêts en vertu de la législation sur la confidentialité des données en concluant des clauses standard
de confidentialité des données de l'Union européenne,

`
doc.setFontSize(10);

doc.text(textTwo, 20, 20);


doc.addPage();
let textThree : string=
`
qui ont été publiées par la Commission européenne et convenues avec le destinataire, ou par d'autres moyens appropriés.
Vous pouvez demander une copie des clauses types de l'Union européenne relatives à la confidentialité des données
(ou d'autres garanties, selon le cas)
Les données peuvent être transmises au(x) tiers ci-après énuméré(s) \n ${ans[7]==="yes"?"Les données peuvent être transmises au(x) tiers ci-après énuméré(s) : ________ ":""}
":""}
C. HÉBERGEMENT DES DONNÉES
Le site Monsiteinternet est hébergé par :${ans[8]}, dont le siège est situé à l'adresse ci-après :${ans[9]}.


L'hébergeur peut être contacté au numéro de téléphone suivant : ${ans[10]}.
Les données collectées et traitées par le site sont exclusivement hébergées et traitées en France.

ARTICLE 4 : RESPONSABLE DU TRAITEMENT DES DONNÉES ET DÉLÉGUÉ À LA PROTECTION DES DONNÉES

A. LE RESPONSABLE DU TRAITEMENT DES DONNÉES
Le responsable du traitement des données à caractère personnel est : ${ans[11]}. Il peut être contacté de la
 manière suivante :
${ans[12]}
Le responsable du traitement des données est chargé de déterminer les finalités et les moyens mis au service du
 traitement des données à caractère personnel.
B. OBLIGATIONS DU RESPONSABLE DU TRAITEMENT DES DONNÉES
Le responsable du traitement s'engage à protéger les données à caractère personnel collectées,
à ne pas les transmettre à des tiers sans que l'utilisateur n'en ait été informé et à respecter les finalités
pour lesquelles ces données ont été collectées.
${ans[13]==="yes"?"Le site dispose d'un certificat SSL afin de garantir que les informations et le transfert des données \n transitant par le site sont sécurisés. Un certificat SSL ('Secure Socket Layer' Certificate) \n a pour but de sécuriser les données échangées entre l'utilisateur et le site. ":""}

De plus, le responsable du traitement des données s'engage à notifier l'utilisateur en cas de rectification
ou de suppression des données, à moins que cela n'entraîne pour lui des formalités, coûts et démarches disproportionnés.
Dans le cas où l'intégrité, la confidentialité ou la sécurité des données à caractère personnel de l'utilisateur
 est compromise, le responsable du traitement s'engage à informer l'utilisateur par tout moyen.
Par ailleurs, l'utilisateur est informé qu'un Délégué à la Protection des Données a été nommé : \n ${ans[14]==="yes"?"C. LE DÉLÉGUÉ À LA PROTECTION DES DONNÉES ":""} .
Le rôle du Délégué à la Protection des Données et de s'assurer la bonne mise en oeuvre des dispositions nationales
 et supranationales relatives à la collecte et au

traitement des données à caractère personnel. Il est parfois appelé DPO (pour Data Protection Officer).
Le délégué à la protection des données peut être joint de la manière suivante ${ans[16]}

ARTICLE 5 : DROITS DE L'UTILISATEUR


Conformément à la réglementation concernant le traitement des données à caractère personnel, l'utilisateur possède
les droits ci-après énumérés.
Afin que le responsable du traitement des données fasse droit à sa demande, l'utilisateur est tenu de lui communiquer :
ses prénom et nom ainsi que son adresse e-mail,\n ${ans[17]==="yes"?" et si cela est pertinent, son numéro de compte ou d'espace personnel ou d'abonné":""}


Le responsable du traitement des données est tenu de répondre à l'utilisateur dans un délai de 30 (trente) jours maximum.


A. PRÉSENTATION DES DROITS DE L'UTILISATEUR EN MATIÈRE DE COLLECTE ET TRAITEMENT DE DONNÉES

a. Droit d'accès, de rectification et droit à l'effacement
L'utilisateur peut prendre connaissance, mettre à jour, modifier ou demander la suppression des données le concernant,
en respectant la procédure ci-après énoncée :

Il doit envoyer un e-mail au responsable du traitement des données personnelles, en précisant l’objet de sa demande,
à l’adresse e-mail de contact.
${ans[18]==="yes"?"S'il en possède un, l'utilisateur a le droit de demander la suppression de son espace personnel en suivant la procédure suivante : \n\n L’utilisateur doit envoyer un e-mail au responsable du traitement en précisant son numéro d’espace personnel.\n La demande sera traitée dans un délai de 10 jours ouvrés. ":""}

b. Droit à la portabilité des données
L'utilisateur a le droit de demander la portabilité de ses données personnelles,
détenues par le site, vers un autre site, en se conformant à la procédure ci-après :
L’utilisateur doit faire une demande de portabilité de ses données personnelles auprès du responsable de traitement des
 données, en envoyant un e-mail à l’adresse prévue ci-dessus.
c. Droit à la limitation et à l'opposition du traitement des données
L'utilisateur a le droit de demander la limitation ou de s'opposer au traitement de ses données par le site, sans que
le site ne puisse refuser, sauf à démontrer l'existence de motifs légitimes et impérieux,

`
doc.setFontSize(10);

doc.text(textThree, 20, 20);

doc.addPage();
let textFour : string=
`
 pouvant prévaloir sur les intérêts et les droits et libertés de l'utilisateur.
Afin de demander la limitation du traitement de ses données ou de formuler une opposition au traitement de ses données,
l'utilisateur doit suivre la procédure suivante :
L’utilisateur doit faire une demande de limitation au traitement de ses données personnelles par e-mail auprès du
responsable du traitement des données.
d. Droit de ne pas faire l'objet d'une décision fondée exclusivement sur un procédé automatisé
Conformément aux dispositions du règlement 2016/679, l'utilisateur a le droit de ne pas faire l'objet d'une décision
fondée exclusivement sur un procédé automatisé si la décision produit des effets juridiques le concernant,
ou l'affecte de manière significative de façon similaire.
e. Droit de déterminer le sort des données après la mort
Il est rappelé à l'utilisateur qu'il peut organiser quel doit être le devenir de ses données collectées et traitées
s'il décède, conformément à la loi n°2016-1321 du 7 octobre 2016.
f. Droit de saisir l'autorité de contrôle compétente


Dans le cas où le responsable du traitement des données décide de ne pas répondre à la demande de l'utilisateur,
et que l'utilisateur souhaite contester cette décision, ou, s'il pense qu'il est porté atteinte à l'un des droits
énumérés ci-dessus, il est en droit de saisir la CNIL (Commission Nationale de l'Informatique et des Libertés,
 https://www.cnil.fr) ou tout juge compétent.
${ans[19]==="yes"?"B. DONNÉES PERSONNELLES DES PERSONNES MINEURES \n\nConformément aux dispositions de l'article 8 du règlement européen 2016/679 et à la loi Informatique et Libertés,\n seuls les mineurs âgés de 15 ans ou plus peuvent consentir au traitement de leurs données personnelles. \n Si l'utilisateur est un mineur de moins de 15 ans, l'accord d'un représentant légal  \n sera requis afin que des données à caractère personnel puissent être collectées et traitées. \n L'éditeur du site se réserve le droit de vérifier par tout moyen que l'utilisateur est âgé de plus de 15 ans, \n ou qu'il aura obtenu l'accord d'un représentant légal avant de naviguer sur le site. ":""}
ARTICLE 6 : UTILISATION DES FICHIERS "COOKIES"
Le site a éventuellement recours aux techniques de "cookies".
Un "cookie" est un fichier de petite taille (moins de 4 ko), stocké par le site sur le disque dur de l'utilisateur,
contenant des informations relatives aux habitudes de navigation de l'utilisateur.
Ces fichiers lui permettent de traiter des statistiques et des informations sur le trafic, de faciliter la navigation
et d'améliorer le service pour le confort de l'utilisateur.
Pour l'utilisation de fichiers "cookies" impliquant la sauvegarde et l'analyse de données à caractère personnel,
le consentement de l'utilisateur est nécessairement demandé.
Ce consentement de l'utilisateur est considéré comme valide pour une durée de 6 (six) mois maximum.
A l'issue de cette période, le site demandera à nouveau l'autorisation de l'utilisateur pour enregistrer
des fichiers "cookies" sur son disque dur.
a. Opposition de l'utilisateur à l'utilisation de fichiers "cookies" par le site
Les cookies non essentiels au fonctionnement du site ne sont déposés sur le terminal de l'utilisateur
qu'après avoir obtenu son consentement. L'utilisateur peut retirer son consentement à tout moment,
de la manière suivante :Veuillez manifester votre retrait de consentement en cliquant sur la touche adéquate,
généralement « refuser », « interdire » ou « rejeter », du paramétrage des cookies.De manière plus générale,
il est porté à la connaissance de l'utilisateur qu'il peut
7/10
s'opposer à l'enregistrement de ces fichiers "cookies" en configurant son logiciel de navigation.
Pour information, l'utilisateur peut trouver aux adresses suivantes les démarches à suivre afin de configurer
 son logiciel de navigation pour s'opposer à l'enregistrement des fichiers "cookies" :
Chrome : https://support.google.com/accounts/answer/61416?hl=fr
Firefox : https://support.mozilla.org/fr/kb/enable-and-disable-cookies-website-preferences
Safari : http://www.apple.com/legal/privacy/fr-ww/
Internet Explorer : https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-deletemanage-cookies
Opera : http://www.opera.com/help/tutorials/security/cookies/
Dans le cas où l'utilisateur décide de désactiver les fichiers "cookies", il pourra poursuivre sa navigation sur le site.
 Toutefois, tout dysfonctionnement du site provoqué par cette manipulation ne pourrait être considéré comme étant
 du fait de l'éditeur du site.
b. Description des fichiers "cookies" utilisés par le site
L'éditeur du site attire l'attention de l'utilisateur sur le fait que les cookies suivants sont utilisés lors de sa navigation :
Cookie strictement nécessaires ; Ces cookies sont nécessaires au fonctionnement du site Web et ne peuvent pas
être désactivés dans nos systèmes. Ils sont généralement établis en tant que réponse à des actions que vous avez effectuées
et qui constituent une demande de services,
telles que la définition de vos préférences en matière de confidentialité,
la connexion ou le remplissage de formulaires. Vous pouvez configurer votre navigateur afin de bloquer ou être informé de
l'existence de ces cookies, mais certaines parties du site Web peuvent être affectées.
Ces cookies ne stockent aucune information d’identification personnelle.
${ans[20]==="yes"?"Cookie de performance ; Ces cookies nous permettent de déterminer le nombre de visites et les sources du trafic,\n afin de mesurer et d’améliorer les performances de notre site Web. \n Ils nous aident également à identifier les pagesles plus / moins visitées et d’évaluer comment les visiteurs naviguent sur le site Web. \n Toutes les informations collectées par ces cookies sont agrégées et donc anonymisées. Si vous n'acceptez pas ces cookies, \n nous ne serons pas informé de votre visite sur notre site. Cookie de personnalisation du site ; \n Ces cookies permettent de vous offrir une fonctionnalité améliorée et une personnalisation de votre expérience sur le site\n en fonction de votre navigation. Ils peuvent être activés par le site ou par une tierce partie prestataire, \n dont les services ont été ajoutés sur nos pages. Si vous autorisez le suivi de la navigation,\n vous nous permettrez de vous proposer des offres et des services qui répondent au mieux à vos attentes. \n Cookies publicitaire ; Ces cookies peuvent être mis en place au sein de notre site Web par nos partenaires publicitaires. \nIls peuvent être utilisés par ces sociétés pour établir un profil de vos intérêts et vous proposer des publicités pertinentes sur d'autres sites Web. \nIls ne stockent pas directement des données personnelles, mais sont basés sur l'identification unique de votre navigateur et de votre appareil Internet.\n Si vous n'autorisez pas ces cookies, votre publicité sera moins ciblée. ":""}
${ans[21]==="yes"?"En naviguant sur le site, il est porté à connaissance de l'utilisateur que des fichiers 'cookies' de tiers peuvent être enregistrés.":""}

Il s'agit plus particulièrement des tiers suivants :
${ans[22]}
${ans[23]==="yes"?"De plus, le site intègre des boutons de réseaux sociaux, permettant à l'utilisateur de partager son activité sur le site.\n Des fichiers 'cookies' de ces réseaux sociaux sont par conséquent susceptibles d'être stockés sur l'ordinateur \n de l'utilisateur lorsqu'il utilise ces fonctionnalités.":""}
${ans[24]==="yes"?"L'attention de l'utilisateur est portée sur le fait que ces sites disposent de politiques de confidentialité \n  propres et de conditions générales d'utilisation possiblement différentes du site. \n L'éditeur du site invite les utilisateurs à consulter les politiques de confidentialité et les conditions générales d'utilisation de ces sites.":""}
${ans[25]==="yes"?"c. Google analytics L’éditeur du site déclare faire usage de Google Analytics,\n un service d'analyse de site web fourni par Google LLC. Google Analytics utilise des cookies.\n Les informations générées par le cookie concernant votre utilisation de l’application (y compris votre adresse IP) \n seront transmises et stockées par Google sur des serveurs aux États-Unis. \nGoogle LLC dispose d'une certification Privacy Shield UE-États-Unis (qui peut être consulté à l'adresse  \n suivante : https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active). Un niveau adéquat de protection des données est donc garanti, \n si vos Données personnelles sont traitées aux États-Unis. Nous avons conclu un contrat avec Google LLC pour le traitement des Données personnelles \n et nous avons activé la fonction 'anonymisation IP' sur ce site. Cela signifie que Google LLC tronquera votre adresse IP \n dans les États membres de l'Union européenne ou dans d'autres États contractants de l'accord sur l'Espace économique européen. \n Ce n'est que dans des cas exceptionnels que l'adresse IP complète sera transmise aux serveurs de Google LLC aux États-Unis et y sera tronquée.\n Google LLC utilise ces informations pour notre Compte afin d'analyser votre utilisation du site internet,\n de compiler des rapports sur l'activité de notre application et de fournir d'autres services liés à l'activité de \n l’application et à l'utilisation d'Internet. Google LLC peut également transmettre ces informations à des tiers dans \n la mesure où cela est requis par la loi ou si des tiers traitent ces données pour le compte de Google LLC. \n En aucun cas, Google LLC n'associera votre adresse IP à d'autres données détenues par Google LLCL’éditeur \n déclare utiliser Google Analytics pour analyser et améliorer constamment l'utilisation de notre site internet. \n En raison des statistiques acquises, nous sommes en mesure d'améliorer notre offre et de la rendre plus intéressante pour vous en tant qu'Utilisateur.\n  La base juridique du traitement de vos données personnelles est votre consentement Article 6 (1) (a) du RGPD. \nSi vous avez donné votre consentement au traitement de vos données personnelles,\n vous pouvez retirer votre consentement à tout moment avec effet futur. \n La légalité du traitement de vos données personnelles jusqu'à votre retrait ne sera pas affectée.\n Vous pouvez également empêcher l'enregistrement des cookies lorsque vous le souhaitez après votre consentement en \n  modifiant les paramètres du navigateur concerné. Veuillez noter que si vous faites cela,\n certaines fonctions de notre application pourront ne plus être disponibles ou fonctionner correctement. \n En outre, vous pouvez empêcher la collecte de données générées par le cookie concernant votre utilisation de\n l’Application (y compris votre IP) et son traitement par Google LLC en téléchargeant et en installant son application disponible\n à l'adresse suivante : https://tools.google.com/dlpage/gaoptout?hl=en.\n Vous pourrez ainsi empêcher la collecte de vos données par Google Analytics en cliquant sur le lien suivant. \n Cela définit un cookie de désactivation qui empêchera la collecte future de vos données lors de la visite de ce site web.\n Veuillez noter que si vous supprimez vos cookies, vous devrez alors réactiver le cookie de désactivation. \n Module complémentaire de navigateur 'opt-out' de Google Analytics. https://tools.google.com/dlpage/gaoptout?hl=dePour \n plus d'informations, veuillez vous référer à : Google Dublin, Google Ireland Ltd, \n Gordon House, Barrow Street, Dublin 4, Irlande, fax +353 (1) 436 1001 ;\n conditions d'utilisation : http://www.google.com/analytics/terms/de.html ;\n aperçu de la confidentialité : http://www.google.com/intl/de/analytics/learn/privacy.html ; \n déclaration de confidentialité : https://www.google.com/intl/en-GB/policies/privacy/.":""}


ARTICLE 7 : CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ
La présente politique de confidentialité peut être consultée à tout moment à l'adresse ci-après indiquée :
${ans[26]}

L'éditeur du site se réserve le droit de la modifier afin de garantir sa conformité avec le droit en vigueur.
Par conséquent, l'utilisateur est invité à venir consulter régulièrement cette politique de confidentialité afin de se
tenir informé des derniers changements qui lui seront apportés.
Toutefois, en cas de modification substantielle de cette politique, l'utilisateur en sera informé de la manière suivante :
Par notification « push » lors d’une visite de l’utilisateur ou par e-mail à l’adresse communiquée par l’utilisateur.
Il est porté à la connaissance de l'utilisateur que la dernière mise à jour de la présente politique de confidentialité
est intervenue le :${ans[27]}.

ARTICLE 8 : ACCEPTATION PAR L'UTILISATEUR DE LA POLITIQUE DE CONFIDENTIALITÉ
En naviguant sur le site, l'utilisateur atteste avoir lu et compris la présente politique de confidentialité et
en accepte les conditions,en ce qui concerne plus particulièrement la collecte et le traitement de ses
données à caractère personnel, ainsi que l'utilisation de fichiers "cookies".
    `

    doc.setFontSize(10);

   doc.text(textFour, 20, 20);

    doc.save('a4.pdf');
    doc.addPage();
let textFive : string=
`


              ARTICLE 7 : CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ
La présente politique de confidentialité peut être consultée à tout moment à l'adresse ci-après indiquée :
${ans[27]}.
L'éditeur du site se réserve le droit de la modifier afin de garantir sa conformité avec le droit en vigueur.
Par conséquent, l'utilisateur est invité à venir consulter régulièrement cette politique de confidentialité
afin de se tenir informé des derniers changements qui lui seront apportés.
Toutefois, en cas de modification substantielle de cette politique, l'utilisateur en sera informé de la manière suivante :
Par notification « push » lors d’une visite de l’utilisateur ou par e-mail à l’adresse communiquée par l’utilisateur.
Il est porté à la connaissance de l'utilisateur que la dernière mise à jour de la présente politique de confidentialité est intervenue le : ${ans[28]}.


              ARTICLE 8 : ACCEPTATION PAR L'UTILISATEUR DE LA POLITIQUE DE CONFIDENTIALITÉ
En naviguant sur le site, l'utilisateur atteste avoir lu et compris la présente politique de confidentialité et en accepte les conditions, en ce qui concerne plus particulièrement la collecte et le traitement de ses données à caractère personnel, ainsi que l'utilisation de fichiers "cookies".
`
doc.setFontSize(10);

doc.text(textFive, 20, 20);

 doc.save('a4.pdf');
  }
}
