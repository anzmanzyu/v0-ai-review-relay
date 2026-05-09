import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Pencil, Bot, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Pencil,
    title: "相談を入力",
    body: "タイトル・内容・相談タイプを選ぶだけ。プロンプトは自動生成されます。",
  },
  {
    number: "2",
    icon: Bot,
    title: "AIに投げる",
    body: "生成されたプロンプトをChatGPT・Claude・Geminiなどに貼り付ける。",
  },
  {
    number: "3",
    icon: BarChart3,
    title: "判断表を受け取る",
    body: "採用・保留・却下・要判断に整理された判断表と成果物が完成。",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border/40 bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center">
            <span className="text-sm font-medium text-primary">使い方</span>
          </div>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            たった3ステップで判断表が完成
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-stretch">
                <Card className="w-full border-border/60 bg-card">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                      {step.number}
                    </div>
                    <step.icon className="mb-4 h-8 w-8 text-primary" />
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow between cards */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
