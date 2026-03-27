const randomNumber=Math.floor((Math.random())*100)
const resultValue = document.getElementById('result')
const arr=[];
let chances=10;
const guess =0

const  handleClicked=()=>{
    const inputValue=document.querySelector('.input_field');
    if(inputValue.value === ''){
        alert("Please Enter the value")
        return
    }
    const check =isNaN(inputValue.value) ;
    if(!check && inputValue.value <=100 && inputValue.value>0){
        let s= inputValue.value;
        if(chances==0){
            alert("Guess Over")
            console.log(arr)
            arr.forEach((e)=>{
                resultValue.innerHTML=e    
            })
        }
        else{
            const point =0;
            if(inputValue.value === randomNumber){
                point=1;
            }
            arr.push({
                choosen_value: inputValue.value,
                correct_value: randomNumber,
                point: point
            })
            chances= chances-1
            console.log(chances)
            inputValue.value=' ';
        }
        
    }
    else{
        if(inputValue.value > 100){
            alert("Please use smaller value less than 100")
            return
        }
        if(inputValue.value <=0){
            alert("Please Enter the value greater than 0")
            return 
        }
        alert("Please Enter the valid Number")
    }
}

document.querySelector('#btn').addEventListener('click',()=>{
    handleClicked()
})