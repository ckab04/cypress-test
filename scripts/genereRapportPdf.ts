const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  try {
    const htmlPath = "cypress/reports/html/index.html"; // Replace with your actual HTML file path

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(`file://${process.cwd()}/${htmlPath}`, {
      waitUntil: "networkidle0",
    });
    await page.pdf({
      path: "cypress/reports/pdf/cypress-report.pdf",
      format: "A4",
      printBackground: true,
    });
    await browser.close();

    console.log("✅ PDF report generated from HTML.");
  } catch (error) {
    console.error("❌ Error generating PDF from HTML:", error);
    process.exit(1);
  }
})();
