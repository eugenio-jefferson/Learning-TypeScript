export class ApiResponse<T> {
  data: T;
  status: number;
  message: string;

  constructor(status: number, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  static success<T>(
    data: T,
    message: string = 'Success',
    status: number = 200,
  ): ApiResponse<T> {
    return new ApiResponse(status, message, data);
  }

  static error<T>(
    message: string,
    status: number = 400,
    data: T | null = null,
  ): ApiResponse<T | null> {
    return new ApiResponse(status, message, data);
  }
}
