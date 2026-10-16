import { useState, useRef, useEffect, type SyntheticEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const options=[['underground','Underground fiber'],['splicing','Splicing & installation'],['aerial','Aerial telecommunications'],['field','Field preparation & service'],['other','Other / discuss scope']];
export default function InquiryForm() {
  const [draft,setDraft]=useState<Record<string,string>|null>(null);
  const [copied,setCopied]=useState(false);
  const [service,setService]=useState('');
  const result=useRef<HTMLDivElement>(null);
  useEffect(()=>{if(draft)result.current?.focus();},[draft]);
  function review(e:SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const values=Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string,string>;
    setDraft(values);setCopied(false);
  }
  const text=draft?Object.entries(draft).map(([k,v])=>`${k}: ${v}`).join('\n'):'';
  async function copy(){try{await navigator.clipboard.writeText(text);setCopied(true)}catch{setCopied(false)}}
  return <form className="contact-form" onSubmit={review}>
    <div className="form-field"><Label htmlFor="full-name">Full name *</Label><Input id="full-name" name="Name" autoComplete="name" required maxLength={100}/></div>
    <div className="form-field"><Label htmlFor="company">Company name *</Label><Input id="company" name="Company" autoComplete="organization" required maxLength={160}/></div>
    <div className="form-field"><Label htmlFor="business-email">Business email *</Label><Input id="business-email" name="Email" type="email" autoComplete="email" required maxLength={200}/></div>
    <div className="form-field"><Label htmlFor="phone">Phone (optional)</Label><Input id="phone" name="Phone" type="tel" autoComplete="tel" maxLength={40}/></div>
    <div className="form-field"><Label htmlFor="organization-type">Organization type</Label><select id="organization-type" name="Organization"><option value="">Select an option</option>{['Prime contractor','Telecommunications carrier','Network operator','Infrastructure developer','Other'].map(o=><option key={o}>{o}</option>)}</select></div>
    <div className="form-field"><Label htmlFor="location">Project location *</Label><Input id="location" name="Location" placeholder="City, state" required maxLength={200}/></div>
    <div className="form-field form-full"><Label htmlFor="service">Services needed *</Label><select id="service" name="Service" required value={service} onChange={e=>setService(e.target.value)}><option value="">Select a service</option>{options.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></div>
    <div className="form-field form-full"><Label htmlFor="details">Tell us about the project *</Label><Textarea id="details" name="Description" required minLength={10} maxLength={4000} placeholder="Scope, timing, and any requirements we should understand."/></div>
    <p className="form-status form-full">Preview mode: this form prepares a draft on your device. Nothing is sent or saved by Zanema. Please do not enter confidential project or personal information.</p>
    <Button className="action w-fit" type="submit">Review inquiry draft</Button>
    {draft&&<div ref={result} tabIndex={-1} className="form-preview form-full" aria-labelledby="draft-title"><h3 id="draft-title">Your inquiry draft</h3><p className="form-status" style={{marginBottom:20}}>Not sent. You can copy this draft for review while our contact channel is being finalized.</p><dl>{Object.entries(draft).filter(([,v])=>v).map(([key,value])=><div key={key} style={{display:'contents'}}><dt>{key}</dt><dd>{options.find(([v])=>v===value)?.[1]||value}</dd></div>)}</dl><Button type="button" className="action mt-6" onClick={copy}>{copied?'Draft copied':'Copy draft'}</Button><span role="status" className="sr-only">{copied?'Draft copied to clipboard':''}</span></div>}
  </form>;
}
