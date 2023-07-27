import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, filename) {
  const promises = [
    signUpUser(firstName, lastName).then(
      (value) => ({ status: 'fulfilled', value }),
      (error) => ({ status: 'rejected', value: error })
    ),
    uploadPhoto(filename).then(
      (value) => ({ status: 'fulfilled', value }),
      (error) => ({ status: 'rejected', value: error })
    ),
  ];

  return Promise.all(promises);
}
