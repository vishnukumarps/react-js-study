import { useState } from "react";

const Form1 = () => {
const [value, setValue] = useState<string>('');

const formHandler=(e:any)=>{
e.preventDefault();
console.log(e)
console.log(e.target[0].value)
var name=e.target[0].value;
console.log(e.target[1].value)
setValue(name)
}
return <div>
    <h1>{value}</h1>
    <br></br>
    <form onSubmit={formHandler}>
        <input type="text"  name="n1"/><br></br>
        <input type="text" name="n2"/><br></br>
        <button>Submit</button>
    </form>
</div>
}
export default Form1;