import { Card, CardContent } from "@/components/ui/card"

const useCases = [
  {
    icon: "📣",
    type: "企画レビュー",
    examples: "キャンペーン案・新サービス・SNS企画",
  },
  {
    icon: "✍️",
    type: "文章レビュー",
    examples: "提案書・メール・ブログ記事",
  },
  {
    icon: "💬",
    type: "対応方針",
    examples: "クレーム・問い合わせ返信",
  },
  {
    icon: "🗂",
    type: "実行計画化",
    examples: "アイデア・改善案の次の一手",
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-border/40 bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center">
            <span className="text-sm font-medium text-primary">活用例</span>
          </div>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            こんな相談に使えます
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-border/60 bg-card">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl">{useCase.icon}</span>
                    <h3 className="font-semibold text-foreground">{useCase.type}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{useCase.examples}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-12 text-center text-muted-foreground">
            個人事業主・小規模事業者・副業で1人判断が多い方に最適です
          </p>
        </div>
      </div>
    </section>
  )
}
