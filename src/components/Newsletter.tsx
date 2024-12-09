import Button from "./atoms/Button"
import Input from "./atoms/Input"

const Newsletter = () => {
  return (
    <div className="bg-bpyellowdark py-8">
      <h1 className="text-responsive text-center font-semibold">Subscribe to our Newsletter</h1>
      <div className="w-[70%] mx-auto ">
        <Input inputClassName="rounded-[20px] p-4" className="h-[28px] md:h-[46px] rounded-[20px] bg-white mt-6" placeholder="Full Name" name="fullname"/>
        <Input inputClassName="rounded-[20px] p-4" className="h-[28px] md:h-[46px] rounded-[20px] bg-white mt-6 " name="Email" placeholder="Email"/>
        <p className="text-paragtextM text-bpblack mt-6 font-medium ">By clicking Subscribe, I agree that Black Pride Holdings may use my contact details to send me communications and I consent to the Terms as provided in the Privacy Policy and Data Collection Clause.</p>
        <Button className="bg-black text-bpyellowdark md:h-[50px] h-[32px] px-6 py-1 text-[14px] md:text-[24px] my-6 font-medium">Subscribe</Button>
      </div>
    </div>
  )
}

export default Newsletter