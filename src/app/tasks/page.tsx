import { getData } from "@/actions/toDoActions";
import { Todos } from "@/components/ToDos/ToDos";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}
