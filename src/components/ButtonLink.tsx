import Link from "next/link";

type Props = {
  children: any;
  href: string;
  className?: string;
};

export default function ButtonLink({ children, href, className }: Props) {
  return (
    <a
      href={href}
      className={`${className} text-center transition-opacity duration-500 bg-green-500 p-5 text-white hover:opacity-80 cursor-pointer`}
    >
      {children}
    </a>
  );
}
