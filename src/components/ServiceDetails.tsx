import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from '@/components/ui/accordion';
export default function ServiceDetails({scope,note}:{scope:string[];note:string}) {
  return <Accordion type="single" collapsible><AccordionItem value="scope" className="border-0"><AccordionTrigger className="py-4 text-sm font-semibold text-[#075bb5]">Scope and project considerations</AccordionTrigger><AccordionContent><ul className="scope-list">{scope.map(s=><li key={s}>{s}</li>)}</ul><p className="small-note">{note}</p></AccordionContent></AccordionItem></Accordion>;
}
