import { config } from 'dotenv';
config();

import '@/ai/flows/generate-content-from-prompt.ts';
import '@/ai/flows/suggest-relevant-prompts.ts';
import '@/ai/flows/summarize-testimonials.ts';