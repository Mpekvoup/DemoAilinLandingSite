01
Builder fingerprints in the source code
AI site builders like v0, Lovable, Bolt, Base44 and Replit leave recognisable traces: meta tags, script URLs, 'made with' badges, or hosting subdomains (something.lovable.app). It's the most reliable tell there is: the tool literally signs its work.

How to check → Right-click → View Page Source, then search (Ctrl+F) for names like lovable, bolt, v0, base44, replit.

02
Untouched default component stacks
AI assistants reach for the same parts bin every time: shadcn/ui components, Radix primitives, lucide icons, Tailwind's default color palette. None of these are bad, but all of them together, with zero customisation, means nobody made a single visual decision by hand.

How to check → In the page source, look for class names full of Tailwind utilities and data-radix attributes, and icons served from lucide.

03
AI writing patterns in the copy
Certain words are load-bearing in AI copy: elevate, seamless, unlock, empower, effortless. Add an unusually high em-dash count, sentence-triads ('Fast. Simple. Secure.'), and headlines that promise transformation but never name a concrete feature.

How to check → Read the homepage out loud. If every sentence could describe any product on Earth, a language model probably wrote it.

04
Leftover placeholders and AI artifacts
The smoking guns: lorem ipsum that never got replaced, '[Your Company]' still in the footer, or fragments like 'As an AI language model' pasted straight from a chat window. These mean the site shipped without a single proofread.

How to check → Search the page source for 'lorem', '[Your', and 'as an AI'. Any hit is game over.

05
The template layout
Hero with a gradient headline, three feature cards in a row, a bento grid, a testimonial strip, pricing table, footer. It's the default answer to 'make me a landing page', and once you've seen it, you see it everywhere.

How to check → Scroll the page and count how many sections you could swap into a different startup's site without anyone noticing.

06
Blue-to-violet gradients on everything
AI models trained on a million SaaS landing pages learned one aesthetic: indigo-to-violet gradients on dark backgrounds, glowing blobs, glassmorphism cards. Human designers pick colors for a reason; models pick the statistical average.

How to check → If the primary color is somewhere between #6366F1 and #8B5CF6, add a point.

07
Default fonts, default favicon, empty metadata
Inter (or the framework's default font) everywhere, the stock Vite or Next.js favicon, no Open Graph image, a title tag like 'My App'. Metadata is invisible in the demo, so prompt-and-deploy sites never fill it in.

How to check → Look at the browser tab: default icon or generic title is a tell. Share the link in a chat app; no preview card is another.

08
The prompt-and-deploy stack
Next.js on Vercel with Supabase and Clerk (or Convex, or Firebase) is the path of least resistance from chat prompt to live URL. Fine tools, but that exact combo with no customisation anywhere else is how vibe-coded projects ship.

How to check → DevTools → Network tab: look for requests to supabase.co, clerk, convex, and a vercel.app or netlify.app host.

09
No human surfaces
Real projects accumulate human evidence: an about page with actual names, a blog with dated posts, a GitHub link, pricing with specific numbers, a changelog. AI-generated sites have a beautiful shell and nothing behind any of the doors.

How to check → Click About, Blog and Pricing. If they're missing, empty, or written in the same voice as the homepage, the shell is all there is.

10
Too new and too clean
Human-built sites have history: old URLs, slightly inconsistent styles, that one page from 2019. A site where every page shipped at the same moment in the same perfect style has no past, because it didn't exist last month.

How to check → Search the site on web.archive.org. No history plus every tell above = prompt, deploy, pray.