import bcrypt from 'bcrypt';
import { InternalServerErrorException } from '../../exceptions/internal-server-error';

export const hashPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (!hashedPassword) throw new InternalServerErrorException();
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};
