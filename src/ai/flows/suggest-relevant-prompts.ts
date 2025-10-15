'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting relevant prompts based on a user-provided topic.
 *
 * The flow takes a topic as input and returns a list of relevant prompts.
 * It exports the SuggestRelevantPromptsInput and SuggestRelevantPromptsOutput types, as well as the suggestRelevantPrompts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelevantPromptsInputSchema = z.object({
  topic: z.string().describe('The topic for which to suggest prompts.'),
});
export type SuggestRelevantPromptsInput = z.infer<typeof SuggestRelevantPromptsInputSchema>;

const SuggestRelevantPromptsOutputSchema = z.object({
  prompts: z.array(z.string()).describe('A list of relevant prompts for the given topic.'),
});
export type SuggestRelevantPromptsOutput = z.infer<typeof SuggestRelevantPromptsOutputSchema>;

export async function suggestRelevantPrompts(input: SuggestRelevantPromptsInput): Promise<SuggestRelevantPromptsOutput> {
  return suggestRelevantPromptsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelevantPromptsPrompt',
  input: {schema: SuggestRelevantPromptsInputSchema},
  output: {schema: SuggestRelevantPromptsOutputSchema},
  prompt: `You are an AI prompt suggestion tool.  Given a topic, you will suggest 5 relevant prompts that a user could use to generate content.

Topic: {{{topic}}}

Prompts:`,
});

const suggestRelevantPromptsFlow = ai.defineFlow(
  {
    name: 'suggestRelevantPromptsFlow',
    inputSchema: SuggestRelevantPromptsInputSchema,
    outputSchema: SuggestRelevantPromptsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
