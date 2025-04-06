import { QuartzComponentConstructor, QuartzComponentProps } from "../types"
import Footer from "../Footer"
import { i18n } from "../../i18n"

// Display footer on all pages, including home page
function ConditionalFooter(props: QuartzComponentProps) {
  return (
    <Footer links={{
      GitHub: "https://github.com/chezona",
      Twitter: "https://x.com/chchzna",
      Email: "mailto:zostoevsky@gmail.com",
    }} {...props} />
  )
}

export default (() => ConditionalFooter) satisfies QuartzComponentConstructor 