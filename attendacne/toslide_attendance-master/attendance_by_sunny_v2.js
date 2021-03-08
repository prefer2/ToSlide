var current_sorting_order = "time";
function open_attendance()
{ 

  send_connect_msg();
}


function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
        * and you may want to customize it to your needs
        */
        var result = result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
       
        return result * sortOrder;
    }
}
function change_attendance_sorting()
{
	var x = document.getElementById("attendance_sorting").value;
    current_sorting_order = x;
  
    sorting_by_property(); 

}
function sorting_by_property()
{
  
  parent.connected_emails_v2 =JSON.parse(JSON.stringify(parent.connected_emails_v2));
  //console.log(parent.comment_collections);

  if(current_sorting_order =="time")
    parent.connected_emails_v2.sort(dynamicSort("send_time"));
  else if(current_sorting_order =="id")
    parent.connected_emails_v2.sort(dynamicSort("id"));


  //console.log(parent.connected_emails_v2);
  
  $("#attendance_side_table tr").remove();
  
  for(var i = 0; i < parent.connected_emails_v2.length; i++)
  {
    insert_new_attendance(parent.connected_emails_v2[i]);
  }
  
  
}
var current_selected_row= null;
var original_background_color = null;
function insert_new_attendance(data)
{
    
    
    var table = document.getElementById("attendance_side_table");
    var row = table.insertRow(-1);
	row.id = data.id;
	row.style.cursor="pointer";
	
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
	
	if(parent.kind_of_app == "online_exam" && false)
    {
        cell2.style.textAlign ="center";
        //console.log("sorting_details[keysSorted[i]].val().id",sorting_details[keysSorted[i]].val().id);
        if (active_windows_connect_status.hasOwnProperty(sorting_details[keysSorted[i]].val().id))
        {
            cell2.innerHTML = "o";
        }
        else
        {
            cell2.innerHTML = "x";
        }
        cell0.width = "10%";
        cell1.width = "40%";
        cell3.width = "40%";
    }
    else
    {
		
        //cell2.innerHTML = "";
		cell0.width = "10%";
		cell1.width = "40%";
		cell2.style.width = "10%";
        cell3.style.width = "40%";
    }
	
    // Add some text to the new cells:
	//cell0.innerHTML = table.rows.length;
	cell0.innerHTML = "<span class='text-overflow'>"+table.rows.length+"<span>";
    
    cell0.classList.add("num");
    cell0.classList.add("pe-2");
    cell0.style.textAlign ="center";
       
    //console.log("cell0",cell0);
	//cell1.innerHTML = data.id;
	cell1.innerHTML = "<span class='text-overflow'>"+data.id+"<span>";
	
	cell1.title =data.name;
	//cell1.style.overflow= "hidden";
    //cell1.classList.add("text-overflow");
			
	cell3.innerHTML = "<span class='text-overflow'>"+data.name+"<span>";
    //cell3.innerHTML = data.name;
    //cell3.classList.add("text-overflow");
        
	//display: block;
	//overflow: hidden;
	//white-space: nowrap;
	//text-overflow: ellipsis;  
    //cell1.style.overflow= "hidden";
	//cell3.style.overflow= "hidden";
	
        
        
              
    
        
        
	row.onclick = function(){ return function(){
		if(current_selected_row != null)
		{
			//console.log(original_background_color);
			current_selected_row.style.backgroundColor = original_background_color;
		}
		var id = this.cells[1].title;
		//alert("id:" + id);
		if(original_background_color ==null)
		{
			//alert(row.style.backgroundColor);
			//console.log("row.style.backgroundColor",row.style.backgroundColor);
			original_background_color =row.style.backgroundColor;
		}
			

		row.style.backgroundColor = "#f0effe";
		current_selected_row = row;
		

 	};}(row);
            
            
        
        
    
    
    
}

var keysSorted = [];
var sorting_details={};








function send_connect_msg()
{

	parent.connected_emails_v2 =[];
    $("#attendance_side_table tr").remove();
	//if(parent.kind_of_app=="online_lecture")
		//parent.send_online_connect_message();
	//else if(kind_of_app=="online_exam")
	try{
		parent.send_online_connect_message_for_exam();
	}
	catch(err)
	{

	}
	

  parent.hide_focus();
}
function open_send_dialog()
{
  if(current_selected_row==null)
  {
    alert("select a student");
    return;
  }
  
  $('#exampleModal').modal('show');
}
function send_msg_to_student()
{
	var content = document.getElementById("msg_content").value;
	if(content =="")
	{
		
		alert("no message to send");
		
		return;
	}

	$('#exampleModal').modal('hide');

	var name =  current_selected_row.cells[1].title;
	var id =  current_selected_row.id;
	parent.send_message_to_specific_student(id,name,content);
	

}