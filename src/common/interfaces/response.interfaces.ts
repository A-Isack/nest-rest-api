export interface serviceResponse<T>{
    code: number,
    data?: T,
    message?: string
}