export const saveToLocalStorage = (data)=>{
  const saveData = JSON.parse(localStorage.getItem('books')) || [];
  const hasData = saveData.find(item=> item.bookId == data.bookId);
  if(hasData){
      alert('data ache');

  }else{
      saveData.push(data)
      localStorage.setItem("books",JSON.stringify(saveData));
  }
}
export const getDataFromLocalStore =()=>{
  const getDefaultData = JSON.parse(localStorage.getItem('books')) || [];
  return getDefaultData;
}