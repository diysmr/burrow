import * as fs from 'fs';
import * as path from 'path';
import ts from 'typescript';
import { printNodes } from './api';
import { callerTypes, createCallerFunction } from './lib/caller';
import { Provider } from './lib/provider';
import { importBurrow } from './lib/syntax';

const provider = new Provider();
const providerInterface = printNodes(
  ts.addSyntheticLeadingComment(
    importBurrow('../index'),
    ts.SyntaxKind.SingleLineCommentTrivia,
    'Generated by solts - run yarn generate:provider to regenerate if solts Provider code is changed',
  ),
  ...callerTypes,
  provider.createInterface(true),
  createCallerFunction(provider),
);

const providerFile = path.join(__dirname, 'interface.gd.ts');

fs.writeFileSync(providerFile, providerInterface);
