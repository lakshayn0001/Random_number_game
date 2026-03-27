let randomNumber=()=>{
    return Math.floor((Math.random())*100)}
const resultValue = document.getElementById('result')
let actuall_number= document.querySelector('#actuall_number')
let Current_Guess = document.querySelector('#Current_Guess')
let lefts= document.getElementById('lefts')
const arr=[];
let chances=11;
const guess =0

console.log(randomNumber())
const  handleClicked=()=>{
    const generateNumber = randomNumber();
    const inputValue=document.querySelector('.input_field');
    if(inputValue.value === ''){
        alert("Please Enter the value")
        return
    }
    const check =isNaN(inputValue.value) ;
    if(!check && inputValue.value <=100 && inputValue.value>0){
        let s= inputValue.value;
        if(chances-1==1){
            alert("Guess Over")
            inputValue.disabled=true
            document.getElementById('btn').disabled=true
            lefts.innerHTML= "Zero Life Left"
            lefts.style.color='grey'
            console.log(arr)
            arr.forEach((e)=>{
                resultValue.innerHTML=`Result : ${e}`    
            })
        }
        else{
            let point =0;
            if(Number(inputValue.value) === Number(generateNumber)){
                point=1;
                Current_Guess.style.color='Green'
            }
            else{
                Current_Guess.style.color="Red"
            }
            arr.push({
                choosen_value: inputValue.value,
                correct_value: generateNumber,
                point: point
            })
            
            chances= chances-1
            console.log("changes left",chances)
            Current_Guess.innerHTML=`Your Guess is : ${inputValue.value}`
            actuall_number.innerHTML=`Computer Guess is: ${generateNumber}`
            lefts.innerHTML=`Chances left : ${chances-1}`;
            inputValue.value=' ';
            inputValue.focus()
        }
        
    }
    else{
        if(inputValue.value > 100){
            alert("Please use smaller value less than 100")
            inputValue.value =''
            return
        }
        if(inputValue.value <=0){
            alert("Please Enter the value greater than 0")
            inputValue.value=''
            return 
        }
        alert("Please Enter the valid Number")
        inputValue.value=''
    }
}

document.querySelector('#btn').addEventListener('click',()=>{
    handleClicked()
})

