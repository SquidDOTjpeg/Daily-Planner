const btn1 = $("#save-1")
const btn2 = $("#save-2")
const btn3 = $("#save-3")
const btn4 = $("#save-4")
const btn5 = $("#save-5")
const btn6 = $("#save-6")
const btn7 = $("#save-7")
const btn8 = $("#save-8")
const btn9 = $("#save-9")

const button = $(".button")

var text1 = $("#1")

function populateSchedule(){
    var task = localStorage.getItem("save-1")
    $(text1).val(task)
    
}

$(btn1).on("click", function(event){
    event.preventDefault()
    localStorage.setItem($(this).val(), text1.val())
    
    console.log(task)
    console.log($(text1).innerhtml = task)
})

populateSchedule()