var list = document.getElementById("list")


 firebase.database().ref("todos").on("child_added",function(data){

    var todoItem = document.getElementById("todo-item")  
    var li = document.createElement("li")   
    var textli = document.createTextNode(data.val().value)
    li.appendChild(textli)
    li.setAttribute("class","li-item")
   
   //edit Button

    var editBtn = document.createElement("button")
    var editBtnText = document.createTextNode("Edit")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("id",data.val().key)
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)

    //delete Button
    var deleteBtn = document.createElement("button")
var deleteBtnText = document.createTextNode("Delete")
    deleteBtn.setAttribute("onclick","deleteItem(this)")
    deleteBtn.setAttribute("class","btn")
    deleteBtn.setAttribute("id",data.val().key)
    deleteBtn.appendChild(deleteBtnText)
    li.appendChild(deleteBtn)


      
    list.appendChild(li)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
   
    todoItem.value = " "
    console.log(li)
     console.log(data.val().value)
 })
 function addTodo(){
    var todoItem = document.getElementById("todo-item")  
      var li = document.createElement("li")   
    
     var key = firebase.database().ref('todos').push().key
     var todos = {
         value: todoItem.value,
         key: key
    }

     firebase.database().ref("todos").child(key).set(todos)
 console.log(todoItem.value)
 console.log(key)
 }



// function addTodo(){



// var todoItem = document.getElementById("todo-item")  
//      var li = document.createElement("li")   
//      li.setAttribute("class","li-item")
    
//     //edit Button

//      var editBtn = document.createElement("button")
//      var editBtnText = document.createTextNode("Edit")
//      editBtn.setAttribute("onclick", "editItem(this)")
//      editBtn.setAttribute("class","btn")
//      editBtn.appendChild(editBtnText)
//      li.appendChild(editBtn)

//      //delete Button
//      var deleteBtn = document.createElement("button")
// var deleteBtnText = document.createTextNode("Delete")
//      deleteBtn.setAttribute("onclick","deleteItem(this)")
//      deleteBtn.setAttribute("class","btn")
//      deleteBtn.appendChild(deleteBtnText)
//      li.appendChild(deleteBtn)


//      var textli = document.createTextNode(todoItem.value)
//      li.appendChild(textli)  
//      list.appendChild(li)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    
//      todoItem.value = " "
//      console.log(li)

// }

// //delete Item
 function deleteItem(e){
     firebase.database().ref("todos").child(e.id).remove()
     console.log(e.id)
  e.parentNode.remove()
 }


 // delete All
  function deleteAll(){
     list.innerHTML = ""
  }


// edit Item
  function editItem(e){
      console.log(e.id)
     var editValue = prompt("Enter New Value",e.parentNode.lastChild.nodeValue)
     var editTodo = {
         value: editValue,
         key: e.id
     }
     firebase.database().ref("todos").child(e.id).set(editTodo)
 e.parentNode.lastChild.nodeValue = editValue

 }

 