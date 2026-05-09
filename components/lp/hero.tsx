import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const aiRoles = [
  { icon: "🎯", label: "モデレーター" },
  { icon: "💡", label: "企画" },
  { icon: "🔧", label: "現場" },
  { icon: "👥", label: "顧客" },
  { icon: "⚠️", label: "リスク" },
  { icon: "✂️", label: "批判" },
  { icon: "📋", label: "整理" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            複数AIの視点を、判断に変える
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            <span className="block">相談を、</span>
            <span className="block text-primary">判断に変える。</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            複数AIの意見を整理して、採用・保留・却下・要判断に仕分け。
            <br className="hidden sm:inline" />
            返信文・実行計画・チェックリストまで生成します。
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              無料で始める
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              使い方を見る
            </Button>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="flex flex-col items-center gap-8">
            {/* AI Role Icons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {aiRoles.map((role, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 rounded-full border border-border bg-card px-4 py-2 shadow-sm"
                >
                  <span className="text-xl">{role.icon}</span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {role.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <div className="h-8 w-px bg-border" />
              <ArrowRight className="h-6 w-6 rotate-90" />
              <div className="h-8 w-px bg-border" />
            </div>

            {/* Output Document */}
            <div className="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary" />
                <span className="text-sm font-semibold text-foreground">
                  判断表
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-muted" />
                <div className="h-2 w-4/5 rounded bg-muted" />
                <div className="h-2 w-3/5 rounded bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
