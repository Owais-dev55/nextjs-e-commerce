import Link from "next/link"

const SideBar = () => {
  return (
    <div className="bg-gray-800 h-screen text-white w-72 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link href="/dashboard" className="text-white flex items-center space-x-2 px-4">
        <i className="fas fa-shopping-bag text-2xl"></i>
        <span className="text-2xl font-extrabold">Admin</span>
      </Link>
      <nav>
        <Link
          href="/dashboard"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <i className="fas fa-home mr-2"></i> Dashboard
        </Link>
        <Link href="/admin/dashboard/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
  <i className="fas fa-box mr-2"></i> Products
</Link>
        <Link
          href="/admin/dashboard/orders"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <i className="fas fa-chart-bar mr-2"></i> Orders
        </Link>
        <Link
          href="/dashboard/customers"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <i className="fas fa-users mr-2"></i> Customers
        </Link>
        <Link
          href="/admin/dashboard/users"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <i className="fas fa-users mr-2"></i> Users
        </Link>
      </nav>
    </div>
  )
}

export default SideBar

