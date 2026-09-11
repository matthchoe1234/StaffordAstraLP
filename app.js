const products = {
  strawberry: {name:'Strawberry Lemon',image:'assets/pack-strawberry.png',variant:'44141009600764'},
  tangerine: {name:'Tangerine',image:'assets/pack-tangerine.png',variant:'46921874145532'},
  cacao: {name:'Cacao',image:'assets/pack-cacao.png',variant:'48747824840956'}
};
const dialog = document.querySelector('#product-dialog');
function selectFlavor(key){
  const p=products[key];
  if(!p) return;
  document.querySelector('#dialog-title').textContent=p.name;
  const image=document.querySelector('#dialog-image');
  image.src=p.image; image.alt=`Graymatter Bright Mind ${p.name} bag`;
  document.querySelector('#product-link').href=`https://trygraymatter.com/products/brightmind-1?variant=${p.variant}`;
  document.querySelector(`input[name="flavor"][value="${key}"]`).checked=true;
}
document.querySelectorAll('[data-flavor]').forEach(button=>button.addEventListener('click',()=>{selectFlavor(button.dataset.flavor);dialog.showModal();}));
document.querySelectorAll('input[name="flavor"]').forEach(input=>input.addEventListener('change',()=>selectFlavor(input.value)));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
