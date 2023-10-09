import { useNewAppContext } from "@/util/context";

export default function Navigation() {
  const { setIsEditing, date, setDate } = useNewAppContext();

  return (
    <div className="flex flex-row w-full space-x-20 justify-center pt-8">
      <button
        className=""
        onClick={() => {
          const newDate: Date = new Date();
          newDate.setDate(date.getDate() - 1);

          setIsEditing(false);
          setDate(newDate);
        }}
      >
        previous
      </button>
      <h1 className="">{date.toDateString()}</h1>
      <button
        className=""
        onClick={() => {
          const newDate: Date = new Date();
          newDate.setDate(date.getDate() + 1);

          setIsEditing(false);
          setDate(newDate);
        }}
      >
        next
      </button>
    </div>
  );
}
