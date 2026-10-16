// Section heading whose text rises out of a mask when it scrolls in
// (SiteEffects animates every .clip .ln outside the hero).
export default function Heading({ children, as: Tag = "h2", className = "sec-h" }) {
  return (
    <Tag className={className}>
      <span className="clip"><span className="ln">{children}</span></span>
    </Tag>
  );
}
