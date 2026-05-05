#!/usr/bin/env node
/**
 * Heti vezetői dashboard — automatizált rutin (Út B)
 *
 * Cron: hétfő hajnali 7:00 (`0 7 * * 1`)
 *
 * Mit csinál:
 *   1. Lekérdezi a heti SmartFront-export-ot (vagy a Drive-ról beolvassa)
 *   2. Hívja a Claude API-t a `routine-prompt.md` szerint
 *   3. Email-ben elküldi a vezetésnek
 *
 * Bajdik János ezt egy nap alatt integrálja a SmartFront-rendszerbe.
 * Cron-példa /etc/crontab-ban:
 *
 *   0 7 * * 1 /usr/bin/node /path/to/routine-script.mjs
 *
 * Környezeti változók szükségesek:
 *   ANTHROPIC_API_KEY — Claude API kulcs (Claude for Nonprofits-on keresztül kapott)
 *   SMARTFRONT_EXPORT_PATH — heti export fájl path (vagy Drive-API-call)
 *   EMAIL_TO — vesszővel elválasztva: cseh.balazs@..., nagygyorgy.andras@..., stb.
 *   SMTP_HOST, SMTP_USER, SMTP_PASS — Gmail SMTP vagy SendGrid API
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "node:fs";
import nodemailer from "nodemailer";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// 1. Töltsd be a routine-prompt-ot
const routinePrompt = readFileSync("./routine-prompt.md", "utf-8");

// 2. Heti SmartFront-export beolvasás (CSV)
const exportPath = process.env.SMARTFRONT_EXPORT_PATH ?? "./smartfront-heti-export-current.csv";
const csvContent = readFileSync(exportPath, "utf-8");

// 3. Claude API hívás
console.log("Hívom Claude-ot...");
const response = await client.messages.create({
  model: "claude-sonnet-4-5",
  max_tokens: 4096,
  messages: [
    {
      role: "user",
      content: `${routinePrompt}\n\n## Csatolt SmartFront-heti-export\n\n\`\`\`csv\n${csvContent}\n\`\`\``,
    },
  ],
});

const dashboard = response.content[0].text;

// 4. Email küldés
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const emailTo = process.env.EMAIL_TO ?? "cseh.balazs@elelmiszerbank.hu";
const datum = new Date().toISOString().split("T")[0];
const hetSzam = Math.ceil((new Date() - new Date(new Date().getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000));

await transporter.sendMail({
  from: `"Magyar Élelmiszerbank Dashboard" <${process.env.SMTP_USER}>`,
  to: emailTo,
  subject: `Heti vezetői dashboard — 2026 H${hetSzam} (${datum})`,
  text: dashboard,
  html: `<pre style="font-family: monospace; line-height: 1.5;">${dashboard}</pre>`,
});

console.log(`✓ Email elküldve a vezetésnek: ${emailTo}`);
console.log(`✓ Hét: H${hetSzam}, dátum: ${datum}`);
console.log(`Token-felhasználás: ${response.usage.input_tokens} input + ${response.usage.output_tokens} output = ~$${((response.usage.input_tokens * 3 + response.usage.output_tokens * 15) / 1_000_000).toFixed(3)}`);
