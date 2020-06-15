import { Badge } from './badge'
import { User } from './user';
import { Company } from './company';
import { Skill, Language, Degree, ProfessionnalExperience } from './resume';

export const def_post:Post = {
  'id':0,
  'title':'',
  'timestamp': 0,
  'ownerId':0,
  'description': '',
  'badges': [],
  'imageUrl': '',
  'comments': []
}

export const posttypes = {
  "types":["Offer", "Demand", "Event"],
  "subjects": {
    "Offer": ["Job", "Internship"],
    "Demand": ["Job", "Internship"],
    "Event": ["Formation", "Webinar"]
  }
}

export const DIPLOMA_TYPES = ["Technicien", "Technicien Spécialisé", "Bachelor", "Master", "Engineer", "MBA", "PHD", "Other"]

export const SECTORS = ["Activités associatives",
"Administration publique",
"Aéronautique, navale",
"Agriculture, pêche, aquaculture",
"Agroalimentaire",
"Ameublement, décoration",
"Automobile, matériels de transport, réparation",
"Banque, assurance, finances",
"BTP, construction",
"Centres d´appel, hotline",
"Chimie, pétrochimie, matières premières",
"Conseil, audit, comptabilité",
"Distribution, vente, commerce de gros",
"Édition, imprimerie",
"Éducation, formation",
"Electricité, eau, gaz, nucléaire, énergie",
"Environnement, recyclage",
"Equip. électriques, électroniques, optiques, précision",
"Equipements mécaniques, machines",
"Espaces verts, forêts, chasse",
"Évènementiel, hôte(sse), accueil",
"Hôtellerie, restauration",
"Immobilier, architecture, urbanisme",
"Import, export",
"Industrie pharmaceutique",
"Industrie, production, fabrication, autres",
"Informatique, SSII, Internet",
"Ingénierie, études développement",
"Intérim, recrutement",
"Location",
"Luxe, cosmétiques",
"Maintenance, entretien, service après vente",
"Manutention",
"Marketing, communication, médias",
"Métallurgie, sidérurgie",
"Nettoyage, sécurité, surveillance",
"Papier, bois, caoutchouc, plastique, verre, tabac",
"Produits de grande consommation",
"Qualité, méthodes",
"Recherche et développement",
"Santé, pharmacie, hôpitaux, équipements médicaux",
"Secrétariat",
"Services autres",
"Services collectifs et sociaux, services à la personne",
"Sport, action culturelle et sociale",
"Télécom",
"Textile, habillement, cuir, chaussures",
"Tourisme, loisirs",
"Transports, logistique, services postaux"
]

export const FUNCTIONS = ["Achats", "Commercial, vente", "Gestion, comptabilité, finance", "Informatique, nouvelles technologies", "Juridique", "Management, direction générale", "Marketing, communication", "Métiers de la santé et du social", "Métiers des services", "Métiers du BTP", "Production, maintenance, qualité", "R&D, gestion de projets", "RH, formation", "Secretariat, assistanat", "Tourisme, hôtellerie, restauration", "Transport, logistique"]

export const CITIES = ['Casablanca', 'Rabat', 'Agadir', 'Tangiers', 'Marrakesh', 'Fez', 'Oujda', 'Meknes', 'Laayoune', 'Errachidia', 'Tetouan', 'Kenitra']

export const HIERARCHY_LVS = ["Technicien",
"Technicien spécialisé",
"Cadre", "Chef d'équipe",
"Chef de service", "Chef de département",
"Directeur adjoint", "Directeur"]

export const TECH_CATEGORIES = [
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

export class Post{
  id:number;
  timestamp:any;
  type?:string;
  subject?:string;
  ownerId:number|string;
  owner?: User|Company;
  title?: string;
  description: string;
  badges: Badge[];
  imageUrl: string|ArrayBuffer;
  comments:Comment[]
  following?:boolean
}
export class Comment{
  id?:string
  text:string = '';
  timestamp;
  commenting_user;
}
class Job extends Post{
  hierarchy_level:string
  function:string
  region:string
  cities:string[]

  workdays: any[];
  regular_workhours: number;
  additional_workhours:number;
  contractType: string;
}
export class JobOffer extends Job {
  salary: number = 0;

  requiredDegrees: Degree[] = []
  requiredExp:{title:string, level:number}[] = []

  requiredSkills: Skill[] = []
  requiredLanguages: Language[] = []

  businessTravels_national;
  businessTravels_international;

  constructor(){
    super();
    this.requiredSkills = [];
  }
  static fromPost(post){
    let offer = new JobOffer()
    offer.id = post.id
    offer.type = post.type
    offer.subject = post.subject
    offer.description = post.description
    offer.title = post.title
    offer.cities = post.cities
    offer.region = post.region
    offer.function = post.function
    offer.hierarchy_level = post.hierarchy_level
    offer.requiredDegrees = post.requiredDegrees.map(e => {return new Degree(e.option, e.level, e.diploma_types)})
    offer.requiredExp = post.requiredExp.map(e => {return {title:e.title, level:e.level}})
    offer.requiredSkills = post.requiredSkills.map(e => {return new Skill(e.skill, e.level)})
    offer.requiredLanguages = post.requiredLanguages.map(e => {return new Language(e.lang, e.level)})
    offer.salary = post.salary
    offer.contractType = post.contractType
    offer.workdays = post.workdays
    offer.regular_workhours = post.regular_workhours
    offer.additional_workhours = post.additional_workhours
    offer.businessTravels_national = post.businessTravels_national
    offer.businessTravels_international = post.businessTravels_international
    //offer.comments = post.comments
    return <JobOffer>offer;
  }
}
export class JobDemand extends Job {
  businessTravels_national;
  businessTravels_international;
  salary_range = 0;
  min_workhours;
  max_workhours
  constructor(){
    super();
    this.min_workhours = 0
    this.max_workhours = 12
  }
  static fromPost(post){
    let demand = new JobDemand()
    demand.id = post.id
    demand.type = post.type
    demand.subject = post.subject
    demand.description = post.description
    demand.title = post.title
    demand.cities = post.cities
    demand.region = post.region
    demand.function = post.function
    demand.hierarchy_level = post.hierarchy_level
    demand.contractType = post.contractType
    demand.businessTravels_national = post.businessTravels_national
    demand.businessTravels_international = post.businessTravels_international
    demand.workdays = post.workdays
    demand.salary_range = post.salary_range
    demand.min_workhours = post.min_workhours
    demand.max_workhours = post.max_workhours
    return <JobDemand>demand;
  }
}
