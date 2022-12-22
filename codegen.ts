
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4001",
  documents: "./graphql/**/*.*.ts",
  generates: {
    "./graphql/types.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
