import * as cheerio from "cheerio"

type LinkItem = {
  text: string
  href: string
}

async function main() {
  const res = await fetch("https://example.com")
  const html = await res.text()

  console.log("===== HTML（先頭300文字） =====")
  console.log(html.slice(0, 300))

  const $ = cheerio.load(html)

  const links: LinkItem[] = []

  $("a").each((_i, el) => {
    const text = $(el).text().trim()
    const href = ($(el).attr("href") ?? "").trim()

    if (text && href) {
      links.push({ text, href })
    }
  })

  console.log("===== 抽出結果 =====")
  console.table(links)
}

main()
