
import './App.css'
import Acction from './component/Acction'
import AdminIndex from './component/AdminIndex'
import Calculation from './component/Calculation'
import { ColorBox } from './component/ColorBox'
import { FormatName } from './component/FormatName'
import './component/ListCourse'
import { ListCourse } from './component/ListCourse'
import { UserInfo } from './component/UserInfo'
import { UserLayout } from './component/UserLayout'

function App() {

  return (
    <div>
   <ListCourse></ListCourse>
   <Calculation></Calculation>
   <UserInfo></UserInfo>

    <div style={{display:"flex"}}>
    <ColorBox color='red'></ColorBox>
    <ColorBox color='blue'></ColorBox>
    <ColorBox color='green'></ColorBox>
    </div>

    <FormatName></FormatName>

    <div>
      <AdminIndex></AdminIndex>
    </div>

    <div>
      <UserLayout></UserLayout>
    </div>
    <div>
      <Acction></Acction>
    </div>

   </div>
  )
}

export default App
