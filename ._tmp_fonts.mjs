import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("https://gallery-bloom-portfolio.lovable.app/", { waitUntil: "networkidle" });
const h1 = await page.locator("h1").first();
const styles = await h1.evaluate(el => {
  const cs = getComputedStyle(el);
  return { fontFamily: cs.fontFamily, fontWeight: cs.fontWeight, fontSize: cs.fontSize };
});
console.log("H1:", JSON.stringify(styles));
const body = await page.locator("p").first();
const bodyStyles = await body.evaluate(el => {
  const cs = getComputedStyle(el);
  return { fontFamily: cs.fontFamily, fontWeight: cs.fontWeight };
});
console.log("Body:", JSON.stringify(bodyStyles));
const accent = await page.locator("text=Explorar la obra").first().evaluate(el => getComputedStyle(el.closest("a") || el).backgroundColor);
console.log("Accent bg:", accent);
