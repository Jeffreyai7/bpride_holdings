import { cn } from "../../utils";

interface Props {
    className?: string;
}

const Underline = ({className }: Props) => {
  return (
    <div className={cn("border-[4px] border-bpyellowdark", className)}></div>
  )
}

export default Underline