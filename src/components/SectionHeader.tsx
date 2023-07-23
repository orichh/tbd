type SectionHeaderProps = {
  children: any;
};
export default function SectionHeader({ children }: SectionHeaderProps) {
  return <h2 className="font-itcWillow pt-10 text-3xl">{children}</h2>;
}
