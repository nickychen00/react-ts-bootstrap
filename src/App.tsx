import {GridThemeProvider} from 'bear-react-grid';
import gridConfig from './config/grid';

// import Headers from './views/Snippets/Headers';
// import Heroes from './views/Snippets/Heroes';
// import Features from './views/Snippets/Features';
// import Sidebars from './views/Snippets/Sidebars';
// import Album from './views/Snippets/Album';
// import Pricing from './views/Snippets/Pricing';
// import Checkout from './views/Snippets/Checkout';
// import Product from './views/Snippets/Product';
import Carousel from './views/Snippets/Carousel';

function App() {

  return (
    <GridThemeProvider gridTheme={gridConfig}>
        <Carousel/>
    </GridThemeProvider>
);
}

export default App
