import { Initial } from "./components/Initial";
import { OurCoffes } from "./components/Initial/OurCoffes";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Initial />
      <OurCoffes />
    </HomeContainer>
  );
}
