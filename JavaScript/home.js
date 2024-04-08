let var1 = document.getElementById("btn1");
let var2 = document.getElementById("btn2");
let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");

/*window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
      let ulElements = document.querySelectorAll('ul');
      ulElements.forEach(function(ul) {
        ul.style.display = 'none';
      });
    }
  });

  document.getElementById('toggleBtn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  });
  
var2.onclick = function button(){
   var1.innerHTML = `<nav class="hidden bg-gray-200 py-2 px-4 mt-2 rounded">
           <a href="#" class="block hover:underline" >OUR OFFER</a>
           <a href="#" class="block hover:underline">ABOUT US</a>
           <a href="#" class="block hover:underline" >CONTACT</a>
           <a href="#" class="block underline hover:text-color2" >LOG IN</a>
           <a href="#" class="block text-gray-800 hover:text-blue-500">Item 1</a>
           <a href="#" class="block text-gray-800 hover:text-blue-500">Item 2</a>
           <a href="#" class="block text-gray-800 hover:text-blue-500">Item 3</a>
</nav>`;
}*/
document.getElementById('btn1').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  });
document.getElementById('btn2').addEventListener('click', function() {
    var menu = document.getElementById('menu1');
    menu.classList.toggle('hidden');
  });
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { // تغيير الرقم حسب ارتفاع النص الذي تريد ظهور الصفحة عنده
      navbar.classList.add('fixed');
      navbar.classList.add('top-0');
      navbar.classList.remove('hidden');
    } else {
      navbar.classList.remove('fixed');
      navbar.classList.remove('top-0');
      navbar.classList.add('hidden');
    }
  });

link1.onclick = function nextClient(){
  var client = document.getElementById("client");
  client.innerHTML = `<div class="flex flex-col items-center md:w-2/3 shadow-xl hover:shadow-2xl mb-12 md:mb-0">
  <img class="w-1/3" src="../Pictures/picture5.png" alt="">
  <div class="flex flex-row justify-around pb-3 pt-3">
     <p class="text-xl p-3 text-center">Lorem ipsum sit amet consectetur adipisicing consectetur elit. Sunt, natus.<br><span class="text-[#061BB0]">Khadija Zouhair</span> </p>
  </div>
</div>`;
}
link2.onclick = function nextClient(){
  var client = document.getElementById("client");
  client.innerHTML = `<div class="flex flex-col items-center md:w-2/3 shadow-xl hover:shadow-2xl mb-12 md:mb-0">
  <img class="w-1/3" src="../Pictures/picture4.png" alt="">
  <div class="flex flex-row justify-around pb-3 pt-3">
     <p class="text-xl p-3 text-center">Lorem ipsum sit amet consectetur adipisicing consectetur elit. Sunt, natus.<br><span class="text-[#B62A81]">Chaimae Hourri</span> </p>
  </div>
</div>`;
}
link3.onclick = function nextClient(){
  var client = document.getElementById("client");
  client.innerHTML = `<div class="flex flex-col items-center md:w-2/3 shadow-xl hover:shadow-2xl mb-12 md:mb-0">
  <img class="w-1/3" src="../Pictures/picture5.png" alt="">
  <div class="flex flex-row justify-around pb-3 pt-3">
     <p class="text-xl p-3 text-center">Lorem ipsum sit amet consectetur adipisicing consectetur elit. Sunt, natus.<br><span class="text-[#061BB0]">Khadija Sellami</span> </p>
  </div>
</div>`;
}