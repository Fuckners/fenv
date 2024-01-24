export default class EnviromentParseError extends Error {
  constructor(field: string, error: unknown);
  constructor(
    public field: string,
    public error: unknown,
  ) {
    super("Error on parsing enviroment field");
  }
}