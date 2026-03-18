// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  try {
    // Here you can integrate with your email marketing service
    // Examples: Mailchimp, ConvertKit, SendGrid, etc.
    
    // Example: Save to database
    // await prisma.subscriber.create({ data: { email } });
    
    // Example: Send to Mailchimp
    // const response = await mailchimp.lists.addListMember(listId, {
    //   email_address: email,
    //   status: 'subscribed',
    // });

    // For now, just log and return success
    console.log('New subscriber:', email);
    
    res.status(200).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ message: 'Failed to subscribe' });
  }
}