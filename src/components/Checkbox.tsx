type Props = {
  isChecked: boolean;
  onChange: any;
};

export const Checkbox = ({ isChecked, onChange }: Props) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      className="cursor-pointer"
    />
  );
};
