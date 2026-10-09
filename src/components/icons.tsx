import type { ServiceIcon } from "@/content/site";

type IconName = ServiceIcon | "whatsapp" | "phone" | "mail" | "pin" | "youtube" | "arrow" | "check" | "users" | "close";

const paths: Record<IconName, React.ReactNode> = {
  shield: <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.6 7.5 9.5 4.3-.9 7.5-4.9 7.5-9.5V6L12 3Zm-3 9 2 2 4-4" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  sparkle: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6" />,
  wifi: <path d="M2 8.5a15 15 0 0 1 20 0M5.5 12a10 10 0 0 1 13 0M9 15.5a5 5 0 0 1 6 0M12 19h.01" />,
  car: (
    <path d="M5 16h14M6.5 16v2m11-2v2M4 16v-4l2-5h12l2 5v4H4Zm0-4h16M7.5 13.5h.01m9 0h.01" />
  ),
  leaf: <path d="M5 19c8 0 14-6 14-14-8 0-14 4-14 12v2Zm0 0 7-7" />,
  whatsapp: (
    <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1l-4.7 1.4Zm5.6-12.3c-.3 1.5.4 3.3 1.8 4.7 1.4 1.4 3.2 2.1 4.7 1.8l.8-1.6-2-1-1 .8c-.9-.4-1.8-1.3-2.3-2.3l.8-1-1-2-1.8.6Z" />
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: <path d="M3 6h18v12H3V6Zm0 0 9 7 9-7" />,
  pin: <path d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  youtube: <path d="M2.5 12s0-4 .5-5.5c.3-.9 1-1.5 1.9-1.7C6.6 4.5 12 4.5 12 4.5s5.4 0 7.1.3c.9.2 1.6.8 1.9 1.7.5 1.5.5 5.5.5 5.5s0 4-.5 5.5c-.3.9-1 1.5-1.9 1.7-1.7.3-7.1.3-7.1.3s-5.4 0-7.1-.3c-.9-.2-1.6-.8-1.9-1.7C2.5 16 2.5 12 2.5 12Zm7.5 3 5-3-5-3v6Z" />,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  users: (
    <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19m16 0v-1.5a3.5 3.5 0 0 0-2.5-3.4M14.5 4.6a3.5 3.5 0 0 1 0 6.8M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
