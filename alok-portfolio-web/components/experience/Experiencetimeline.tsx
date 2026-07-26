import { experience } from "@/types/experience";
import ExperienceItem from "./Experienceitem ";

interface ExperienceTimelineProps {
  experiences: experience[];
}

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((item, i) => (
        <ExperienceItem
          key={item.id}
          item={item}
          isLast={i === experiences.length - 1}
        />
      ))}
    </div>
  );
}
