export type UserResponse ={
  content: User[];
  totalPages: number;  
}

export type User ={
  id:number;
  name: string;
  email: string;
}