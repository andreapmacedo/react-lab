type Address = {
  street: string;
  number: string;
  complement?: string; // Opcional
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type Contact = {
  name: string; // Nome do contato
  email: string; // Obrigatório
  position?: string; // Opcional
  phones?: string[]; // Opcional
};

type Client = {
  id: string;
  companyName: string; // Obrigatório
  cnpj?: string; // Opcional
  address?: Address;
  registrationDate: string;
  lastPurchaseDate?: string; // Opcional
  totalPurchases?: number; // Opcional
  notes?: string; // Opcional
  status: string;
  contacts: Contact[]; // Deve ter pelo menos um contato
};

// export interface Client {
//   cliente: string;
//   email: string;
// }

export interface Setup {
  loadFileSuccess: boolean;
  
}

export interface Project {
  name?: string;
}

export interface Data {
  clients: Client[];
  projects: Project[];
  setups: Setup[];
  projetcTipes: string[];
  // projectStatus: string[];
  // projectPriority: string[];
  // projectCategories: string[];
  // projectStages: string[];
  // projectTags: string[];
  // projectUsers: string[];
  records: string[];

}
