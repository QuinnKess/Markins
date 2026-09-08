export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Are you licensed and insured in Philadelphia?',
    answer:
      'Yes. Markins Development Group is a licensed Philadelphia contractor carrying general liability and workers’ compensation coverage. <!-- TODO: confirm with client --> We can provide license number and certificates of insurance on request.',
  },
  {
    question: 'Who pulls the permits — me or you?',
    answer:
      'We do. Permitting is handled by our office for every job that requires it, and we won’t start work that needs a permit before it’s approved.',
  },
  {
    question: 'How long does a typical kitchen renovation take?',
    answer:
      'A standard kitchen remodel typically runs 4–8 weeks once demo starts, depending on scope, custom cabinetry lead times, and whether we’re moving plumbing or electrical. A full new-construction interior runs longer. You’ll get a written schedule before we sign anything.',
  },
  {
    question: 'What does the payment schedule look like?',
    answer:
      'Projects are broken into milestone payments tied to completed work, not a large deposit up front. The exact schedule is laid out in your proposal so there are no surprises.',
  },
  {
    question: 'Do you handle design, or just the build?',
    answer:
      'Both. We can work from your architect’s or designer’s plans, or handle design-build in-house — layout, material selection, and cabinetry sourcing — depending on what the project needs.',
  },
  {
    question: 'What areas do you work in?',
    answer:
      'Philadelphia — including Port Richmond, Fishtown, Kensington, Northern Liberties, South Philly, and Manayunk — plus the surrounding Bucks, Montgomery, and Delaware County suburbs. Not sure if you’re in range? Ask.',
  },
  {
    question: 'Do you offer any warranty on completed work?',
    answer:
      'Yes — workmanship is covered for one year after project completion, in addition to manufacturer warranties on cabinetry, countertops, and appliances. <!-- TODO: confirm exact warranty terms with client -->',
  },
  {
    question: 'How do I get an estimate?',
    answer:
      'Fill out the quote form below or call directly. We’ll schedule a walkthrough, follow up with a written scope and estimate, and you decide from there — no pressure, no hard sell.',
  },
];
