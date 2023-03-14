# @meltstudio/tsconfig

Melt Studio's TypeScript configurations.

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
