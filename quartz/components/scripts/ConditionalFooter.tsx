import { QuartzComponentConstructor, QuartzComponentProps } from "../types"
import Footer from "../Footer"
import { i18n } from "../../i18n"

// Conditionally display the footer based on the page slug
function ConditionalFooter(props: QuartzComponentProps) {
  const { fileData } = props
  const slug = fileData.slug

  // Don't render footer on home page
  if (slug === "index") {
    return null
  }
  
  // Otherwise, render the regular footer
  return (
    <Footer links={{
      GitHub: "https://github.com/chezona",
      Email: "mailto:zostoevsky@gmail.com",
    }} {...props} />
  )
}

export default (() => ConditionalFooter) satisfies QuartzComponentConstructor 