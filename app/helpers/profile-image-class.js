import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';

export function profileImageClass(params/* , hash*/) {
  let profileClass = params[0];

  if (isPresent(profileClass)) {
    return profileClass;
  } else {
    return 'no-face';
  }
}

export default helper(profileImageClass);
