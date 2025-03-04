"use server";
import { Resend } from "resend";
import FormEmail from "@/email/form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value : unknown, maxLength: number) => {
    if(!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }

    return true;
}

const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
 } else if (error && typeof error === 'object' && 'message' in error)  
    {
        message = String(error.message);
    } else if ( typeof error === "string" ) {
        message = error; 
    } else {
        message = "Spmething went wrong";
    }
    return message;
};

export const sendEmail = async (formData : FormData) => {
    const message =  formData.get('message');
    const senderEmail = formData.get('senderEmail');

    if(!validateString(senderEmail, 500)) {
        return {
            error: "Invalid Sender Email"
        }
    }
    if(!validateString(senderEmail, 5000)) {
        return {
            error: "Invalid message"
        }
    }
    
    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            subject: "message from Resume",
            to: "letsmailsunny9@gmail.com",
            reply_to: senderEmail as string,
            // text: message as string,
            // react: <FormEmail message={message} senderEmail={senderEmail} />
            react: React.createElement(FormEmail, { message: message as string,
            senderEmail: senderEmail as string }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
}
