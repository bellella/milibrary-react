import { MiProvider } from "@milibrary/mi-style";
import Routes from "Routes";
import { defaultTheme } from './theme';
function App() {

  return (
    <>
      <MiProvider theme={defaultTheme}>
        <Routes />
      </MiProvider>
    </>
  );
}

export default App;
