type ParagraphProps = {
  children: any;
  className?: string;
};
export default function Paragraph({
  children,
  className = ""
}: ParagraphProps) {
  return <p className={`pt-5 ${className}`}>{children}</p>;
}
