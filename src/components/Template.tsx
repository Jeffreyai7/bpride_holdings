import { ReactElement, ReactNode } from 'react'
import Header from './Header';
import Footer from './Footer';

interface  Template {
    footer?: ReactElement;
    header?: ReactElement;
    children: ReactNode;
}

const Template = ({children, footer, header}: Template) => {
  return (
    <div>
    {header ? header : <Header/> }  
    {children}
    {footer ? footer : <Footer/> }  
    </div>
  )
}

export default Template