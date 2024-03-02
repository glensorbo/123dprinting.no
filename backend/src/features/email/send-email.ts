import sgMail from '@sendgrid/mail';

import { config } from '../../config';
import { InternalServerErrorException } from '../../exceptions/internal-server-error';

export const sendMail = async (email: string, HTML: string) => {
  sgMail.setApiKey(config.SENDGRID_API_KEY);

  const mail = {
    to: email,
    from: 'noreply@glensorbo.com',
    subject: '',
    text: '',
    html: ``,
  };

  try {
    await sgMail.send(mail, false, (err, res) => {
      if (err) {
        throw new InternalServerErrorException();
      }
    });
  } catch (error) {
    throw error;
  }
};
