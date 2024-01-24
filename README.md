# Fenv

Package to configure enviroment variables

## Usage examples

```ts
envConfig({
  port: ["IMETRICS_PORT", Number],
  dbUrl: ["DATABASE_URL", String],
  socket: {
    ip: ["SOCKET_IP", (value: string) => value.replace("http://", "")],
    number: ["SOCKET_NUMBER", (value: string) => !Number.isNaN(Number(value))],
  },
});
```

```ts
// example with zod
envConfig({
  port: ["IMETRICS_PORT", z.coerce.number().int().positive().parse],
  dbUrl: ["DATABASE_URL", z.string().trim().parse],
  socket: {
    ip: ["SOCKET_IP", z.string().ip().parse],
  },
});
```
