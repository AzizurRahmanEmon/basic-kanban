import { data } from '../../public/db/mock-data'
import Card from './components/Card'
import './page.css'


export default async function Home() {
  return (
    <main className='kanban-main'>
      {data?(<div className='kanban-container'>
        <div className='kanban-column'>
          <div className="kanban-column-heading-container">
          <div className="title-container">
          <div className="heading-shape red"></div>
            <h3>Incomplete</h3>
          </div>
            <h4 className="completed-task-number">0</h4>
          </div>
          <div className="kanban-main-card-container">
          {data.slice(0,10).map((item, index) => (
            <Card key={index} data={item}/>
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
          {data.slice(10,20).map((item, index) => (
            <Card key={index} data={item}/>
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
          {data.slice(20,30).map((item, index) => (
            <Card key={index} data={item}/>
            ))}  
          </div>
        </div>
        <div className='kanban-column'>
        <div className="kanban-column-heading-container">
            <h3>Under Review</h3>
            <h4 className="completed-task-number">0</h4>

          </div>
          <div className="kanban-main-card-container">
          {data.slice(30,40).map((item, index) => (
            <Card key={index} data={item}/>
          ))}  
          </div>
        </div>
        <div className='kanban-column'>
        <div className="kanban-column-heading-container">
            <h3>Completed</h3>
            <h4 className="completed-task-number">0</h4>

          </div>
          <div className="kanban-main-card-container">
          {data.slice(40,50).map((item, index) => (
            <Card key={index} data={item}/>
          ))}  
          </div>
        </div>
        <div className='kanban-column'>
        <div className="kanban-column-heading-container">
            <h3>OverDue</h3>
            <h4 className="completed-task-number">0</h4>
          </div>
          <div className="kanban-main-card-container">
          {data.slice(50,60).map((item, index) => (
            <Card key={index} data={item}/>
          ))}  
          </div>
        </div>
      </div>):(<div>
        No Data Found
      </div>)}
    </main>
  )
}
