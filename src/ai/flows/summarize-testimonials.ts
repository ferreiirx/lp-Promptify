'use server';

/**
 * @fileOverview Summarizes user testimonials to provide a concise overview.
 *
 * - summarizeTestimonials - A function that takes raw testimonials and returns a summarized version.
 * - SummarizeTestimonialsInput - The input type for the summarizeTestimonials function.
 * - SummarizeTestimonialsOutput - The return type for the summarizeTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTestimonialsInputSchema = z.object({
  testimonials: z
    .string()
    .describe('Raw user testimonials that need to be summarized.'),
});
export type SummarizeTestimonialsInput = z.infer<
  typeof SummarizeTestimonialsInputSchema
>;

const SummarizeTestimonialsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the testimonials.'),
});
export type SummarizeTestimonialsOutput = z.infer<
  typeof SummarizeTestimonialsOutputSchema
>;

export async function summarizeTestimonials(
  input: SummarizeTestimonialsInput
): Promise<SummarizeTestimonialsOutput> {
  return summarizeTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTestimonialsPrompt',
  input: {schema: SummarizeTestimonialsInputSchema},
  output: {schema: SummarizeTestimonialsOutputSchema},
  prompt: `You are an AI expert at summarizing text.

  Summarize the following testimonials into a short, concise summary that captures the main points and overall sentiment:

  Testimonials: {{{testimonials}}} `,
});

const summarizeTestimonialsFlow = ai.defineFlow(
  {
    name: 'summarizeTestimonialsFlow',
    inputSchema: SummarizeTestimonialsInputSchema,
    outputSchema: SummarizeTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
