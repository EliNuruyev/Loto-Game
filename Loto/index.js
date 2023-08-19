var start=document.querySelector('.start')
var stop=document.querySelector('.stop')
var lottery=document.querySelector('.lottery')

var arr=[]

start.onclick=function(){
    var x=setInterval(function(){
        var das=Math.floor(Math.random()*(100-1)+1)

        if(arr.indexOf(das)==-1){
            var newDiv=document.createElement('div')
            newDiv.innerText=das
            newDiv.setAttribute('class','newDiv')
            arr.push(das)
            lottery.append(newDiv)

            
        }
        if(arr.lenghth==99){
            clearInterval(x)
        }
        stop.onclick=function(){
           var answer= confirm("Push ok for saving , reset for cancel")
            if(answer){
                clearInterval(x)
            }
            else{
                lottery.innerHTML=" "

                clearInterval(x)
            }
            
        }

    },1000)
    

}


















