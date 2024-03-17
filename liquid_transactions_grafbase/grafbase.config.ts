import { graph, connector, config } from '@grafbase/sdk';
import * as dotenv from 'dotenv';

dotenv.config();

const g = graph.Standalone();


const blockstream = connector.OpenAPI('blockstream', {
  schema: 'https://raw.githubusercontent.com/dheeru99/liquid_transactions/main/liquid_transactions_grafbase/openAPI.yaml',
  url: "https://blockstream.info/liquid/api/",
});

g.datasource(blockstream);

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
});
