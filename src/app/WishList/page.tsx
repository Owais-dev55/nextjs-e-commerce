import Navbar from "@/Component/Navbar/Navbar";
import WishlistItems from "./WishList"

export default function WishlistPage() {
  return (
    <div>
        <Navbar />
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      <WishlistItems />
      
    </div>
    </div>
  )
}

