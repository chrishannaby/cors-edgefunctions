import type { Context } from "https://edge.netlify.com";

const defaultOrigin = "cors1.chrishannaby.com";
const domainAllowList = ["cors1.chrishannaby.com", "cors2.chrishannaby.com"];

export default async (request: Request, context: Context) => {
  const origin = new URL(request.url).origin;
  const response = await context.next();
  if (domainAllowList.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    return response;
  } else {
    response.headers.set("Access-Control-Allow-Origin", defaultOrigin);
    return response;
  }
};
