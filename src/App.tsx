import {GridThemeProvider} from 'bear-react-grid';
import gridConfig from './config/grid';
import Pricing from "@/views/Snippets/Pricing";
// import Headers from './views/Snippets/Headers';
// import Heroes from './views/Snippets/Heroes';
// import Features from './views/Snippets/Features';
// import Sidebars from './views/Snippets/Sidebars';
// import Album from './views/Snippets/Album';
import Pricingg from './views/Snippets/Album';


function App() {

  return (
    <GridThemeProvider gridTheme={gridConfig}>
        <Pricingg/>
    </GridThemeProvider>
);
}

export default App
