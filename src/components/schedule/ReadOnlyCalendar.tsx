"use client";

import * as React from "react";
import { Calendar, CalendarDays, CalendarRange, MapPin } from "lucide-react";

type View = "Day" | "Week" | "Month";

type EventItem = {
  id: string;
  title: string;
  when: string; // e.g., "10:00—11:15"
  where: string; // e.g., "Room 204"
  date: string; // YYYY-MM-DD
};

const demoEvents: EventItem[] = [
  { id: "e1", title: "Algorithms", when: "10:00—11:15", where: "Room 204", date: "2025-11-10" },
  { id: "e2", title: "Office Hours", when: "13:00—14:00", where: "Faculty Lounge", date: "2025-11-10" },
  { id: "e3", title: "Ethics", when: "09:00—10:15", where: "Hall B", date: "2025-11-11" },
];

function classNames(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export function ReadOnlyCalendar() {
  const [view, setView] = React.useState<View>("Week");

  return (
    <div>
      <div className="mt-2 mb-4 inline-flex rounded-md border border-line/60 bg-white p-1 text-sm shadow-elevation-sm">
        <button onClick={() => setView("Day")} className={classNames("flex items-center gap-1 rounded-md px-3 py-1", view === "Day" ? "bg-primary/10 text-ink" : "text-muted hover:bg-primary/5")}>
          <Calendar className="h-4 w-4" /> Day
        </button>
        <button onClick={() => setView("Week")} className={classNames("flex items-center gap-1 rounded-md px-3 py-1", view === "Week" ? "bg-primary/10 text-ink" : "text-muted hover:bg-primary/5")}>
          <CalendarRange className="h-4 w-4" /> Week
        </button>
        <button onClick={() => setView("Month")} className={classNames("flex items-center gap-1 rounded-md px-3 py-1", view === "Month" ? "bg-primary/10 text-ink" : "text-muted hover:bg-primary/5")}>
          <CalendarDays className="h-4 w-4" /> Month
        </button>
      </div>

      {view === "Month" ? <MonthGrid events={demoEvents} /> : <ListView events={demoEvents} view={view} />}
    </div>
  );
}

function ListView({ events, view }: { events: EventItem[]; view: Exclude<View, "Month"> }) {
  // For demo, Day shows events for first date; Week shows all listed
  const dayDate = events[0]?.date;
  const list = view === "Day" ? events.filter((e) => e.date === dayDate) : events;
  return (
    <div className="mt-3 grid gap-2 md:grid-cols-2">
      {list.map((e) => (
        <div key={e.id} className="rounded-md border border-line/60 p-3">
          <div className="font-medium text-ink">{e.title}</div>
          <div className="text-xs text-muted">{e.date} • {e.when}</div>
          <div className="mt-1 inline-flex items-center gap-1 text-sm text-neutral-dark/80"><MapPin className="h-3.5 w-3.5" /> {e.where}</div>
        </div>
      ))}
    </div>
  );
}

function MonthGrid({ events }: { events: EventItem[] }) {
  // Draw a 5x7 grid for demo month; mark days that have events with dots
  const dates = generateMonthDays();
  const eventDates = new Set(events.map((e) => e.date));
  return (
    <div className="mt-3 grid grid-cols-7 gap-2 text-sm">
      {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
        <div key={d} className="text-center text-xs text-muted">{d}</div>
      ))}
      {dates.map((d) => (
        <div key={d.key} className={classNames("min-h-[72px] rounded-md border p-2", d.inMonth ? "border-line/60" : "border-line/30 bg-neutral-light/40")}> 
          <div className="text-xs text-muted">{d.day}</div>
          {eventDates.has(d.iso) && (
            <div className="mt-2 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function generateMonthDays() {
  // Demo: fixed 5-week grid for Nov 2025 starting on Monday (assumed)
  const daysInMonth = 30;
  const startOffset = 5; // number of leading days from previous month to align Mon-start
  const grid: Array<{ key: string; day: number; inMonth: boolean; iso: string }> = [];
  let dayCounter = 27; // previous month trailing start
  for (let i = 0; i < startOffset; i++) {
    const iso = `2025-10-${String(dayCounter++).padStart(2, "0")}`;
    grid.push({ key: `p-${i}`, day: dayCounter - 1, inMonth: false, iso });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const iso = `2025-11-${String(d).padStart(2, "0")}`;
    grid.push({ key: `m-${d}`, day: d, inMonth: true, iso });
  }
  while (grid.length % 7 !== 0) {
    const next = grid.length - (startOffset + daysInMonth) + 1;
    const iso = `2025-12-${String(next).padStart(2, "0")}`;
    grid.push({ key: `n-${next}`, day: next, inMonth: false, iso });
  }
  return grid;
}
