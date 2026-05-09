import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown } from "lucide-react"

const problems = [
  {
    icon: "🤯",
    text: "複数AIに聞くと回答が散らかって、結局どれが正解かわからない",
  },
  {
    icon: "📋",
    text: "毎回プロンプトをコピペするのが面倒",
  },
  {
    icon: "⏱",
    text: "AIの意見を会議メモや返信文に変換する手間が大きい",
  },
  {
    icon: "🎯",
    text: "1人で判断していて、視点が偏っている気がする",
  },
]

export function ProblemSection() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <span className="text-sm font-medium text-primary">課題</span>
          </div>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            こんな悩みはありませんか？
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <Card key={index} className="border-border/60 bg-card">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="text-3xl">{problem.icon}</span>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {problem.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <ArrowDown className="h-8 w-8 text-primary" />
            <p className="text-lg font-semibold text-primary">
              AI Review Relay が解決します
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
