import type { ReactNode } from "react";

export function TypographyH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="branding scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
export function TypographyH3({ children }: { children: ReactNode }) {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>;
}

export function TypographyH4({ children }: { children: ReactNode }) {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>;
}

export function TypographyP({ children }: { children: ReactNode }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function TypographyBlockquote({ children }: { children: ReactNode }) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">&quot;{children}&quot;</blockquote>;
}

export function TypographyList({ listItems }: { listItems: string[] }) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function TypographyInlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export function TypographyLead({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground text-xl">{children}</p>;
}

export function TypographyLarge({ children }: { children: ReactNode }) {
  return <div className="text-lg font-semibold">{children}</div>;
}

export function TypographySmall({ children }: { children: ReactNode }) {
  return <small className="text-sm leading-none font-medium">{children}</small>;
}

export function TypographyMuted({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground text-sm">{children}</p>;
}
