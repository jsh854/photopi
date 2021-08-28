import './Bmc.css';
type coffeeType={
    Href:string,
    text?:string,
    fontColor?: string,
    buttonColor?:'#5F7FFF' | '#FFDD00' | '##40DCA5' 
}
const Bmc = ({Href,text='Buy Me a Coffee',fontColor='#ffffff',buttonColor='#FFDD00'}:coffeeType)=>{
    return (
        <div>
            <a
  className="buyButton"
  target="_blank"
  href={Href}
  style={{color:fontColor,background:buttonColor}}
>
  <img
    className="coffeeImage"
    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
    alt="Buy me a coffee"
  />
  <span className="coffeeButtonText">{text}</span>
</a>
        </div>
    )

}


export default Bmc;