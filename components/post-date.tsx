import { format, parseISO } from "date-fns";

export function PostDate({ date }: { date: string }) {
  const parsed = parseISO(date);
  return (
    <time dateTime={date} className="text-sm text-muted">
      {format(parsed, "LLLL d, yyyy")}
    </time>
  );
}
