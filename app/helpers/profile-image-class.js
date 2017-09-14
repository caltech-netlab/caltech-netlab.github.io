import Ember from 'ember';

export function profileImageClass(params/*, hash*/) {
  let profileClass = params[0];
  if (profileClass != undefined || profileClass != null) {
    return profileClass;
  }
  else {
    return 'no-face';
  }
}

export default Ember.Helper.helper(profileImageClass);
