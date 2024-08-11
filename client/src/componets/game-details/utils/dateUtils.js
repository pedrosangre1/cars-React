export const formatDate = (dateString) => {
 
   const date = new Date(dateString);
   if (isNaN(date)) {
    return '';
}
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    
    const formattedDate = date.toLocaleDateString('bg-BG', dateOptions);

    return formattedDate;
};
