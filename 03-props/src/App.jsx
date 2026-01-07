import Card from "./components/card.jsx"

const App = () => {
  return (
    <div className="parent">
      
      <Card user="aman" age={24} />
      <Card user="krishu" age={18} />
      <Card user="khush" age={24} />
    </div>
  )
}

export default App