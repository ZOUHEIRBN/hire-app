import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { CompanyService } from 'src/app/services/company.service';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'create-company-panel',
  templateUrl: './create-company-panel.component.html',
  styleUrls: ['./create-company-panel.component.css']
})
export class CreateCompanyPanelComponent implements OnInit {
  @Input() company:Company;
  @Output() doneEvent = new EventEmitter()
  floatLabelControl = new FormControl('auto')
  titles = [
  'Achats',
  'Commercial, vente',
  'Gestion, comptabilité, finance',
  'Informatique, nouvelles technologies',
  'Juridique',
  'Management, direction générale',
  'Marketing, communication',
  'Métiers de la santé et du social',
  'Métiers des services',
  'Métiers du BTP',
  'Production, maintenance, qualité',
  'R&D, gestion de projets',
  'RH, formation',
  'Secretariat, assistanat',
  'Tourisme, hôtellerie, restauration'
  ]
  sectors = [
'Activités associatives',
'Administration publique',
'Aéronautique, navale',
'Agriculture, pêche, aquaculture',
'Agroalimentaire',
'Ameublement, décoration',
'Automobile, matériels de transport, réparation',
'Banque, assurance, finances',
'BTP, construction',
'Centres d´appel, hotline',
'Chimie, pétrochimie, matières premières',
'Conseil, audit, comptabilité',
'Distribution, vente, commerce de gros',
'Édition, imprimerie',
'Éducation, formation',
'Electricité, eau, gaz, nucléaire, énergie',
'Environnement, recyclage',
'Equip. électriques, électroniques, optiques, précision',
'Equipements mécaniques, machines',
'Espaces verts, forêts, chasse',
'Évènementiel, hôte(sse), accueil',
'Hôtellerie, restauration',
'Immobilier, architecture, urbanisme',
'Import, export',
'Industrie pharmaceutique',
'Industrie, production, fabrication, autres',
'Informatique, SSII, Internet',
'Ingénierie, études développement',
'Intérim, recrutement',
'Location',
'Luxe, cosmétiques',
'Maintenance, entretien, service après vente',
'Manutention',
'Marketing, communication, médias',
'Métallurgie, sidérurgie',
'Nettoyage, sécurité, surveillance',
'Papier, bois, caoutchouc, plastique, verre, tabac',
'Produits de grande consommation',
'Qualité, méthodes',
'Recherche et développement',
'Santé, pharmacie, hôpitaux, équipements médicaux',
'Secrétariat',
'Services aéroportuaires et maritimes',
'Services autres',
'Services collectifs et sociaux, services à la personne',
'Sport, action culturelle et sociale',
'Télécom',
'Textile, habillement, cuir, chaussures',
'Tourisme, loisirs',
'Transports, logistique, services postaux'

  ]
  tech_categories = [
    {
      name: 'Application Design',
      technologies: [
        'UML', 'Merise', 'Modèle MVC', 'Modèle MVT', 'Modèle Composite', 'Modèle Observer', 'Modèle Singleton'
      ]
    },
    {
      name: 'Database Administration',
      technologies: [
        'Oracle SQL', 'MySQL', 'SQL Server', 'Cassandra', 'MongoDB'
      ]
    },
    {
      name: 'Application development',
      technologies: [
        'C', 'C++', 'C#', 'GoLang', 'Java', 'JavaScript', 'PHP', 'Python', 'R', 'Ruby', 'Scala'
      ]
    }
  ]
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    console.log(this.data)
    if(this.data === undefined || this.data === null){
      this.company = new Company()
    }
    else{
      this.company = this.data.company
    }
  }
}
