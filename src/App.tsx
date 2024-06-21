import {GridThemeProvider} from '@acrool/react-grid';
import gridConfig from './config/grid';
import '@acrool/react-grid/dist/index.css';


import Heroes from './views/Snippets/Heroes';
import Features from './views/Snippets/Features';
import StickyFooterNavbar from './views/Snippets/Sticky-footer-navbar';
import SignIn from './views/Snippets/Sign-in';
import Sidebars from './views/Snippets/Sidebars';
import Product from './views/Snippets/Product';
import Pricing from './views/Snippets/Pricing';
import Headers from './views/Snippets/Headers';
import Dashboard from './views/Snippets/Dashboard';
import Checkout from './views/Snippets/Checkout';
import Carousel from './views/Snippets/Carousel';
import Blog from './views/Snippets/Blog';
import Album from './views/Snippets/Album';
import StickyFooter from './views/Snippets/Sticky-footer';
import Jumbotron from './views/Snippets/Jumbotron';
import GridExamples from './views/Snippets/Grid-examples';




function App() {

  return (
    <GridThemeProvider gridTheme={gridConfig}>
        <Dashboard/>
    </GridThemeProvider>
  );
}

export default App
