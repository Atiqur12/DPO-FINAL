import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-document-two',
  templateUrl: './document-two.component.html',
  styleUrls: ['./document-two.component.css']
})

export class DocumentTwoComponent{
  constructor() { }

  title = 'frontend';
  download() {
    const doc = new jsPDF();
    doc.text('Information Entreprise :', 20, 20 )

    let ans = Array.from(document.querySelectorAll(".questions .form-control")).map((item: any) => item.value)
    let text: string =`

    Nom de l'entreprise :${ans[1]}, adresse : ${ans[2]}, email:${ans[3]},
    n° de téléphone:${ans[4]}
    Responsable du traitement :${ans[5]}, adresse postale :${ans[6]},  adresse mail :${ans[7]}, tél :${ans[8]}
    Délégué à la protection des données :${ans[9]}, adresse:${ans[10]}, mail: ${ans[11]} , n °  de téléphone: +${ans[12]} ,
    Société du DPO : DPOCHECK, adresse:${ans[13]}, tel : ${ans[14]},
    Information Entreprise :
    Date de création du registre:  ${ans[15]}
    Date des mises à jour : ${ans[16]}
    Listes des traitement de données personnelles
    Traitement 1 :  ${ans[17]}
    Description du traitement 1 : ${ans[18]}
    Date de création du traitement 1 :  ${ans[19]}
    Catégories de données personnelles: ${ans[20]}
    Catégorie de personnes concernées:
    Base de traitement:${ans[21]}
    Finalité du traitement: ${ans[22]}
    Destinataire des données : ${ans[23]}
    Durée de conservation des données :${ans[24]}
    Précautions de sécurité: ${ans[25]}
    Activité de traitement des données personnelles sensibles : ${ans[26]}

    Traitement 2 :  ${ans[17]}
    Description du traitement 2 : ${ans[18]}
    Date de création du traitement 3 :  ${ans[19]}
    Catégories de données personnelles: ${ans[20]}
    Catégorie de personnes concernées:
    Base de traitement:${ans[21]}
    Finalité du traitement: ${ans[22]}
    Destinataire des données : ${ans[23]}
    Durée de conservation des données :${ans[24]}
    Précautions de sécurité: ${ans[25]}
    Activité de traitement des données personnelles sensibles : ${ans[26]}


    Traitement 3 :  ${ans[17]}
    Description du traitement 3 : ${ans[18]}
    Date de création du traitement 3 :  ${ans[19]}
    Catégories de données personnelles: ${ans[20]}
    Catégorie de personnes concernées:
    Base de traitement:${ans[21]}
    Finalité du traitement: ${ans[22]}
    Destinataire des données : ${ans[23]}
    Durée de conservation des données :${ans[24]}
    Précautions de sécurité: ${ans[25]}
    Activité de traitement des données personnelles sensibles : ${ans[26]}

    Traitement 4 :  ${ans[17]}
    Description du traitement 4 : ${ans[18]}
    Date de création du traitement 4 :  ${ans[19]}
    Catégories de données personnelles: ${ans[20]}
    Catégorie de personnes concernées:
    Base de traitement:${ans[21]}
    Finalité du traitement: ${ans[22]}
    Destinataire des données : ${ans[23]}
    Durée de conservation des données :${ans[24]}
    Précautions de sécurité: ${ans[25]}
    Activité de traitement des données personnelles sensibles : ${ans[26]}
    `

    doc.setFontSize(10);
    doc.text(text, 20, 20);
    doc.save('a4.pdf');
  }
}






