import Register from './Register';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "react-bootstrap";
import Employeelist from './manager/employee-list';
import Add from './manager/add-employee';
import AddEmployee from './manager/add-employee';
import AttendancePage from './employee/attendance';
import LeaveRequestPage from './employee/leave-request';
import AdminLogin from './admin/admin-login';
import CompanyList from './admin/company-list';

const router = createBrowserRouter([
  {
    path: "/Login",
    element: (
      
        <Login/>
      
    ),
  },
  {
    path: "/Register",
    element: (
      
        <Register/>
      
    ),
  },
  {
    path:"manager/employee-list",
    element:(
      <Container>
        <Employeelist/>
      </Container>
    ),
  },
  {
    path:"manager/add-employee",
    element:(
      <Container>
        <AddEmployee/>
      </Container>
    ),
  },
  {
    path:"employee/attendance",
    element:(
      <Container>
        <AttendancePage/>
      </Container>
    ),
  },
  {
    path:"employee/leave-request",
    element:(
      <Container>
        <LeaveRequestPage/>
      </Container>
    ),
  },
  {
    path:"admin/admin-login",
    element:(
      <Container>
        <AdminLogin/>
      </Container>
    ),
  },
  {
    path:"admin/company-list",
    element:(
      <Container>
        <CompanyList/>
      </Container>
    ),
  },
  
  
  
  
  
]);
function App(){
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;


