# @meltstudio/tsconfig

Melt Studio's TypeScript configurations.

_**Important:** This configurations require TypeScript 5 or higher, if you want
to use TypeScript 4 install version 1._

## Installation

```bash
yarn add --dev @meltstudio/tsconfig
```

## Usage

This project exports multiple TSConfig's:

### [`nextjs.json`](./nextjs.json)

```json
{
 ...
 "extends": ["@meltstudio/tsconfig/next.json"],
 ...
}
```

_Note:_ Remember to include `next-env.d.ts` and `.next/types/**/*.ts` in the
`includes` array of your TSConfig.

### [`node16.json`](./node16.json)

```json
{
 ...
 "extends": ["@meltstudio/tsconfig/node16.json"],
 ...
}
```

### [`node18.json`](./node18.json)

```json
{
 ...
 "extends": ["@meltstudio/tsconfig/node18.json"],
 ...
}
```

### [`node20.json`](./node20.json)

```json
{
 ...
 "extends": ["@meltstudio/tsconfig/node20.json"],
 ...
}
```

### [`node22.json`](./node22.json)

```json
{
 ...
 "extends": ["@meltstudio/tsconfig/node22.json"],
 ...
}
```

### [`node24.json`](./node24.json)

```json
{
 ...
 "extends": ["@meltstudio/tsconfig/node24.json"],
 ...
}
```

_Note:_ `node20`/`node22`/`node24` use
`module`/`moduleResolution: "NodeNext"`/`"Node16"` (ESM-aware, resolves per-file
based on your `package.json` `"type"` field) rather than the plain `"CommonJS"`
the older `node16`/`node18` presets use — the current
TypeScript-team-recommended setup for these Node versions. If your project is
CommonJS-only, `node18.json` still works fine on any Node runtime new or old;
these are for projects that want Node's native ESM support recognized correctly.

### [`react-native.json`](./react-native.json)

```json
{
 ...
 "extends": ["@meltstudio/tsconfig/react-native.json"],
 ...
}
```

### [`react.json`](./react.json)

```json
{
 ...
 "extends": ["@meltstudio/tsconfig/react.json"],
 ...
}
```
