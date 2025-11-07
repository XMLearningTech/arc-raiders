import type { Metadata } from "next"
import type { Locale } from '@/i18n/config'

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const resolvedParams = await params
  const lang = resolvedParams.lang as Locale
  
  const titles = {
    en: "Privacy Policy - ARC Raiders Wiki",
    zh: "隐私政策 - ARC Raiders 维基",
    ja: "プライバシーポリシー - ARC Raiders Wiki"
  }
  
  return {
    title: titles[lang],
    alternates: {
      canonical: `https://arc-raiders.net/${lang}/privacy`,
    },
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const resolvedParams = await params
  const lang = resolvedParams.lang as Locale
  
  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: November 7, 2025",
      sections: [
        {
          title: "1. Information We Collect",
          content: "ARC-Raiders.net is a fan-made wiki and community resource. We collect minimal information to provide you with the best experience:\n\n• **Analytics Data**: We use Google Analytics to understand how visitors use our site, including page views, session duration, and navigation patterns.\n\n• **Cookies**: We use essential cookies to maintain your language preferences and basic site functionality.\n\n• **No Personal Data**: We do not collect, store, or process any personal information such as names, email addresses, or payment information."
        },
        {
          title: "2. How We Use Information",
          content: "The information we collect is used solely to:\n\n• Improve website performance and user experience\n• Analyze traffic patterns and popular content\n• Maintain your site preferences (language selection)\n• Ensure proper functioning of embedded videos and external content"
        },
        {
          title: "3. Third-Party Services",
          content: "Our website uses the following third-party services:\n\n• **YouTube**: Embedded videos from YouTube may collect data according to YouTube's privacy policy\n• **Google Analytics**: For website analytics and performance monitoring\n• **Vercel/Hosting Provider**: For website hosting and content delivery\n\nThese services have their own privacy policies, which we encourage you to review."
        },
        {
          title: "4. Your Rights",
          content: "You have the right to:\n\n• Access information about what data we collect\n• Opt-out of analytics tracking by using browser extensions or privacy settings\n• Clear your browser cookies at any time\n• Contact us with privacy concerns"
        },
        {
          title: "5. Data Security",
          content: "We implement appropriate technical measures to protect the limited data we collect. Our website uses HTTPS encryption for secure data transmission."
        },
        {
          title: "6. Children's Privacy",
          content: "Our website does not knowingly collect information from children under 13 years of age. ARC Raiders game content is rated for mature audiences."
        },
        {
          title: "7. Changes to Privacy Policy",
          content: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date."
        },
        {
          title: "8. Contact Information",
          content: "If you have questions about this privacy policy, please contact us through our community channels or GitHub repository.\n\nThis is a fan-made website and is not affiliated with Embark Studios AB or ARC Raiders™."
        }
      ]
    },
    zh: {
      title: "隐私政策",
      lastUpdated: "最后更新：2025年11月7日",
      sections: [
        {
          title: "1. 我们收集的信息",
          content: "ARC-Raiders.net 是一个粉丝制作的维基和社区资源网站。我们收集极少的信息以为您提供最佳体验：\n\n• **分析数据**：我们使用 Google Analytics 了解访问者如何使用我们的网站，包括页面浏览量、会话时长和导航模式。\n\n• **Cookie**：我们使用必要的 Cookie 来保存您的语言偏好和基本网站功能。\n\n• **无个人数据**：我们不收集、存储或处理任何个人信息，如姓名、电子邮件地址或支付信息。"
        },
        {
          title: "2. 信息使用方式",
          content: "我们收集的信息仅用于：\n\n• 改进网站性能和用户体验\n• 分析流量模式和热门内容\n• 保存您的网站偏好（语言选择）\n• 确保嵌入视频和外部内容的正常运行"
        },
        {
          title: "3. 第三方服务",
          content: "我们的网站使用以下第三方服务：\n\n• **YouTube**：YouTube 嵌入视频可能根据 YouTube 隐私政策收集数据\n• **Google Analytics**：用于网站分析和性能监控\n• **Vercel/托管提供商**：用于网站托管和内容交付\n\n这些服务有各自的隐私政策，我们建议您查阅。"
        },
        {
          title: "4. 您的权利",
          content: "您有权：\n\n• 访问有关我们收集哪些数据的信息\n• 通过浏览器扩展或隐私设置选择退出分析跟踪\n• 随时清除浏览器 Cookie\n• 就隐私问题与我们联系"
        },
        {
          title: "5. 数据安全",
          content: "我们采取适当的技术措施来保护我们收集的有限数据。我们的网站使用 HTTPS 加密进行安全数据传输。"
        },
        {
          title: "6. 儿童隐私",
          content: "我们的网站不会故意收集 13 岁以下儿童的信息。ARC Raiders 游戏内容适合成熟受众。"
        },
        {
          title: "7. 隐私政策变更",
          content: "我们可能会不时更新此隐私政策。任何更改都将发布在此页面上，并更新修订日期。"
        },
        {
          title: "8. 联系方式",
          content: "如果您对此隐私政策有疑问，请通过我们的社区渠道或 GitHub 仓库与我们联系。\n\n这是一个粉丝制作的网站，与 Embark Studios AB 或 ARC Raiders™ 无关。"
        }
      ]
    },
    ja: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新：2025年11月7日",
      sections: [
        {
          title: "1. 収集する情報",
          content: "ARC-Raiders.net はファンメイドのウィキおよびコミュニティリソースです。最高の体験を提供するために最小限の情報を収集します：\n\n• **分析データ**：Google Analytics を使用して、ページビュー、セッション時間、ナビゲーションパターンなど、訪問者がサイトをどのように使用しているかを理解します。\n\n• **Cookie**：言語設定と基本的なサイト機能を維持するために必要な Cookie を使用します。\n\n• **個人データなし**：名前、メールアドレス、支払い情報などの個人情報は収集、保存、処理しません。"
        },
        {
          title: "2. 情報の使用方法",
          content: "収集した情報は以下の目的でのみ使用されます：\n\n• ウェブサイトのパフォーマンスとユーザーエクスペリエンスの向上\n• トラフィックパターンと人気コンテンツの分析\n• サイト設定（言語選択）の維持\n• 埋め込み動画と外部コンテンツの適切な機能の確保"
        },
        {
          title: "3. サードパーティサービス",
          content: "当ウェブサイトは以下のサードパーティサービスを使用しています：\n\n• **YouTube**：YouTube の埋め込み動画は、YouTube のプライバシーポリシーに従ってデータを収集する場合があります\n• **Google Analytics**：ウェブサイト分析とパフォーマンス監視用\n• **Vercel/ホスティングプロバイダー**：ウェブサイトホスティングとコンテンツ配信用\n\nこれらのサービスには独自のプライバシーポリシーがあり、確認することをお勧めします。"
        },
        {
          title: "4. あなたの権利",
          content: "あなたには以下の権利があります：\n\n• 収集するデータに関する情報へのアクセス\n• ブラウザ拡張機能またはプライバシー設定を使用した分析追跡のオプトアウト\n• いつでもブラウザの Cookie をクリア\n• プライバシーに関する懸念についてお問い合わせ"
        },
        {
          title: "5. データセキュリティ",
          content: "収集する限られたデータを保護するために適切な技術的措置を実施しています。当ウェブサイトは安全なデータ転送のために HTTPS 暗号化を使用しています。"
        },
        {
          title: "6. 子供のプライバシー",
          content: "当ウェブサイトは意図的に 13 歳未満の子供から情報を収集しません。ARC Raiders ゲームコンテンツは成熟した視聴者向けです。"
        },
        {
          title: "7. プライバシーポリシーの変更",
          content: "このプライバシーポリシーは随時更新される場合があります。変更があった場合は、更新された改訂日とともにこのページに掲載されます。"
        },
        {
          title: "8. お問い合わせ",
          content: "このプライバシーポリシーについてご質問がある場合は、コミュニティチャンネルまたは GitHub リポジトリを通じてお問い合わせください。\n\nこれはファンメイドのウェブサイトであり、Embark Studios AB または ARC Raiders™ とは関係ありません。"
        }
      ]
    }
  }

  const pageContent = content[lang]

  return (
    <div className="min-h-screen pt-24 pb-16 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center heading-white">
            {pageContent.title}
          </h1>
          <p className="text-center text-white/60 mb-12 text-sm">
            {pageContent.lastUpdated}
          </p>

          <div className="space-y-8">
            {pageContent.sections.map((section, index) => (
              <div key={index} className="glass rounded-xl p-8 border border-neon-cyan/30">
                <h2 className="text-2xl font-bold mb-4 text-secondary">
                  {section.title}
                </h2>
                <div className="text-light leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
