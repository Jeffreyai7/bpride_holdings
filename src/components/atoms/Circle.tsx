import { cn } from "../../utils";

interface Props {
    children?: React.ReactNode;
    className?: string;
}


const Circle = ({children, className}: Props) => {

return (
    <div className={cn("circle ", className)}>
        {children}
    </div>
)
}



export default Circle