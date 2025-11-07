import type { Metadata } from "next"
import type { Locale } from '@/i18n/config'

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  
  const titles = {
    en: "Terms of Service - ARC Raiders Wiki",
    zh: "服务条款 - ARC Raiders 维基",
    ja: "利用規約 - ARC Raiders Wiki"
  }
  
  return {
    title: titles[lang],
    alternates: {
      canonical: `https://arc-raiders.net/${lang}/terms`,
    },
  }
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params
  
  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: November 7, 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing and using ARC-Raiders.net (\"the Website\"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.\n\nThis is a fan-made community website dedicated to ARC Raiders and is not officially affiliated with, endorsed by, or connected to Embark Studios AB or the ARC Raiders™ game."
        },
        {
          title: "2. Use of Website",
          content: "You agree to use this website for lawful purposes only. You must not:\n\n• Use the website in any way that violates any applicable laws or regulations\n• Attempt to gain unauthorized access to any part of the website\n• Interfere with or disrupt the website or servers\n• Use automated systems or bots to access the website without permission\n• Copy, reproduce, or redistribute content without proper attribution"
        },
        {
          title: "3. Intellectual Property",
          content: "**Fan-Made Content**: This website contains fan-made guides, strategies, and community-created content. Original content created by contributors is their property.\n\n**Game Assets**: ARC Raiders™, its logo, characters, artwork, and game assets are trademarks and copyrights of Embark Studios AB. All rights reserved.\n\n**Fair Use**: We believe our use of game-related content falls under fair use for educational and informational purposes.\n\n**Community Contributions**: By submitting content to this website (comments, guides, etc.), you grant us a non-exclusive license to use, display, and distribute that content."
        },
        {
          title: "4. Disclaimers",
          content: "**No Official Affiliation**: This website is not official ARC Raiders content and is not endorsed by Embark Studios.\n\n**Information Accuracy**: While we strive to provide accurate information, we make no warranties about the completeness, reliability, or accuracy of the information on this website.\n\n**Game Changes**: ARC Raiders is in development. Information may become outdated as the game evolves.\n\n**External Links**: We are not responsible for content on external websites linked from our site."
        },
        {
          title: "5. Limitation of Liability",
          content: "To the fullest extent permitted by law:\n\n• We are not liable for any indirect, incidental, or consequential damages\n• We are not responsible for loss of data, profits, or business opportunities\n• Your use of the website is at your own risk\n• We provide the website \"as is\" without warranties of any kind"
        },
        {
          title: "6. User-Generated Content",
          content: "If we implement user comments or contributions in the future:\n\n• You are responsible for your own content\n• We reserve the right to remove content that violates these terms\n• You must not post offensive, illegal, or harmful content\n• You retain ownership of your content but grant us license to display it"
        },
        {
          title: "7. Changes to Terms",
          content: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of the website after changes constitutes acceptance of the modified terms."
        },
        {
          title: "8. DMCA and Copyright",
          content: "If you believe content on our website infringes your copyright, please contact us with:\n\n• Description of the copyrighted work\n• Location of the infringing material\n• Your contact information\n• A statement of good faith belief\n\nWe will respond to legitimate copyright concerns promptly."
        },
        {
          title: "9. Governing Law",
          content: "These terms are governed by and construed in accordance with applicable international law. Any disputes will be resolved through good faith negotiation."
        },
        {
          title: "10. Contact",
          content: "For questions about these Terms of Service, please contact us through our community channels.\n\n**Trademark Notice**: ARC Raiders™ is a trademark of Embark Studios AB. This fan site is not affiliated with, endorsed, sponsored, or specifically approved by Embark Studios AB."
        }
      ]
    },
    zh: {
      title: "服务条款",
      lastUpdated: "最后更新：2025年11月7日",
      sections: [
        {
          title: "1. 接受条款",
          content: "通过访问和使用 ARC-Raiders.net（\"本网站\"），您接受并同意受这些服务条款的约束。如果您不同意这些条款，请不要使用本网站。\n\n这是一个粉丝制作的社区网站，专门介绍 ARC Raiders，与 Embark Studios AB 或 ARC Raiders™ 游戏没有官方关联、认可或联系。"
        },
        {
          title: "2. 网站使用",
          content: "您同意仅将本网站用于合法目的。您不得：\n\n• 以违反任何适用法律或法规的方式使用网站\n• 试图未经授权访问网站的任何部分\n• 干扰或破坏网站或服务器\n• 未经许可使用自动化系统或机器人访问网站\n• 未经适当署名复制、重制或重新分发内容"
        },
        {
          title: "3. 知识产权",
          content: "**粉丝制作内容**：本网站包含粉丝制作的指南、策略和社区创建的内容。贡献者创建的原创内容归其所有。\n\n**游戏资源**：ARC Raiders™、其标志、角色、艺术作品和游戏资源是 Embark Studios AB 的商标和版权。保留所有权利。\n\n**合理使用**：我们相信我们使用游戏相关内容属于教育和信息目的的合理使用。\n\n**社区贡献**：通过向本网站提交内容（评论、指南等），您授予我们使用、显示和分发该内容的非独占许可。"
        },
        {
          title: "4. 免责声明",
          content: "**非官方关联**：本网站不是官方 ARC Raiders 内容，未经 Embark Studios 认可。\n\n**信息准确性**：虽然我们努力提供准确的信息，但我们不对本网站信息的完整性、可靠性或准确性作出任何保证。\n\n**游戏变化**：ARC Raiders 正在开发中。随着游戏的发展，信息可能会过时。\n\n**外部链接**：我们不对从我们网站链接的外部网站内容负责。"
        },
        {
          title: "5. 责任限制",
          content: "在法律允许的最大范围内：\n\n• 我们不对任何间接、附带或后果性损害负责\n• 我们不对数据、利润或商业机会的损失负责\n• 您使用网站的风险由您自行承担\n• 我们按\"原样\"提供网站，不作任何形式的保证"
        },
        {
          title: "6. 用户生成内容",
          content: "如果我们将来实施用户评论或贡献：\n\n• 您对自己的内容负责\n• 我们保留删除违反这些条款的内容的权利\n• 您不得发布攻击性、非法或有害的内容\n• 您保留内容的所有权，但授予我们显示它的许可"
        },
        {
          title: "7. 条款变更",
          content: "我们保留随时修改这些服务条款的权利。更改将在发布后立即生效。更改后继续使用网站即表示接受修改后的条款。"
        },
        {
          title: "8. DMCA 和版权",
          content: "如果您认为我们网站上的内容侵犯了您的版权，请联系我们并提供：\n\n• 受版权保护作品的描述\n• 侵权材料的位置\n• 您的联系信息\n• 善意相信的声明\n\n我们将及时回应合法的版权问题。"
        },
        {
          title: "9. 适用法律",
          content: "这些条款受适用的国际法管辖和解释。任何争议将通过善意协商解决。"
        },
        {
          title: "10. 联系方式",
          content: "有关这些服务条款的问题，请通过我们的社区渠道联系我们。\n\n**商标声明**：ARC Raiders™ 是 Embark Studios AB 的商标。本粉丝网站与 Embark Studios AB 没有关联、认可、赞助或特别批准。"
        }
      ]
    },
    ja: {
      title: "利用規約",
      lastUpdated: "最終更新：2025年11月7日",
      sections: [
        {
          title: "1. 規約の承諾",
          content: "ARC-Raiders.net（「本ウェブサイト」）にアクセスして使用することにより、これらの利用規約に拘束されることに同意し、受け入れます。これらの規約に同意しない場合は、本ウェブサイトを使用しないでください。\n\nこれは ARC Raiders 専用のファンメイドコミュニティウェブサイトであり、Embark Studios AB または ARC Raiders™ ゲームと公式に提携、承認、または接続されていません。"
        },
        {
          title: "2. ウェブサイトの使用",
          content: "本ウェブサイトを合法的な目的でのみ使用することに同意します。以下の行為を行ってはなりません：\n\n• 適用される法律や規制に違反する方法でウェブサイトを使用すること\n• ウェブサイトの任意の部分への不正アクセスを試みること\n• ウェブサイトまたはサーバーを妨害または中断すること\n• 許可なく自動化システムまたはボットを使用してウェブサイトにアクセスすること\n• 適切な帰属なしでコンテンツをコピー、複製、または再配布すること"
        },
        {
          title: "3. 知的財産",
          content: "**ファンメイドコンテンツ**：本ウェブサイトには、ファンメイドのガイド、戦略、コミュニティ作成コンテンツが含まれています。投稿者が作成したオリジナルコンテンツは彼らの財産です。\n\n**ゲームアセット**：ARC Raiders™、そのロゴ、キャラクター、アートワーク、ゲームアセットは Embark Studios AB の商標および著作権です。すべての権利を保有します。\n\n**フェアユース**：教育および情報目的でのゲーム関連コンテンツの使用はフェアユースに該当すると考えています。\n\n**コミュニティ貢献**：本ウェブサイトにコンテンツ（コメント、ガイドなど）を投稿することにより、そのコンテンツを使用、表示、配布する非独占的ライセンスを当社に付与します。"
        },
        {
          title: "4. 免責事項",
          content: "**公式提携なし**：本ウェブサイトは公式の ARC Raiders コンテンツではなく、Embark Studios によって承認されていません。\n\n**情報の正確性**：正確な情報の提供に努めていますが、本ウェブサイトの情報の完全性、信頼性、正確性については保証しません。\n\n**ゲームの変更**：ARC Raiders は開発中です。ゲームが進化するにつれて、情報が古くなる可能性があります。\n\n**外部リンク**：当サイトからリンクされた外部ウェブサイトのコンテンツについては責任を負いません。"
        },
        {
          title: "5. 責任の制限",
          content: "法律で許可される最大限の範囲で：\n\n• 間接的、付随的、または結果的損害について責任を負いません\n• データ、利益、ビジネス機会の損失について責任を負いません\n• ウェブサイトの使用はお客様自身の責任で行ってください\n• ウェブサイトを「現状のまま」提供し、いかなる種類の保証も行いません"
        },
        {
          title: "6. ユーザー生成コンテンツ",
          content: "今後、ユーザーコメントまたは投稿を実装する場合：\n\n• 自分のコンテンツに責任を負います\n• これらの規約に違反するコンテンツを削除する権利を留保します\n• 攻撃的、違法、または有害なコンテンツを投稿してはなりません\n• コンテンツの所有権を保持しますが、表示するライセンスを当社に付与します"
        },
        {
          title: "7. 規約の変更",
          content: "これらの利用規約をいつでも変更する権利を留保します。変更は投稿後すぐに有効になります。変更後もウェブサイトを継続して使用することは、変更された規約の受諾を構成します。"
        },
        {
          title: "8. DMCA と著作権",
          content: "当ウェブサイトのコンテンツがお客様の著作権を侵害していると思われる場合は、以下をお知らせください：\n\n• 著作権で保護された作品の説明\n• 侵害素材の場所\n• お客様の連絡先情報\n• 善意の信念の声明\n\n正当な著作権の懸念には迅速に対応します。"
        },
        {
          title: "9. 準拠法",
          content: "これらの規約は、適用される国際法に従って管理され、解釈されます。紛争は誠実な交渉を通じて解決されます。"
        },
        {
          title: "10. お問い合わせ",
          content: "これらの利用規約に関するご質問は、コミュニティチャンネルを通じてお問い合わせください。\n\n**商標通知**：ARC Raiders™ は Embark Studios AB の商標です。このファンサイトは、Embark Studios AB によって提携、承認、スポンサー、または特別に承認されていません。"
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
              <div key={index} className="glass rounded-xl p-8 border border-neon-purple/30">
                <h2 className="text-2xl font-bold mb-4 text-accent">
                  {section.title}
                </h2>
                <div className="text-light leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/40 text-sm">
              {lang === 'en' && "By using this website, you agree to these terms."}
              {lang === 'zh' && "使用本网站即表示您同意这些条款。"}
              {lang === 'ja' && "本ウェブサイトを使用することにより、これらの規約に同意したものとみなされます。"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
