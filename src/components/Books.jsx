import { useLoaderData } from "react-router-dom";
import Book from "./Book";

export default function Books() {
  const books = useLoaderData();
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-5">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
    <div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Books</h2>
		</div>
		<div className="grid justify-center grid-cols-1 lg:gap-6 gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{
        books.map(book =><Book key={book.bookId} book={book}></Book>)
      }
			
		</div>
	</div>
</section>
  )
}
