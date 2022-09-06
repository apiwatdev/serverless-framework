export class HttpException extends Error {
  status: number;
  message: string;
  errors: any[] | undefined;
  constructor(status = 500, message = "Internal Server Error", error = []) {
    super(message);
    this.status = status;
    this.message = message;
    this.errors = error.length > 0 ? error : undefined;
  }
}
