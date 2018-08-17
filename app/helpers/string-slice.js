import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';

export function stringSlice(params/* , hash*/) {
  let str = params[0].toString();

  if (isPresent(str)) {
    if (params.length > 2 && Number.isInteger(params[1]) && Number.isInteger(params[2])) {
      return str.slice(params[1], params[2])
    } else if (Number.isInteger(params[1])) {
      return str.slice(params[1])
    }
  }
}

export default helper(stringSlice);
