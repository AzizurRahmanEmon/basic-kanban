import Card from './components/Card'
import './page.css'

export default function Home() {
  return (
    <main className='kanban-main'>
      <div className='kanban-container'>
        <div className='kanban-column'>
          <div className="kanban-column-heading-container">
          <div className="title-container">
          <div className="heading-shape red"></div>
            <h3>Incomplete</h3>
          </div>
            <h4 className="completed-task-number">0</h4>
          </div>
          <div className="kanban-main-card-container">
          {Array(10).fill(undefined).map((_, index) => (
            <Card key={index} />
          ))}  
          </div>
          
        </div>
        <div className='kanban-column'>
        <div className="kanban-column-heading-container">
          <div className="title-container">
          <div className="heading-shape blue"></div>
            <h3>To do</h3>
          </div>
            <h4 className="completed-task-number">0</h4>
          </div>
          <div className="kanban-main-card-container">
          {Array(10).fill(undefined).map((_, index) => (
            <Card key={index} />
          ))}  
          </div>
        </div>
        <div className='kanban-column'>
        <div className="kanban-column-heading-container">
          <div className="title-container">
            <div className="heading-shape yellow"></div>
            <h3>Doing</h3>
          </div>
            <h4 className="completed-task-number">0</h4>
          </div>
          

          <div className="kanban-main-card-container">
          {Array(10).fill(undefined).map((_, index) => (
            <Card key={index} />
          ))}  
          </div>
        </div>
        <div className='kanban-column'>
        <div className="kanban-column-heading-container">
            <h3>Under Review</h3>
            <h4 className="completed-task-number">0</h4>

          </div>
          <div className="kanban-main-card-container">
          {Array(10).fill(undefined).map((_, index) => (
            <Card key={index} />
          ))}  
          </div>
        </div>
        <div className='kanban-column'>
        <div className="kanban-column-heading-container">
            <h3>Completed</h3>
            <h4 className="completed-task-number">0</h4>

          </div>
          <div className="kanban-main-card-container">
          {Array(10).fill(undefined).map((_, index) => (
            <Card key={index} />
          ))}  
          </div>
        </div>
        <div className='kanban-column'>
        <div className="kanban-column-heading-container">
            <h3>OverDue</h3>
            <h4 className="completed-task-number">0</h4>
          </div>
          <div className="kanban-main-card-container">
          {Array(10).fill(undefined).map((_, index) => (
            <Card key={index} />
          ))}  
          </div>
        </div>
      </div>
    </main>
  )
}
