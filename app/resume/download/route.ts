import { NextResponse } from "next/server";
import { profile } from "@/lib/data";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    "Abdulmajeed Alqithmi",
    "Business Analyst | Systems Analyst",
    "",
    profile.summary,
    "",
    "Education",
    "Bachelor's degree in Computing with Business (Information Technology)",
    "",
    "Core Skills",
    "Business Analysis, Systems Analysis, Requirements Gathering, Process Mapping, Documentation, SQL, Power BI, Excel, Java, Spring Boot, REST APIs"
  ];

  const pdf = createSimplePdf(lines);

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Abdulmajeed-Alqithmi-Resume.pdf"'
    }
  });
}

function createSimplePdf(lines: string[]) {
  const escapedLines = lines.map((line) => line.replace(/[()\\]/g, "\\$&"));
  const textCommands = escapedLines
    .map((line, index) => `BT /F1 11 Tf 56 ${742 - index * 22} Td (${line}) Tj ET`)
    .join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${textCommands.length} >>\nstream\n${textCommands}\nendstream`
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return pdf;
}
