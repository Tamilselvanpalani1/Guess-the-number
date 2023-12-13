    //Random number
    var num = Math.random()
    var randomvalue = Math.floor(num*10+1)   //To get random number froom 1 to 10
    console.log(randomvalue)

    //selecting actualScore
    var actualScore = document.getElementById("actualScore")
    var content = Number(actualScore.textContent)
    console.log(typeof content)

    //selecting the p msg
    var msg = document.getElementById('msg')

    function checking()
    {
        //getting the box value
        var box = document.getElementById('box')
        var boxValue = Number(box.value)
        console.log(boxValue)

        if(boxValue == randomvalue){
            MESSAGE1 = "You are right"  //Showing the message
            msg.textContent = MESSAGE1
            alert("You WON!... 🎊🎉")
        }
        else{
            MESSAGE2 = "You are Wrong"
            msg.textContent = MESSAGE2
            content = content - 1
            actualScore.textContent = content  //Update the text content of actualScore
        }

    }