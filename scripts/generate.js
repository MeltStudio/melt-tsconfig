#! /usr/bin/env node

const fs = require('fs');
const exec = require('child_process').execSync;

const CONFIGS = [
  {
    name: 'Next.js',
    filename: 'nextjs.json',
    parents: ['base.json', 'strict.json', 'nextjs.json'],
  },
  {
    name: 'Node16',
    filename: 'node16.json',
    parents: ['base.json', 'strict.json', 'node16.json'],
  },
  {
    name: 'Node18',
    filename: 'node18.json',
    parents: ['base.json', 'strict.json', 'node18.json'],
  },
  {
    name: 'ReactNative',
    filename: 'react-native.json',
    parents: ['base.json', 'strict.json', 'react-native.json'],
  },
  {
    name: 'React',
    filename: 'react.json',
    parents: ['base.json', 'strict.json', 'react.json'],
  },
];

const LOADED = {};

function loadConfig(filename) {
  if (LOADED[filename] == null) {
    console.log(`Reading ${filename}`);
    // eslint-disable-next-line import/no-dynamic-require, global-require
    LOADED[filename] = require(`../configs/${filename}`);
  }

  return LOADED[filename];
}

function mergeConfigs(name, tsconfigs) {
  const compilerOptions = Object.assign(
    {},
    ...tsconfigs.map((c) => c.compilerOptions)
  );
  // sort compiler options
  const keys = Object.keys(compilerOptions).sort();
  const sortedCompilerOptions = keys.reduce(
    (acc, key) => ({ ...acc, [key]: compilerOptions[key] }),
    {}
  );

  const includes = tsconfigs.reduce((acc, tsconfig) => {
    if (tsconfig.includes != null) {
      return [...acc, ...tsconfig.includes];
    }
    return acc;
  }, []);

  const merged = {
    $schema: 'https://json.schemastore.org/tsconfig',
    display: name,
    compilerOptions: sortedCompilerOptions,
  };
  if (includes.length > 0) {
    merged.includes = includes;
  }

  return merged;
}

function saveFile(filename, tsconfig) {
  console.log(`Saving ${filename}`);
  const json = JSON.stringify(tsconfig, null, 2);

  fs.writeFileSync(filename, `${json}\n`);
}

function generate() {
  CONFIGS.forEach((config) => {
    console.log(`Generating config for: ${config.parents.join(', ')}`);

    const tsconfigs = config.parents.map(loadConfig);
    const merged = mergeConfigs(config.name, tsconfigs);
    saveFile(config.filename, merged);

    // empty log to add a space between generations
    console.log('');
  });

  const command = `yarn prettier --write ${CONFIGS.map((c) => c.filename).join(
    ' '
  )}`;
  console.log("Formatting TSConfig's");
  console.log(`Command: ${command}`);
  exec(command);
}

generate();
