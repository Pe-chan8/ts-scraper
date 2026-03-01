import * as cheerio from "cheerio"

type LinkItem = {
  text: string
  href: string
}

async function main() {
  const res = await fetch("https://example.com")
  const html = await res.text()

  const $ = cheerio.load(html)

  const links: LinkItem[] = []

  $("a").each((_, el) => {
    const text = $(el).text().trim()
    const href = ($(el).attr("href") ?? "").trim()

    if (text && href) {
      links.push({ text, href })
    }
  })

  console.log(links)
}

main()
