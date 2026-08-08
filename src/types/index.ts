export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiError {
  status: number;
  message: string;
}
