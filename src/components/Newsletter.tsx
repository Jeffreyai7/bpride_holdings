import Button from "./atoms/Button"
import Input from "./atoms/Input"

const Newsletter = () => {
  return (
    <div>
        <h1>Subscribe to our Newsletter</h1>
        <Input></Input>
        <Input></Input>
        <div><span>By clicking Subscribe, I agree that Heirs Holdings may use my contact details to send me communications and I consent to the Terms as provided in the Privacy Policy and Data Collection Clause.</span></div>
        <Button>Subscribe</Button>
    </div>
  )
}

export default Newsletter