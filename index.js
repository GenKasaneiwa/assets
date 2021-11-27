//----------------------------------------------------------------------
//   共通コンポーネント
//----------------------------------------------------------------------

//  display console.log
//---------------------------------------------------------------

window.addEventListener('DOMContentLoaded', () => {
   const container = document.createElement('div');
   container.className = 'console-container';
   container.style.cssText = 'position:fixed;right:40px;bottom:20px;z-index:9999;width:150px;';
   document.body.appendChild(container);
});

function display(val){
   console.log(val);

   window.addEventListener('load', () => {
      let div_el = document.createElement('div');
      let target_container = document.querySelector('.console-container');
      div_el.innerText = val;
      div_el.style.cssText = 'position:relative;right:0;bottom:0;margin:0 0 10px 0;filter: drop-shadow(1px 1px 4px #a9a9a9);background:#fff;border-radius:5px;padding:10px;width:100%';
      target_container.appendChild(div_el);
   });
}

~(_=>{
   
})``;

//  cache control
//---------------------------------------------------------------

function cache(){
   let css_files = document.querySelectorAll('link');
   css_files.forEach(css_file => {
      let path = css_file.getAttribute('href');
      css_file.setAttribute('href', path + '?' + new Date().getTime());
   });
}