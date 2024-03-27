import { toast } from "react-toastify";
export const saveToLocalStorage = (data)=>{
  const saveData = JSON.parse(localStorage.getItem('books')) || [];
  const hasData = saveData.find(item=> item.bookId == data.bookId);
  if(hasData){
   toast.warning("You have alreay selected this book")
  }else{
      saveData.push(data)
      localStorage.setItem("books",JSON.stringify(saveData));
      toast.success("You selected this book to readlist successfully");
  }
}
export const getDataFromLocalStore =()=>{
  const getDefaultData = JSON.parse(localStorage.getItem('books')) || [];
  return getDefaultData;
}