stock_status = prompt('Enter status? (1/0)')
red_div = document.getElementsByClassName('red_div')[0]
green_div = document.getElementsByClassName('green_div')[0]
if (stock_status ==='1'){
    red_div.style.display = 'none';
}
else{
    green_div.style.display = 'none';
}