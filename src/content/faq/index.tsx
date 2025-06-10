export const FaqData = [
  {
    q: "Who owns the transcripts and can we resell them?",
    a: "You own them completely. We operate on a work-for-hire model - you pay us as a service provider to create datasets on your behalf. Once delivered, you own the IP and can resell, integrate into products, or use for AI training without restrictions. This is fundamentally different from incumbent providers who only license transcripts to you.",
  },
  {
    q: "How do you measure accuracy? Do you use WER?",
    a: "We use a weight-adjusted WER. WER (Word Error Rate) is misleading for finance transcription. A missed comma and a wrong company name aren't equal mistakes, but traditional WER treats them the same. We measure mistakes per 10,000 words with significance weighting: proper nouns (companies, executives, figures) matter more than punctuation. Our 99.9% accuracy reflects what actually matters in finance transcription.",
  },
  {
    q: "What accuracy levels do you actually achieve?",
    a: "We offer four tiers: Real-time transcription at 95%+ accuracy, AI asynchronous at 97%+, First Draft (human-edited) at 98%+, and Human Perfect at 99.9% accuracy. These percentages reflect our performance on finance-specific audio with proper nouns, company names, and financial terminology.",
  },
  {
    q: 'How fast is "the fastest perfect transcription"?',
    a: "Human perfect transcription (99.9% accuracy) delivered in under 24 hours. First draft (98%+ accuracy) in 1-4 hours. AI asynchronous in minutes after recording ends. Real-time has under 1-second latency (hundreds of milliseconds). This speed is possible through our proprietary editing platform built specifically for finance transcription since 2019.",
  },
  {
    q: "What makes your real-time transcription different?",
    a: "First in the world to offer self-correcting accuracy in real-time using finance-specific dictionaries and glossaries. Real-time named entity recognition (NER) that validates company names, products, and proper nouns against our database of 10,000+ companies. Speaker identification includes names and titles, not just generic diarization.",
  },
  // {
  //   q: "How many concurrent live streams can you handle?",
  //   a: "We process hundreds of thousands of hours annually and have built infrastructure for earnings season peaks. We regularly handle high-volume concurrent processing for our enterprise clients during quarterly earnings periods.",
  // },
  // {
  //   q: "What languages do you support?",
  //   a: 'English plus multi-lingual capabilities including Japanese, Mandarin, Spanish, French, and Portuguese. We can detect multiple languages within a single audio file and provide translation. Our finance terminology accuracy is maintained across languages, including specialized terms like "EBITDA" in any language context.',
  // },
  // {
  //   q: "How selective is your editor acceptance rate?",
  //   a: "Less than 1% of applicants make it onto our team - more selective than Harvard or Y Combinator. We process tens of thousands of applications monthly. Editors undergo extensive finance-specific training on terminology, style guides, and our proprietary platform.",
  // },
  // {
  //   q: "What about compliance and MNPI concerns?",
  //   a: "We offer compliance augmentation tools (not automation) including potential MNPI flagging, PII identification, and claim verification. These tools integrate with your existing compliance workflows. It’s important to note that We emphasize this augments, not replaces, human compliance review.",
  // },
  // {
  //   q: "What data formats do you provide?",
  //   a: "JSON, SRT, DOCX, and custom formats as needed. All include metadata tagging: speaker identification, timestamps (including word-level), topic identification, named entities, and custom fields. Formats are instantly integratable with enterprise technical stacks.",
  // },
  // {
  //   q: "How do you ensure security?",
  //   a: "End-to-end encryption, data cleansing protocols, and enterprise-grade security throughout our workflow. We work with the biggest financial institutions globally and maintain their security standards.",
  // },
  // {
  //   q: "What types of finance audio do you specialize in?",
  //   a: "Earnings calls, expert network calls, investor meetings, conferences, and any streamed finance audio. We've transcribed over 1 billion words from highly specialized financial content since 2019.",
  // },
  // {
  //   q: "How does your editing platform provide an advantage?",
  //   a: "Built from the ground up for finance transcription with shortcuts, automations, and integrations specific to financial audio. Editors can transcribe live as audio streams, platform auto-populates from our real-time glossaries, and it identifies high-probability error sections for focused review.",
  // },
  // {
  //   q: "Do you require long-term contracts?",
  //   a: "We work with enterprise clients on terms that match their needs. Our focus is on organizations processing tens to hundreds of thousands of hours annually who need a true partner, not just a vendor.",
  // },
  // {
  //   q: 'What makes you "finance-native" versus generic transcription?',
  //   a: 'Started in 2019 specifically for finance transcription. Real-time dictionaries covering financial terminology, 10,000+ companies, industry jargon. Editors trained on earnings calls, expert networks, and finance-specific content. We understand context like "basis points" versus "basic points."',
  // },
  // {
  //   q: "Can you handle our proprietary expert network compliance requirements?",
  //   a: "Yes. We have extensive experience with expert networks and their specific compliance needs. Direct integration with compliance teams, customizable workflows, and augmentation tools designed for expert call requirements.",
  // },
];
