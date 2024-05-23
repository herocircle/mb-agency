import {EmailTemplate} from '@/app/contact/@components/email-template';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const {fullName, email, projectType, mobile, message} = await req.json();

    try {
        const {data, error} = await resend.emails.send({
            from: email,
            to: ['delivered@mbtech.dev'],
            subject: 'New Contact Form Submission',
            react: EmailTemplate({fullName, email, projectType, mobile, message}),
        });

        if (error) {
            return new Response(JSON.stringify({error}), {status: 500});
        }

        return new Response(JSON.stringify(data));
    } catch (error) {
        return new Response(JSON.stringify({error}), {status: 500});
    }
}
