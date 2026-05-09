import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const outputItems = [
  { label: "結論", text: "今回の方向性まとめ" },
  { label: "採用", text: "実行する価値が高い内容" },
  { label: "保留", text: "条件を見て判断する内容" },
  { label: "却下", text: "やらない方がよい内容" },
  { label: "要判断", text: "あなたが決める必要がある2〜3点" },
  { label: "注意点", text: "実行時のリスク・誤解されやすい点" },
  { label: "次の一手", text: "最初にやるべき具体的な行動" },
]

export function OutputExample() {
  return (
    <section className="border-t border-border/40 bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center">
            <span className="text-sm font-medium text-primary">出力例</span>
          </div>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            判断表イメージ
          </h2>

          <Card className="border-border bg-muted/50">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4">
                {outputItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 border-b border-border/40 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="inline-flex min-w-[80px] items-center justify-center rounded bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                      【{item.label}】
                    </span>
                    <span className="text-sm text-muted-foreground md:text-base">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground md:text-base">
              <span>判断表から</span>
              <ArrowRight className="h-4 w-4" />
              <span className="font-semibold text-foreground">返信文</span>
              <span>/</span>
              <span className="font-semibold text-foreground">実行計画</span>
              <span>/</span>
              <span className="font-semibold text-foreground">チェックリスト</span>
              <span>に1クリックで変換</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
