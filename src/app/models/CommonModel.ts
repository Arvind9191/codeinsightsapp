export interface ApiResponse{
    data:any,
    statusCode:number,
    message:string
}

export interface UploadProjectRequest {
  categoryId: string;          // Guid
  title: string;
  description: string;
  price: number;
  paymentPageUrl: string;
  aboutVideoUrl: string;
  setupVideoUrl: string;
  technologies: string[];      // array of strings
}

export interface UsersMessage {
  fullName: string;
  email: string;
  reason: string;
  message: string;
}