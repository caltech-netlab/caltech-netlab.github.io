import Ember from 'ember';

export function stringSlice(params/*, hash*/) {
  let str = params[0].toString();
  if (str != undefined && str != null) {
    if (params.length > 2 && Number.isInteger(params[1]) && Number.isInteger(params[2])) {
      return str.slice(params[1], params[2])
    }
    else if (Number.isInteger(params[1])) {
      return str.slice(params[1])
    }
  }
}

export default Ember.Helper.helper(stringSlice);
