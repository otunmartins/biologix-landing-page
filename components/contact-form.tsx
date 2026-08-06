'use client'

import { useForm, ValidationError } from '@formspree/react'
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  const [state, handleSubmit] = useForm('xkjwgbkq')

  if (state.succeeded) {
    return (
      <div className="flex min-h-96 flex-col items-center justify-center gap-5 rounded-3xl border border-border bg-card p-8 text-center md:p-12" role="status">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <CheckCircle2 aria-hidden="true" className="size-7" />
        </span>
        <div className="flex max-w-sm flex-col gap-2">
          <h3 className="font-serif text-3xl font-semibold text-card-foreground">Thank you.</h3>
          <p className="leading-relaxed text-muted-foreground">
            Your request has been received. The Biologix team will be in touch shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8 md:p-10"
    >
      <input type="hidden" name="_subject" value="New Biologix demo request" />
      <FieldGroup className="gap-5">
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" name="name" autoComplete="name" placeholder="Your name" required className="h-12 px-4" />
          <ValidationError field="name" prefix="Name" errors={state.errors} />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="Work or personal email" required className="h-12 px-4" />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
        </Field>
        <Field>
          <FieldLabel htmlFor="company">Company</FieldLabel>
          <Input id="company" name="company" autoComplete="organization" placeholder="Organization name" required className="h-12 px-4" />
          <ValidationError field="company" prefix="Company" errors={state.errors} />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">What are you working on?</FieldLabel>
          <Textarea id="message" name="message" placeholder="Tell us about your biologic or formulation challenge" required className="min-h-32 resize-y px-4 py-3" />
          <ValidationError field="message" prefix="Message" errors={state.errors} />
        </Field>
        <ValidationError errors={state.errors} />
        <Button type="submit" size="lg" disabled={state.submitting} className="mt-1 h-12 w-full rounded-full text-base">
          {state.submitting ? (
            <>
              <LoaderCircle data-icon="inline-start" className="animate-spin" />
              Sending request
            </>
          ) : (
            <>
              Request a demo
              <ArrowRight data-icon="inline-end" />
            </>
          )}
        </Button>
        <p className="text-center text-sm leading-relaxed text-muted-foreground">
          By submitting, you agree to be contacted about Biologix.
        </p>
      </FieldGroup>
    </form>
  )
}
