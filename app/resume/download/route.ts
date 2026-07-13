import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const runtime = "nodejs";

export async function GET() {
  const resumePath = path.join(process.cwd(), "public", siteConfig.resume.fileName);
  const pdf = await readFile(resumePath);

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${siteConfig.resume.fileName}"`,
      "Content-Length": String(pdf.byteLength)
    }
  });
}
