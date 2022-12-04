function getPrevMonth(date: Date) {

  return new Date(date.getFullYear(), date.getMonth(), 0);

}

function getCurrentMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function numberWithCommas(x:number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { getPrevMonth, getCurrentMonth, numberWithCommas }