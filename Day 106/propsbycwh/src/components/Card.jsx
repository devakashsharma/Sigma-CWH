import "./card.css"

const Card = ({ title, desc }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Card
