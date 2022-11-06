import todoItems from "../data/sampleData";


const ToDO = () => {
    return <ul>
       {todoItems.map(item=>(
        <li key={item.id}>{item.title}</li>
       ))}
    </ul>
}

export default ToDO;