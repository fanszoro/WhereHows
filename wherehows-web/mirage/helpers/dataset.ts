import { IFunctionRouteHandler } from 'wherehows-web/typings/ember-cli-mirage';
import { ApiStatus } from 'wherehows-web/utils/api/shared';

const getDataset = function(this: IFunctionRouteHandler, { datasets }: { datasets: any }) {
  return {
    dataset: this.serialize(datasets.first()),
    status: ApiStatus.OK
  };
};

export { getDataset };
