import Link from "next/link"

const footerLinks = [
  { href: "#how-it-works", label: "使い方" },
  { href: "#ai-roles", label: "AI視点" },
  { href: "#use-cases", label: "活用例" },
  { href: "/privacy", label: "プライバシーポリシー" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="text-xl font-bold text-primary">
            AI Review Relay
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2026 AI Review Relay / Namiki AI Agency
          </p>
        </div>
      </div>
    </footer>
  )
}
