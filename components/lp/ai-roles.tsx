import { Card, CardContent } from "@/components/ui/card"

const aiRoles = [
  {
    icon: "🎯",
    name: "モデレーターAI",
    desc: "相談を論点に分解し、各役割への問いを設計する",
  },
  {
    icon: "💡",
    name: "企画AI",
    desc: "アイデア・代替案・広げる視点を提案する",
  },
  {
    icon: "🔧",
    name: "現場AI",
    desc: "実行可能か・運用負担を現場目線で評価する",
  },
  {
    icon: "👥",
    name: "顧客AI",
    desc: "相手・読者・利用者目線の違和感を指摘する",
  },
  {
    icon: "⚠️",
    name: "リスクAI",
    desc: "炎上・法務・誤認リスクを洗い出す",
  },
  {
    icon: "✂️",
    name: "批判AI",
    desc: "過剰設計・効果薄な案をばっさり切る",
  },
  {
    icon: "📋",
    name: "整理AI",
    desc: "全AIの回答を判断表に統合してまとめる",
  },
]

export function AIRoles() {
  return (
    <section id="ai-roles" className="border-t border-border/40 bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center">
            <span className="text-sm font-medium text-primary">AI視点</span>
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            7つのAI視点がチームになる
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            モデル名ではなく「視点・役割」で使います
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiRoles.slice(0, 3).map((role, index) => (
              <Card key={index} className="border-border/60 bg-card">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl">{role.icon}</span>
                    <h3 className="font-semibold text-foreground">{role.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {role.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiRoles.slice(3).map((role, index) => (
              <Card key={index} className="border-border/60 bg-card">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl">{role.icon}</span>
                    <h3 className="font-semibold text-foreground">{role.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {role.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
