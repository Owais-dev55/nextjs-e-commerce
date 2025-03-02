"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { auth, db } from "@/firebase/config"
import { collection, addDoc, query, where, orderBy, getDocs, Timestamp } from "firebase/firestore"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface Comment {
  id: string
  user: {
    _id: string
    displayName: string
    photoURL: string | null
  }
  content: string
  rating: number 
  createdAt: Date
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

const formatDate = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days} ${days === 1 ? "day" : "days"} ago`
  if (hours > 0) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`
  if (minutes > 0) return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`
  return "Just now"
}

const ReviewSection = ({ productId }: { productId: string }) => {
  const user = auth.currentUser
  const router = useRouter()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [rating, setRating] = useState<number>(0)
  const [hoveredRating, setHoveredRating] = useState<number>(0)

  useEffect(() => {
    if (!productId) return

    const fetchComments = async () => {
      const q = query(collection(db, "comments"), where("productId", "==", productId), orderBy("createdAt", "desc"))
      const querySnapshot = await getDocs(q)
      const fetchedComments: Comment[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        user: doc.data().user,
        content: doc.data().content,
        rating: doc.data().rating,
        createdAt: doc.data().createdAt.toDate(),
      }))
      setComments(fetchedComments)
    }
    fetchComments()
  }, [productId])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !newComment.trim() || rating === 0) return

    const commentData = {
      productId,
      user: {
        _id: user.uid,
        displayName: user.displayName || "Anonymous",
        photoURL: user.photoURL,
      },
      content: newComment,
      rating: rating, 
      createdAt: Timestamp.now(),
    }

    const docRef = await addDoc(collection(db, "comments"), commentData)
    setComments((prev) => [
      { id: docRef.id, ...commentData, createdAt: commentData.createdAt.toDate() as Date },
      ...prev,
    ])
    setNewComment("")
    setRating(0) 
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Customer Reviews </h2>
      {user ? (
        <div className="bg-[#FAFAFA] rounded-lg shadow-sm border p-6 mb-8 ">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-1 text-gray-700">
                Your Review
              </label>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
                id="content"
                placeholder="Share your thoughts about this product..."
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-[#1C4B6E] focus:border-[#1C4B6E]"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="rating" className="block text-sm font-medium mb-1 text-gray-700">
                Rating
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={star <= (hoveredRating || rating) ? "#FFB800" : "none"}
                      stroke={star <= (hoveredRating || rating) ? "#FFB800" : "#D1D5DB"}
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100  flex items-center justify-center overflow-hidden ">
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL || "/placeholder.svg"}
                      alt={user.displayName || "user"}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-blue-600 text-sm font-medium">{getInitials(user.displayName || "A")}</span>
                  )}
                </div>
                <span className="text-sm text-[#4A4A4A]">Posting as {user.displayName || "Anonymous"}</span>
              </div>
              <button
                type="submit"
                disabled={!newComment.trim() || rating === 0}
                className="bg-[#0E3A5D] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 
              focus:ring-[#1C4B6E] focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post comments
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8 text-center">
          <p className="text-[#4A4A4A] mb-4">Please sign in to leave a review</p>
          <button
            onClick={() => router.push("/signin")}
            className="bg-[#0E3A5D] text-white px-4 py-2 rounded-md hover:bg-[#1C4B6E] focus:outline-none focus:ring-2 focus:ring-[#1C4B6E] focus:ring-offset-2 transition-colors"
          >
            Sign In
          </button>
        </div>
      )}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-center text-[#4A4A4A] py-8">Be the first to leave the comment</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                {comment.user.photoURL ? (
                  <Image
                    src={comment.user.photoURL || "/placeholder.svg"}
                    alt={comment.user.displayName || "user"}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-blue-600 font-medium">{getInitials(comment.user.displayName)}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900">{comment.user.displayName}</h3>
                  <div className="flex items-center gap-1 ml-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={star <= (comment.rating || 0) ? "#FFB800" : "none"}
                        stroke={star <= (comment.rating || 0) ? "#FFB800" : "#D1D5DB"}
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{formatDate(comment.createdAt)}</span>
                </div>
                <p className="text-gray-600 text-sm whitespace-pre-wrap break-words">{comment.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ReviewSection

