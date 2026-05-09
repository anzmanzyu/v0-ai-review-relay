"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

const LottieHero = dynamic(
  () => import("@/components/lp/lottie-hero").then((m) => m.LottieHero),
  { ssr: false }
)

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

        <div className="mx-auto mt-16 max-w-md">
          <LottieHero />
        </div>
      </div>
    </section>
  )
}
