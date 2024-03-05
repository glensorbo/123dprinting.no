import { faker } from '@faker-js/faker/locale/nb_NO';

import { config } from '../../config';
import { User } from '../../models/user';
import { hashPassword } from '../pwd/hash-password';

const initUser = config.INIT_USER;
const initPwd = config.INIT_PWD;

export const seedData = async () => {
  if (process.env.NODE_ENV !== 'development') return;
  try {
    let users = await User.find().exec();

    if (users.length > 0) return;

    const password = await hashPassword(initPwd);
    const user = new User({
      firstName: 'Glen',
      lastName: 'Sørbø',
      role: 'admin',
      email: initUser,
      password,
    });
    await user.save();
    console.log('No users was found, created an admin user...');
    console.log(initUser);
    console.log(initPwd);

    for (let i = 0; i < 20; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const password = await hashPassword(`!${firstName}.${lastName}!`);
      const user = new User({
        firstName,
        lastName,
        email: `${firstName}.${lastName}@gmail.com`,
        password,
        role: 'customer',
        address: {
          street: faker.location.street(),
          number: faker.number.int(100),
        },
        postal: {
          code: faker.location.zipCode('####'),
          region: faker.location.city(),
        },
        phone: faker.helpers.fromRegExp('[0-9]{8}'),
      });
      users.push(user);
    }
    await User.insertMany(users);
    console.log('Created 20 user with role customer');
  } catch (error) {
    throw error;
  }
};
