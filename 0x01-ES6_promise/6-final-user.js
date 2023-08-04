import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName)
  .then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error })
  );

  const uploadPhotoPromise = uploadPhoto(fileName)
  .then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error })
  );

  return Promise.all([signUpUserPromise, uploadPhotoPromise]);
}
