export const formatDate = (dateString) => {
 
   const date = new Date(dateString);
   if (isNaN(date)) {
    return '';
}
const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };    
    //const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    
    const formattedDate = date.toLocaleDateString('bg-BG', dateOptions);
   // const formattedDate = date.toLocaleDateString('bg-BG', dateOptions);

    return formattedDate;
};
