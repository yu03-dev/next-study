import { Links } from "./Links";
import Title from "./Title";

export function Main(props: { page: string }) {
  return (
    <>
      <Title page={props.page} />
      <Links />
    </>
  );
}
