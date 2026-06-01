import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/**
 * On-demand revalidation. After editing content in the mounted volume, trigger
 * a refresh without rebuilding the image:
 *
 *   curl -X POST "https://site/api/revalidate?path=/blog&token=$REVALIDATE_TOKEN"
 *
 * Omit `path` to refresh the whole site (revalidates "/" layout downward).
 */
export async function POST(request: Request) {
  const token = process.env.REVALIDATE_TOKEN;
  const { searchParams } = new URL(request.url);

  if (!token || searchParams.get("token") !== token) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const path = searchParams.get("path") ?? "/";
  revalidatePath(path, path === "/" ? "layout" : "page");

  return NextResponse.json({ revalidated: true, path, now: Date.now() });
}
