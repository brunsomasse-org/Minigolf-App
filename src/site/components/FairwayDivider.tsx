interface Props {
  flip?: boolean;
  className?: string;
}

/**
 * Signature visual element: a checkered "fairway" edge echoing the UMB crest,
 * used to break up sections the way a putting green's collar breaks from the rough.
 */
export default function FairwayDivider({ flip = false, className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 1200 90"
      preserveAspectRatio="none"
      className={`fairway-divider ${flip ? 'flip' : ''} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="fairwayCheck" width="30" height="30" patternUnits="userSpaceOnUse">
          <rect width="30" height="30" fill="var(--green-light)" />
          <rect width="15" height="15" fill="var(--white)" />
          <rect x="15" y="15" width="15" height="15" fill="var(--white)" />
        </pattern>
        <clipPath id="fairwayClip">
          <path d="M0,32 C180,70 340,4 600,34 C860,64 1020,8 1200,30 L1200,90 L0,90 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#fairwayClip)">
        <rect width="1200" height="90" fill="url(#fairwayCheck)" />
      </g>
      <path
        d="M0,32 C180,70 340,4 600,34 C860,64 1020,8 1200,30"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="4"
      />
    </svg>
  );
}
