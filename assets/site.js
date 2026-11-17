(function(){
'use strict';
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const href=id=>'entry.html?slug='+encodeURIComponent(id);
const date=s=>{const d=new Date((s.length===7?s+'-01':s)+'T00:00:00Z');return d.toLocaleDateString('en-US',{month:'short',year:'numeric',timeZone:'UTC'}).toUpperCase();};
function art(kind){
 let elements='',mint='#8cceb5',peach='#edaf87',soft='#badac4';
 if(kind==='voronoi'){
   let seed=1337;const rnd=()=>{seed=(Math.imul(1664525,seed)+1013904223)>>>0;return seed/4294967296;};
   const sites=Array.from({length:55},()=>[65+rnd()*670,10+rnd()*480]);
   const clip=(poly,p,q)=>{const nx=q[0]-p[0],ny=q[1]-p[1],mx=(p[0]+q[0])/2,my=(p[1]+q[1])/2;const v=a=>(a[0]-mx)*nx+(a[1]-my)*ny;let out=[];for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length],va=v(a),vb=v(b);if(va<=0)out.push(a);if((va<0&&vb>0)||(va>0&&vb<0)){const t=va/(va-vb);out.push([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]);}}return out;};
   elements='<defs><clipPath id="vclip"><circle cx="400" cy="250" r="213"/></clipPath></defs><circle cx="400" cy="250" r="231" stroke="#548d78" fill="none"/><g clip-path="url(#vclip)">';
   sites.forEach((p,i)=>{let poly=[[0,0],[800,0],[800,500],[0,500]];sites.forEach((q,j)=>{if(i!==j&&poly.length)poly=clip(poly,p,q);});const face=((p[0]-404)**2/36000+(p[1]-229)**2/28500)<1,shoulder=p[1]>365&&Math.abs(p[0]-405)<145;const fill=face?(i%3?'#e9ad84':'#f2bb93'):shoulder?'#5f9d87':i%4?'#193e34':'#2b5848';elements+='<polygon points="'+poly.map(v=>v.map(n=>n.toFixed(1)).join(',')).join(' ')+'" fill="'+fill+'" stroke="#a6d6bd" stroke-width="1.1"/>';});
   elements+='</g>';
 }else if(kind==='attention'){
   elements='<rect x="115" y="35" width="570" height="430" fill="#163b31" stroke="#639b84"/>';
   for(let x=0;x<8;x++)for(let y=0;y<6;y++)elements+='<rect x="'+(115+x*71.25)+'" y="'+(35+y*71.67)+'" width="71.25" height="71.67" fill="'+((x+y)%5?'none':'#2d6351')+'" stroke="#72ac92" stroke-width=".9"/>';
   for(let x=0;x<5;x++)for(let y=0;y<5;y++)elements+='<rect x="'+(365+x*26)+'" y="'+(173+y*26)+'" width="26" height="26" fill="'+((x+y)%5?'#316a56':'#eab087')+'" stroke="#cce2c8"/>';
   elements+='<circle cx="430" cy="236" r="93" fill="none" stroke="'+peach+'" stroke-dasharray="6 6"/><circle cx="430" cy="236" r="5" fill="'+peach+'"/>';
 }else if(kind==='julia'||kind==='silk'){
   const spiral=kind==='julia';
   for(let k=0;k<(spiral?32:60);k++){let d='';for(let n=0;n<=120;n++){const t=n/120,a=t*24+k*.14,r=5+t*205+15*Math.sin(a*.8+k*.1),x=spiral?400+Math.cos(a+k*.13)*r:10+t*780,y=spiral?250+Math.sin(a+k*.13)*r*.88:250+87*Math.sin(t*16+k*.12)+80*Math.sin(t*8-k*.067)+(k-30);d+=(n?'L':'M')+x.toFixed(1)+','+y.toFixed(1);}elements+='<path d="'+d+'" fill="none" stroke="'+(k%9===0?peach:mint)+'" stroke-opacity="'+(spiral?.47:.37)+'" stroke-width="1.1"/>';}
 }else if(kind==='cathedral'){
   for(let i=0;i<16;i++){const z=i*14;elements+='<path d="M'+(90+z)+',480 L'+(90+z)+','+(185+z*.25)+' Q400,'+(-125+z*.7)+' '+(710-z)+','+(185+z*.25)+' L'+(710-z)+',480" fill="none" stroke="'+(i%5===0?peach:mint)+'" stroke-opacity="'+(.88-i*.04)+'" stroke-width="1.5"/>';}
   elements+='<path d="M400 48V483" stroke="'+soft+'"/><circle cx="400" cy="219" r="23" fill="'+peach+'"/>';
 }else{
   for(let k=0;k<48;k++){const a=k*Math.PI*2/48,x=400+280*Math.cos(a),y=250+230*Math.sin(a);elements+='<path d="M400,250 Q'+(400+145*Math.cos(a+1)).toFixed(0)+','+(250+135*Math.sin(a+1)).toFixed(0)+' '+x.toFixed(0)+','+y.toFixed(0)+'" fill="none" stroke="'+(k%8===0?peach:mint)+'" stroke-opacity=".5"/>';}
   for(let k=0;k<10;k++)elements+='<ellipse cx="400" cy="250" rx="'+(30+k*26)+'" ry="'+(25+k*20)+'" fill="none" stroke="'+soft+'" stroke-opacity=".25"/>';
 }
 return '<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic illustration, not a captured experiment"><rect width="800" height="500" fill="#0c231d"/><path d="M0 125H800 M0 250H800 M0 375H800 M200 0V500 M400 0V500 M600 0V500" stroke="#1b4035" fill="none"/>'+elements+'<rect x="12" y="12" width="776" height="476" fill="none" stroke="#326150"/><text x="34" y="43" font-size="12" font-family="monospace" fill="#89cbb5" letter-spacing="2.5">EIGENDYNAMICS / STUDY</text><text x="608" y="468" font-size="12" font-family="monospace" fill="#eab58f" letter-spacing="2">SCHEMATIC</text></svg>';
}
async function entries(){const r=await fetch('content/entries.json');if(!r.ok)throw Error('index');const data=await r.json();if(!Array.isArray(data))throw Error('index');return data;}
function card(e,i){const url=href(e.id);return '<article class="entry-card"><a class="entry-thumb" href="'+url+'" aria-label="Read '+esc(e.title)+'"><div class="art">'+art(e.art)+'</div><span class="corner">'+String(i+1).padStart(2,'0')+' / '+esc(e.category.toUpperCase())+'</span><span class="arrow" aria-hidden="true">↗</span></a><div class="entry-meta"><span>'+esc(e.kind.toUpperCase())+'</span><span>'+date(e.date)+'</span></div><h3><a href="'+url+'">'+esc(e.title)+'</a></h3><p>'+esc(e.summary)+'</p><div class="tags">'+e.tags.map(t=>'<span>'+esc(t)+'</span>').join('')+'</div></article>';}
async function home(){
 let data;try{data=await entries();}catch(e){$('#load-error').hidden=false;$('#results-summary').textContent='INDEX UNAVAILABLE';return;}
 $('#entry-count').textContent=String(data.length).padStart(2,'0');const filters=$('#filters'),input=$('#search'),grid=$('#entry-grid');let active='All';
 filters.innerHTML=['All',...new Set(data.map(e=>e.category))].map(c=>'<button type="button" data-filter="'+esc(c)+'" aria-pressed="'+(c==='All')+'" class="'+(c==='All'?'selected':'')+'">'+esc(c.toUpperCase())+'</button>').join('');
 function render(){const term=input.value.toLowerCase().trim(),list=data.filter(e=>(active==='All'||active===e.category)&&[e.title,e.summary,e.category,e.kind,...e.tags].join(' ').toLowerCase().includes(term));grid.innerHTML=list.map(card).join('');$('#results-summary').textContent=list.length+' OF '+data.length+' RECORDS';$('#empty').hidden=list.length!==0;}
 filters.addEventListener('click',event=>{const b=event.target.closest('button[data-filter]');if(!b)return;active=b.dataset.filter;filters.querySelectorAll('button').forEach(x=>{x.classList.toggle('selected',x===b);x.setAttribute('aria-pressed',String(x===b));});render();});
 input.addEventListener('input',render);document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==input&&document.activeElement.tagName!=='INPUT'){e.preventDefault();input.focus();}if(e.key==='Escape'&&document.activeElement===input)input.blur();});render();
}
function inline(s){return esc(s).replace(/\x60([^\x60]+)\x60/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(_,label,url)=>{const u=url.replace(/&amp;/g,'&');if(!/^(https?:\/\/|\.\/|entry\.html|#)/i.test(u))return label;return '<a href="'+esc(u)+'"'+(/^https?:\/\//i.test(u)?' target="_blank" rel="noopener noreferrer"':'')+'>'+label+'</a>';});}
function markdown(raw){
 const lines=raw.replace(/\r\n/g,'\n').split('\n'),out=[];let para=[],list='',quote=[],code=[],fenced=false;
 function flush(){if(para.length){out.push('<p>'+inline(para.join(' '))+'</p>');para=[];}if(list){out.push('</'+list+'>');list='';}if(quote.length){out.push('<blockquote>'+inline(quote.join(' '))+'</blockquote>');quote=[];}}
 for(const line of lines){const s=line.trim();if(/^\x60{3}/.test(s)){if(fenced){out.push('<pre><code>'+esc(code.join('\n'))+'</code></pre>');code=[];fenced=false;}else{flush();fenced=true;}continue;}if(fenced){code.push(line);continue;}if(!s){flush();continue;}
 const h=/^(#{1,3})\s+(.+)$/.exec(s);if(h){flush();const n=h[1].length,id=h[2].toLowerCase().replace(/[^a-z0-9 -]/g,'').replace(/\s+/g,'-');out.push('<h'+n+' id="'+id+'">'+inline(h[2])+'</h'+n+'>');continue;}
 if(/^---+$/.test(s)){flush();out.push('<hr>');continue;}
 if(/^>\s?/.test(s)){if(para.length||list)flush();quote.push(s.replace(/^>\s?/,''));continue;}
 if(quote.length)flush();
 const item=/^([-*]|\d+\.)\s+(.+)$/.exec(s);if(item){if(para.length)flush();const type=/^\d/.test(item[1])?'ol':'ul';if(list!==type){if(list)out.push('</'+list+'>');list=type;out.push('<'+type+'>');}out.push('<li>'+inline(item[2])+'</li>');continue;}
 if(list){out.push('</'+list+'>');list='';}para.push(s);
 }
 flush();if(fenced)out.push('<pre><code>'+esc(code.join('\n'))+'</code></pre>');return out.join('\n');
}
async function article(){
 const slug=new URLSearchParams(location.search).get('slug');try{const data=await entries(),e=data.find(x=>x.id===slug);if(!e)throw Error('missing');const r=await fetch('content/'+encodeURIComponent(e.file));if(!r.ok)throw Error('missing');const content=await r.text();document.title=e.title+' — EigenDynamics Wiki';$('meta[name="description"]').content=e.summary;$('#article-eyebrow').textContent='FIELD NOTE / '+e.category.toUpperCase();$('#article-title').textContent=e.title;$('#article-description').textContent=e.summary;$('#article-info').innerHTML='<span>'+date(e.date)+'</span><span>'+esc(e.kind.toUpperCase())+'</span><span>DOCUMENTATION PUBLIC</span>';$('#article-art').innerHTML=art(e.art);$('#article-body').innerHTML=markdown(content);$('#article-edit').href='https://github.com/gqgs/eigendynamics-wiki/edit/main/content/'+encodeURIComponent(e.file);const related=(e.related||[]).map(id=>data.find(x=>x.id===id)).filter(Boolean);$('#related-grid').innerHTML=related.map(x=>'<a class="related-item" href="'+href(x.id)+'"><small>'+esc(x.category.toUpperCase())+'</small><span>'+esc(x.title)+'</span></a>').join('');$('#related-section').hidden=related.length===0;$('#article-related').textContent=related.length?related.map(x=>x.title).join(' · '):'Explore the index for more notes.';$('#article-loading').hidden=true;$('#article-shell').hidden=false;}catch(e){$('#article-loading').hidden=true;$('#article-error').hidden=false;}
}
if(document.body.dataset.page==='article')article();else home();
})();