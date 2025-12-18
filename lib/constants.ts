export const PLAN_LIMITS = {
  free: 1,
  pro: 30,
};

export const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID || 'price_test_pro';

export const SYSTEM_PROMPT = `You are a professional real estate copywriter. Write a persuasive Zillow-style property listing focused on benefits, lifestyle, and urgency.  Avoid generic phrases. Use natural keywords for the city.  Keep the description between 150-250 words. `;