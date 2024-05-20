import {GridThemeProvider} from 'bear-react-grid';
import gridConfig from './config/grid';
// import Headers from './views/Snippets/Headers';
// import Heroes from './views/Snippets/Heroes';
// import Features from './views/Snippets/Features';
import Sidebars from './views/Snippets/Sidebars';

function App() {

  return (
    <GridThemeProvider gridTheme={gridConfig}>
        <Sidebars/>
    </GridThemeProvider>
);
}

export default App
