

const Card = (props) => {
  return (
    <div><div className="card">
        <img src="https://images.unsplash.com/photo-1461696114087-397271a7aedc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWVzdGhldGljJTIwZGVza3RvcCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"></img>
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, excepturi.</p>
        <button>View profile</button>
      </div></div>
  )
}

export default Card;