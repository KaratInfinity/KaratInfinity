"use client";
import { useEffect, useRef, useId } from 'react';
export function Dialog({open,onClose,title,children}:{open:boolean;onClose:()=>void;title:string;children:React.ReactNode}){
 const ref=useRef<HTMLDialogElement>(null); const titleId=useId();
 useEffect(()=>{const d=ref.current;if(open&&!d?.open)d?.showModal();if(!open&&d?.open)d.close();if(open){const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous;};}},[open]);
 return <dialog aria-labelledby={titleId} ref={ref} onCancel={onClose} onClose={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose();}} className="modal"><div className="modal-inner"><div className="modal-head"><h2 id={titleId}>{title}</h2><button className="icon-button" aria-label="Close dialog" onClick={onClose}>×</button></div>{children}</div></dialog>;
}
