import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../out/',import.meta.url));
const port=Number(process.env.PORT||3000);
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.svg':'image/svg+xml','.ico':'image/x-icon','.ttf':'font/ttf','.woff':'font/woff','.woff2':'font/woff2','.webp':'image/webp','.mp4':'video/mp4','.webmanifest':'application/manifest+json'};
if(!fs.existsSync(path.join(root,'index.html'))){console.error('Production export missing. Run npm run build first.');process.exit(1);}
http.createServer((req,res)=>{
 if(!['GET','HEAD'].includes(req.method||'')){res.writeHead(405,{Allow:'GET, HEAD'});res.end();return;}
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end('Bad request');return;}
 const base=path.resolve(root);
 let target=path.resolve(base,'.'+pathname);
 const relative=path.relative(base,target);
 if(relative.startsWith('..')||path.isAbsolute(relative)){res.writeHead(403);res.end('Forbidden');return;}
 try{if(fs.statSync(target).isDirectory())target=path.join(target,'index.html');}catch{}
 let status=200;
 if(!fs.existsSync(target)||!fs.statSync(target).isFile()){target=path.join(root,'404.html');status=404;}
 const ext=path.extname(target);res.writeHead(status,{'Content-Type':mime[ext]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});
 if(req.method==='HEAD'){res.end();return;}
 fs.createReadStream(target).on('error',()=>res.end()).pipe(res);
}).listen(port,()=>console.log(`Karat Infinity is ready at http://localhost:${port}`));
