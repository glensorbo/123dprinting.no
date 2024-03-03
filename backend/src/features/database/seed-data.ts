import { faker } from '@faker-js/faker';

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
      const password = await hashPassword(faker.internet.password());
      const user = new User({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password,
        role: 'customer',
        address: {
          street: faker.location.street(),
          number: faker.number.int(100),
        },
        postal: {
          code: faker.location.zipCode('####'),
          region: faker.location.county(),
        },
        phone: faker.helpers.fromRegExp('[0-9]{8}'),
        orders: [],
      });
      users.push(user);
    }
    await User.insertMany(users);
    console.log('Created 20 user with role customer');
  } catch (error) {
    throw error;
  }
};
