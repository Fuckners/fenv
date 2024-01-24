export default class EnviromentNotFoundError extends Error {
  constructor(enviromentKey: string, name: string);
  constructor(
    public key: string,
    public name: string,
  ) {
    super("Enviroment variable not found.");
  }
}