

//KeyPad Jquery Plugin...
// used Document.ready to execute html before jQuery.
$(document.ready)(function($){
 $.fn.keypad=function(options){
   var options=$.extend({width:300,height:220},options);
   var ele=this;
   var map_text={};
   var target={
         init:function(){
           map_text={
             "1":". , ! 1","2":"a b c 2","3":"d e f 3",
             "4":"g h i 4","5":"j k l 5","6":"m n o 6",
             "7":"p q r s 7","8":"t u v 8","9":"w x y z 9",
             "10":"*","11":"0","12":"#"
           }
        },
        markup:function(){
          var input=document.createElement("INPUT");
          ele.append(input);
          ele.css({"width":options.width,"height":options.height,"display":"block"});
          for(var key in map_text){
            var button=document.createElement("BUTTON");
            button.setAttribute("data-value",key);
            button.innerHTML=map_text[key];
            $(ele).append(button);
          }
        }
   };
  target.init();    
  target.markup();
  $(ele).find("button").mouseup(function(event){
            var button_val=$(event.currentTarget).attr("data-value");
            $(ele).children("input").val(inputmessage($(ele).children('input').val(),button_val));
  });
  function inputmessage(text,button_pressed){

 

    if($("#time").length)
    {  
      var currenttime=+new Date();
      var diff=currenttime-$("#time").val();
      document.getElementById("time").value=currenttime;
    }
    else
    {
      var inp=document.createElement("INPUT");
      inp.setAttribute("type","hidden");
      inp.setAttribute("id","time");
      inp.setAttribute("value",+new Date());
      document.body.appendChild(inp);
    }
    var str=$(event.currentTarget).text();
    str=str.split(" ");
    var i=0;

    if(diff && diff>3000)
     return text+str[i];
   if(button_pressed!=0 && button_pressed<=9)
   {

     if(!diff||diff<1500)
     {
      if(text[text.length-1]==str[i])
      {
       text=text.split('');
       text.pop();
       var arr=text.join('');
       text=arr+str[i+1];  
     }
     else if(text[text.length-1]==str[i+1])
     {
       text=text.split('');
       text.pop();
       var arr=text.join('');
       text=arr+str[i+2];  
     }
     else if(text[text.length-1]==str[i+2]&&str.length==4)
     {
       text=text.split('');
       text.pop();
       var arr=text.join('');
       text= arr+str[i+3];  
     }
     else  if(text[text.length-1]==str[i+2]||text[text.length-1]==str[i+3])
     {
      if(text)
       text=text.split('');
       text.pop();
       var arr=text.join('');
       text=arr+str[i];
     }
     else
      text=text+str[i];
  }
  else
  {
    text=text+str[i];    
  }
}
else
  text=text+$(event.currentTarget).text();
return text;
}
return target;  
};


}(jQuery));
