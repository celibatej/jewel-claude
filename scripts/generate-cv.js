const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  
  // Embed fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const darkNavy = rgb(0.1, 0.13, 0.18); // #1a202c
  const headingColor = rgb(0.18, 0.22, 0.28); // #2d3748
  const bodyColor = rgb(0.2, 0.24, 0.28); // #333d47
  const subtitleColor = rgb(0.3, 0.35, 0.42); // #4a5568
  const headerBg = rgb(0.935, 0.95, 0.96); // Soft gray-blue banner #edf3f6
  const iconColor = rgb(0.35, 0.42, 0.5);

  // Helper to wrap text into lines fitting a maxWidth
  function wrapText(text, font, size, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);

      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // Draw bullet item helper
  function drawBulletItem(page, text, x, y, maxWidth, font = fontRegular, size = 9.3, leading = 13) {
    const bulletX = x;
    const textX = x + 12;
    const textWidth = maxWidth - 12;

    // Small clean filled circle bullet for universal font compatibility
    page.drawCircle({
      x: bulletX + 3,
      y: y + 3,
      size: 1.8,
      color: bodyColor,
    });

    const lines = wrapText(text, font, size, textWidth);
    for (let i = 0; i < lines.length; i++) {
      page.drawText(lines[i], {
        x: textX,
        y: y - i * leading,
        size: size,
        font: font,
        color: bodyColor,
      });
    }

    return y - lines.length * leading;
  }

  // --- PAGE 1 ---
  const page1 = pdfDoc.addPage([612, 792]);
  const pageWidth = 612;
  const pageHeight = 792;
  const marginX = 46;
  const contentWidth = pageWidth - marginX * 2; // 520

  // 1. Header Banner
  const bannerHeight = 88;
  const bannerY = pageHeight - bannerHeight;
  page1.drawRectangle({
    x: 0,
    y: bannerY,
    width: pageWidth,
    height: bannerHeight,
    color: headerBg,
  });

  // Avatar
  const avatarPath = path.join("/tmp/profile_circle.png");
  if (fs.existsSync(avatarPath)) {
    const avatarBytes = fs.readFileSync(avatarPath);
    const avatarImg = await pdfDoc.embedPng(avatarBytes);
    const avatarSize = 64;
    const avatarX = marginX;
    const avatarY = bannerY + (bannerHeight - avatarSize) / 2;

    // Outer white halo
    page1.drawCircle({
      x: avatarX + avatarSize / 2,
      y: avatarY + avatarSize / 2,
      size: avatarSize / 2 + 2,
      color: rgb(1, 1, 1),
    });

    page1.drawImage(avatarImg, {
      x: avatarX,
      y: avatarY,
      width: avatarSize,
      height: avatarSize,
    });
  }

  // Header Text
  const headerTextX = marginX + 78;
  
  // Name
  page1.drawText("Jobaedul Islam Jewel", {
    x: headerTextX,
    y: bannerY + 54,
    size: 22,
    font: fontBold,
    color: darkNavy,
  });

  // Subtitle
  page1.drawText("Customer Service Professional | Sales & Logistics Coordination", {
    x: headerTextX,
    y: bannerY + 37,
    size: 10.5,
    font: fontRegular,
    color: subtitleColor,
  });

  // Contact line
  const contactY = bannerY + 18;
  let cursorX = headerTextX;

  // Phone icon (handset shape)
  page1.drawRectangle({ x: cursorX, y: contactY - 1, width: 7, height: 10, borderWidth: 1, borderColor: iconColor, color: rgb(1,1,1) });
  page1.drawRectangle({ x: cursorX + 2, y: contactY + 7, width: 3, height: 1, color: iconColor });
  cursorX += 11;
  page1.drawText("966 580108464", { x: cursorX, y: contactY, size: 9, font: fontRegular, color: subtitleColor });
  cursorX += fontRegular.widthOfTextAtSize("966 580108464", 9) + 16;

  // Email icon (envelope shape)
  page1.drawRectangle({ x: cursorX, y: contactY, width: 10, height: 7, borderWidth: 1, borderColor: iconColor, color: rgb(1,1,1) });
  page1.drawLine({ start: { x: cursorX, y: contactY + 7 }, end: { x: cursorX + 5, y: contactY + 3 }, thickness: 0.8, color: iconColor });
  page1.drawLine({ start: { x: cursorX + 10, y: contactY + 7 }, end: { x: cursorX + 5, y: contactY + 3 }, thickness: 0.8, color: iconColor });
  cursorX += 14;
  page1.drawText("jobisjewel@gmail.com", { x: cursorX, y: contactY, size: 9, font: fontRegular, color: subtitleColor });
  cursorX += fontRegular.widthOfTextAtSize("jobisjewel@gmail.com", 9) + 16;

  // Web icon (globe / screen shape)
  page1.drawRectangle({ x: cursorX, y: contactY, width: 10, height: 8, borderWidth: 1, borderColor: iconColor, color: rgb(1,1,1) });
  page1.drawLine({ start: { x: cursorX, y: contactY + 4 }, end: { x: cursorX + 10, y: contactY + 4 }, thickness: 0.8, color: iconColor });
  page1.drawLine({ start: { x: cursorX + 5, y: contactY }, end: { x: cursorX + 5, y: contactY + 8 }, thickness: 0.8, color: iconColor });
  cursorX += 14;
  page1.drawText("www.jobisjewel.vercel.app", { x: cursorX, y: contactY, size: 9, font: fontRegular, color: subtitleColor });

  // Main Content Y
  let currentY = bannerY - 26;

  // --- Professional Summary ---
  page1.drawText("Professional Summary", {
    x: marginX,
    y: currentY,
    size: 13.5,
    font: fontBold,
    color: headingColor,
  });
  currentY -= 14;

  const summaryText = "Detail-oriented Customer Service Professional with 15+ years of experience across financial services, remittance operations, sales, and logistics/fleet coordination in the KSA market. Supply Chain Management certified (Rutgers University), with strengths in compliance, KYC/AML, vendor coordination, and multilingual client communication. Skilled at resolving customer disputes and adapting quickly across departments and industries. Based in Saudi Arabia, available immediately.";
  
  const summaryLines = wrapText(summaryText, fontRegular, 9.3, contentWidth);
  for (const line of summaryLines) {
    page1.drawText(line, {
      x: marginX,
      y: currentY,
      size: 9.3,
      font: fontRegular,
      color: bodyColor,
    });
    currentY -= 13.5;
  }

  currentY -= 12;

  // --- Work Experience Heading ---
  page1.drawText("Work Experience", {
    x: marginX,
    y: currentY,
    size: 13.5,
    font: fontBold,
    color: headingColor,
  });
  currentY -= 17;

  // Job 1: Ersal
  page1.drawText("Customer Service Executive (2017 - 2023)", {
    x: marginX,
    y: currentY,
    size: 10.5,
    font: fontBold,
    color: darkNavy,
  });
  currentY -= 12;

  page1.drawText("ERSAL MONEY TRANSFER- RIYADH, KSA", {
    x: marginX,
    y: currentY,
    size: 9.3,
    font: fontItalic,
    color: subtitleColor,
  });
  currentY -= 14;

  const ersalBullets = [
    "Processed 150+ international remittance transactions daily (peaking at 200+ during salary periods) with full accuracy.",
    "Enforced KYC/AML compliance via Iqama/Passport verification and transaction monitoring per SAMA regulations.",
    "Communicated with clients across 20+ nationalities in English, Arabic, Bengali and Hindi/Urdu.",
    "Provided backup vault and cash-in-transit coverage during teller absences.",
    "Supported head office audit and compliance reporting with accurate documentation.",
    "Resolved complex disputes — delayed transfers, system errors, transaction blocks — through structured de-escalation.",
    "Identified operational bottlenecks and contributed to process improvements.",
  ];

  for (const b of ersalBullets) {
    currentY = drawBulletItem(page1, b, marginX, currentY, contentWidth, fontRegular, 9.2, 12.8) - 3;
  }

  currentY -= 8;

  // Job 2: Best Rent A Car
  page1.drawText("Customer Service Representative / Fleet Coordinator (2014 - 2017)", {
    x: marginX,
    y: currentY,
    size: 10.5,
    font: fontBold,
    color: darkNavy,
  });
  currentY -= 12;

  page1.drawText("BEST RENT A CAR - JEDDAH, KSA", {
    x: marginX,
    y: currentY,
    size: 9.3,
    font: fontItalic,
    color: subtitleColor,
  });
  currentY -= 14;

  const bestBullets = [
    "Managed a 60-70 vehicle fleet across rental, workshop, and inspection status, maximizing availability.",
    "Maintained vehicle maintenance logs and coordinated servicing, repairs, and inspections with workshops.",
    "Scheduled 10-12 drivers across two shifts, dispatching tasks by location and urgency.",
    "Coordinated monthly chauffeur-driven vehicle contracts for corporate and individual clients.",
    "Handled full rental lifecycle — bookings, agreements, payments, inspections, damage reporting.",
    "Managed accident cases end-to-end: dispatched drivers for vehicle recovery, inspected damage, and coordinated workshop handoff.",
    "Verified corporate account status and coordinated with operations and accounts teams to release vehicles.",
  ];

  for (const b of bestBullets) {
    currentY = drawBulletItem(page1, b, marginX, currentY, contentWidth, fontRegular, 9.2, 12.8) - 3;
  }


  // --- PAGE 2 ---
  const page2 = pdfDoc.addPage([612, 792]);
  let p2Y = pageHeight - 44;

  // Job 3: Fayez Ali Rajab
  page2.drawText("Executive Assistant (2013 - 2014)", {
    x: marginX,
    y: p2Y,
    size: 10.5,
    font: fontBold,
    color: darkNavy,
  });
  p2Y -= 12;

  page2.drawText("FAYEZ ALI RAJAB TRADING EST- JEDDAH, KSA", {
    x: marginX,
    y: p2Y,
    size: 9.3,
    font: fontItalic,
    color: subtitleColor,
  });
  p2Y -= 14;

  const fayezBullets = [
    "Managed calendar, scheduling, and appointments, and coordinated travel arrangements including flight and hotel bookings.",
    "Prepared purchase orders and liaised with the sales team and other departments.",
    "Answered and transferred incoming calls to relevant departments, and managed correspondence including emails, letters, and memos, while maintaining confidentiality.",
    "Maintained physical and digital filing systems and served as first point of contact for visitors & clients",
  ];

  for (const b of fayezBullets) {
    p2Y = drawBulletItem(page2, b, marginX, p2Y, contentWidth, fontRegular, 9.2, 12.8) - 3;
  }

  p2Y -= 8;

  // Job 4: TeleMoney CSR
  page2.drawText("Customer Service Representative (2009 - 2012)", {
    x: marginX,
    y: p2Y,
    size: 10.5,
    font: fontBold,
    color: darkNavy,
  });
  p2Y -= 12;

  page2.drawText("ARAB NATIONAL BANK – TELEMONEY- JEDDAH, KSA", {
    x: marginX,
    y: p2Y,
    size: 9.3,
    font: fontItalic,
    color: subtitleColor,
  });
  p2Y -= 14;

  const tmCsrBullets = [
    "Handled 300-400 daily customer transactions in a high-volume branch remittance environment.",
    "Resolved customer inquiries — delays, blocks, refunds, amendments.",
    "Supported sales targets through proactive follow-up, contributing to improved customer retention.",
    "Trained incoming CSR staff and contributed to internal service procedure development.",
    "Conducted weekly competitor rate research to support pricing and service strategy.",
  ];

  for (const b of tmCsrBullets) {
    p2Y = drawBulletItem(page2, b, marginX, p2Y, contentWidth, fontRegular, 9.2, 12.8) - 3;
  }

  p2Y -= 8;

  // Job 5: TeleMoney Sales
  page2.drawText("Sales/Marketing Representative (2007 - 2009)", {
    x: marginX,
    y: p2Y,
    size: 10.5,
    font: fontBold,
    color: darkNavy,
  });
  p2Y -= 12;

  page2.drawText("ARAB NATIONAL BANK – TELEMONEY- JEDDAH, KSA", {
    x: marginX,
    y: p2Y,
    size: 9.3,
    font: fontItalic,
    color: subtitleColor,
  });
  p2Y -= 14;

  const tmSalesBullets = [
    "Promoted TeleMoney services to migrant worker communities at labor camps and company sites, driving new customer acquisition.",
    "Supported campaign execution under management direction, coordinating on-site outreach and follow-up with existing customers.",
    "Developed promotional materials and conducted competitor exchange rate analysis for the sales manager.",
  ];

  for (const b of tmSalesBullets) {
    p2Y = drawBulletItem(page2, b, marginX, p2Y, contentWidth, fontRegular, 9.2, 12.8) - 3;
  }

  p2Y -= 12;

  // --- Professional Certifications ---
  page2.drawText("Professional Certifications", {
    x: marginX,
    y: p2Y,
    size: 13.5,
    font: fontBold,
    color: headingColor,
  });
  p2Y -= 15;

  const certs = [
    "Supply Chain Management Specialization | Rutgers University (via Coursera) | 2026",
    "Microsoft Office Specialist: Excel Expert (Microsoft 365 Apps) | Microsoft | 2026",
    "Career Essentials in Administrative Assistance | Microsoft and LinkedIn | 2026",
    "Customer Service: Creating Customer Value | LinkedIn Learning | 2026",
  ];

  for (const c of certs) {
    p2Y = drawBulletItem(page2, c, marginX, p2Y, contentWidth, fontRegular, 9.2, 12.8) - 3;
  }

  p2Y -= 10;

  // --- Education ---
  page2.drawText("Education", {
    x: marginX,
    y: p2Y,
    size: 13.5,
    font: fontBold,
    color: headingColor,
  });
  p2Y -= 15;

  p2Y = drawBulletItem(page2, "Bachelor Of Commerce (B.COM) | GOVT City College, Chattogram | 2004", marginX, p2Y, contentWidth, fontRegular, 9.2, 12.8) - 10;

  // --- Core Skills ---
  page2.drawText("Core Skills", {
    x: marginX,
    y: p2Y,
    size: 13.5,
    font: fontBold,
    color: headingColor,
  });
  p2Y -= 15;

  const skillsText = "Customer Service Excellence | Interpersonal Skills | Time Management | Communication | Complaint & Dispute Resolution | Market Research | Temenos T24 (Core Banking) | Oracle Banking Systems | CRM Systems | SAP ERP| CarPro Rental ERP | Aconex (Document Control) | Spreadsheet Management (Excel/Google Sheets) | Data Analysis | Reporting | Fleet Coordination | Vehicle Assignment & Inspection | Inventory Control | Documentation | Invoicing & Reporting | KYC & AML";

  const skillLines = wrapText(skillsText, fontRegular, 9.2, contentWidth);
  for (const line of skillLines) {
    page2.drawText(line, {
      x: marginX,
      y: p2Y,
      size: 9.2,
      font: fontRegular,
      color: bodyColor,
    });
    p2Y -= 13.5;
  }

  p2Y -= 10;

  // --- Languages ---
  page2.drawText("Languages", {
    x: marginX,
    y: p2Y,
    size: 13.5,
    font: fontBold,
    color: headingColor,
  });
  p2Y -= 15;

  const col1X = marginX;
  const col2X = marginX + 260;

  // Row 1
  drawBulletItem(page2, "English – fluent (Read, Write, Speak)", col1X, p2Y, 240, fontRegular, 9.2, 13);
  drawBulletItem(page2, "Bengali – native/bilingual (Read, Write, Speak)", col2X, p2Y, 240, fontRegular, 9.2, 13);
  p2Y -= 15;

  // Row 2
  drawBulletItem(page2, "Arabic – professional (Read, Write, Speak)", col1X, p2Y, 240, fontRegular, 9.2, 13);
  drawBulletItem(page2, "Hindi/Urdu – fluent (Speak)", col2X, p2Y, 240, fontRegular, 9.2, 13);

  // Save to public directory
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), "public", "jobaedul-islam-jewel-cv.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("New CV generated successfully! File size:", pdfBytes.length);
}

generateCV().catch((err) => {
  console.error("Error generating CV:", err);
  process.exit(1);
});
