import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            まずは無料でお試しください
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            AIは判断を代行しません。提案・整理・批評まで。最終判断はあなたです。
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
            >
              今すぐ始める
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              使い方を見る
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
