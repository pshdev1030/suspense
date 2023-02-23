import Container from "../../components/Container";
import Code from "../../components/Code";
import Header from "../../components/Header";
import { control, create, observe } from "../../examples/createWakeable";

export default function CreateWakeableRoute() {
  return (
    <Container>
      <Header title="createWakeable" />
      <p>
        "Wakeables" are a lower level concept that the caches in this package
        are built on top of.
      </p>
      <Code code={create} />
      <p>Like promises, wakeables can be observed:</p>
      <Code code={observe} />
      <p>
        Unlike promises, wakables can also be resolved or rejected{" "}
        <em>by external code</em> (e.g. by a cache):
      </p>
      <Code code={control} />
      <p>
        Although this package exports the <code>createWakeable</code> API, you
        probably won't need to use it directly in most cases.
      </p>
    </Container>
  );
}