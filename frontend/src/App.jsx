import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/admin/Dashboard'
import MenuDetails from './pages/MenuDetails'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLayout from './layouts/AdminLayout'
import MenuItems from './pages/admin/MenuItems'
import AddMenuItem from './pages/admin/AddMenuItem'
import EditMenuItem from './pages/admin/EditMenuItem'
import Users from './pages/admin/Users'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/menu/:id" element={<MenuDetails />} />  

<Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute adminOnly>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/menu-items"
  element={
    <ProtectedRoute adminOnly>
      <AdminLayout>
        <MenuItems />
      </AdminLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/add-menu-item"
  element={
    <ProtectedRoute adminOnly>
      <AdminLayout>
        <AddMenuItem />
      </AdminLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/edit-menu-item/:id"
  element={
    <ProtectedRoute adminOnly>
      <AdminLayout>
        <EditMenuItem />
      </AdminLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/users"
  element={
    <ProtectedRoute adminOnly>
      <AdminLayout>
        <Users />
      </AdminLayout>
    </ProtectedRoute>
  }
/>

<Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App