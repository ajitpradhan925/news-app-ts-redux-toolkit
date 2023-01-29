export interface LoginRequest {
    email: string;
    password: string;
}

export interface UserResponse {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    password: string;
    token: string;
}