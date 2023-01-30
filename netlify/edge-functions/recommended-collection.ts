import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const options = ["men", "women"];
  const collection = Math.random() < 0.5 ? options[0] : options[1];

  return context.json({ collection });
};
