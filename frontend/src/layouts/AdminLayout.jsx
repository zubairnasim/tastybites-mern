import AdminSidebar from '../components/AdminSidebar'

function AdminLayout({ children }) {
  return (
    <main className="min-h-screen bg-yellow-300 text-black flex flex-col lg:flex-row">

      <AdminSidebar />

      <div className="flex-1 min-w-0">
        {children}
      </div>

    </main>
  )
}

export default AdminLayout