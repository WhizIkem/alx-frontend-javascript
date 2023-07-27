import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const promises = [
    uploadPhoto(),
    createUser(),
  ];
  Promise.all(promises)
    .then((values) => {
      const [photo, user] = values;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline')
    });
}
