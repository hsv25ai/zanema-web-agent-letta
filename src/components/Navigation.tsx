import {Menu} from 'lucide-react';
import {useRef} from 'react';
import {Button} from '@/components/ui/button';
import {Sheet,SheetContent,SheetHeader,SheetTitle,SheetTrigger,SheetClose} from '@/components/ui/sheet';

const links=[['Services','services'],['About us','about'],['Our work','our-work'],['Safety & quality','safety-quality'],['Contact','contact']];
export default function Navigation(){
 const trigger=useRef<HTMLButtonElement>(null);
 return <Sheet><SheetTrigger asChild><Button ref={trigger} variant="outline" className="mobile-nav-trigger" aria-label="Open page sections"><Menu aria-hidden="true"/><span>Menu</span></Button></SheetTrigger><SheetContent className="bg-white text-[#071934] p-6" aria-describedby={undefined} onCloseAutoFocus={e=>{e.preventDefault();trigger.current?.focus()}}><SheetHeader className="p-0 pb-8"><SheetTitle className="font-heading text-xl">On this page</SheetTitle></SheetHeader><nav aria-label="Page sections" className="grid">{links.map(([label,id])=><SheetClose key={id} asChild><a href={`#${id}`} className="border-b border-[#dce4ee] py-4 text-lg">{label}</a></SheetClose>)}</nav><p className="mt-auto text-sm leading-7 text-[#4f6175]">Telecommunications Infrastructure Services<br/>Plano, Texas</p></SheetContent></Sheet>
}
