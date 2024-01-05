import OpenAI from 'openai';

export async function openai_get_reply(prompt: string, model: string, temperature: number, apiKey: string): Promise<string|null> {
    // TODO: