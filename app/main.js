var name = prompt("اسم شما چیست ؟ / whats your anme?");
while (name ==""){
    var name = prompt("اسم شما چیست ؟ / whats your anme?");
}
    var socket = io.connect('http://localhost',{'forceNew' : true});
socket.on('messages', function(data){
    console.info(data);
    document.getElementById('messages').innerHTML = data.map(function(data){
        return `        
        <div class="media w-50 mb-3">
        <div class="media-body ml-3">
          <div class="bg-light rounded py-2 px-3 mb-2">
            <p class="text-small mb-0 text-muted" >${data.user}:${data.text}</p>
          </div>
          <p class="small text-muted">12:00 PM | Aug 13</p>
        </div>
      </div>
      <hr>`;
    }).join (' ');
});
function sendmessage(){
    var text = document.getElementById("message").value;
    if (text == ""){
        alert("حق ارسال پیام خالی ندارید");
    }else{ 
        socket.emit('new_message', {
        'user' : name,
        'text' : text   
    });}

    document.getElementById("message").value = " ";
    return false;

}

