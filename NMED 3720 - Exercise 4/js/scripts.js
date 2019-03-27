window.onload = init; 

function init(){

  var xhr = new XMLHttpRequest(); 

  xhr.open("GET", "https://picsum.photos/list", true); 

  xhr.send(null); 

  xhr.onload = function(){

    if(xhr.status == 200){

      var picsum = JSON.parse(xhr.responseText)
      console.log(picsum); 
      
      
      /* REFERENCE: Alex (another student in the class) helped me out the most with this part to properly target specific photos. At first, I had this in an array with a direct URL to the post but it wasn't properly
         calling the API */ 
      var stillImage = new Array(); 
       stillImage[0] = {url:"https://picsum.photos/800/600?image=" + picsum[65].id,  author: picsum[65].author, author_url:picsum[65].author_url, post_url: '<a class="link" href="' + picsum [65].post_url+'" target="_blank"> 📷source</a>'}; 
       stillImage[1] = {url:"https://picsum.photos/800/600?image=" + picsum[416].id,  author: picsum[412].author, author_url:picsum[414].author_url, post_url: '<a class="link" href="' + picsum [414].post_url+'" target="_blank">📷source</a>'}; 
       stillImage[2] = {url:"https://picsum.photos/800/600?image=" + picsum[821].id,  author: picsum[821].author, author_url:picsum[821].author_url, post_url: '<a class="link" href="' + picsum [821].post_url+'"target="_blank">📷source</a>'}; 
       stillImage[3] = {url:"https://picsum.photos/800/600?image=" + picsum[106].id,  author: picsum[412].author, author_url:picsum[414].author_url, post_url: '<a class="link" href="' + picsum [414].post_url+'"target="_blank">📷source</a>'}; 
       stillImage[4] = {url:"https://picsum.photos/800/600?image=" + picsum[715].id,  author: picsum[715].author, author_url:picsum[715].author_url, post_url: '<a class="link" href="' + picsum [715].post_url+'"target="_blank">📷source</a>'}; 
       stillImage[5] = {url:"https://picsum.photos/800/600?image=" + picsum[740].id,  author: picsum[740].author, author_url:picsum[740].author_url, post_url: '<a class="link" href="' + picsum [740].post_url+'"target="_blank">📷source</a>'}; 
       stillImage[6] = {url:"https://picsum.photos/800/600?image=" + picsum[769].id,  author: picsum[769].author, author_url:picsum[769].author_url, post_url: '<a class="link" href="' + picsum [769].post_url+'"target="_blank">📷source</a>'}; 
       stillImage[7] = {url:"https://picsum.photos/800/600?image=" + picsum[661].id,  author: picsum[661].author, author_url:picsum[661].author_url, post_url: '<a class="link" href="' + picsum [661].post_url+'"target="_blank">📷source</a>'}; 
       stillImage[8] = {url:"https://picsum.photos/800/600?image=" + picsum[660].id,  author: picsum[660].author, author_url:picsum[660].author_url, post_url: '<a class="link" href="' + picsum [660].post_url+'"target="_blank">📷source</a>'}; 
       stillImage[9] = {url:"https://picsum.photos/800/600?image=" + picsum[817].id,  author: picsum[817].author, author_url:picsum[817].author_url, post_url: '<a class="link"href="' + picsum [817].post_url+'"target="_blank">📷source</a>'}; 


function displaySImages() {      

    for (var i = 0; i < stillImage.length; i++) {
      var image = new Image(); 
      image.src = stillImage[i].url; 
      image.style.margin = '7px';
      
      var div = document.createElement('div');
      var author = document.createElement('p');
      var author_url = document.createElement('p');
      var post_url = document.createElement('p');

      author.innerHTML = stillImage[i].author;
      author_url.innerHTML = stillImage[i].author_url;
      post_url.innerHTML = stillImage[i].post_url;


      div.appendChild(image);
      div.appendChild(author);
      div.appendChild(author_url);
      div.appendChild(post_url);
      


      document.getElementById("Simages").appendChild(div); 


    }
};

$(function() {
    displaySImages();   
});
 
 } 
} 
}  

/* Initially my intention was to contrast the idea of Stillness & Motion with Buildings and a Busy Commute, respectively. At first I had this set up with two different 
divs so that the moving images had a mouse hover and margin on all sides to offset it and give the illustion it was moving in the CSS.*/ 

// var movingImage = new Array();
//    //Motion (Busy commute)
//    movingImage[6] = "https://images.unsplash.com/photo-1436390195361-c3c86efcf48b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"; 
//    movingImage[7] = "https://images.unsplash.com/photo-1437623889155-075d40e2e59f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
//    movingImage[8] = "https://images.unsplash.com/photo-1433650552684-d4004a945d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";
//    movingImage[9] = "https://images.unsplash.com/photo-1420819453217-57b6badd9e19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80";
//    movingImage[10] = "https://images.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80";
//    movingImage[11] = "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80";

// function displayMImages() {
//     var j = 6,
//         len = movingImage.length;        
//     for (j=6; j < movingImage.length; j++) {
        
//         var img = new Image();
//         img.src = movingImage[j];
//         img.style.width = '600px';
//         img.style.height = '400px';
//         document.getElementById('Mimages').appendChild(img);
//     }
// };

// $(function() {
//     displayMImages();   
// });

// } 