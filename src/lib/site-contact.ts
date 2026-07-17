/** Single source of truth for public contact details across the site. */
export const SITE_EMAIL = "dipukumardevcod@gmail.com";
/** Public brand name. */
export const SITE_NAME = "Devnix";
/**
 * Canonical production URL (no trailing slash). Override at build/deploy time
 * with the NEXT_PUBLIC_SITE_URL environment variable.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://devnix-f0869.web.app"
).replace(/\/$/, "");
/** WhatsApp `wa.me` expects digits only, country code + national number. */
export const SITE_WHATSAPP_WA_ME = "917870655593";
/** `tel:` URI (E.164). */
export const SITE_PHONE_TEL = "+917870655593";
/** Human-readable phone line. */
export const SITE_PHONE_DISPLAY = "+91 78706 55593";
