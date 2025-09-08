import { Sidequest } from 'sidequest';
import { FastifyInstance } from 'fastify';
import { EmailJob } from '../../jobs/email-job';

export default async function (fastify: FastifyInstance) {
  fastify.get('/asset', async function () {
    // Simple job
    await Sidequest.build(EmailJob).enqueue(
      'user@example.com',
      'Welcome!',
      'Thanks for signing up!'
    );
    return { message: 'Sent email job' };
  });
}
