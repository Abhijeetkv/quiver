import prisma from "@/lib/db";
import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI } from '@ai-sdk/openai';

const google = createGoogleGenerativeAI();
const openai = createOpenAI();
const anthropic = createAnthropic();

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("pretend", "5s")
    const { steps : geminiSteps } = await step.ai.wrap("gemini-generate-text", generateText, {
      model: google("gemini-2.5-flash"),
      system:
        "You are a helpful assistant that generates text using Google Gemini.",
      prompt: "what is 3 * 3?",
    });

    const { steps : openaiSteps } = await step.ai.wrap("openai-generate-text", generateText, {
      model: openai("gpt-4"),
      system:
        "You are a helpful assistant that generates text using OpenAI.",
      prompt: "what is 3 * 3?",
    });

    const { steps : anthropicSteps } = await step.ai.wrap("anthropic-generate-text", generateText, {
      model: anthropic("claude-sonnet-4-5"),
      system:
        "You are a helpful assistant that generates text using Anthropic.",
      prompt: "what is 3 * 3?",
    });

    return {
      geminiSteps,
      openaiSteps,
      anthropicSteps
    }
  }
);
