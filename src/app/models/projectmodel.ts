export interface ViewProjectModel {
   
  statusCode: number;
  message: string;
}



export interface ProjectUpdate {
  projectId: string;          // Guid
  title: string;
  description: string;
  price: number;
  categoryName: string;
  categoryId: string;         // Guid
  imagePath: string;
  aboutProjectUrl: string;
  projectSetupUrl: string;
  technology: string;
  paymentPageUrl: string;
  isAvailable: boolean;
}