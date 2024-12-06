
const TheTeam = () => {
  return (
    <div>
        <h1 className="text-responsive text-bpyellowdark underline decoration-4 decoration-bpyellowdark underline-offset-4 text-center">Meet the Team</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:flex-row justify-between items-center md:items-start py-8 w-[90%] mx-auto">
        <div className="card items-center">
            <div className="py-4">
            <div >
            <img className="w-80 rounded-lg" src="src\assets\images\ceo.png" alt="stan" />
            </div>
            <h1 className="text-bpyellowdark text-paragtextM md:text-paragtextD font-semibold pl-4">Stanley Ojika</h1>
            <span className="text-bpdarklight md:text-paragtextM text-[12px] pb-4 pl-4">CEO/Lead Consultant</span>
            </div>
        </div>
        <div className="card items-center">
            <div className="py-4">
            <div>
            <img className="w-80 rounded-lg" src="src\assets\images\jennifert.jpg" alt="jennifer" />
            </div>
            <h1 className="text-bpyellowdark text-paragtextM md:text-paragtextD font-semibold pl-4">Jennifer Obosi</h1>
            <span className="text-bpdarklight md:text-paragtextM text-[12px] pl-4">Accountant</span>
            </div>
        </div>
        <div className="card items-center ">
            <div className="py-4">
            <div>
            <img className="w-80 rounded-lg" src="src\assets\images\martha.jpg" alt="martha" />
            </div>
            <h1 className="text-bpyellowdark text-paragtextM md:text-paragtextD font-semibold pl-4">Martha Taiwo</h1>
            <span className="text-bpdarklight md:text-paragtextM text-[12px] pl-4">Operations Manager</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TheTeam