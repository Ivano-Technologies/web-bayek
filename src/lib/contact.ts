import "server-only";

export const TOPICS = ["general", "integrated-services", "construction"] as const;
export type Topic = (typeof TOPICS)[number];

const RECIPIENTS: Record<Topic, string> = {
  general: "hi@bayek.org",
  "integrated-services": "services@bayek.org",
  construction: "construction@bayek.org",
};

export function isTopic(value: string): value is Topic {
  return (TOPICS as readonly string[]).includes(value);
}

export function recipientForTopic(topic: Topic): string {
  return RECIPIENTS[topic];
}

export function isEmail(value: string): boolean {
  if (value.length > 254 || /[\r\n]/.test(value)) {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function topicLabel(topic: Topic): string {
  if (topic === "integrated-services") return "Integrated Services";
  if (topic === "construction") return "Construction";
  return "General";
}
