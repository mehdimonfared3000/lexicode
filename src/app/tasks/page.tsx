import { getData } from "@/actions/toDoActions";
import { Todos } from "@/components/ToDos/ToDos";

// export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await getData();
  return <Todos todos={data} />;
}
