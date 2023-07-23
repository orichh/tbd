type CustomAnchorTagProps = {
  children: any;
  href: string;
};
export default function CustomAnchorTag({
  children,
  href
}: CustomAnchorTagProps) {
  return (
    <a
      href={href}
      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
    >
      {children}
    </a>
  );
}
