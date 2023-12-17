import {ErrorDetailsMessage} from '../types/error-details-message';
import {AuthInfo, UserInfo} from '../types/user-info';

export const user: UserInfo = {
  name: 'name',
  avatarUrl: 'https://imgur.com/gallery/pTXBWz7',
  email: 'a.a@a.com'
};

export const authInfo: AuthInfo = {...user, token:'token'};

export const authError: ErrorDetailsMessage = {
  errorType: 'type',
  message: 'message',
  details: [{
    property: 'a',
    value: 'a',
    messages: ['a']
  },{
    property: 'b',
    value: 'b',
    messages: ['b']
  }]
};
