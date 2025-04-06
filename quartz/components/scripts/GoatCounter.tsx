import { QuartzComponentConstructor } from "../types"

function GoatCounter() {
  return (
    <script
      data-goatcounter="https://0808.goatcounter.com/count"
      async
      src="//gc.zgo.at/count.js"
    ></script>
  )
}

export default (() => GoatCounter) satisfies QuartzComponentConstructor 