import { ReactElement} from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

interface  Template {
    footer?: ReactElement;
    header?: ReactElement;
}

const Template = ({footer, header}: Template) => {
  return (
    <div>
    {header ? header : <Header/> }  
    <Outlet/>
    {footer ? footer : <Footer/> }  
    </div>
  )
}

export default Template