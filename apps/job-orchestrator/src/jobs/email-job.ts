import { Job } from 'sidequest';

export class EmailJob extends Job {
  async run(to, subject, body) {
    console.log(`Sending email to ${to}: ${subject}`);
    // Your email sending logic here
    return { sent: true, timestamp: new Date() };
  }
}
