class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.status = 404;
  }
}

export default NotFoundError;