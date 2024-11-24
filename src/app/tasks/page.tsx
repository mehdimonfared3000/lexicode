import { getData } from "@/actions/toDoActions";
import { Todos } from "@/components/ToDos/ToDos";

export default async function Page() {
  const data = await getData();
  return <Todos todos={data} />;
}
