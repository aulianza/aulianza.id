import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './tools/schema.graphql',
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['./src/services/graphql/documents.*.ts'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      // plugins: ['typescript'],
      // config: {
      //   skipTypename: true,
      //   onlyOperationTypes: true,
      //   maybeValue: 'T',
      //   nonOptionalTypename: true,
      //   avoidOptionals: {
      //     field: true,
      //     inputValue: true,
      //     object: true,
      //     defaultValue: true,
      //   },
      //   mergeFragmentTypes: true,
      // },
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
