import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, filename) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(filename);
  return Promise.allSettled([promise1, promise2])
    .then((values) => {
      const results = [];
      values.forEach((value) => {
        if (value.status === 'rejected') {
          results.push({
            status: value.status,
            value: value.reason.message,
          });
        } else {
          results.push({
            status: value.status,
            value: value.value.firstName,
          });
        }
      });
      return results;
    });
}