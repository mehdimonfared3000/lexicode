import { Input } from "../ui/input";

export function FuzzySearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return <Input type="search" value={value} onChange={onChange} />;
}
